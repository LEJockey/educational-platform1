import React from 'react'
import { expertTeacherSidebar } from '../../../data'
import './ExpertTeacherSidebar.css'

const ExpertTeacherSidebar = () => {

return (
    <div className='expert-teacher-sidebar'>
        <h2>Certified Expert Teacher</h2>
        <ul>
        {expertTeacherSidebar.map (({icon, desc}, idx) =>
                <li key={idx} className='d-flex '>
                    <span className='simple-icon'>{icon}</span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{desc}</span>
                </li>
            )}
        </ul>
    </div>
)
}

export default ExpertTeacherSidebar