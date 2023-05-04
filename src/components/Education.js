import React,{useContext} from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import './Education.css'

import { education, image } from '../data/education'
import EducationCard from './EducationCard';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}> 
             <div className="education-body">
                 <div className="education-description">
                    <h1 style={{color:theme.sectiontitle}}>Education</h1>
                    {education.map(exp =>(
                        <EducationCard 
                            key={exp.id}
                            id={exp.id}
                            course={exp.course}
                            spacetime={exp.spacetime}
                            percentage={exp.percentage}
                            college={exp.college}/>
                    ))}
                 </div>
                 <div className="education-image">
                     <img src={image.image} alt="" />
                 </div>
             </div>
        </div>
    )
}

export default Education