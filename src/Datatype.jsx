import React from 'react'

const Datatype = () => {

    let n = 12; //number
    let s = "hellow world"; //string
    let b = false; //boolean
    let nu = null; //null
    let un = undefined; //undefined
    let arr = [<h1>Hey</h1>, 12, "Hello", true, null, undefined, "hii"]; //array
    let obj = {name: "John", age: 30}; //object

  return (
    <div>
        <h1>DataTypes</h1>
        <h2>Number: {n}</h2>
        <h2>String: {s}</h2>
        <h2>Boolean: {b}</h2>
        <h2>Null: {nu}</h2>
        <h2>Undefined: {un}</h2>
        <h2>Array: {arr}</h2>
        <h2>Object: {obj.name} | {obj.age}</h2>
    </div>
  )
}

export default Datatype