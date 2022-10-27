import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 开发时候会多走一次hook，线上无事
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
