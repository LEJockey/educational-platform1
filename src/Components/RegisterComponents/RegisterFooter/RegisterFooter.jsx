import React from 'react'
import google from '../../../assests/Register/google-icon.png'
import facebook from '../../../assests/Register/facbook-icon.png'
import insta from '../../../assests/Register/Insta-icon.png'
import { Link } from 'react-router-dom'
import './RegisterFooter.css'

const RegisterFooter = () => {
  return (
    <div>
        <p className='or text-center col-8 mx-auto px-4 position-relative'>OR</p>
        
        <div className='form-icons col-8 px-4 mx-auto mb-4'>

            <img src= {google} alt='Google' />
            <img src= {facebook} alt='Facebook' />
            <img src= {insta} alt='Instgram' />

        </div>


        <div className="col-8 mx-auto">
            <div className='mt-3 text-center mb-4'>Do you have an account? <Link to= '/login' className='sign-color'>Login</Link> </div>

        </div>
    </div>
  )
}

export default RegisterFooter