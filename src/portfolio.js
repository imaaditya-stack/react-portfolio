const greeting = {
  username: "Aaditya Ghag",
  title: "Hi all, I'm Aaditya",
  subTitle:
    "A passionate Full Stack Developer and a Certified Data Scientist, prefer to keep learning and do interesting things that matter. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.",
  resumeLink:
    "https://drive.google.com/file/d/15UUx-MiGSMAmbT0PC9hbEf8G0uW0L9Vl/view?usp=sharing",
};

const socialMediaLinks = [
  {
    id: "github",
    link: "https://github.com/imaaditya-stack",
    IconifyClassname: "simple-icons:github",
    bgColor: "#333",
  },
  {
    id: "linkedIn",
    link: "https://www.linkedin.com/in/aaditya-ghag/",
    IconifyClassname: "simple-icons:linkedin",
    bgColor: "#0e76a8",
  },
  {
    id: "gmail",
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=aadityaghag11@gmail.com",
    IconifyClassname: "simple-icons:google",
    bgColor: "#ea4335",
  },
];

const FullStack = {
  title: "Full Stack Development",
  skills: [
    "⚡ Developing highly interactive Front end / User Interfaces for web applications",
    "⚡ Developing mobile applications using React Native",
    "⚡ Creating REST APIs using Django, Flask & Fast Api",
  ],

  stack: [
    {
      skillName: "html-5",
      IconifyClassname: "simple-icons:html5",
      color: "#E34F26",
    },
    {
      skillName: "css3",
      IconifyClassname: "simple-icons:css3",
      color: "#1572B6",
    },
    {
      skillName: "JavaScript",
      IconifyClassname: "simple-icons:javascript",
      color: "#F7DF1E",
    },
    {
      skillName: "reactjs",
      IconifyClassname: "simple-icons:react",
      color: "#61DAFB",
    },
    {
      skillName: "npm",
      IconifyClassname: "simple-icons:npm",
      color: "#CB3837",
    },
    {
      skillName: "python",
      IconifyClassname: "simple-icons:python",
      color: "#3776AB",
    },
  ],
};

// Your Skills Section

