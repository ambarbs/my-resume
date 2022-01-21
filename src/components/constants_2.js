import { AiOutlineMail } from 'react-icons/ai';
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { FaNpm } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { BsClock } from 'react-icons/bs';
import { CgScreen } from 'react-icons/cg';

import logoIAG from '../assets/logos/iag.png';
import logoRapiscan from '../assets/logos/rapiscan.png';
import logoLE from '../assets/logos/luxury-escapes-logo.jpg';
import logoOptus from '../assets/logos/optusSport.png';
import logoSuncorp from '../assets/logos/suncorp.png';
import logoCoreLogic from '../assets/logos/coreLogic.jpg';
import logoTab from '../assets/logos/tab.jpg';
import logoNBN from '../assets/logos/nbn.png';
import logoIress from '../assets/logos/iress.jpg';
import logoOracle from '../assets/logos/oracle.png';
import logoCisco from '../assets/logos/cisco.png';
import logoYodlee from '../assets/logos/yodlee.png';
import logoIndience from '../assets/logos/Indience.png';

const experienceSection = {
  header: 'Experience',
  headerIcon: BsClock,
  subSections: [
    {
      subSectionTitle: 'IAG',
      subSectionIcon: logoIAG,
      workTitle: 'Senior Frontend Engineer - Contract',
      yearsWorked: 'Mar - Sep 2021',
      subSectionTexts: [
        'Own multiple web apps and be responsible for writing stories, development, deployment.',
        'Developed and integrated WebChat UI for a major client',
        'UI and middleware development to retrieve an existing quote and display the details',
        'UI development for renewing a quote completing payment of it',
      ],
      techStack: {
        frontend:
          'Javascript, React, Redux ( with Thunk middleware), TypeScript, Styled Components, Croma components, Jest, Enzyme',
        backend: 'Node JS, AWS Lambda, Bamboo',
      },
    },
    {
      subSectionTitle: 'Luxury Escapes',
      subSectionIcon: logoLE,
      workTitle: 'Senior Software Engineer - Contract',
      yearsWorked: 'Oct 2020 - Mar 2021',
      subSectionTexts: [
        'Developed new features on the Luxury Escapes customer website and admin app. Code Review of peers.',
        'Developed Multi Flight Search UI based on new sets of APIs',
        'Revamped email service to send multiple of emails for unique offer in a package ',
      ],
      techStack: {
        frontend: 'Javascript, React, Redux, TypeScript, Styled Components, Jest, Enzyme',
        backend: 'Node JS, AWS Lambda, Heroku',
      },
    },
    {
      subSectionTitle: 'RapiScan Systems',
      subSectionIcon: logoRapiscan,
      workTitle: 'Senior Software Engineer',
      yearsWorked: 'Aug - Oct 2020',
      subSectionTexts: [
        'Own, maintain and develop new features on existing Angular App (Angular 1.6)',
      ],
      techStack: {
        frontend: 'Angular 1.6, Javascript, Websockets, Node JS',
      },
    },
    {
      subSectionTitle: 'Suncorp',
      subSectionIcon: logoSuncorp,
      workTitle: 'Senior Software Consultant - Contract',
      yearsWorked: 'Mar - Jun 2020',
      subSectionTexts: [
        'Primary responsibilities are to develop new features using React, Redux (Matcher) using Micro-frontend architecture for an insurance app',
        'Developed and integrated Adobe analytics to the insurance app',
      ],
      techStack: {
        frontend: 'React, Redux, Micro-frontend Architecture',
      },
    },
    {
      subSectionTitle: 'Optus Sport',
      subSectionIcon: logoOptus,
      workTitle: 'Senior Frontend Developer - Contract',
      yearsWorked: 'Feb 2019 - Feb 2020',
      subSectionTexts: [
        'Primary responsibilities are to develop new features using React, Redux, Sass for the responsive web app. Redesigning the website with dynamic responsive layouts.',
        "Redesigned the the web app's home page with dynamically configurable layouts",
        'Worked on SEO using AWS Lambdas',
        'Developed multiple Lambdas for middle-layer using AWS AppSync and Node JS',
        'Validate Old vs New CMS data – Developed (both FE and BE) an interactive dashboard app to display and debug the discrepancies between old and new CMS',
        'Developed Lambdas to dynamically generated sitemaps for Google News',
      ],
      techStack: {
        frontend: 'Frontend: React, Redux, Tailwind, JavaScript, CSS , responsive design',
        backend: 'NodeJS, AWS Lambda, AppSync(GraphQL), S3, Gateway',
      },
    },
    {
      subSectionTitle: 'Core Logic',
      subSectionIcon: logoCoreLogic,
      workTitle: 'Fullstack Software Developer - Contract',
      yearsWorked: 'Sep 2018 - Feb 2019',
      subSectionTexts: [
        'Working on real estate projects with NAB: Primary responsibilities are to develop new features in the React and React Native Apps along with Java in the backend.',
        'Applied "Extreme Programming (XP)" approach in the complete development lifecycle',
      ],
      techStack: {
        frontend: 'React, React Native, Redux, Javascript, JEST, Enzyme, Sass',
        backend: 'Java, Spring boot, Pivotal Cloud Foundry',
      },
    },
    {
      subSectionTitle: 'Tab Corp.',
      subSectionIcon: logoTab,
      workTitle: 'Senior Software Developer - Contract',
      yearsWorked: 'Mar - Sep 2018',
      subSectionTexts: [
        'Worked with SKY channel’s Smart App’s frontend team: Primary responsibilities are to develop new features in the React App and Middleware services running in Node',
      ],
      techStack: {
        frontend: 'React, Redux, Javascript, JEST, Enzyme, Sass',
        backend: 'Backend/Middleware: NodeJS, GraphQL, RabbitMQ',
      },
    },
    {
      subSectionTitle: 'NBN',
      subSectionIcon: logoNBN,
      workTitle: 'Senior Solution Developer - Contract',
      yearsWorked: 'Jul 2017 - Mar 2018',
      subSectionTexts: [
        'Worked with the public website team: Primary responsibilities are to develop new features and reskin the website and also to take care of any issues.',
        'Won Hackathon event to develop an app showing the product road-map with rich features based on an excel-sheet input.',
        'Integrated selenium with CI build system.',
      ],
      techStack: {
        frontend: 'AEM, Vanilla JS, jQuery, Less, Responsive design',
        backend: 'Java, Spring Boot, Spring MVC, AEM',
      },
    },
    {
      subSectionTitle: 'IRESS',
      subSectionIcon: logoIress,
      workTitle: 'Software Developer',
      yearsWorked: 'Sep 2015 - Jul 2017',
      subSectionTexts: [
        'Successfully developed and deployed multiple features – Compare Chart, Debt Vs Super, Savings journey (complete flow)',
        'Have provided full stack development support and worked extensively with the backend Python team.',
        "Interfaced with business analysts, product owner, UX consultant and other teams' engineers to determine the best requirement specifications.",
        'Prize winner in IRESS Global Hackathon 2016',
      ],
      techStack: {
        frontend: 'JavaScript, Backbone JS, React, Redux, TypeScript, Less',
        backend: 'Python',
      },
    },
    {
      subSectionTitle: 'Oracle',
      subSectionIcon: logoOracle,
      workTitle: 'Senior Application Developer',
      yearsWorked: 'Oct 2014 - Sep 2015',
      subSectionTexts: [
        'Successfully changed theme of the product, single-handedly and delivered before deadline without any prior knowledge of JavaScript/CSS',
        'Developed full-stack features for Event Scheduling and Cancelling a task for Oracle Primavera',
        'Reviewing code of fellow developers, mainly front-end.',
      ],
      techStack: {
        frontend: 'Vanilla JS, jQuery, Backbone, Less, Responsive design',
        backend: 'Java, Spring Boot, Spring MVC',
      },
    },
    {
      subSectionTitle: 'Cisco Systems',
      subSectionIcon: logoCisco,
      workTitle: 'Software Engineer II',
      yearsWorked: 'Apr 2011 - Sep 2014',
      subSectionTexts: [
        'Twice awarded for being in the top 10 of Cisco Coding Competition for years 2011 and 2013',
        'Developed and integrated Wi-Fi feature for the first time in the product and for GET Norway',
      ],
    },
    {
      subSectionTitle: 'Yodlee',
      subSectionIcon: logoYodlee,
      workTitle: 'Software Engineer',
      yearsWorked: 'Sep 2010 - Mar 2011',
      subSectionTexts: [
        'Coding enhancements/co-branding for clients in JavaScript HTML, CSS and development testing of the enhanced code',
      ],
    },
    {
      subSectionTitle: 'Indience Info Systems (AKA Unvired)',
      subSectionIcon: logoIndience,
      workTitle: 'Senior Software Engineer',
      yearsWorked: 'Jul 2008 - Sep 2010',
      subSectionTexts: [
        'Extensively involved with SAP’s project, Heineken, Netherlands and had to travel a couple of times to the client’s site in Amsterdam.',
        'Primary responsibilities were - coding, code review, requirement gathering',
      ],
    },
  ],
};

