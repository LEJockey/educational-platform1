import React from 'react'
import './MemberShipLinks.css'
import { Link } from 'react-router-dom';
import { memberShipLinks } from '../../../data';

const MemberShipLinks = () => {
  return (
    <div className='membership-links'>
        {memberShipLinks.map(({link}, idx) =>
        <Link key={idx} className='member-link'>{link}</Link>
        )}
    </div>
  )
}

export default MemberShipLinks