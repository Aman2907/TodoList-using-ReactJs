import React from 'react'

//In Header.js we store the name of our app
export const Header = () => {
  var datetime = new Date().toLocaleString();
  // document.write(datetime)
  return (
    <div className='header'>
      <h1>Todos-List</h1>
      <p className='light'>{datetime}</p>
    </div>
  )
}


