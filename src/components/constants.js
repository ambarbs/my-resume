import {AiOutlineMail} from "react-icons/ai";
import {GrLinkedin} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
import {FaNpm} from "react-icons/fa";
import {GiSkills} from "react-icons/gi";
import {BsClock} from "react-icons/bs";


export const sections = [
    {
        header: 'Skills',
        headerIcon: GiSkills,
        subSections: [{
            subSectionTitle: 'Web technologies',
            subSectionText: 'JavaScript (Vanilla & ES6), Node JS, React, Redux, Typescript, JQuery, Styled-components, CSS3,' +
                'SASS, LESS, Bootstrap, Responsive design, GraphQL, REST'
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
            subSectionTitle: 'Web technologies',
            subSectionIcon: FaNpm,
            subSectionText: 'JavaScript (Vanilla & ES6), Node JS, React, Redux, Typescript, JQuery, Styled-components, CSS3,' +
                'SASS, LESS, Bootstrap, Responsive design, GraphQL, REST'
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
