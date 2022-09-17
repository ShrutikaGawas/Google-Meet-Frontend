import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { React, useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./Login.css";
import Meeting from "../assets/Meeting.svg";
import Logo from "../assets/Logo.svg";

function Login() {

  const clientId ="228739963998-qnmhjj4od8as8grd8jtg55gnm2jedh3n.apps.googleusercontent.com";
  
    useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/calendar",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const [LoggedIn, setLoggedIn] = useState("false");

  const onSuccess = (response) => {
    console.log(response);
    setLoggedIn("true");
    const { code } = response;
    axios
      .post("/api/create-tokens", { code })
      .then((response) => {
        console.log(response.data);
      }) 
      .catch((error) => console.log(error.message));
  };
  
  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <>
      <div className="Main">
        {/* Blue Area/Description */}

        <div className="left-inner">
          <div className="Logo-text">
            <img className="Logo-img" src={Logo} />
            <h2 style={{ fontSize: "25px" }}>
              <b>Meet</b>API
            </h2>
          </div>
          <h1 className="tagline">Create Meetings in literal seconds.</h1>
          <h3 className="tagline">
            MeetAPI lets users schedule Events and create Google Meetings in a
            couple of clicks.
          </h3>
        </div>

        {/* White Area/Meeting Image/Login Button  */}
        <div className="right-inner">
          <img className="Meeting-img" src={Meeting} />
          <h1>Sign In {LoggedIn}</h1>
          <GoogleLogin
            className="Login-Button"
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code"
            accessType="offline"
            scope="openid email profile https://www.googleapis.com/auth/calendar"
          />
          <h5 className="footer">Copyright &#169; 2022 Dolorem Ipsum</h5>
        </div>
      </div>
    </>
  );
}
export default Login;
