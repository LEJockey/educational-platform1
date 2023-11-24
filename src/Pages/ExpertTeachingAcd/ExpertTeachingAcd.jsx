import React from 'react'
import SidebarLinks from './../../Components/SidebarLinks/SidebarLinks';
import { expertTeacherLinks, teachingAcademyCards } from '../../data';
import ExpertTeacherCard from './../../Components/ExpertTeacherComponents/ExpertTeacherCard/ExpertTeacherCard';

import './ExpertTeachingAcd.css'
const ExpertTeachingAcd = () => {

return (
    <>
    <figure className='main-expert-acd-img d-flex align-items-center m-0'>
        <figcaption>
            <h1 className='m-0'>Smart Teaching Academy</h1>
        </figcaption>
    </figure>

    <div className="expert-academy">

        <div className="row gy-4">

            <div className="col-xl-4 px-3">

                <SidebarLinks links={expertTeacherLinks}/>

            </div>

            <div className="col-xl-8 px-3">
                
                <div className="expert-academy-details">

                    <h2>The Smart Teaching Academy <br/> In-Service Professional Development for Teachers</h2>

                    <h3>Expert Teacher Certification Programme</h3>

                    <h3>
                        Professional development for teachers with a stimulating opportunity to achieve maximum 
                        teaching effectiveness and efficiency and prepare them to be qualified as Expert Teachers
                        Register now and join the Expert Teacher Certification Programme (Phase B)
                    </h3>

                    <div className="row mt-4 gy-4">

                        {teachingAcademyCards.map((card, idx) =>
                        <div className="col-lg-4 col-md-6" key={idx}>
                            <ExpertTeacherCard className= 'expert-academy-card' {...card}/>
                        </div>
                        )}
                    </div>

                </div>

            </div>
        </div>

    </div>
    </>
)
}

export default ExpertTeachingAcd