import React, { useContext } from 'react';
import styles from './Home.module.css';
import { themeContext } from "../Context/ThemeContext";

export default function RecentActivities() {
    const [theme] = useContext(themeContext);

    const RecentActivity = [
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
    ]

    // Recent Activities
    let activities = RecentActivity.map((item, index) => (
    <p>
    <li key={index} className={styles.activity}>
      {item.activity}
    </li>
    </p>
  ))

    return (
        <div className={styles.recent_activities}
        style={theme.name === "dark"
        ? {
          
        color: '#fff',
        background:'#3f484b',
        boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)",

        }
      : {
        color: '#2D3436',
        background: '#fff',
        boxShadow: '0px 10px 25px rgba(181, 173, 243, 0.5)',
        boxShadow: '0px 15px 30px rgba(181, 173, 243, 0.5)',
        borderTop: "5px solid #2D3436"
       
        }}
          >
            <h3>Recent Activities</h3>
            {activities}
          </div>
    )
}