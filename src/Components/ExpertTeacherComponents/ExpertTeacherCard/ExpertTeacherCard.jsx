import React from 'react'
import parse from 'html-react-parser';
import { FaCheck } from "react-icons/fa6";
import './ExpertTeacherCard.css'
import ImageComp from './../../ImageComp/ImageComp';

const ExpertTeacherCard = ({img, id, title, desc= null, className= null}) => {
  return (
    
    <div className={`expert-teacher-card ${className}`}>
    <div className="d-flex justify-content-between align-items-center justify-content-lg-between mb-4 w-100">
        <div className= {`rounded-circle card-img-box`}>
            <ImageComp src={img} alt={title}/>
        </div>

        <div className="mx-1 expert-card-No">
            {id}
        </div>
    </div>

    <h2 className='text-start m-0'>{title}</h2>
    
    {desc && <p className=' text-start'>{desc}</p>}
    
</div>
  )
}

export default ExpertTeacherCard