import { FiCode } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdBuild } from "react-icons/io"
import { BsDatabaseFill } from "react-icons/bs";

import profilePics from "./assets/userDefined/edema.jpg";
import wowjobsLogo from "./assets/userDefined/wowjobs_logo.png";
import workopolisLogo from "./assets/userDefined/workopolis.png";
import shopperLogo from "./assets/userDefined/smartshopper.png";
import creCentralLogo from "./assets/userDefined/crecental.png";
import careesmaLogo from "./assets/userDefined/careesma_logo.png";
import movieSearchLogo from "./assets/userDefined/moviesearchapp.png";
import gigaJobLogo from "./assets/userDefined/gigajob_logo.jpeg";
import engineerJobLogo from "./assets/userDefined/engineerjobs.png";

import reactLogo from "./assets/userDefined/reactLogo.png";
import javascriptLogo from "./assets/userDefined/javascriptLogo.png";
import nextjsLogo from "./assets/userDefined/nextjsLogo.png";
import htmlLogo from "./assets/userDefined/htmlLogo.png";
import typescriptLogo from "./assets/userDefined/typescriptLogo.png";
import reduxLogo from "./assets/userDefined/reduxLogo.png";
import cssLogo from "./assets/userDefined/cssLogo.png";
import pythonLogo from "./assets/userDefined/pythonLogo.jpeg";
import djangoLogo from "./assets/userDefined/djangoLogo.jpeg";
import postgresLogo from "./assets/userDefined/postgresLogo.png";
import gitLogo from "./assets/userDefined/gitLogo.png";
import cypressLogo from "./assets/userDefined/cypressLogo.jpeg";

import stacie from "./assets/userDefined/stacie.jpeg";
import golfo from "./assets/userDefined/golfo.jpeg";


export const hero = [
    {
        title: "Hi! I am Edema",
        subtitle: "a sofware developer",
        description: "I specialize in building web applications using React, Typescript, Nextjs, Javascript, Python , Django and other peripheral technologies",
        image: profilePics
}
]

export const about = [
    {
        icon: <FiCode />,
        title: "Frontend Development",
        description: "I delight in crafting immersive and user-friendly web experiences and user interfaces. With experience in React, Typescript, HTML, CSS, and JavaScript, I specialize in transforming design concepts into interactive and responsive websites."
    },
    {
        icon: <BsDatabaseFill />,
        title: "Backend Development",
        description: "I have experience in designing and implementing efficient server-side architecture, databases, APIs, and other backend technologies. I delight in developing secure and high-performance backend systems with Python and Django."
    },
    {
        icon: <FaPaperPlane />,
        title: "Deployment",
        description: "Once the application is ready, I also help to deploy it to production including carrying out continuous integration and deployment workflows."
    },
    {
        icon: <IoMdBuild />,
        title: "Website Maintenance",
        description: "Once the application is ready, I also help to deploy it to production including carrying out continuous integration and deployment workflows."
    }
]

export const projects = [
    {
        name: "Wowjobs",
        description: "A job listing web application where users can search and apply for jobs globally with special features for job listings in Canada, France and the United States. Role: Frontend Engineer",
        tags: ["React", "Typescript", "Cypress"],
        link: "https://www.wowjobs.ca",
        image: wowjobsLogo
},
{
    name: "Workopolis",
    description: "A job listing web application where users can search and apply for jobs globally with special features for job listings in France and the United states. Role: Frontend Engineer",
    tags: ["React", "Typescript", "Cypress"],
    link: "https://www.workopolis.com",
    image: workopolisLogo
},
{
    name: "Smart Shopper",
    description: "A smart shopping app that learns users buying behaviour and uses it to predict what they are likely going to buy next in order of priority. Role: React Developer",
    tags: ["React", "Firebase's Firestore", "Javascript"],
    link: "https://tcl-35-smart-shopping-list.web.app",
    image: shopperLogo
},
{
    name: "Careesma",
    description: "A job listing web application where users can search and apply for jobs in India.",
    tags: ["React", "Typescript", "Cypress"],
    link: "https://www.careesma.in",
    image: careesmaLogo
},
{
    name: "Movie Search App",
    description: "A React app for searching and showing list of movies from a public API .",
    tags: ["React", "Javascript", "Mock API", "HTML5", "CSS3"],
    link: "https://moviessearch-app.netlify.app",
    image: movieSearchLogo
},
{
    name: "Gigajobs",
    description: "A job listing web application that connects job seekers and employers in Germany. Role: Frontend Engineer",
    tags: ["React", "Typescript", "Cypress"],
    link: "https://de.gigajob.com",
    image: gigaJobLogo
},
{
    name: "Crecentral News",
    description: "This is an app I built with vanilla javascript and performs basic crud operation of creating, updating, deleting news items and comments",
    tags: ["Javascript", "CSS", "Mock API", "HTML"],
    link: "https://news-website-with-javascript-crud.vercel.app",
    image: creCentralLogo
},
{
    name: "Engineerjobs",
    description: "A job listing platform for hiring all types of engineers in the United states. Role: Frontend Engineer",
    tags: ["React", "Typescript", "Cypress"],
    link: "https://www.engineerjobs.com",
    image: engineerJobLogo
},
]

export const technologies = [
    {
        icon: reactLogo,
        name: "React"
    },
    {
        icon: javascriptLogo,
        name: "Javascript"
    },
    {
        icon: nextjsLogo,
        name: "Next.js"
    },
    {
        icon: htmlLogo,
        name: "HTML"
    },
    {
        icon: typescriptLogo,
        name: "Typescript"
    },
    {
        icon: reduxLogo,
        name: "Redux"
    },
    {
        icon: cssLogo,
        name: "CSS"
    },
    {
        icon: pythonLogo,
        name: "Python"
    },
    {
        icon: djangoLogo,
        name: "Django"
    },
    {
        icon: postgresLogo,
        name: "Postgres"
    },
    {
        icon: gitLogo,
        name: "Git"
    },
    {
        icon: cypressLogo,
        name: "Cypress"
    },
]

export const testimonials = [
    {
        testimonial: "I worked with Edema when he was an engineer at The Collab Lab and can confidently say that he is one of the most determined and intentional engineers I have ever worked with. He is incredibly inquisitive and his ability to dig into solving complex problems and communicate solutions to his team is inspirational. I am proud of the work Edema has done for our team at Collab Lab and any team would be lucky to have him.",
        author_photo: stacie,
        author_name: "Stacie Taylor",
        author_title: "Engineering Manager at Zapier and Founder of The Collab Lab"
    },
    {
        testimonial: "It has been a real pleasure mentoring Edema. Edema is dedicated, self-motivated, methodical, and very capable. He wrote solid code and explained it in great detail. He was well respected in the Collab Lab and everyone enjoyed working with him.",
        author_photo: golfo,
        author_name: "Golfo Vasiliou",
        author_title: "Frontend Engineer at Informed and Mentor at The Collab Lab"
    },
]

export const contact = [
    {
        phone: "+2348169277926",
        email: "edemaukabi@gmail.com",
        address: "Lagos Island, Lagos Nigeria",
        latitude: 6.4549,
        longitude: 3.4246
    }
]