import React, {useContext} from 'react';
import styles from "./Home.module.css";
import { themeContext } from "../Context/ThemeContext";
import NoticeBoard from "./NoticeBoard"
import RecentActivities from "./RecentActivities"
import Calendar from "./Calendar"

export default function HomeContent() { 
    const [theme] = useContext(themeContext);

  

    return (
        <>
        <div className= {styles.wrapup}>
            <div className= {styles.attendance}>
                <div className= {styles.attend_days} 
                style={theme.name === "dark" ? {
                    color:'#fff',
                    background:"#2D3436",
                    boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)" 
                } : {
                    color: "#2D3436",
                    background: "#fff",
                    boxShadow: "0px 15px 30px rgba(181, 173, 243, 0.5)",
                    borderTop: "5px solid #2D3436"
                }}>
                    <p>Total School Days</p>
                    <h1>285Days</h1>
                </div>
                <div className={styles.attend_days}
                 style={theme.name === "dark" ? {
                    color:'#fff',
                    background:"#2D3436",
                    boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)" 
                   } : {
                        color: "#2D3436",
                        background: "#fff",
                        boxShadow: "0px 15px 30px rgba(181, 173, 243, 0.5)",
                        borderTop: "5px solid #2D3436"
                  }}>
                    <p>Total Present Days</p>
                    <h1>285Days</h1>
              </div>
            </div>
            <div className={styles.calender}
            style={theme.name === "dark" ? {
                color:'#fff',
                background:"#2D3436",
                boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)" 
               } : {
                    color: "#2D3436",
                    background: "#fff",
                    boxShadow: "0px 15px 30px rgba(181, 173, 243, 0.5)",
                    borderTop: "5px solid #2D3436"
              }} >
              <Calendar/>
           </div>
             <div classname ={styles.notice_board}>
                 <NoticeBoard/>
             </div>

             <div classname ={styles.notice_board}>
                 <RecentActivities/>
             </div>

        </div>
        </>
    )
}
