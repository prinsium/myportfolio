import React, { useContext } from 'react';
import { Card, Box } from '@mui/material';
import styled from '@emotion/styled';
import {MdComputer} from 'react-icons/md';

import { ThemeContext } from '../contexts/ThemeContext';
import './Education.css'

function EducationCard({id, course, spacetime, percentage, college}) {

    const { theme } = useContext(ThemeContext);
    return (
            <div key={id} className="education-card" style={{backgroundColor: theme.primary}}>
                <div className="expcard-img" style={{backgroundColor: theme.sectiontitle}}>
                    <MdComputer  />
                </div>
                <Box sx={{ml: 2, mr: 2, mb: 2, mt: -2}}>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary}}>{spacetime}</h5>
                    <h5 style={{color: theme.tertiary80}}>{college}, {percentage}</h5>
                </Box>
            </div> 
    )
}

export default EducationCard