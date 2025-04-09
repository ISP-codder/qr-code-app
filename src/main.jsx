import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from "./Layout.jsx";

createRoot(document.getElementById('root')).render(
  <div>
    <Layout/>
  </div>,
)
