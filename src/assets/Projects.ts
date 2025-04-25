import Blogit from "../assets/Screenshot 2025-03-16 202550.png";
import sol from "../assets/Screenshot 2025-04-25 131955.png"
import bookish from "../assets/Screenshot 2025-04-25 132909.png"

export const projects= [
    {
        id: 1,
        title: "Blog-it",
        description: "a bloging app to write and upload your blogs",
        image: Blogit,
        link:"www.google.com",
        techStack: ["React", "Tailwind CSS", "JavaScript","appwrite"],
        status:"finished",
        
    },
    {
        id: 2,
        title: "sol",
        description: "Sol is a Spotify inspired music player app that allows users to listen to their favorite songs.",
        image: sol,
        link:"www.google.com",
        techStack: ["React", "Tailwind CSS", "JavaScript"],
        status:"finished"
    },
    {
        id: 3,
        title: "Bookish",
        description: "Bookish is a book e-commerce website that allows users to browse boks online",
        image: bookish,
        link:"www.google.com",
        techStack: ["React", "Tailwind CSS", "typescript"],
        status:"finished"
    }
]