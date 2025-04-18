import { BtnListType, ProjectListType } from "./types";

export const projectsData: ProjectListType[] = [
  {
    id: 1,
    name: "Secure Auth",
    subHeading: "Multi Factor Authenticaion - Web & App",
    description:
      "Secure Auth is a Layered protection that ensures only Authorized users can access sensitive information. It is incorporated with Multi Angular Face recognition, QR Generation, Email & Phone number verification, Firebase OTP verification.",
    demoLink: "--",
    sourceLink: "--",
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "React",
      "Express",
      "NodeJS",
      "SMTP",
      "PostgreSQL",
      "Firebase",
      "Deepface",
      "ReactNative",
    ],
  },
  {
    id: 2,
    name: "Agro Eye",
    subHeading: "Smart farming solution using RaspberryPI 4",
    description:
      "Our IoT-based automated system monitors and controls environmental conditions for optimal plant growth, minimizing manual effort.",
    demoLink: "--",
    sourceLink: "--",
    techStack: [
      "Python",
      "Adafruit",
      "HTML",
      "CSS",
      "JAVA",
      "RaspberryPi Simulator",
      "PiCAM",
      "DHT11",
      "DS18B20",
      "LDR",
      "Capacitive moisture sensor",
    ],
  },
  {
    id: 12,
    name: " Secure Share",
    subHeading: "Online Document Sharing Platform",
    description:
      "Built a secure, user-friendly platform enabling file uploads, downloads, and real-time document collaboration.Implemented authentication, role-based access, and secure file transfer.",
    demoLink: "-",
    sourceLink: "-",
    techStack: [
      "NodeJS",
      "JavaScript",
      "Express",
      "HTML",
      "CSS",
      "JWT",
      "MongoDB",
      
    ],
  },
  {
    id: 11,
    name: "Stock Market Prediction",
    subHeading: "Real-time stockmarket predictor",
    description:
      "Developed a machine learning model to predict stock price movements using multi-class classification algorithms. Processed historical financial datasets, cleaned and engineered features, and visualized trends.",
    demoLink: "-",
    sourceLink: "-",
    techStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Scikit-Lib",
      "Google Collab",
      
    ],
  },
 
];

export const BtnList: BtnListType[] = [
  
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "http://github.com/sirivarshini-954",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/siri-varshini-pentakota",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];