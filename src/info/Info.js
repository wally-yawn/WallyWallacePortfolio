import self from "../img/self.png"
import rancid from "../img/rancid.png"
import smart from "../img/smart.png"
import tracker from "../img/tracker.png"
import { Description } from "@mui/icons-material"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,191,255)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Wally",
    lastName: "Wallace",
    pronouns: "he/him",
    initials: "ww", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "📧",
            text: "jrvw001@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/wally-yawn",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "www.linkedin.com/in/wally--wallace",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Wally. I'm a full stack developer who studied at the Turing School of Software and Design after spending the previous 14 years as a Software QA Engineer in the Insurance and Healthcare technology spaces. I decided to make the change because I want to create tools to improve people's lives, and would love to explore creative ways we can use technology to protect the environment. If you're interested in that too, let's chat!",
    skills:
        {
            proficientWith: ['javascript', 'typescript', 'react', 'git', 'github', 'html5', 'css3', 'ruby on rails', 'sql'],
            exposedTo: ['java']
        }
    ,
    hobbies: [
        {
            label: 'combat robotics',
            emoji: '🦾'
        },
        {
            label: 'music',
            emoji: '🎸'
        },
        {
            label: 'gardening',
            emoji: '🌿'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Smart Gardening",
            desc: "A website for beginning gardeners to be able to get plant recommendations based on their specific garden. The application was built with a React front end making calls to a Ruby on Rails backend, which was in turn making calls to OpenAI's API in order to generate recommendations. This was a great learning experience to work with React state and props to pass data between components.", 
            live: "https://smart-gardening-fe.vercel.app/",
            besource: "https://github.com/sethverrill/smart-gardening-be",
            fesource: "https://github.com/wally-yawn/smart_gardening_fe",
            image: smart
        },
        {
            title: "Tracker CRM",
            desc: "An application for Turing students to track job applications and contacts. I personally implemented a gateway between the app and OpenAI's api to generate practice interview questions based on a job description, and cleaned the data to be able to present to the front end.",
            live: "https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/",
            besource: "https://github.com/turingschool/tracker-crm", 
            fesource: "https://github.com/turingschool/tracker-crm-fe",
            image: tracker
        },
        {
            title: "Rancid Tomatillos",
            desc: "Legally distinct from any other website, Rancid Tomatillos was my first practice project built with React.",
            live: "https://rancid-tomatillos-sandy.vercel.app/",
            fesource: "https://github.com/wally-yawn/rancid-tomatillos",
            image: rancid
        }
    ]
}

//things to add
// - projects
//    - description
//    - screenshots
//    - both fe and be repos