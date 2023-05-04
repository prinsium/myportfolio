import React, { useContext } from 'react';
import {Link} from 'react-scroll';
import {  Drawer, Fab, } from '@mui/material';
import styled from '@emotion/styled';
import {IoHome, IoBook, IoBriefcase, } from 'react-icons/io5';
import {RiSettings4Fill} from 'react-icons/ri';
import {BiMenu} from 'react-icons/bi';
import {SlClose} from 'react-icons/sl';
import {BsFileEarmarkArrowDownFill} from 'react-icons/bs';

import { ThemeContext } from '../contexts/ThemeContext';
import { header } from '../data/header';
import './Navbar.css'
const FabStyle = styled(Fab)(({ theme }) => ({ 
    position: 'fixed',
    top: 30,
    right: 30,
    zIndex: 7,
    backgroundColor: '#212129',
    color: '#e93a38',
    fontSize: '4.5rem',
    cursor: 'pointer',
    transition: 'color 0.3s',
  }))

const Navbar = () => {
  const { theme, drawerOpen } = useContext(ThemeContext);
    const [state, setState] = React.useState({left: false});
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const drawerCloseStyle={
        margin: '2rem auto',
        background: theme.primary,
        color: theme.sectiontitle,
        cursor: 'pointer',
        width: '85%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 30px',
        boxSizing: 'border-box',
        border: '0px solid',
        // borderColor: theme.sectiontitle,
        transition: 'background-color 0.2s, color 0.2s',
        '&:hover': {
            background: theme.primary,
            color: theme.secondary,
        },
      }

      const drawerItemStyle ={
        margin: '2rem auto',
        borderRadius: '78.8418px',
        background: theme.secondary,
        color: theme.sectiontitle,
        cursor: 'pointer',
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '1rem',
        boxSizing: 'border-box',
        border: '2px solid',
        borderColor: theme.sectiontitle,
        transition: 'background-color 0.2s, color 0.2s',
        "&:hover": {
            background: theme.primary,
            color: theme.secondary,
        },
      }
      
      const  drawerLinksStyle= {
        fontFamily: 'var(--primaryFont)',
        underline: 'none',
        width: '100%',
        marginLeft: '1rem',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontSize: '1.3rem',
        fontWeight: 600,
      }  
             
      const drawerIconStyle= {
        color: theme.sectiontitle,
        fontSize: '1.8rem',
      }

  return (
    <div>
    {['left'].map((anchor) => (
      <React.Fragment key={anchor}>
        <FabStyle onClick={toggleDrawer(anchor, true)}> <BiMenu size={'20px'}/> </FabStyle> 
        <div className="drawer">
        <Drawer PaperProps={{ sx: {pr:9, pl:9, width: 'auto', backgroundColor: theme.primary, color: theme.tertiary } }}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <div className="close-container">
          < SlClose style={drawerCloseStyle} onClick={toggleDrawer(anchor, false)} />
          </div>
          <div className="navbar--container">
          <Link to="landing" spy={true} smooth={true} offset={50} duration={2000} onClick={toggleDrawer(anchor, false)} >
            <div style={drawerItemStyle}>
                <IoHome style={drawerIconStyle} />
                <span style={drawerLinksStyle}>
                  Home
                </span>
            </div>
          </Link>
          
          <Link to="skills" spy={true} smooth={true} offset={50} duration={2000} onClick={toggleDrawer(anchor, false)} >
              <div style={drawerItemStyle}>
                  <RiSettings4Fill style={drawerIconStyle} />
                  <span style={drawerLinksStyle}>
                  Skills
                  </span>
              </div>
          </Link>
                        
          <Link to="projects" spy={true} smooth={true} offset={50} duration={2000} onClick={toggleDrawer(anchor, false)} >
              <div style={drawerItemStyle}>
                  <IoBriefcase style={drawerIconStyle}/>
                  <span style={drawerLinksStyle}>
                  Projects
                  </span>
              </div>
          </Link>
      
          <Link to="education" spy={true} smooth={true} offset={50} duration={2000} onClick={toggleDrawer(anchor, false)} >
              <div style={drawerItemStyle}>
                  <IoBook style={drawerIconStyle}/>
                  <span style={drawerLinksStyle}>
                      Education
                  </span>
              </div>
          </Link>

            {header.resumePdf && (
              <a href={header.resumePdf} download='resume' target='_blank' rel='noreferrer' >
                  <div style={drawerItemStyle}>
                  <BsFileEarmarkArrowDownFill style={drawerIconStyle}/>
                  <span style={drawerLinksStyle}>
                      Resume
                  </span>
              </div>
              </a>
              )}

          </div>
        </Drawer>
        </div>
      </React.Fragment>
    ))}
  </div>
  )
}

export default Navbar