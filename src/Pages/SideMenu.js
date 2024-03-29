import React from 'react'
import './SideMenu.css'
import Logo_oBackgroung from '../images/Logo_oBackgroung.svg'
import { Link } from 'react-router-dom'

function SideMenu() {
  return (
    <div className='container'>
        <div className='row ' >
            <div className='col-auto d-flex flex-column justify-content-center min-vh-100 bg-dark '  >
            <div className='mt-2'>
                <a className='text-decoration-none  d-flex align-items-center text-white d-none d-sm-inline' role="button">
                    <Link to='/'><span><img src={Logo_oBackgroung} style={{width:'100%', marginBottom:'-3rem', marginTop:'-6rem'}}/></span></Link>
                </a>
                <hr className='text-white d-none d-sm-block'/>
                <ul
                    class="nav nav-pill flex-column mt-2 mt-sm-0 " id='parent'
                >
                    <li class="nav-item my-1 py-1 py-sm-0 ">
                        <Link to='/' class="nav-link text-center text-sm-start active" aria-current="page" style={{borderRadius:'1rem', fontWeight:'bold'}}>
                        <i class="bi bi-house-door-fill"></i>
                        <span className='ms-2 d-none d-sm-inline'>HOME</span>
                        </Link>
                    </li>
                    <li class="nav-item my-1 py-1 py-sm-0">
                    <Link to='/about-me' class="nav-link text-center text-sm-start active" aria-current="page" style={{borderRadius:'1rem', fontWeight:'bold'}}>
                        <i class="bi bi-person-fill"></i>
                        <span className='ms-2 d-none d-sm-inline'>ABOUT ME</span>
                        </Link>
                    </li>
                    <li class="nav-item my-1 py-1 py-sm-0">
                    <Link to='/education' class="nav-link text-center text-sm-start active" aria-current="page" style={{borderRadius:'1rem', fontWeight:'bold'}}>
                        <i class="bi bi-backpack4-fill"></i>
                        <span className='ms-2 d-none d-sm-inline'>EDUCATION</span>
                        </Link>
                    </li>
                    <li class="nav-item my-1 py-1 py-sm-0">
                    <Link to='/projects' class="nav-link text-center text-sm-start active" aria-current="page" style={{borderRadius:'1rem', fontWeight:'bold'}}>
                        <i class="bi bi-kanban-fill"></i>
                        <span className='ms-2 d-none d-sm-inline'>PROJECTS</span>
                    </Link>
                    </li>

                </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SideMenu