import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Ini pintu masuk aplikasi React.
// React mengambil alih <div id="root"> di index.html, lalu merender <App /> di dalamnya.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
