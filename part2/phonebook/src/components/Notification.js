import React from 'react'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }
  const successStyle = {
    padding: 5,
    margin: 5,
    border: '1px solid black',
    color: 'black',
    backgroundColor: '#90EE90',
  }
  const errorStyle = {
    padding: 5,
    margin: 5,
    border: '1px solid black',
    color: 'black',
    backgroundColor: '#ff3333',
  }
  return (
    <div style={type === 'success' ? successStyle : errorStyle}>
      <h1>{message}</h1>
    </div>
  )
}

export default Notification
