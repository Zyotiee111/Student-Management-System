import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../Context/ThemeContext";
import styles from "./Signin.module.css";
import Loginform from "./Loginform";
import LoginInfo from "./LoginInfo";



export default function Login() {
  const [theme] = useContext(themeContext);

  const loginStyle = {
    background: `${theme.background}`,
    color: `${theme.color}`,
  };

  return (
    <div className={styles.login} style={loginStyle}>
      <div style={
        theme.name === "dark" ?
          { 
            boxShadow: "0px 15px 32px 0px rgba(0, 0, 0, 0.25)" 
          } :
          {
            boxShadow: "0px 15px 32px 0px rgba(181,173,243,0.25)"
          }
      } className={styles.login_container}>

        <div className={styles.login_info}>
          <LoginInfo/>
         
        </div>

        <div className={styles.login_form}>
          <Loginform />
        </div>
    </div> 
    </div>
  );
}