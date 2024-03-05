import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Tere tulemast minu esimesse Vite + React rakendusse!</h1>
      <p>Projekti tegemine võttis aega aga oli huvitav.</p>
      {/* Lisage siia veel oma sisu */}
    </div>
    </>
  )
}

export default App
