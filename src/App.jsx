import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
  }, []);

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={() => clearInterval(timerRef.current)}>Stop</button>
    </div>
  )
}

export default App
