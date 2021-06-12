import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import LoginPage from './page/LoginPage'
import MainPage from './page/MainPage'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route } from 'react-router-dom'
import OAuth2RedirectHandler from './component/OAuth2RedirectHandler'
import CreateRoomPage from './page/CreateRoomPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/room" component={CreateRoomPage} />
      <Route eaact path="/oauth2/redirect" component={OAuth2RedirectHandler} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
