import React, { useContext } from 'react';
import { Button, Link } from '@mui/material'

import './Landing.css';
import { ThemeContext } from '../contexts/ThemeContext';
import { header } from '../data/header';
import { socials } from '../data/socials';

import {TbBrandLinkedin, TbBrandGithub, TbMail} from 'react-icons/tb';

function Landing() {
    const { theme } = useContext(ThemeContext);

    const drawerItemStyle ={
        margin: 'auto',
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
        '&:hover': {
            background: theme.primary,
            color: theme.secondary,
        },
      }
      
      const  drawerLinksStyle= {
        fontFamily: 'var(--primaryFont)',
        underline: 'none',
        width: '100%',
        marginLeft: '0.5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '1.3rem',
        fontWeight: 500,
      }  
             
      const drawerIconStyle= {
        color: theme.sectiontitle,
        fontSize: '1.8rem',
        fontWeight: 500,
      }

    return (
        <div className='landing'  id="landing" >
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                     <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h5><span class="highlight-container">{header.title}</span></h5>
                        <h1>{header.name}</h1>
                        <p>{header.desciption}</p>
                        
                    <div className='lcl-buttonContainer'>

                    <div className='lcl-btn'>
                    {socials.linkedIn && (
              <a href={socials.linkedIn} target='_blank' rel='noreferrer' >
                  <div style={drawerItemStyle}>
                  <TbBrandLinkedin style={drawerIconStyle}/>
                  <span className='lcl-btnlink' style={drawerLinksStyle}>
                      LinkedIn
                  </span>
              </div>
              </a>
              )}
              </div>

              <div className='lcl-btn'>
                     {socials.github && (
              <a href={socials.github} target='_blank' rel='noreferrer' >
                  <div style={drawerItemStyle}>
                  <TbBrandGithub style={drawerIconStyle}/>
                  <span className='lcl-btnlink' style={drawerLinksStyle}>
                      Github
                  </span>
              </div>
              </a>
              )}
              </div>

                <div className="lcl-btn">
              {socials.email && (
                <a href={`mailto:${socials.email}`} target='_blank' rel='noreferrer' >
                    <div style={drawerItemStyle}>
                    <TbMail style={drawerIconStyle}/>
                    <span className='lcl-btnlink' style={drawerLinksStyle}>
                        Mail
                    </span>
                </div>
                </a>
                )}
                </div>
              </div>
                    </div>
                </div>
                
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >

                    <img
                    src={header.image}
                    alt=''
                    className='landing--img'
                    style={{ borderColor: theme.secondary }}
                     />
                </div>
            </div>
        </div>
    );
}

export default Landing;