// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0);

  let myObj = {
    username: "Rohit",
    age: 21
  }

  let arr = [1,2,3,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card name='Shiksha' currency='rupee' newObj={myObj} newArr={arr} />
      <Card name='Diksha' currency='dollar'/>
    </>
  )
}

export default App
