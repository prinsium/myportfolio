import React,{useContext} from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import './Projects.css'

import { projects, image } from '../data/projects'
import ProjectCard from './ProjectCard';

function Projects() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}> 
             <div className="projects-body">
                 <div className="projects-image">
                     <img src={image.image} alt="" />
                 </div>
                 <div className="projects-description">
                    <h1 style={{color:theme.sectiontitle}}>Projects</h1>
                    {projects.map(project =>(
                        <ProjectCard 
                            key={project.id}
                            id={project.id}
                            demolink={project.demolink}
                            sourcelink={project.sourcelink}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            />
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Projects