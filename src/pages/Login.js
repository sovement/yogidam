import React, {useEffect} from 'react';
import './Login.css';
import axios from "axios";


const { Kakao } = window;

const Login = () => {
    useEffect(()=>{
        const authorizeCodeFromKakao = window.location.search.split("=")[1]
        if(authorizeCodeFromKakao !== undefined){
            
            const body = {
            grant_type: "authorization_code",
            client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
            redirect_uri: "http://localhost:3000/",
            code: authorizeCodeFromKakao
            }
            
            
            const queryStringBody = Object.keys(body)
            .map(k => encodeURIComponent(k) + "=" + encodeURI(body[k]))
            .join("&")
            
            fetch("https://kauth.kakao.com/oauth/token",{
            method: "POST",
            headers: {
                'content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body : queryStringBody
            })
            .then(res => res.json())
            .then((data) => {
                sendToken(data)
            })
        }else{
            console.log("No AuthorizeCodeFromKakao")
        }
    },[])

    const sendToken = async (data) => {
    axios.post("http://localhost:8000/verifyToken", {token: data.access_token})
        .then(function(res) {
        console.log(res)
        } )
    }

    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = 'http://localhost:3000/';
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  

    return (
        <>
            <div className="container">
                <div className='gradientBox' />
                <img style={{ width: '156px', height: '120px', margin: '48px 0 32px' }} src='./images/app_symbol.svg' />
                <span className='slogan'>
                    눈치 보지 말고, 센스 있는<br />
                    흡연자를 위한 흡연구역 플랫폼
                </span>

                <a
                    style={{ position: 'fixed', color: 'var(--black-50)', bottom: '125px'}}
                    class="Subtext Footnote"
                    href={KAKAO_AUTH_URI}>
                    SNS 계정으로 시작하기
                </a>
            </div>
        </>
    );
}

export default Login;