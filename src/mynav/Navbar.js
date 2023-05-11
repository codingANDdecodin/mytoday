import React from 'react'
import  {Link}  from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'>table1</Link></li>
                <li><Link to='/table2'>table2</Link></li>
             
            </ul>
        </nav>
    </div>
  )
}

export default Navbar