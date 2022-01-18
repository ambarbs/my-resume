import React from "react";
import {AiOutlineMail} from "react-icons/ai";
import {GrLinkedin} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
import {FaNpm} from "react-icons/fa";
import {GiSkills} from "react-icons/gi";
import {BsClock} from "react-icons/bs";

import logoIAG from '../assets/logos/iag.png';
import logoLE from '../assets/logos/luxury-escapes-logo.jpg';

export const sections = [
    {
        header: 'Skills',
        headerIcon: GiSkills,
        subSections: [{
            subSectionTitle: 'Web technologies',
            subSectionText: 'JavaScript (Vanilla & ES6), Node JS, React, Redux, Typescript, JQuery, Styled-components, CSS3,' +
                'SASS, LESS, Bootstrap, Responsive design, GraphQL, REST, HTML5'
        },
            {
                subSectionTitle: 'Cloud / AWS',
                subSectionText: 'Gateway, Lambda, S3, AppSync, Serverless'
            },
            {
                subSectionTitle: 'Testing methodologies',
                subSectionText: 'Jest, Enzyme, Selenium, Jasmine'
            }
        ]
    },
    {
        header: 'Experience',
        headerIcon: BsClock,
        subSections: [{
            subSectionTitle: 'IAG',
            subSectionIcon: logoIAG,
            workTitle: 'Senior Frontend Engineer - Contract',
            yearsWorked: 'Mar - Sep 2021',
            subSectionTexts: ['Owned multiple web-apps', 'Developed and integrated WebChat UI for a major client', 'Responsible for complete life-cycle of the software']
        },
            {
                subSectionTitle: 'Luxury Escapes',
                subSectionIcon: logoLE,
                workTitle: 'Senior Software Engineer - Contract',
                yearsWorked: 'Sep 2020 - Mar 2020',
                subSectionTexts: ['Developed new features on the Luxury Escapes customer website and admin app. Code Review of peers.',
                    'Developed the Flight Search UI based new sets of APIs',
                    'Revamped email service to send multiple of emails for unique offer in a package ']
            },
        ]
    }
];

export const contacts = [
    {
        icon: AiOutlineMail,
        text: 'ambar.bs@gmail.com',
        isUrl: false,
    },
    {
        icon: GrLinkedin,
        text: 'https://www.linkedin.com/in/ambarbose/',
        isUrl: true,
    },
    {
        icon: BsGithub,
        text: 'https://github.com/ambarbs',
        isUrl: true,
    },
    {
        icon: FaNpm,
        text: 'https://www.npmjs.com/~ambar_bs',
        isUrl: true,
    }
]