const DataScience = {
  title: "Data Science & AI",
  skills: [
    "⚡ Developing Machine Learning models for Regression/ Classification use cases",
    "⚡ Experience of working with Object Detection, Image Classification and NLP projects",
    "⚡ Data collection using Web Scraping libraries like BeautifulSoup",
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://Iconify.com/icons?d=gallery */

  stack: [
    {
      skillName: "Tensorflow",
      IconifyClassname: "simple-icons:tensorflow",
      color: "#FE8333",
    },
    {
      skillName: "Keras",
      IconifyClassname: "simple-icons:keras",
      color: "#C72F2F",
    },
    {
      skillName: "python",
      IconifyClassname: "simple-icons:python",
      color: "#3776AB",
    },
  ],
};

const Cloud = {
  title: "Cloud & Deployment",
  skills: [
    "⚡ Exploring multiple cloud platforms and Docker",
    "⚡ Experience of working with AWS Services like EC2, S3, Amplify",
    "⚡ Deploying web applications on AWS, Heroku platform, Firebase",
  ],
  stack: [
    {
      skillName: "AWS",
      IconifyClassname: "simple-icons:amazonaws",
      color: "#e47911",
    },
    {
      skillName: "Firebase",
      IconifyClassname: "simple-icons:firebase",
      color: "#FFCB2B",
    },
    {
      skillName: "Heroku",
      IconifyClassname: "simple-icons:heroku",
      color: "#9736FF",
    },
    {
      skillName: "Docker",
      IconifyClassname: "simple-icons:docker",
      color: "#2790FF",
    },
  ],
};

const workExperiences = [
  {
    role: "Full Stack Developer",
    company: "iPing Data Labs LLP",
    desc:
      "Building Web Mobile Applications with JavaScript/ React JS / React Native and RestFul APIs using Django/ Flask/ Fast Api",
    duration: "June 2020 - Present",
  },
  {
    role: "Machine Learning Intern",
    company: "iPing Data Labs LLP",
    desc:
      "Worked under chief AI Architect on Deep learning and Computer Vision Technologies for providing Industry 4.0 solutions",
    duration: "January 2020 - June 2020",
  },
];

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "70%",
    },
    {
      Stack: "Cloud & Deployment",
      progressPercentage: "50%",
    },
    {
      Stack: "Data Science & AI",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const projectsOverview = {
  title: "Projects",
  subtitle:
    "I love to use latest technology stack to develop projects. I have worked on projects from different domain such as Data Science, Deep Learning, Computer Vision. Also, I have worked on building web applications using Modern Front End and Back End Stack such as React JS, Django etc.",
};

const reactProjects = {
  title: "React JS Projects",
  projects: [
    {
      title: "Amazon Clone",
      image: "amazon.png",
      link: "https://github.com/imaaditya-stack/amazon-clone",
    },
    {
      title: "Netflix Clone",
      image: "netflix.png",
      link: "https://github.com/imaaditya-stack/netflix-clone",
    },
    {
      title: "Reddit Clone",
      image: "reddit.png",
      link: "https://github.com/imaaditya-stack/reddit-clone",
    },
    {
      title: "Spotify Clone",
      image: "spotify.png",
      link: "https://github.com/imaaditya-stack/spotify-clone",
    },
  ],
};

const dsProjects = {
  title: "Data Science Projects",

  projects: [
    {
      url: "https://github.com/imaaditya-stack/Weather-image-classification",
      title: "Weather Image Classification",
      description:
        "Image Classifier built using Deep learning & Convolutional Neural Network to predict the type of weather given an input image.",
    },
    {
      url:
        "https://github.com/imaaditya-stack/SpamFilterForQuoraQuestions-DeepLearning",
      title: "Spam Filter For Quora Questions",
      description:
        "A Deep learning Model to detect whether a question asked on quora is spam or not using Natural Language Processing & LSTM Model",
    },
    {
      url:
        "https://github.com/imaaditya-stack/Machine-Learning/tree/master/Regression/Counterfeit_Sales",
      title: "Counterfeit Medicines Sales Prediction",
      description:
        "Built a predictive model using RandomForestRegressor for predicting sales figures given other information related to counterfeit medicine selling operations",
    },
  ],
};

const projects = {
  title: "Django/Flask Projects",
  projects: [
    {
      url: "http://techbeast.herokuapp.com/about",
      title: "TechBeast",
      description:
        "A blog web application coded on an android device during the quarantine period using flask framework & also deployed on heroku platform",
    },
    {
      url: "https://github.com/imaaditya-stack/Covid19TrackerApi",
      title: "Covid-19 Live Cases Tracker Web App",
      description:
        "A web application to track live cases of COVID-19 in major cities of Maharashtra and all over India using Django and Web Scraping",
    },
  ],
};

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle: "Certifications Stuff that I have done !",

  achievementsCards: [
    {
      title:
        "Post Graduate Certification in Data Science & Artificial Intelligence",
      ref: "Edvancer Edventures",
      url:
        "https://drive.google.com/file/d/1JNFJSWKY22bXVDq5HLk4HltBj8NuPSvE/view?usp=sharing",
    },
    {
      title: "Python and Django Full Stack Web Developer Bootcamp",
      ref: "Udemy",
      url:
        "https://drive.google.com/file/d/17rEimKGQfRsZUqd5j83DjmXMq3u8RdAu/view?usp=sharing",
    },
    {
      title: "CNN for Computer Vision with Keras and TensorFlow in Python",
      ref: "Udemy",
      url:
        "https://drive.google.com/file/d/10E4z_4KyShjjEWnt_RwUJODG8MB06kR-/view?usp=sharing",
    },
  ],
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project or want to say hi? My Inbox is open for all :)",
};

export {
  greeting,
  socialMediaLinks,
  DataScience,
  FullStack,
  Cloud,
  techStack,
  workExperiences,
  projectsOverview,
  reactProjects,
  dsProjects,
  projects,
  achievementSection,
  contactInfo,
};
