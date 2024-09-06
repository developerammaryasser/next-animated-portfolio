// Navbar data
export const navbar = {
    links: [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'About', href: '/about' },
        { id: 3, name: 'Portfolio', href: '/portfolio' },
        { id: 4, name: 'Contact', href: '/contact' },
    ],
    socials: [
        { id: 1, name: 'Github', icon: '/github.png', href: 'https://github.com/developerammaryasser/' },
        { id: 2, name: 'LinkedIn', icon: '/linkedin.png', href: 'www.linkedin.com/in/frontend-ammar-yasser' },
        { id: 3, name: 'Dribble', icon: '/dribbble.png', href: 'https://github.com/developerammaryasser/' },
        { id: 4, name: 'Facebook', icon: '/facebook.png', href: 'https://github.com/developerammaryasser/' },
        { id: 5, name: 'Instagram', icon: '/instagram.png', href: 'https://github.com/developerammaryasser/' },
        { id: 6, name: 'Pinterest', icon: '/pinterest.png', href: 'https://github.com/developerammaryasser/' },
    ],
};
// Hero data
export const hero = {
    heroImage: '/hero.png',
    content: {
        title: <>Crafting digital <br /> experiences, designing tomorrow.</>,
        text: "Welcome to my digital canvas, where innovation and creativity converge. with a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.",
        buttons: [
            {
                id: 1,
                text: "View My Work",
                href: "/portfolio",
            },
            {
                id: 2,
                text: "Contact Me",
                variant: "outline",
                href: "/contact",
            }
        ]
    }
}
// Projects
export const projects = [
    {
        id: 1,
        imageCover: "/projects/Portfolio-cover.png",
        title: "Portfolio website",
        text: "Welcome to my personal portfolio website! This repository contains the source code for my portfolio, showcasing my work, skills, and projects. The site is designed to be a modern and interactive representation of my professional journey.",
        link: "https://portfolioammar.vercel.app"
    },
    {
        id: 2,
        imageCover: "/projects/Brainwave-cover.png",
        title: "Brainwave landing page website ",
        text: "Brainwave is a modern, interactive website designed to deliver an engaging user experience through the use of animations and parallax effects. The website is built with React and leverages React Just Parallax to create visually appealing and dynamic scrolling effects.",
        link: "https://ammarbrainwave.netlify.app"
    },
    {
        id: 3,
        imageCover: "/projects/Arbitra-cover.png",
        title: "Arbitra landing page website",
        text: "Arbitra is a modern web application designed to streamline and automate arbitration processes. This project leverages cutting-edge web technologies to provide a seamless user experience, making arbitration more accessible and efficient.",
        link: "https://ammararbitra.netlify.app"
    },
    {
        id: 4,
        imageCover: "/projects/hoobank.png",
        title: "Hoobank landing page website ",
        text: "HooBank is a modern and stylish banking application that provides a user-friendly interface for managing finances. This project showcases an intuitive design and advanced features for users to interact with their banking services seamlessly.",
        link: "https://ammarhoobank.netlify.app"
    },
    {
        id: 5,
        imageCover: "/projects/gpt3.png",
        title: "GPT-3 landing page website ",
        text: "The GPT-3 Project is a cutting-edge application that leverages OpenAI's GPT-3 language model to provide advanced natural language processing capabilities. This project demonstrates the power of AI in generating human-like text, making it suitable for various applications including chatbots, content generation, and more.",
        link: "https://ammargpt3.netlify.app"
    },
    {
        id: 6,
        imageCover: "/projects/metaverse.png",
        title: "Metaverse landing page website ",
        text: "Metaverse is a project designed to provide an immersive and futuristic experience simulating the virtual world using modern technologies such as React and Framer Motion. The project focuses on delivering a unique and engaging user experience for those looking to explore metaverse worlds in a seamless and innovative way.",
        link: "https://ammarmetaverse.netlify.app"
    },
]
// About
export const about = {
    biography: {
        text: "Hello, I’m a passionate and skilled front-end developer who has extensive experience in creating websites that are dynamic and responsive. At 20, as I have already done a lot of projects such as portfolio sites, blogs and e-commerce platforms."
    },
    skills: ["PSD to HTML", "Tailwind CSS", "Redux", "Next.js", "Git", "React Bootstrap", "AJAX", "npm", "GitHub", "Bootstrap", "JSON", "React", "Node.js", "Responsive Design", "Template Markup", "Website Redesign", "Web Application", "Blog", "Website", "Landing Page", "Ecommerce Website", "CSS 3", "HTML5", "SCSS", "HTML", "JavaScript", "Sass", "CSS", "ECMAScript", "TypeScript"]
}