import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css'

const Skills = () => {
  return (
    <div>
        <div className='container-fluid skills p-4'>
            <div className='row'>
                <h3 style={{fontWeight:'700'}}>Languages & Frameworks</h3>
                <div className='col-12 col-sm-6'>
                    <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/></span>HTML <span>90%</span> </p>
                        <ProgressBar animated now={90} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                    <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/css3.png" alt="css3"/></span>CSS <span>90%</span> </p>
                        <ProgressBar animated now={90} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                    <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/javascript--v1.png" alt="javascript--v1"/></span>JavaScript <span>80%</span> </p>
                        <ProgressBar animated now={80} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                    <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/></span>Java <span>70%</span> </p>
                        <ProgressBar animated now={70} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                    <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/wordpress.png" alt="wordpress"/></span>WordPress <span>80%</span> </p>
                        <ProgressBar animated now={80} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                </div>
                <div className='col-12 col-sm-6'>
                <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/mysql-logo.png" alt="mysql-logo"/></span>MySql <span>70%</span> </p>
                        <ProgressBar animated now={70} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                    <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/php.png" alt="php"/></span>PHP <span>50%</span> </p>
                        <ProgressBar animated now={50} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                    <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/plasticine/28/react.png" alt="react"/></span>React.js <span>70%</span> </p>
                        <ProgressBar animated now={70} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                    <span id="skill">
                        <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/bootstrap--v2.png" alt="bootstrap--v2"/></span>Bootstrap <span>80%</span> </p>
                        <ProgressBar animated now={80} variant='warning' style={{height:'0.5rem'}}/>
                    </span>
                </div>
            </div>
            <div className='row'>
                <h3 style={{fontWeight:'700', marginTop:'2rem'}}>Applications</h3>
                <div className='col-12 col-sm-6'>
                        <span id="skill">
                                <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/visual-studio-code-2019.png" alt="visual-studio-code-2019"/></span>VS Code <span>90%</span> </p>
                                <ProgressBar animated now={90}  style={{height:'0.5rem'}}/>
                        </span>
                        <span id="skill">
                                <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/figma--v1.png" alt="figma--v1"/></span>Figma <span>60%</span> </p>
                                <ProgressBar animated now={60}  style={{height:'0.5rem'}}/>
                        </span>
                        <span id="skill">
                                <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/fluency/28/adobe-photoshop.png" alt="adobe-photoshop"/></span>Adobe Photoshop <span>80%</span> </p>
                                <ProgressBar animated now={80}  style={{height:'0.5rem'}}/>
                        </span>
                </div>
                <div className='col-12 col-sm-6'>
                        <span id="skill">
                                <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/color/28/adobe-premiere-pro--v1.png" alt="adobe-premiere-pro--v1"/></span>Adobe Premiere Pro
 <span>80%</span> </p>
                                <ProgressBar animated now={80}  style={{height:'0.5rem'}}/>
                        </span>
                        <span id="skill">
                                <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/fluency/28/filmora.png" alt="filmora"/></span>Filmora <span>95%</span> </p>
                                <ProgressBar animated now={95}  style={{height:'0.5rem'}}/>
                        </span>
                        <span id="skill">
                                <p style={{marginBottom:'-0.02rem', display:'flex', justifyContent:'space-between'}}><span style={{paddingBottom:'-1rem'}}><img width="28" height="28" src="https://img.icons8.com/fluency/28/canva.png" alt="canva"/></span>Canva <span>95%</span> </p>
                                <ProgressBar animated now={95}  style={{height:'0.5rem'}}/>
                        </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills