import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { expertTeacherCards, expertTeacherOne, phaseAProgram, phaseAResult, phasesDesc, phasesDetails, singlePhase } from '../../../data'
import ExpertTeacherCard from './../ExpertTeacherCard/ExpertTeacherCard';
import ImageComp from '../../ImageComp/ImageComp';

import table from '../../../assests/ExpertTeacher/table.png'
import tableA from '../../../assests/ExpertTeacher/table-phaseA.png'
import arrow from '../../../assests/ExpertTeacher/arrow.png'
import PhaseDetails from '../PhaseDetails/PhaseDetails';
import './ExpertTeacherDetails.css'
import { Link } from 'react-router-dom';

const ExpertTeacherDetails = () => {

return (
    <article className='expert-teacher-details'>

        <h2>Certified Expert Teacher</h2>

        <h3>
            The Best Teachers Are the Best Learners
            Whether you are a school teacher or a university 
            lecturer you can boost your teaching effectiveness and 
            efficiency with this FREE Expert Teacher Professional Development Programme!
        </h3>

        <ul>
        {expertTeacherOne.map (({desc}, idx) =>
                <li key={idx} className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{desc}</span>
                </li>
            )}
        </ul>

        <h2>The Professional Development Programme</h2>

        <h3 className=' text-justify'>The development programme consists of two parts: the preparation programme and the development programme. In the preparation programme the teacher is introduced to three powerful and proven models and approaches. These are:</h3>

        <div className="row justify-content-center expert-cards gy-4 mb-4">
            {expertTeacherCards.map((card, idx) =>
            <div className={`col-md-6  d-flex card${idx+1}`} key={idx}>
                <ExpertTeacherCard {...card}/>
            </div>
            
            )}

        </div>


        <div className="row pt-4 pt-lg-0  phases-row">
            

            <div className="col-md-6">
                <ul className='m-0'>
                    {phasesDetails.map(({desc}, idx) =>
                        <li key={idx} className='d-flex mb-3'>
                        <span className='simple-icon'><FaCheck/></span>
                        <span className='mx-2'></span>
                        <span className = 'desc'>{desc}</span>
                    </li>
                    )}
                </ul>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="phases-graph w-100">

                </div>
                {/* <ImageComp src={graph} alt= 'Phases Graph'/> */}
            </div>
        </div>

        <h3 className='text-start mb-4 text-black'>The three phases are explained in following Table</h3>

        <ImageComp className='phases-table' src={table} alt= 'Phases Table' />
        
        <div className='custom-margin'></div>

        {phasesDesc.map(({name, desc}, idx) => 
        <PhaseDetails name={name} desc={desc} key={idx}/>
        )}
        <div className='margin-top-bottom'>
            
            <h2>The Professional Development Programme</h2>

            {singlePhase.map(({name, desc}, idx) => 
            <PhaseDetails name={name} desc={desc} key={idx}/>
            )}
            
            <div className='custom-margin'></div>

            <ImageComp src={tableA} alt= 'Phase A Table' />
            
            <div className='custom-margin'></div>


            <Link to='/register'>
                <ImageComp src={arrow} alt= 'Phase A Register' />
            </Link>

            <div className='custom-margin'></div>

            <p className='desc'>The training programme provides professional development and hands-on teaching tools for in-service teachers who want to learn and teach the Smart Teaching systems</p>

        </div>

        <h2>Phase A: Programme Objectives</h2>

        <p className='desc'>The main objective of Phase A is to provide training to teachers and prepare them for implementation of the Smart Teaching System.</p>
        
        <div className='custom-margin'></div>

        <h3 className='custom-h3'>By the end of this programme, teachers should be able to:</h3>
        
        <ul className='mb-0'>
        {phaseAProgram.map (({desc}, idx) =>
                <li key={idx} className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{desc}</span>
                </li>
            )}
        </ul>

        <div className='custom-margin'></div>

        <h3 className='custom-h3'>
            What is after taking Phase A of the Teacher Professional Development Programme (TPDP)?
        </h3>

        {phaseAResult.map(({name, desc}, idx) =>
        <PhaseDetails name={name} desc={desc} key={idx}/>
        )}
        
        <div className='custom-margin'></div>

        <div className='d-flex justify-content-between align-items-center'>
            <h3 className='custom-h3 m-0'>
                Phase A – Knowledge Building Phase FREE
            </h3>

            <button>
                Register Now
            </button>

        </div>

        <div className='custom-margin'></div>

        <div className='d-flex justify-content-between align-items-center'>
            
            <h3 className='custom-h3 m-0'>
                Phase B – Skill Building Phase $8 per month
            </h3>

            <button>
                Register Now
            </button>

        </div>



    </article>
)
}

export default ExpertTeacherDetails