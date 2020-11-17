import React, {useContext} from 'react';
import styles from "./Home.module.css";
import { themeContext } from "../Context/ThemeContext";



export default function Calender() {
    const [theme] = useContext(themeContext);

    let option = {day: 'numeric', month: 'long', year: 'numeric'}
    let today = new Date();
    let formated_date = today.toLocaleDateString("en-US", option);
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let weeks = week.map((day, index) => (
        <th key={index}>
            <p>{day}</p>
        </th>
    ));

    let myArray = Array.from(Array(7).keys())
    let days = myArray.map((day, index) => {
       return ( 
            <td key={index}>
                {day+1}
            </td>
        );
            
    })
    


  return (
    <>
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
        <h2>{formated_date}</h2>
        <table className={styles.calender_content}>
            <thead>
                <tr>
                    {weeks}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {days}
                </tr>
                <tr>
                    {days}
                </tr>
                <tr>
                    {days}
                </tr>
                <tr>
                    {days}
                </tr>
            </tbody>
        </table>

    </div>

    </>
  );
}