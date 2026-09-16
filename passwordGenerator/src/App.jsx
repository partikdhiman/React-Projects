import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();   // highlight the seleted password
    
    window.navigator.clipboard.writeText(password);
  },[password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  return (
    <>
      <div className='w-full max-w-md mx-auto my-10 p-6 bg-gray-800 rounded-lg shadow-lg'>

        <h1 className='text-white text-2xl font-bold text-center mb-5'>
          Password generator
        </h1>

        <div className='flex mb-5'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            className='outline-none w-full py-2 px-3 rounded-l-md bg-white text-gray-800'
            ref={passwordRef}
          />

          <button
            onClick={copyPassword}
            className='px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600'>
            Copy
          </button>
        </div>

        <div className='flex flex-wrap items-center gap-4 text-sm text-white'>

          <div className='flex items-center gap-2'>
            <input
              type="range"
              min={6}
              max={99}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                SetCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App