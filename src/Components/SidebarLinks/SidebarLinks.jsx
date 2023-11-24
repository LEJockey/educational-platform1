import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarLinks.css'

const SidebarLinks = ({links}) => {
  return (
    <aside className='sidebar-links'>
        {links.map(({link}, idx) =>
        <Link key={idx} className='member-link'>{link}</Link>
        )}
    </aside>
  )
}

export default SidebarLinks