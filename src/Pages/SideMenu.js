import React from 'react'
import './SideMenu.css'
import Logo_oBackgroung from '../images/Logo_oBackgroung.svg'

function SideMenu() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-center min-vh-100'>
            <div className='mt-2'>
                <a className='text-decoration-none  d-flex align-items-center text-white d-none d-sm-inline' role="button">
                    <span><img src={Logo_oBackgroung} style={{width:'100%', marginBottom:'-3rem', marginTop:'-6rem'}}/></span>
                </a>
                <hr className='text-white d-none d-sm-block'/>
                <ul
                    class="nav nav-pill flex-column mt-2 mt-sm-0" id='parent'
                >
                    <li class="nav-item my-1 py-1 py-sm-0">
                        <a href="#" class="nav-link text-center text-sm-start active" aria-current="page" style={{borderRadius:'1rem', fontWeight:'bold'}}>
                        <i class="bi bi-house-door-fill"></i>
                        <span className='ms-2 d-none d-sm-inline'>HOME</span>
                        </a>
                    </li>
                    <li class="nav-item my-1 py-1 py-sm-0">
                        <a href="#" class="nav-link text-center text-sm-start active" aria-current="page"style={{borderRadius:'1rem', fontWeight:'bold'}} >
                        <i class="bi bi-person-fill"></i>
                        <span className='ms-2 d-none d-sm-inline'>ABOUT ME</span>
                        </a>
                    </li>
                    <li class="nav-item my-1 py-1 py-sm-0">
                        <a href="#" class="nav-link text-center text-sm-start active" aria-current="page" style={{borderRadius:'1rem', fontWeight:'bold'}}>
                        <i class="bi bi-backpack4-fill"></i>
                        <span className='ms-2 d-none d-sm-inline'>EDUCATION</span>
                        </a>
                    </li>
                    <li class="nav-item my-1 py-1 py-sm-0">
                        <a href="#" class="nav-link text-center text-sm-start active" aria-current="page" style={{borderRadius:'1rem', fontWeight:'bold'}}>
                        <i class="bi bi-kanban-fill"></i>
                        <span className='ms-2 d-none d-sm-inline'>PROJECTS</span>
                        </a>
                    </li>

                </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SideMenu