import React from 'react'
import Card from '../Card/Card'
import './User.css'
function User() {
    
  return (
    <div className="user">
        <span>search</span>
        <div className='heading'>
        <h1>My patients Profiles</h1>
        </div>
        <Card/>
    </div>
  )
}

export default User