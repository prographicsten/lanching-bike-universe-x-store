import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myCreatedRoute from './Router/Router';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={myCreatedRoute} />
    </AuthProvider>
  </React.StrictMode>,
)
