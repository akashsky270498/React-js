import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  console.log("color:", color)

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadowlg bg-black px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: 'grey' }} >Grey</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: 'orange' }}>orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

/*
1. using onClick bcoz onClick requires function & not what function return that's the reason we are using callback inside 
onClick.
2. after refreshing the page color comes to default why bcoz we are not storing the current value in localstorage (or bcoz it is the initial value set in useState('olive'))
*/