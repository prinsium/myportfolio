import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import javascript from '../assets/svg/javascript.svg'
import react from '../assets/svg/react.svg'
import bootstrap from '../assets/svg/bootstrap.svg'
import mongoDB from '../assets/svg/mongoDB.svg'
import c from '../assets/svg/c.svg'
import cplusplus from '../assets/svg/cplusplus.svg'
import git from '../assets/svg/git.svg'
import materialui from '../assets/svg/materialui.svg'
import figma from '../assets/svg/figma.svg'
import expressjs from '../assets/svg/expressjs.svg'
import nodejs from '../assets/svg/nodejs.svg'
import nextJS from '../assets/svg/nextJS.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'node js':
            return nodejs;
        case 'mongodb':
            return mongoDB;
        case 'express':
            return expressjs;
        case 'next':
            return nextJS;
        case 'react':
            return react;
        case 'material ui':
            return materialui;
        case 'bootstrap':
            return bootstrap;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'figma':
            return figma;
        default:
            break;
    }
}