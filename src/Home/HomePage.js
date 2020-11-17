import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import { themeContext } from "../Context/ThemeContext";
import Button from "@material-ui/core/Button";
import HouseIcon from "@material-ui/icons/House";
import MarkunreadIcon from '@material-ui/icons/Markunread';
import AssignmentIcon from "@material-ui/icons/Assignment";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingIcon from "@material-ui/icons/Settings";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunny from "@material-ui/icons/WbSunny";
import HomeContent from "./HomeContent";

export default function HomePage() {
    const [currentTheme, setCurrentTheme] = useState("dark");
    const [theme, dispatchTheme] = useContext(themeContext);

    const homeStyle = {
      background: `${theme.background}`,
      color: `${theme.color}`,
    };

    
    useEffect(() => {}, [currentTheme]);

    return (
      
        <div className={styles.homepage} style={homeStyle}>
            <div className = {styles.sidebar} style={theme.name === "dark"
            ? {
              background: "#3f484b",
              color: "#dddddd",
            }
          : {
              background: "#f1f1f1",
              color: "#3a3a3a",
            }}>

                <div className= {styles.sidebar_icons} >
                    <HouseIcon />
                    <MarkunreadIcon />
                    <AssignmentIcon />
                    <FormatListNumbered />
                    <SupervisorAccountIcon />
                    <SettingIcon />
                    <AssignmentTurnedInIcon />
                </div>
            </div>
            <div className= {styles.home_container} >
                <div className= {styles.status_bar} style={theme.name === "dark"
            ? {
              
            color: '#fff',
            background:'#3f484b',
            boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)",
            }
          : {
            color: '#2D3436',
            background: '#fff',
            boxShadow: '0px 10px 25px rgba(181, 173, 243, 0.5)',
            boxShadow: '0px 15px 30px rgba(181, 173, 243, 0.5)'
            }}>
                    <section className={styles.status_left}>
                        <div>
                            <h1> Madan Bhandari Memorial College </h1>
                        </div>
                        <div>
                            
                            <h3 style={{lineHeight: "25px"}}>System Overview</h3>
                            <p>Last logged in 4 hours age.</p>
                        </div>
                    </section>

                    <section className={styles.status_right}>
                        <div className={styles.notification}>
                            <NotificationsNoneIcon />
                            <MailOutlineIcon />
                            <p> Jyoti Bista </p>
                        </div>
                        <div className={styles.status_button}>
                         <NightsStayIcon/>
                            <Switch
                            color="default"
                            inputProps={{ "aria-label": "checkbox with default color" }}
                            onChange={() => {
                                setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
                                dispatchTheme({ type: currentTheme === "dark" ? "LIGHT" : "DARK" });
                            }} />
                            <WbSunny/>
                            <div className={styles.logout_button}>
                                <ExitToAppIcon /> Logout
                               
                            </div>
                            
                        </div>
                    </section>
                </div>
                <div className= {styles.home_content_wrapup}>
                    <HomeContent/>

                </div>
            </div>
            

        </div>

         
    );
}
