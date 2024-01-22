import React from 'react';
import './EducationTimeline.css'

const EducationTimeline = () => {

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science Business Information Systems (Special)',
      institution: 'University of Sri Jayewardenepura',
      years: '2020 - Present',
    },
    {
      id: 2,
      degree: 'GCE A/Ls and GCE O/Ls',
      institution: 'Royal College - Polonnaruwa',
      years: '2016 - 2019',
    }

  ];

  return (
    <ul className="timeline" style={{marginTop:'2rem'}}>
      {educationData.map((educationItem) => (
        <li key={educationItem.id} className="timeline-item">
          <div className="timeline-content">
          <i class="bi bi-circle-fill" style={{marginLeft:'-1.55rem',  marginTop: '2rem', color:'#E6D402' }}></i>
          <p className="timeline-date" style={{fontSize:'0.7rem', marginBottom:'-0.1rem', marginTop:'-1.3rem'}}><span style={{marginRight:'0.5rem'}}><i class="bi bi-calendar"></i></span>{educationItem.years}</p>
            <p className="timeline-title" style={{fontSize:'1.2rem'}}>{educationItem.degree}</p>
            <p className="timeline-description" style={{fontSize:'0.9rem', marginTop:'-1rem', marginBottom:'1rem', fontStyle:'italic'}}>{educationItem.institution}</p><br/>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EducationTimeline;
