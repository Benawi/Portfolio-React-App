<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Habtamu's Portfolio ✨  </h1>

  <p align="center">
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects. Site URL / Demo: 
    <a href="https://benawi.github.io/Portfolio-React-App/">benawi</a>
    <br />
    <br />
    <a href="https://benawi.github.io/Portfolio-React-App/#aboutme">About Me</a>
  </p>
</p>

![GitHub contributors](https://img.shields.io/github/contributors/benawi/Portfolio-React-App?color=ffcc66&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/benawi/Portfolio-React-App?color=ffcc66&style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/benawi/Portfolio-React-App?style=for-the-badge)](https://github.com/benawi/star_book/network)
[![GitHub issues](https://img.shields.io/github/issues/benawi/Portfolio-React-App?color=ffcc66&style=for-the-badge)](https://github.com/benawi/star_book/issues)
[![GitHub license](https://img.shields.io/github/license/benawi/Portfolio-React-App?style=for-the-badge)](https://github.com/benawi/Portfolio-React-App/blob/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/benawi?color=ffcc66&logo=twitter&logoColor=ffffff&style=for-the-badge)](https://twitter.com/benawi)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=v18.13.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=8.11.0&color=cb0000&style=for-the-badge)](https://nodejs.org)

[![Site preview](/public/social-image.png)](https://benawi.github.io/Portfolio-React-App/)

## Table of Contents

- [Technology Stack 🛠️](#technology-stack-)
- [Structure ⚓](#structure-)
- [Sharing 💗](#sharing-)
- [Prerequisites 🍪](#prerequisites-)
- [Setup And Deployment 🔧](#setup-and-deployment-)
- [Contributing 🙌](#contributing-)
- [Issues](#issues)
- [Upcoming Features / Improvements 🔗](#upcoming-features-/-improvements-)
- [Showcase 🚀](#showcase-)


## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure 

- Navigation bar (optional)
- Body
  - Name |  Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Leadership (optional)
  - Paragraph
  - Carousel images
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements(

## Sharing 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume. Mark star ⭐ if you like the project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/Portfolio-React-App.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/Portfolio-React-App"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for deployment at \<username>.github.io, refer [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats your site is up and running. To see it live, visit:

   ```https
   
     https://<your-username>.github.io/Portfolio-React-App
   ```

10. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 8.

Facing issues? Feel free to contact at habtamualemayehu16@gmail.com.

## Showcase 🚀

Have you changed something in the code to create your own version? Feel free to share with me, I will list them in this space.


## Notice:

This project has been archived. Means that it is no longer actively maintained by developer. Free free to fork, use and maintain your own version. You can check my new portfolio template [here](https://github.com/benawi/portfolio)

## Stargazers over time

[![Stargazers over time](https://starchart.cc/benawi/Portfolio-React-App.svg)](https://starchart.cc/benawi/Portfolio-React-App)
