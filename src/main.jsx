// _  _                          ___  ___  ___  ___    _   
// | || | ___  __ _  _ _   __ _  | __|| _ \|_ _|/ __|  /_\  
// | __ |/ _ \/ _` || ' \ / _` | | _| |   / | || (__  / _ \ 
// |_||_|\___/\__,_||_||_|\__, | |___||_|_\|___|\___|/_/ \_\
//                        |___/                             
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
)
