import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './components/listView/list.jsx'
import "./css/pkmonDetailDisplay.css"
createRoot(document.getElementById("root")).render(
  <List/>
)