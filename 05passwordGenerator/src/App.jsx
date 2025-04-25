import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordFromClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 px-4'>
      <div className='w-full max-w-md bg-gray-800 text-orange-400 p-6 rounded-2xl shadow-lg'>
        <h1 className='text-2xl font-bold text-center text-white mb-6'>🔐 Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='w-full px-3 py-2 bg-white text-orange-500 rounded-md border border-orange-400 font-semibold focus:outline-none focus:ring focus:ring-orange-300'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordFromClipBoard}
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all duration-200'
          >
            Copy
          </button>
        </div>

        <div className='space-y-4'>
          <div className='flex items-center justify-between text-white'>
            <label className='font-medium'>Password Length</label>
            <span className='text-orange-400 font-bold'>{length}</span>
          </div>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            className='w-full cursor-pointer accent-orange-400'
            onChange={(e) => setLength(e.target.value)}
          />

          <div className='flex items-center gap-x-3 text-white'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
              className='accent-orange-400'
            />
            <label htmlFor='numberInput'>Include Numbers</label>
          </div>

          <div className='flex items-center gap-x-3 text-white'>
            <input
              type="checkbox"
              checked={charAllowed}
              id='charInput'
              onChange={() => setCharAllowed((prev) => !prev)}
              className='accent-orange-400'
            />
            <label htmlFor='charInput'>Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
