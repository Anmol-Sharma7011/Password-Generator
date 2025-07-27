import { useEffect, useRef, useState } from 'react'
import './App.css';
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password , setPassword] = useState('');
  // use reference hook
  let passwordRef = useRef(null);

  let passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+[]{}/;:,.<>?";
    for(let i=0;i<length;i++){
      let randomIndex = Math.floor(Math.random() * str.length  + 1);
      pass += str[randomIndex];
    }
    setPassword(pass);
  } 
  , [length, numberAllowed, charAllowed , setPassword]);

  let copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 1);   // range selection
    window.navigator.clipboard.writeText(password);
  },[password]);

useEffect(() =>{
    passwordGenerator();
},[length, numberAllowed, charAllowed , passwordGenerator]);
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1> 
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly 
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min = {8}
        max ={25}
        value={length}
         className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        checked={numberAllowed}
        onChange={(e) => setNumberAllowed(e.target.checked)}
        />
        <label>Numbers</label>
        </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        checked={charAllowed}
        onChange={(e) => setCharAllowed(e.target.checked)}
        />
        <label>Characters</label>
      </div>
    </div>
    </div>
  </>
  )
}

export default App