export const sections = [
  {
    header: 'Skills',
    headerIcon: GiSkills,
    subSections: [
      {
        subSectionTitle: 'Web technologies',
        subSectionText:
          'JavaScript (Vanilla & ES6), Node JS, React, Redux, Typescript, JQuery, Styled-components, CSS3,' +
          'SASS, LESS, Bootstrap, Responsive design, GraphQL, REST, HTML5',
      },
      {
        subSectionTitle: 'Cloud / AWS',
        subSectionText: 'Gateway, Lambda, S3, AppSync, Serverless',
      },
      {
        subSectionTitle: 'Unit/Automation testing',
        subSectionText: 'Jest, Enzyme, Selenium, Jasmine',
      },
    ],
  },
  experienceSection,
];

export const contacts = [
  {
    icon: AiOutlineMail,
    text: 'ambar.bs@gmail.com',
    isUrl: false,
  },
  {
    icon: GrLinkedin,
    link: 'https://www.linkedin.com/in/ambarbose/',
    text: 'LinkedIn Profile',
    isUrl: true,
  },
  {
    icon: BsGithub,
    link: 'https://github.com/ambarbs',
    text: 'Github Profile',
    isUrl: true,
  },
  {
    icon: FaNpm,
    link: 'https://www.npmjs.com/~ambar_bs',
    text: 'NPM Contributions',
    isUrl: true,
  },
  {
    icon: CgScreen,
    link: 'https://ambarbs.github.io/my-resume/',
    text: 'Web CV',
    isUrl: true,
    hideOnWebPage: true,
  },
];
