import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import metacert from '../images/metacert.jpg'
import googlecert from '../images/googlecert.jpg'
import certapnic from '../images/certapnic.jpg'

function Certificates() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const certificateslist = [
    {
      certImg: metacert,
      certName: 'Front End Developer Specialization',
      certDate: '2023',
      certBy: 'by META'
    },
    {
      certImg: googlecert,
      certName: 'Fundamentals of Digital Marketing',
      certDate: '2020',
      certBy: 'by Google Digital Garage'
    },
    {
        certImg: certapnic,
        certName: 'CyberSecurity Fundamentals',
        certDate: '2023',
        certBy: 'by APNIC'
      }
  ];

  return (
    <Carousel data-bs-theme="light" activeIndex={index} onSelect={handleSelect} style={{ width: 'auto' }}>
      {certificateslist.map((certificate) => (
        <Carousel.Item key={certificate.certName}>
          <img src={certificate.certImg} style={{ width: '100%'}} alt={certificate.certName} />
          <p style={{ textAlign: 'center', paddingTop: '1rem', fontSize:'1.5rem', fontWeight:'600', lineHeight:'1.2' }}>{certificate.certName}</p>
          <p style={{ textAlign: 'center', marginBottom: '3rem', marginTop:'-1rem', fontSize:'0.9rem', fontStyle:'italic' }}>{certificate.certBy}, {certificate.certDate}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Certificates;
