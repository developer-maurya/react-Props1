import React from 'react'

const Buttom = (props) => {
  return (
    <div>
    {props.children}
    <button onClick={props.increment}>
        {props.text}
    </button>
    </div>
  )
}

export default Buttom