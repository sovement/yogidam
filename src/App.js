import React, { useState, useEffect } from 'react';
import './App.css';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from "axios";
import { auth, db } from "./firebase";
import { signInWithCustomToken } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";


const { Kakao } = window;


const App = () => {
  const [userInform, setUserInform] = useState(null);

  useEffect(() => {
    const authorizeCodeFromKakao = window.location.search.split("=")[1]
    if (authorizeCodeFromKakao !== undefined) {

      const body = {
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
        redirect_uri: "http://localhost:3000/",
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
    } else {
      console.log("No AuthorizeCodeFromKakao")
    }
  }, [])

  const sendToken = async (data) => {
    axios.post("http://localhost:8000/verifyToken", { token: data.access_token })
      .then(function (res) {
        console.log(res)

        signInWithCustomToken(auth, res.data.firebase_token)
          .then((userCredential) => {
            // Signed in
            const user = auth.currentUser;
            if (user !== null) {
              setUserInform({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
              })
              createUserTable(user.uid, data.access_token);

            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
          });
      })
  }

  const createUserTable = async (id, token) => {
    const userRef = doc(db, "user", id);
    const snapshot = await getDoc(userRef);
    if (!snapshot.exists()) {

      try {

        fetch("https://kapi.kakao.com//v2/user/me", {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
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

  return (
    <Router>
      <Switch>
        <>
          <div>
            {routes.map((route) => (
              <Route key={route.path} exact path={route.path}>
                <route.component userInform={userInform} setUserInform={setUserInform} />
              </Route>
            )
            )}
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;