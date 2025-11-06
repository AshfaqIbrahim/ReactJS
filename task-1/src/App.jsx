import {useState} from 'react'
import "./App.css"

function App() {

  const[isDark, setIsDark] = useState(false);

  return (
    <div className={isDark? "dark" : "light"}>
      <button onClick={() => setIsDark(prev => !prev)}>
        { isDark ? "Switch to Light Mode" : "Switch to Dark Mode" }
      </button>
    </div>
  )
}

export default App;