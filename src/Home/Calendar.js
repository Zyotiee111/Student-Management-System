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



    </>
  );
}