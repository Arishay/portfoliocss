import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between'>

    <div>
    <h6 className='logo'>Portfolio</h6>
    </div>

    <div className='anchor'>
      <a href="/Home" className='one'>Home</a>
      <a href="/About" className='one'>About</a>
      <a href="/Contact" className='one'>Contact</a>
    </div>

    </div>
  )
}
