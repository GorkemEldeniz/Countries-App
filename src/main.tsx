import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import "./style/main.scss";
import { Context } from './Context/Context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Context>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router >
  </Context>
  ,
)
