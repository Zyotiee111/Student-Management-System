import React, { useEffect, useState, useContext } from "react";
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunny from "@material-ui/icons/WbSunny";
import styles from "./Signin.module.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Button } from "@material-ui/core";
import { themeContext } from "../Context/ThemeContext";

export default function Loginform({setisLoggedIn}){
    const [currentTheme, setCurrentTheme] = useState("dark");
    const [theme, dispatchTheme] = useContext(themeContext);
  
    useEffect(() => {}, [currentTheme]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            localStorage.setItem("token", "logged in");
          setisLoggedIn(true)
        }
        setUsername("");
        setPassword("");

    }
   
    return (
        <>
   
        <div className={styles.themeSwitcher}>
        <NightsStayIcon/>
        <Switch
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        onChange={() => {
            setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
            dispatchTheme({ type: currentTheme === "dark" ? "LIGHT" : "DARK" });
        }}
        />
         <WbSunny/> 
    </div> 
 
    <form className={styles.login_input} onSubmit = {(e) => handleSubmit(e)}>
    <h1>Login</h1>
    <input
      style={
        theme.name === "dark"
          ? {
              background: "#3f484b",
              color: "#dddddd",
            }
          : {
              background: "#f1f1f1",
              color: "#3a3a3a",
            }
      }
      type="text"
      name="username"
      placeholder="Username"
      value = {username}
      onChange={(e) => setUsername(e.target.value)}
    
      
    />
    <br />
    <input
      style={
        theme.name === "dark"
          ? {
              background: "#3f484b",
              color: "#dddddd",
            }
          : {
              background: "#f1f1f1",
              color: "#3a3a3a",
            }
      }
      type="password"
      name="password"
      placeholder="Password"
      value = {password}
      onChange={(e)=> setPassword(e.target.value)}
    
     
    />
    <Button type = "submit"
      style={{ background: "#fff!important", color: "#3a3a3a" }}
      className={
        theme.name === "dark"
          ? styles.loginDarkButton
          : styles.loginLightButton
      }
      
    >
    <DoubleArrowIcon
        className={
          theme.name === "dark"
            ? styles.loginButtonDarkIcon
            : styles.loginButtonLightIcon
        }
       
    />
    </Button>
  </form> 

  
  <div className="link">BACK TO WEBSITE</div>
  
  </>
  );
}