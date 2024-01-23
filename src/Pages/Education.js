import React from 'react'
import EducationTimeline from '../Components/EducationTimeline'
import Certificates from '../Components/Certificates'
import Skills from '../Components/Skills'
import './Education.css'
import Transitions from '../Transitions'

const Education = () => {
  return (
    <Transitions>
    <div>
      <div className='container-fluid education col-12' style={{padding:'2rem'}}>
        <h1 style={{fontWeight:'700',color:'#E6D402'}}>Education</h1>
        <div className='row'>
          <div className='col-12 col-sm-6 d-flex align-items-center' style={{backgroundColor:'#272424',borderRadius:'2rem' }}>
              <EducationTimeline/>
          </div>
          <div className='col-12 col-sm-6 ms-sm-2 my-3 my-sm-0 ' style={{backgroundColor:'#272424',borderRadius:'2rem', paddingTop:'2rem', width:'19rem'}}>
              <Certificates/>
          </div>
        </div>
        <div className='row'>
          <div className='com-12 col-sm-12 my-0 my-sm-3' style={{backgroundColor:'#272424',borderRadius:'2rem'}}>
              <Skills/>
          </div>
        </div>
      </div>
    </div>
    </Transitions>
  )
}

export default Education;