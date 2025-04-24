// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// function App() {

//   // let counter = 15; it will update but not in UI
//   let [counter, setCounter] = useState(15)
//   let [error, setError] = useState("")

//   const incValue = () => {
//     if (counter < 20) {
//       counter = counter + 1;
//       setCounter(counter);
//       setError("")
//     } else {
//       console.log("Maximun limit reached.");
//       setError("Maximun limit reached.")
//     }
//   }

//   const decValue = () => {
//     if (counter > 0) {
//       setCounter(counter - 1)
//       setError("")
//     } else {
//       console.log("Minimum value reached.")
//       setError("Minimum limit reached.")
//     }
//   }
//   return (
//     <>
//       <h1>Welcome to React!!</h1>
//       <h3>Counter Value: {counter}</h3>
//       {error && <p style={{ color: 'red'}}>{error}</p>}
//       <button onClick={incValue}>Increase Value = {counter}</button>
//       <br />
//       <button onClick={decValue}>Decrease Value = {counter}</button>
//       <p>footer = {counter}</p>
//     </>
//   )
// }

// export default App



import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const [error, setError] = useState("")

  const incValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      setError("")
    } else {
      setError("🚫 Maximum limit reached.")
    }
  }

  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      setError("")
    } else {
      setError("⚠️ Minimum limit reached.")
    }
  }

  return (
    <div className="container">
      <h1 className="title">🔥 Welcome to React!!</h1>
      <h3 className="counter-text">Counter Value: <span>{counter}</span></h3>
      {error && <p className="error">{error}</p>}
      <div className="buttons">
        <button className="btn increase" onClick={incValue}>➕ Increase</button>
        <button className="btn decrease" onClick={decValue}>➖ Decrease</button>
      </div>
      <p className="footer">📍 Footer = {counter}</p>
    </div>
  )
}

export default App
