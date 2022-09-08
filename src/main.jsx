import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import HooksApp from './HooksApp'
import { BrowserRouter } from "react-router-dom";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
