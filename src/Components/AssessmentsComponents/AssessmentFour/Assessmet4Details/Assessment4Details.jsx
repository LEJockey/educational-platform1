import React from 'react'
import { FaCheck } from "react-icons/fa6";

import { ass4EvaluationTable, ass4RatingIndicators, ass4Structure } from '../../../../data';
import EvaluationTable from '../../EvaluationTable/EvaluationTable';

import './Assessment4Details.css'
const Assessment4Details = () => {

    return (
    <div className='ass4-details'>

        <h2 className='med-mb'>Classroom Observation Instruments</h2>

        <p className='special-p'>
            Structure
        </p>

        <ul className='ps-4 med-mb'>

            {ass4Structure.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <ul className='ps-5 med-'>

            {ass4RatingIndicators.map(({name, desc}, idx) =>

                <li className='mb-3'>
                    <p className='special-p'> <span>{name}</span> {desc}</p>
                </li>
            )}

        </ul>

        <EvaluationTable table={ass4EvaluationTable}/>


    </div>
)
}

export default Assessment4Details