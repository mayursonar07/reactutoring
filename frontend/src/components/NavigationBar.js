import React from 'react'
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className='main-nav'>
          <div className='logo'>
            <img src={logo} style={{width: '210px'}}/>
          </div> 
          <div className='menu-link'>   
            <ul>
              
              <li className="nav-list-item">
                <Link to="/courses" className='nav-Link-item'>Courses</Link>
                {/* <ul>
                  <li>
                    <Link to="/courses/basic-javascript">Basic Javascript</Link>
                  </li>
                  <li>
                    <Link to="/courses/advanced-js">Advanced Js</Link>
                  </li>
                  <li>
                    <Link to="/courses/react">React</Link>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link to="/contact" className='nav-Link-item'>Enquiry</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
}

export default NavigationBar

