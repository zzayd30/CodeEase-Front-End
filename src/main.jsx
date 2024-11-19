import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'toastr/build/toastr.min.css';
import $ from 'jquery';
import toastr from 'toastr';

import App from './App.jsx'
import './fontAwesome'; 
import './index.css'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
