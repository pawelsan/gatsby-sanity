import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'


const Header = () => (
  <div>
    <nav>
      <Link to='/'>Stron główna</Link>
      <Link to='/archive/'>Archiwum aktualności</Link>
    </nav>
  </div>
)

export default Header
