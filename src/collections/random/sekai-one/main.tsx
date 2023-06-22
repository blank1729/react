import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
// import {
//   RouterProvider
// } from "react-router-dom";
// import router from './routes'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
)
