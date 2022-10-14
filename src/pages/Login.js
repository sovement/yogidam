import React, { useEffect } from 'react';
import './Login.css';
import Header from '../components/Header';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import { signInWithCustomToken } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";

const { Kakao } = window;

const Login = () => {
    const history = useHistory();

    useEffect(() => {
        const authorizeCodeFromKakao = window.location.search.split("=")[1]
        if (authorizeCodeFromKakao !== undefined) {

        const body = {
            grant_type: "authorization_code",
            client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
            redirect_uri: "https://yogidam.com/login",
            code: authorizeCodeFromKakao
        }

        const queryStringBody = Object.keys(body)
            .map(k => encodeURIComponent(k) + "=" + encodeURI(body[k]))
            .join("&")

        fetch("https://kauth.kakao.com/oauth/token", {
            method: "POST",
            headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: queryStringBody
        })
            .then(res => res.json())
            .then((data) => {
            sendToken(data)
            })
        }
    }, [])

    const sendToken = async (data) => {
        await axios.post(`https://sovement-server.herokuapp.com/verifyToken`, { token: data.access_token })
        .then(function (res) {
            signInWithCustomToken(auth, res.data.firebase_token)
            .then((userCredential) => {
            sessionStorage.setItem("kakao_token", data.access_token)

            const user = auth.currentUser;

            if (user !== null) {
                sessionStorage.setItem("displayName", user.displayName);
                sessionStorage.setItem("email", user.email);
                sessionStorage.setItem("photoURL", user.photoURL);
                sessionStorage.setItem("uid", user.uid);
                createUserTable(user, sessionStorage.getItem("kakao_token"));
            }
            }).then(history.push("/"))
            }).catch((error) => {
            console.log(error)
            });
        }

    const createUserTable = async (user, token) => {
        const userRef = doc(db, "user", user.uid);
        const snapshot = await getDoc(userRef);
        if(!snapshot.exists()){

            try {
                
                fetch("https://kapi.kakao.com//v2/user/me",{
                method: "GET",
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
                },
                })
                .then(res => res.json())
                .then((data) => {
                let age_range = '';
                let gender = '';
                if (data.kakao_account.has_age_range) {
                    age_range = data.kakao_account.age_range
                }
                if (data.kakao_account.has_gender) {
                    gender = data.kakao_account.gender
                }
                const field = {
                    name: user.displayName,
                    email: user.email,
                    age_range: age_range,
                    gender: gender,
                    reward_stamp: 0,
                }
                setDoc(userRef, field);
                })


            } catch (error) {
                console.log(error);
            }
        }
        return userRef;
    }

    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = 'https://yogidam.com/login';
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


    return (
        <>
            <Header />
            <div className="container">
                <div className='gradientBoxUp' />
                <img style={{ width: '156px', height: '120px', margin: '48px 0 32px' }} src='./images/app_logo_vertical.svg' />
                <span className='slogan'>
                    눈치 보지 말고, 센스 있는<br />
                    흡연자를 위한 흡연구역 플랫폼
                </span>

                <span style={{ position: 'fixed', color: 'var(--black-50)', bottom: '125px' }} class="Subtext Footnote">
                    SNS 계정으로 시작하기
                </span>
                <a style={{ position: 'fixed', bottom: '60.28px' }} href={KAKAO_AUTH_URI}>
                    <img className='kakaoLogin' src="./images/kakao_login_large_wide.png" />
                </a>
            </div>
        </>
    );
}

export default Login;