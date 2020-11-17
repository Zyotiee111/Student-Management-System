import React, {useContext} from 'react';
import styles from "./Home.module.css";
import { themeContext } from "../Context/ThemeContext";
import NoticeBoard from "./NoticeBoard"
import RecentActivities from "./RecentActivities"
import Calendar from "./Calendar"
import Attendance from "./Attendance"

export default function HomeContent() { 
    const [theme] = useContext(themeContext);

  

    return (
        <>
        <div className= {styles.home_main_content}>
          <div className = {styles.days_info}>
              <Attendance/>
              <Calendar/>
           </div> 
              <NoticeBoard/>
              <RecentActivities/>
             
        </div>

        
        </>
    )
}
