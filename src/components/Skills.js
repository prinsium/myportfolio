import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';

import './Skills.css'
import { ThemeContext } from '../contexts/ThemeContext';
import { skills } from '../data/skills';
import { skillsImage } from '../data/skillsImage';

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 20px ${theme.boxbackground}`
    }

    return (
        <div className="skills"  id="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.sectiontitle}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <Box sx={{ p:4, alignItems: 'center'}}>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid container justifyContent="center">
                        {skills.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Grid>
                    </Grid>
                    </Box>
            </div>
        </div>
    )
}

export default Skills