import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import'./Projects.css'
import Transitions from '../Transitions';

//Project images
import littlelemon from '../images/projects/littlelemon.png'
import portfolio from '../images/projects/portfolio.png'
import jsplayground from '../images/jsplayground.png'
import todolist from '../images/todolist.png'
import cleanenvi from '../images/projects/cleanenvi.png'
import climatefrontiers from '../images/projects/climatefrontiers.png'

document.title = 'Projects | Portfolio'

const Projects = () => {
    const projects = [
        {
            image:littlelemon,
            title:'Little Lemon Restaurent',
            description:"This is a simple demonstration of Frontend of Little Lemon's website, Specially wanted to mention that this webiste purely coded in HTML, CSS, JS and React.js, no any other frameworks or libraries used.",
            languages:['React.js','HTML | CSS | JS'],
            links:[
                {
                    github:'https://github.com/ransidis/table-bookig-system',
                    live:'https://ransidis.github.io/table-bookig-system/'
                }
            ]

        },
        {
          image:portfolio,
          title:'My Portfolio',
          description:'This is my official developer portfolio.',
          languages:['React.js','Bootstrap','HTML | CSS | JS'],
          links:[
              {
                  github:'https://github.com/ransidis/portfolio',
                  live:'https://ransidis.github.io/portfolio/'
              }
          ]

      },{
        image:jsplayground,
        title:'JS Playground',
        description:"In this space, I've gathered a collection of pure JavaScript calculations that I've crafted over time. These projects range from academic-related exercises to practical applications, all designed to showcase the versatility and power of JavaScript.",
        languages:['HTML | CSS | JS'],
        links:[
            {
                github:'https://github.com/ransidis/js-playground',
                live:'https://ransidis.github.io/js-playground/index.html'
            }
        ]

    },
    {
      image:todolist,
      title:'To Do List',
      description:"Simple Todo list app where you can add, edit, delete and track tasks.  ",
      languages:['React.js','HTML | CSS | JS'],
      links:[
          {
              github:'https://github.com/ransidis/todo-app',
              live:'https://ransidis.github.io/todo-app/'
          }
      ]

  },    {
    image:cleanenvi,
    title:'Clean Environment Systems Limited',
    description:"an official business website developed for a Nigerian Company | Freelance project",
    languages:['Wordpress, CSS','Elementor Pro'],
    links:[
        {
            live:'https://cleanenvironmentsystems.com/clean/'
        }
    ]

},    {
  image:climatefrontiers,
  title:'Climate Frontiers',
  description:"Ongoing web development project for a local client, Use GMap APIs",
  languages:['Wordpress, CSS','Elementor Pro'],
  links:[
      {
          live:'https://climatefrontiers.org/'
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