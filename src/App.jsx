import { useState } from 'react'
import './App.css'
import Buttom from './Component/Buttom'
import Card from './Component/Card'

function App() {
  const[count ,setCount]= useState(0)

  function handSet() {
    setCount(count+1)
    
  }

  return (
    <>
     <div>
      <Buttom increment ={handSet} text ="click me"> 
      <h1>{count}</h1>
      </Buttom>



      {/* <Card name="Maurya">
      <h1>Information</h1>
        <p>hii chitranjan ! your are fine </p>
        <p>I am Chitranjan kumar and I am Software engineer </p>
      </Card> */}
     </div>
    </>
  )
}

export default App


