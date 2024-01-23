import React from 'react'
import Typewriter from 'typewriter-effect';

const FirstTime = () => {

  return (
    <div className='container-fluid' style={{backgroundColor:'#272424',height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
            <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString(`<h4>Hello! your first time here right?,<br/> and thanks for that!</h4>`)
        .pauseFor(1000)
        typewriter.typeString(`<h5> Whether you're an explorer or recruiter, you're sure to find what you're looking for </h5>`)
        .pauseFor(1000)
        typewriter.typeString(`<h3 style='color:#E6D402; , font-weight:700;'> Welcome to my Developer Portfolio, <a href='/'>Clck me</a> </h3>`)
        .start();
  }}
/>

    </div>
  )
}

export default FirstTime