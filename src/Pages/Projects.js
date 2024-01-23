import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import'./Projects.css'
import Transitions from '../Transitions';

import littlelemon from '../images/projects/littlelemon.png'

const Projects = () => {
    const projects = [
        {
            image:littlelemon,
            title:'Little Lemon Sample Web',
            description:'Sample description here',
            languages:['React.js','HTML'],
            links:[
                {
                    github:'https://github.com/ransidis/table-bookig-system',
                    live:'https://ransidis.github.io/table-bookig-system/'
                }
            ]

        }
    ]
  return (
    <Transitions>
    <div className='container-fluid projects p-3'>
    <h1 style={{fontWeight:'700', color:'#E6D402', marginBottom:'1rem'}}>Projects</h1>
        <div className='row'>
            <div className='col-12 d-flex flex-row flex-wrap'>
            {projects.map((project)=>(
            <Card className='cardpopup' bg='dark' text='white' style={{ width: '18rem', marginRight:'1rem', marginBottom:'1rem' }}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" >
                {project.languages.map((language, index) => (
                  <ListGroup.Item key={index} className='list-group-item-dark'>{language}</ListGroup.Item>
                ))}
                </ListGroup>
                <Card.Body>
                {project.links.map((link, index) => (
                  <div key={index}>
                    {link.github && (
                      <Card.Link href={link.github} className='card-link text-warning' target='_blank' rel='noopener noreferrer'>
                        GitHub
                      </Card.Link>
                    )}
                    {link.live && (
                      <Card.Link href={link.live} className='card-link text-warning' target='_blank' rel='noopener noreferrer'>
                        Live
                      </Card.Link>
                    )}
                  </div>
                ))}
              </Card.Body>
            </Card>
            ))}
            </div>
        </div>
    </div>
    </Transitions>
  )
}

export default Projects