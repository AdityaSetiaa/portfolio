import Blogit from "../assets/Screenshot 2025-03-16 202550.png";
import sol from "../assets/Screenshot 2025-04-25 131955.png"
import weekend from "../assets/Weekend-Bites.png"


export const projects= [
    {
        id: 1,
        title: "Weekend-bites",
        description: "Developed a recipe web app in React with TypeScript, enabling users to filter dishes by region using interactive tags. Used state management and conditional rendering for real-time updates. Styled with Tailwind CSS for a responsive UI. Focused on clean UX, performance, and modular component structure.",
        image: weekend,
        link:"www.google.com",
        techStack: ["React", "Tailwind CSS", "TypeScript"],
        status:"finished",
        MainLink: "https://weekend-bite.vercel.app/"
        
    },
    {
        id: 2,
        title: "sol",
        description: "Built a React web app with full audio playback functionality, including play/pause, seek, skip, and volume controls. Implemented real-time search and global state management using Context API. Technologies used: React, TypeScript, Tailwind CSS.",
        image: sol,
        link:"https://github.com/AdityaSetiaa/sol",
        techStack: ["React", "Tailwind CSS", "JavaScript"],
        status:"finished",
        MainLink: "https://sol108.vercel.app/"
    },
    {
        id: 3,
        title: "Blog-it",
        description: "Developed a React blog app integrated with Appwrite backend for authentication and data storage. Implemented Redux for state management, including post CRUD operations and user session handling. Focused on responsive design and seamless UX with efficient error and loading state management.",
        image: Blogit,
        link:"https://github.com/AdityaSetiaa/blog-it",
        techStack: ["React", "Tailwind CSS", "JavaScript","appwrite"],
        status:"finished",
        MainLink: ""
    }
]