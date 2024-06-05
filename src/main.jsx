import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter as Router } from 'react-router-dom'
import Modal from 'react-modal';
import './Styles/style.scss';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <App />
    </Router>
)
