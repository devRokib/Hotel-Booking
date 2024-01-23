import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes.jsx';
import AuthContext from './component/authContext/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={routes} /> 
    </AuthContext>
  </React.StrictMode>
)
