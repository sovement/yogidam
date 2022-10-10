import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom';
import axios from "axios";


const { Kakao } = window;

const App = () => {

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
    <Router>
      <Header/>

      <div>
        <a href={KAKAO_AUTH_URI}>카카오로 시작하기</a>
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} exact path={route.path} component={route.component} />;
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;