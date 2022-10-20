import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // react 18 bug： 导致effect执行两次
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
