// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Habtamu",
  middleName: "ቤናዊ",
  lastName: "Alemayehu",
  message: " Software Engineer | Java enthusiastic | Spring Boot | JavaScript | React | Redux | Rails | Tailwind |I love creating new things ⚡ Turning imagination into reality 🚀",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Benawi",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@habtamualemayehu16",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/recursion_function/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/habtamu-alemayehu-b90367101/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/MandeAlemayehu",
    },
    {
      image: "fa-telegram",
      url: "https://t.me/serializedObject",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/benawi.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/HabtamuAlemayehu.jpg"),
  imageSize: 375,
  message:
    "Hi there! My name is Habtamu Alemayehu. I'm a software engineer holding a master's degree In Computer Science and Engineering, a full-stack developer with more than 7+ years of hands-on experience I specialize in Spring Boot, React/redux , Ruby, Rails development. I have a proven track record of creating efficient, scalable, and user-friendly applications. I was fascinated by the power of technology and how it could positively impact society.",
  resume: "https://docs.google.com/document/d/1Kf1zLPSRRKZJrYjYxUpgatfUeWJf9acoE4b08GhUfnQ/edit",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = { 
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "benawi", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/HabtamuAlemayehu.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/HabtamuAlemayehu.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 98 },
    { name: "Spring Boot", value: 85 },
    { name: "Python", value: 90 },
    { name: "SQL", value: 95 },
    { name: "Data Structures", value: 93 },
    { name: "C/C++", value: 98 },
    { name: "JavaScript", value: 95 },
    { name: "React", value: 90 },
    { name: "Ruby", value: 85 },
    { name: "Rails", value: 82 },
    { name: "HTML/CSS", value: 95 },
    { name: "C#", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 88 },
    { name: "Collaboration", value: 97 },
    { name: "Positivity", value: 88 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am an aspiring Software Engineer seeking new full-time opportunities to further develop my skills and experience. If you are aware of any open software engineering roles that match my background, have any advice, or would simply like to connect, please feel free to email me at",
  email: "habtamualemayehu16@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
