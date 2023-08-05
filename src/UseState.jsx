import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(['Monika', 'priyanka', 'upadhyay']);
  const [name, setName] = useState("");

  const handleButtonclick = () => {
    if (!name) { return console.log('please enter a value')};
    let oldArray = [...count, name];

    setCount(oldArray);
  };
  const changeName = (e) => {
    let val = e.target.value;
    setName(val);
  };



  return (
    <>
      <div>
        {count.map((value) => <div>
          <ul>
            <li key={value}>{value}</li>
          </ul>
        </div>)}
      </div>

      <input type="text" name="name" id="name" onChange={(e) => {
        changeName(e);
      }} />
      <div>
        <button type='button' onClick={handleButtonclick}>Change Name</button>
      </div>

    </>
  )
}

export default App
