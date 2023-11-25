import React from 'react'
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks'
import { expertTeacherLinks } from '../../data'

import './Assessment5.css'
import Assessment5Details from '../../Components/AssessmentsComponents/AssessmentFive/Assessment5Details/Assessment5Details'
import Assessment5Sidebar from '../../Components/AssessmentsComponents/AssessmentFive/Assessment5Sidebar/Assessment5Sidebar'

const Assessment5 = () => {

return (
    <section className="ass5 p-3 p-md-5">

        <div className="row gy-4 main-row">

            <div className="col-xl-3 px-3">

                <SidebarLinks links={expertTeacherLinks}/>

            </div>

            <div className="col-xl-6 px-3">

                <Assessment5Details/>

            </div>

            <div className="col-xl-3 px-3">
                
                <Assessment5Sidebar/>
                
            </div>

        </div>

    </section>
)
}

export default Assessment5