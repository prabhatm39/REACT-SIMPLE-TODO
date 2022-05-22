import React from 'react'

export const Todolist = ( {title, id, status, handelDelete}) => {
  return (
    <div style={{
        border: "1px solid black",
        margin: 20,
        padding: 5,
        background: "teal",
        color: "white",
       
    }}>
        <h3> {title}  <button onClick={() => handelDelete(id)}>-</button></h3>
       
    </div>
  )
}
