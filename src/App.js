import React, {useState,createContext} from 'react'
import { Route, Switch,Redirect,BrowserRouter as Router } from 'react-router-dom'
import Login from './LoginPage/Login'
import ThemeContext from './Context/ThemeContext'
import HomePage from './Home/HomePage'
export const LoginContext = createContext()

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(!1);


 
 
  return (
    <ThemeContext>
      <LoginContext.Provider value = {[isLoggedIn,setisLoggedIn]}>
    <Router>
      <Switch>
      <Route
            exact
            path={"/"}
            render={
              () =>
                isLoggedIn ?
                  <Redirect to="/home" /> :
                  <Login  />} />
        <Route
            exact
            path={"/home"}
            render={
              () =>
                isLoggedIn ?
                  <HomePage setisLoggedIn={setisLoggedIn} /> :
                  <Redirect to="/" />} />
                
      </Switch>
    </Router>
    </LoginContext.Provider>
  </ThemeContext>
  )
}
