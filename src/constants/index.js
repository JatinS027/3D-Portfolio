import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    metamask,
    html,
    css,
    reactjs,
    pytorch,
    tailwind,
    nodejs,
    mongodb,
    git,
    solidity,
    scikit,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    OasisInfobyte,
    InternshipStudio,
    Blockchain,
    Classification,
    Agriculture,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Artificial Intelligence",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "MERN Stack",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "metamask",
      icon: metamask,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "solidity",
      icon: solidity,
    },
    {
      name: "scikit",
      icon: scikit,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "Oasis Infobyte",
      icon: OasisInfobyte,
      iconBg: "#383E56",
      date: "Feb 2023 - Mar 2023",
      points: [
        "During my internship, I worked on several data science projects, including:",
        "1. Iris Flower Classification: Developed a machine learning model to classify iris flower species with high accuracy using features like sepal and petal dimensions.",
        "2. Car Price Prediction: Built a predictive model to estimate car prices based on factors such as make, model, year, and mileage, achieving reliable results.",
        "3. Unemployment Rate Analysis: Analyzed the impact of COVID-19 on India's unemployment rate, uncovering significant trends and patterns through time-series analysis and data visualization.",
        "These projects enhanced my skills in data preprocessing, feature engineering, and applying machine learning algorithms to solve practical problems.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "Internship Studio",
      icon: InternshipStudio,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Present",
      points: [
        "Developed and implemented machine learning models using Python, TensorFlow, and Scikit-learn.",
        "Working on data preprocessing, feature engineering, and model optimization.",
        "Collaborating on deploying AI models in real-world applications.",
        "Completing end-to-end projects, including data collection, model training, and deployment.",
        "Enhanced problem-solving and data analysis skills.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Blockchain and AI in Pharmaceutical Supply Chain",
      description:
        "Built a solution using Ethereum and Python to improve drug traceability and optimize supply chain operations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Etherium",
          color: "green-text-gradient",
        },
        {
          name: "Metamask",
          color: "pink-text-gradient",
        },
        ],
      image: Blockchain,
      source_code_link: "https://github.com/JatinS027/Blockchain-and-AI-in-Pharmaceutical-Supply-Chain-.git",
    },
    {
      name: "Happy V/S Sad Image Classification",
      description:
        "An image classification model developed using Python and TensorFlow for a CNN, with OpenCV handling image processing, Git for version control, and Django for deployment.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: Classification,
      source_code_link: "https://github.com/JatinS027/Image-c.lassification.git",
    },
    {
      name: "Agriculture Production Optimization Engine",
      description:
        "Created an agriculture optimization engine using Python, TensorFlow, and Scikit-learn, with Pandas for data analysis and SQL for database management, improving crop yield predictions and resource use.",
      tags: [
        {
          name: "TensorFlow",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit Learn",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: Agriculture,
      source_code_link: "https://github.com/JatinS027/Agriculture-Production-Optimization-Engine.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };