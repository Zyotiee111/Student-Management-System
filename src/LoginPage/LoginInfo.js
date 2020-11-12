import React, { useContext } from 'react'
import styles from "./Signin.module.css"
import { themeContext } from "../Context/ThemeContext";

export default function LoginInfo() {
    const [theme] = useContext(themeContext);

    function Greeting(){
        let hour = new Date().getHours()
        if (hour < 12){
          return "Good Morning";
        }else if(hour < 17){
          return "Good Afternoon";
        }else{
          return "Good Evening";
        }
      }
    return (
        <>
    <div style={theme.name === "dark" ? { color: "#fff" } : {color: "#3a3a3a"}}
        className={styles.logininfo_verticaltext}>
        <div className={styles.verticaltext}>MBM</div>
    </div>
    <div className={styles.logininfo_title}>MBM</div>
    <div className={styles.logininfo_greeting}>
        <h2>Welcome,</h2>
        {Greeting()}
    </div>
    <div style={{ color: "#fff" }}>TERMS OF USE & CONTRADICTIONS</div>
    </>
    )
}