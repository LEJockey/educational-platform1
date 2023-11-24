import React from 'react'
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks'
import { expertTeacherLinks } from '../../data'
import ExpertTeacherSidebar from '../../Components/ExpertTeacherComponents/ExpertTeacherSidebar/ExpertTeacherSidebar'
import ExpertTeacherDetails from '../../Components/ExpertTeacherComponents/ExpertTeacherDetails/ExpertTeacherDetails'

import './ExpertTeacher.css'
const ExpertTeacher = () => {

return (

    <>

    <figure className='main-expert-teacher-img d-flex align-items-center m-0'>
        <figcaption>
            <h1 className='m-0'>Make a Big Difference as a<br/>Certified Expert Teacher</h1>
        </figcaption>
    </figure>


    <section className='expert-teacher'>

        <div className="row gy-4 main-row">

            <div className="col-xl-3 px-3">

                <SidebarLinks links={expertTeacherLinks}/>

            </div>

            <div className="col-xl-6 px-3">

                <ExpertTeacherDetails/>

            </div>

            <div className="col-xl-3 px-3">

                <ExpertTeacherSidebar/>

            </div>

        </div>
    </section>

    </>
)
}

export default ExpertTeacher