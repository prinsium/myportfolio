import React, { useContext } from 'react';
import { Card , Box} from '@mui/material';
import {MdComputer, MdCode} from 'react-icons/md';

import { ThemeContext } from '../contexts/ThemeContext';
import './Projects.css'

function ProjectCard({id, demolink, sourcelink, title, description, technologies}) {

    const { theme } = useContext(ThemeContext);
    return (
            <div key={id} className="projects-card" style={{backgroundColor: theme.primary}}>
                <div className="img">
                <div className="expcard-img" style={{backgroundColor: theme.sectiontitle}}>
                <a href={demolink} target='_blank' rel='noreferrer' >
                    <MdComputer  />
                </a>
                </div>
                <div className="expcard-img" style={{backgroundColor: theme.sectiontitle}}>
                <a href={sourcelink} target='_blank' rel='noreferrer' >
                    <MdCode  />
                </a>
                </div>
                </div>
                <Box sx={{ml: 2, mr: 2, mb: 2, mt: -2}}>
                    <div className="card-details">
                    <h4 style={{color: theme.tertiary}}>{title}</h4>
                    <p style={{color: theme.tertiary70}}><i>Technologies: {technologies}</i></p>
                    <h5 style={{color: theme.tertiary80}}>{description}</h5>
                    </div>
                </Box>
            </div> 
    )
}

export default ProjectCard