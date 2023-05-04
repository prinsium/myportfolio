import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import angular from '../assets/svg/angular.svg'
import javascript from '../assets/svg/javascript.svg'
import react from '../assets/svg/react.svg'
import bootstrap from '../assets/svg/bootstrap.svg'
import mongoDB from '../assets/svg/mongoDB.svg'
import mysql from '../assets/svg/mysql.svg'
import postgresql from '../assets/svg/postgresql.svg'
import tailwind from '../assets/svg/tailwind.svg'
import vitejs from '../assets/svg/vitejs.svg'
import vuetifyjs from '../assets/svg/vuetifyjs.svg'
import c from '../assets/svg/c.svg'
import cplusplus from '../assets/svg/cplusplus.svg'
import csharp from '../assets/svg/csharp.svg'
import java from '../assets/svg/java.svg'
import julia from '../assets/svg/julia.svg'
import kotlin from '../assets/svg/kotlin.svg'
import matlab from '../assets/svg/matlab.svg'
import php from '../assets/svg/php.svg'
import python from '../assets/svg/python.svg'
import ruby from '../assets/svg/ruby.svg'
import swift from '../assets/svg/swift.svg'
import adobeaudition from '../assets/svg/adobeaudition.svg'
import aws from '../assets/svg/aws.svg'
import django from '../assets/svg/django.svg'
import firebase from '../assets/svg/firebase.svg'
import git from '../assets/svg/git.svg'
import graphql from '../assets/svg/graphql.svg'
import lightroom from '../assets/svg/lightroom.svg'
import materialui from '../assets/svg/materialui.svg'
import numpy from '../assets/svg/numpy.svg'
import opencv from '../assets/svg/opencv.svg'
import premierepro from '../assets/svg/premierepro.svg'
import pytorch from '../assets/svg/pytorch.svg'
import selenium from '../assets/svg/selenium.svg'
import strapi from '../assets/svg/strapi.svg'
import tensorflow from '../assets/svg/tensorflow.svg'
import webix from '../assets/svg/webix.svg'
import wordpress from '../assets/svg/wordpress.svg'
import azure from '../assets/svg/azure.svg'
import figma from '../assets/svg/figma.svg'
import flutter from '../assets/svg/flutter.svg'
import markdown from '../assets/svg/markdown.svg'
import microsoftoffice from '../assets/svg/microsoftoffice.svg'
import expressjs from '../assets/svg/expressjs.svg'
import nodejs from '../assets/svg/nodejs.svg'
import redux from '../assets/svg/redux.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'node js':
            return nodejs;
        case 'mongodb':
            return mongoDB;
        case 'express':
            return expressjs;
        case 'redux':
            return redux;
        case 'react':
            return react;
        case 'material ui':
            return materialui;
        case 'bootstrap':
            return bootstrap;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        default:
            break;
    }
}