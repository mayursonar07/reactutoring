import React from 'react'
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';
import { Heading, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavBar = () => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
        <nav className='main-nav'>
          <Link to="/"> {/* To take us back to homepage */}
            {/* <div className='logo'>
              <img src={logo} style={{width: '210px', marginTop:'15px', marginLeft: '10px' }}/>
            </div>  */}
            <Heading ml='8' size='md' fontWeight='bold' color='#159dca' mt='28px'>
              ReacTutor
            </Heading>
          </Link>
          {isMobile
          ?
          <div className='menu-link'>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                background='none'
                border='none'
                float='right'
                mt='20px'
                width='0px'
              />
              <MenuList>
                <MenuItem>
                  <Link to="/courses" className='nav-Link-item'>Courses</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/contact" className='nav-Link-item'>Contact</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          :
          <div className='menu-link'>   
            <ul>
              <li className="nav-list-item">
                <Link to="/courses" className='nav-Link-item'>Courses</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/contact" className='nav-Link-item'>Contact</Link>
              </li>
            </ul>
          </div>    
        }
        </nav>
      );
}

export default NavBar

