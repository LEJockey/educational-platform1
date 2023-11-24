import React from 'react'
import './PhaseDetails.css'

const PhaseDetails = ({name, desc}) => {

    return (
    <p className='phase-details'><span>{name}</span> {desc} </p>
)
}

export default PhaseDetails