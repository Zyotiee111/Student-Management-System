import React, {useState} from 'react'
import { Route, Switch,Redirect,BrowserRouter as Router } from 'react-router-dom'
import Login from './LoginPage/Login'
import ThemeContext from './Context/ThemeContext'
import Home from './Home/Home'


export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(!1);

 
 
  return (
    <ThemeContext>
    <Router>
      <Switch>
      <Route
            exact
            path={"/"}
            render={
              () =>
                isLoggedIn ?
                  <Redirect to="/home" /> :
                  <Login  setisLoggedIn = {setisLoggedIn} />} />
        <Route
            exact
            path={"/home"}
            render={
              () =>
                isLoggedIn ?
                  <Home setisLoggedIn={setisLoggedIn} /> :
                  <Redirect to="/" />} />
                
      </Switch>
    </Router>
  </ThemeContext>
  )
}
