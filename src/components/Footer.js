import React, { useContext } from 'react'
import { Divider, Box } from '@mui/material';

import './Footer.css';
import { ThemeContext } from '../contexts/ThemeContext';
import { header } from '../data/header';
import { socials } from '../data/socials';
import {TbBrandLinkedin, TbBrandGithub, TbMail} from 'react-icons/tb';

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const { theme }  = useContext(ThemeContext)
             
      const drawerIconStyle= {
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
        fontSize: '1.8rem',
        fontWeight: 500,
      }

    return (
        <div style={{backgroundColor: theme.primary}}>
            <div className="footer-social">
             {socials.linkedIn && (
                <a href={socials.linkedIn} target='_blank' rel='noreferrer' >
                    <div className="link-btn" >
                     <TbBrandLinkedin className='landing--social' style={drawerIconStyle} aria-label='LinkedIn' />
                     </div>
                 </a>
            )}
             {socials.github && (
                 <a href={socials.github} target='_blank' rel='noreferrer' >
                    <div className="link-btn" >
                    <TbBrandGithub className='landing--social' style={drawerIconStyle} aria-label='GitHub' />
                    </div>
                </a>
             )}
             {socials.email && (
                 <a href={`mailto:${socials.email}`} target='_blank' rel='noreferrer' >
                    <div className="link-btn" >
                    <TbMail className='landing--social' style={drawerIconStyle} aria-label='E-Mail' />
                    </div>
                </a>
             )}
             </div>
        </div>
    )
}

export default Footer
