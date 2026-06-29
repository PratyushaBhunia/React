import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h3>Hello, {props.fn}! Your age is {props.age} and fav color is {props.color}.</h3>
    </div>
  )
}
