// Bring React in to build a component.
import React from "react"
// Bring reactDOM in to mount component to the dom.
import { createRoot } from 'react-dom/client'
import Parent from './parent.jsx'
const root = createRoot(document.getElementById("root"))

const App = () => {
  return <div>
    <Parent />
  </div>
}

root.render(<App />);