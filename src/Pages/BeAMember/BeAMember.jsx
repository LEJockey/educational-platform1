import React from 'react'
import HeaderImg from '../../Components/HeaderImg/HeaderImg'
import MemeberShipTypes from '../../Components/MemberShipComponents/MemeberShipTypes/MemeberShipTypes'
import JoinCommunity from '../../Components/MemberShipComponents/JoinCommunity/JoinCommunity'
import MemberShipLinks from '../../Components/MemberShipComponents/MemberShipLinks/MemberShipLinks'
import { membershipsPlans } from './../../data';
import MemberShipPlan from '../../Components/MemberShipComponents/MemberShipPlan/MemberShipPlan'
import './BeAMember.css'
import BenefitsPlan from '../../Components/MemberShipComponents/BenefitsPlan/BenefitsPlan'

const BeAMember = () => {
  return (

    <>
    {/* Member Ship Img */}
    <figure className='main-membership-img d-flex align-items-center m-0'>
        <figcaption>
            <h1 className='m-0'>Become A Member</h1>
        </figcaption>
    </figure>

    
    <section className='membership'>

        <div className="row gy-4">

            <div className="col-xl-4 px-3 d-flex flex-column justify-content-between">
                <MemeberShipTypes/> 
                <MemberShipLinks/>
            </div>

            <div className="col-xl-8 px-3">
                
                <JoinCommunity/>

            </div>
        </div>

        <div className="membership-plans">
            <h2>Benefits of Memberships</h2>
            <div className="row px-4 ">
                {membershipsPlans.map((plan, idx) => 
                <div className="col-lg-4 col-md-6 col-sm-8 gy-4" key={idx}>
                    <MemberShipPlan {...plan}/>
                </div>
                )}
            </div>
            
            <BenefitsPlan/>
        </div>



    </section>
    </>
  )
}

export default BeAMember