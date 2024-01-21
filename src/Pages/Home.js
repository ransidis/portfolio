import React from 'react'
import myimage from '../images/myimage.svg'
import './Home.css'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';


const Home = () => {
  var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
  return (
    <div className='container-fluid home'>
        <div className='row'>
            <img src={myimage} style={{width:'50vh'}}/>
        </div>
        <div className='row'>
            <h2>Ransi Dissanayake</h2>
        </div>
        <div className='row'>
        <p style={{fontSize:'1.2rem', display:'inline-flex'}}> I'm a <span style={{marginLeft:'0.3rem'}}></span>
        <Typewriter
          options={{
            strings: [' Front End Developer', ' Video Editor',' Graphic Designer'],
            autoStart: true,
            loop: true,
          }}
        />
        </p>
        </div>
        <div className='row socials d-inline-block'>
        <Link to='https://wa.me/+94702526193'><i class="bi bi-whatsapp fs-3"></i></Link>
        <Link to='mailto:ransirasira@gmail.com'><i class="bi bi-envelope fs-3"></i></Link>
        <Link to='https://www.linkedin.com/in/ransi-rasira-dissanayake/' target='_blank'><i class="bi bi-linkedin fs-3"></i></Link>
        <Link to='https://github.com/ransidis' target='_blank'><i class="bi bi-github fs-3"></i></Link>
        <Link to='https://www.facebook.com/ransi.disanayaka.9/' target='_blank'><i class="bi bi-facebook fs-3"></i></Link>

        </div>
    </div>
  )
}

export default Home