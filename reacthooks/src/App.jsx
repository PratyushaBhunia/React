import React, { useEffect, useState } from 'react'
import Greeting from './greeting'

export default function() {
  //useState
  const[name, setName]=useState("Pratyusha")
  const[color, setColor]=useState("Red")
  const[count, setCount]=useState(0)

  //useEffect
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count+1)
    }, 1000)
  })
  return (
    <div>
      <h1>Good Evening, {name}</h1>
      <Greeting name={name}/>
      <button onClick={() => setName("Rahul")}>Click here to change the name</button>

      <h2>My fav color is {color}</h2>
      <button onClick={() => setColor("black")}>Click here to change the color</button>

      <h2>Count is {count}</h2>
      <button onClick={() => setCount(count+1)}>Increment the count</button>

      <h2>The time starts now {count}</h2>
    </div>
  )
}
