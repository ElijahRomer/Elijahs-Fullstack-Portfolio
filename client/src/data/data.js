const worksData = [
  {
    title: 'README Generator',
    workClass: 'readme-generator',
    repoLink: 'https://github.com/ElijahRomer/ReadMeGenerator#readme',
    picLink: 'https://github.com/ElijahRomer/ReadMeGenerator#readme',
    description:
      'A simple CLI interface application that streamlines the process of creating a README file for your projects, saving time and energy for coding. Developing this project was my first serious exercise in utilizing, troubleshooting, and executing JavaScript files within the Node.js runtime. I learned how to create my own npm modules, and create custom commands to initialize them anywhere. The Inquirer module opened my eyes to the possibilities of CLI interface applications.',
  },
  {
    title: 'Employee Database',
    workClass: 'employee-database',
    repoLink: 'https://github.com/ElijahRomer/ReadMeGenerator#readme',
    picLink: 'https://github.com/ElijahRomer/EmployeeDatabase#readme',
    description:
      'This application was written as a CLI for non-tech users to interact with a database. It provides full CRUD functionality in an intuitive way that does not require a single BASH command to be known. This was an excellent exercise in writing Structured Query Language (SQL) and interfacing a MySql database with NodeJS via the standard MySql2 module. It was also good practice with understanding asynchronous code in Node.js, utilizing both promise and Async/Await syntax. Finally, I gained experience in writing my own libraries of functions and modularizing them for better abstraction, separation of concerns, and achievement of goals.',
  },
  {
    title: 'The Tech Blog',
    workClass: 'the-tech-blog',
    repoLink: 'https://github.com/ElijahRomer/TechBlog',
    picLink: 'https://the-tech-blog-website.herokuapp.com/',
    description:
      'This application was created with the intention of being a platform for tech-savvy and interested individuals to collaborate and write about relevant topics that they are studying or involved in. Users can create accounts, make blog posts, leave comments on others and their own blog posts, as well as edit posts and comments.',
  },
  {
    title: 'Timed Quiz',
    workClass: 'timed-quiz',
    repoLink: 'https://github.com/ElijahRomer/TimedQuiz',
    picLink: 'https://elijahromer.github.io/TimedQuiz/',
    description:
      'One of my first projects, I created a Quiz template with timer, multiple choices, looped progression and event listeners, and high score list stored via localStorage. The entire application exists on the client with no external http requests or server. This was a great introduction and exercise to the possibilities of client-side applications, DOM manipulation, JS Logic, and more advanced CSS techniques.',
  },
  {
    title: 'Weather Dashboard',
    workClass: 'weather-dashboard',
    repoLink: 'https://github.com/ElijahRomer/WeatherDashboard',
    picLink: 'https://elijahromer.github.io/WeatherDashboard/',
    description:
      'In this project, I created the classic (cliche?) weather dashboard project to exercise my skills working with promises and API calls, as well as learning the Materialize CSS framework and implementing a responsive UI. I also worked out some logic that plugs in wind direction from the API call into a CSS transition, so the wind pointer provides an accurate visualization. Finally, I gained experience utilizing the browser localStorage to allow for persistent data accross sessions.',
  },
];

export const featuredWorkData = {
  title: 'wandir',
  workClass: 'wandir',
  repoLink: 'https://github.com/FullstackNomads/wandir',
  picLink: 'https://fullstacknomads.herokuapp.com/',
  description: [
    'An app for organizing and meeting with other people who are passionate about travel! This project was my first real step into creating an application utilizing MVC architecture. It was a sprint to complete as much functionality as possible in the span of two weeks, with 3 other team members. A very enjoyable learning experience, it utilizes Express, Express-handlebars view engine, Express-session for login persistence via cookies, Sequelize ORM for modeling/ mapping to a custom SQL relational database, Multer and AWS-SDK modules for image uploads, and more.',
    'I was tasked with building most of the back end & database, and managing the git workflow from individual feature branches on up to the main branch and deployment via Heroku. As of this writing, the app is 90% complete.',
    'The development of this project truly solidified my understanding of Express servers, middleware, and routing. I have come to see view-engines as virtually indispensible to modern websites. I also see the immense benefit provided by Object Relational Mapping (ORM) such as Sequelize, and gained a firm grasp on that technology as well.',
  ],
};

export default worksData;
