/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Shiva Urimetla's Portfolio",
  description:
    "A cloud computing and cybersecurity enthusiast committed to developing innovative and secure tech solutions.",
  og: {
    title: "Shiva Urimetla Portfolio",
    type: "website",
    url: "http://shivaurimetla.github.io/",
  },
};

// Home Page
const greeting = {
  title: "Shiva Urimetla",
  logo_name: "ShivaUrimetla",
  nickname: "cloud_warrior",
  subTitle:
    "Cloud computing and cybersecurity professional passionate about building scalable and secure systems.",
  resumeLink:
    "https://example.com/your-resume", // Add the actual URL to your resume
  portfolio_repository: "https://github.com/Shiva-urimetla/masterPortfolio",
  githubProfile: "https://github.com/Shiva-urimetla",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Shiva-urimetla",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shiva-urimetla",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/shivaurimetla",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Email",
    link: "mailto:shivaurimetla@example.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills Section
const skills = {
  data: [
    {
      title: "Cloud & AI",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing and deploying machine learning models on cloud platforms",
        "⚡ Experience with AWS for scalable application and infrastructure management",
        "⚡ Implementing AI/ML models for predictive analytics",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using modern web technologies",
        "⚡ Backend API development with Node.js, Express, and Python Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cybersecurity",
      fileName: "CyberImg",
      skills: [
        "⚡ Experience with network security and threat analysis",
        "⚡ Knowledge in vulnerability assessment and data protection",
      ],
      softwareSkills: [
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            color: "#557C94",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "University Name",
      subtitle: "Bachelor of Technology in Computer Science",
      logo_path: "university_logo.png",
      alt_name: "University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Studied software engineering, algorithms, AI, cloud computing.",
        "⚡ Focused on cloud technologies and cybersecurity.",
      ],
      website_link: "https://www.universitywebsite.com/",
    },
  ],
};

// Certifications Section
const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "- AWS",
      logo_path: "aws_logo.png",
      certificate_link: "https://aws.amazon.com/certification/",
      alt_name: "AWS",
      color_code: "#FF9900",
    },
    {
      title: "Python for Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link: "https://coursera.org/verify/IBM-Python",
      alt_name: "IBM",
      color_code: "#1F70C1",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Experience in cloud technologies, AI, and cybersecurity, with a focus on building secure, scalable solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Cloud Engineer",
          company: "XYZ Inc.",
          company_url: "https://www.xyz.com",
          logo_path: "xyz_logo.png",
          duration: "2021 - Present",
          location: "Remote",
          description:
            "Working on cloud infrastructure and security, developing solutions for scalable applications.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A showcase of projects, leveraging cloud technologies and machine learning to solve real-world problems.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_image.png",
    description:
      "Feel free to reach out for collaborations, discussions, or consulting opportunities.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Insights on technology, cloud computing, and cybersecurity.",
    link: "https://shivaurimetla.github.io/blog",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Your City, State, Country",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
