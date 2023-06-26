import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
function increase() {
  setCount( count + 1)
}

function decrease() {
  if(count <= 0) {
    setCount(0)
  }
  else {
    setCount( count -1 )
  }
}
  console.log(count)
  
  return (
    <>
        <button className='text-xl' onClick={()=> increase()}>Increase</button>
        <button className='text-xl' onClick={()=> decrease()}>Decrease</button>
        <p className='text-3xl font-bold underline'>Currrent count: {count}</p>
      <Footer/>
    </>
  )
}

export default App
