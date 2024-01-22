import React from 'react'
import './AboutMe.css'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className='container-fluid aboutme'>
      <div className='row '>
        <div className='col'>
          <h1 style={{fontWeight:'700', color:'#E6D402'}}>About Me</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Hello! I'm Ransi Dissanayake,</h2>
          <p>Business Information Systems student at the University of Sri Jayewardenepura, passionate about front-end development. Aspiring to become MERN Stack developer, I've mastered HTML, CSS, JavaScript, and I'm currently delving into React.js. <br/><br/>

My project portfolio showcases my proficiency in creating engaging and functional web applications. I bring a creative flair, with skills in Graphic Designing and Video Editing developed through various university clubs, including my leadership roles in <Link to='https://www.aiesec.lk/' target="_blank">AIESEC</Link>. <br/><br/>

I thrive in challenging environments, holding leadership positions and receiving recognition for my contributions during university. My goal is to contribute my front-end development expertise to innovative projects.<br/><br/>

Excited about the prospect of bringing my skills and enthusiasm to your team, thank you for considering my portfolio. Looking forward to the opportunity!</p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Link to='https://drive.google.com/file/d/1GkjhPAjk59Qxt_IUmMz_jGDrqQDUbW8h/view?usp=sharing' target="_blank"><button style={{borderRadius:'1rem'}}>Download my CV</button></Link>
        </div>
      </div>
    </div>
  )
}

export default AboutMe