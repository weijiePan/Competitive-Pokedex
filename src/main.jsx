import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PkmonList from './components/listView/pkmonList.jsx'
createRoot(document.getElementById("root")).render(
  <PkmonList/>
)