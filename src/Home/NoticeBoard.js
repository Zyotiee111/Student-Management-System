import React, { useContext } from "react";
import styles from './Home.module.css';
import { themeContext } from "../Context/ThemeContext";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default function NoticeBoard() {
    const [theme] = useContext(themeContext);

    const Notice = [
        {
            notice: 'College Remains Closed until further notice is conveyes.',
            posted_at: '19th Octo, 2020, 4:15PM'
        },
        {
            notice: 'College Remains Closed until further notice is conveyes.',
            posted_at: '19th Octo, 2020, 4:15PM'
        },
        {
            notice: 'College Remains Closed until further notice is conveyes.',
            posted_at: '19th Octo, 2020, 4:15PM'
        }
    ]

   
    let notices = Notice.map((item, index) => (
      <div 
      key={index}
      className={styles.notice_holder}
      style={theme.name === "dark" ? {
        color:'#fff',
        background:"#2D3436",
        boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)" 
      
    } : {
        color: "#2D3436",
        background: "#fff",
        boxShadow: "0px 15px 30px rgba(181, 173, 243, 0.5)",
        borderLeft: "5px solid #2D3436",
        borderRadius: "5px 15px 15px 5px"
       
    }}
      >
        <div className={styles.notice} key={index}>
          {item.notice}
              </div>
        <div className={styles.date_posted}>
          <AccessTimeIcon fontSize="small" />
          <p>{item.posted_at}</p>
        </div>
      </div>
  ))

  return (
      <div
        className={styles.notice_board}
        style={theme.name === "dark" ? {
            color:'#fff',
            background:"#2D3436",
            boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)" 
        } : {
            color: "#2D3436",
            background: "#fff",
            boxShadow: "0px 15px 30px rgba(181, 173, 243, 0.5)",
            borderTop: "5px solid #2D3436"
        }}
      >
        <h3>Notice Board</h3>
        {notices}
      </div>
  );
}