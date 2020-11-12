import React, { useContext } from 'react'
import styles from "./Login.module.css"
import { themeContext } from "../../Contexts/ThemeContext";

export default function LoginInfo() {
    const [theme] = useContext(themeContext);

   
    return (
        <>
            <div style={theme.name === "dark" ? { color: "#fff" } : {color: "#3a3a3a"}} className={styles.loginInfoVerticalText}>
                <div className={styles.verticalText}>NCIT</div>
            </div>
            <div className={styles.loginInfoTitle}>NCIT</div>
            <div className={styles.loginInfoGreeting}>
                <h2>Welcome,</h2>
            Good Afternoon!
          </div>
            <div style={{ color: "#fff" }}>TERMS OF USE & CONTRADICTIONS</div>
        </>
    )
}
