import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'


const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div>
    <div>
      <div>
        <Link to='/'>{siteTitle}</Link>
      </div>
      <nav>
        <Link to='/archive/'>Archiwum aktualności</Link>
      </nav>
    </div>
  </div>
)

export default Header
