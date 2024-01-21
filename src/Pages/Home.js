import React from 'react'
import myimage from '../images/myimage.svg'
import './Home.css'


const Home = () => {
  return (
    <div className='container-fluid home'>
        <div className='row'>
            <img src={myimage} style={{width:'100%'}}/>
        </div>
        <div className='row'>
            <h2>Ransi Dissanayake</h2>
        </div>
        <div className='row'>
            <p>I’m a Front End Developer</p>
        </div>
        <div className='row'>


        </div>
    </div>
  )
}

export default Home