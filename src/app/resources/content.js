import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sofrix",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Development & Staffing",
  avatar: "/images/sofrix-black-3.jpg",
  company: "Sofrix",
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to Our Newsletter</>,
  description: (
    <>
      We occasionally write about technology trends, AI innovations, and share insights on software development best practices.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/sofrix",
  },
  
  {
    name: "Email",
    icon: "email",
    link: "mailto:eric.chesbrough@sofrix.com",
  },
];

const home = {
  label: "Home",
  title: `${person.firstName} - Premium Software Solutions`,
  description: `${person.company} provides world-class software development and staffing services`,
  headline: <>Artificial Intelligence + Engineering Excellence</>,
  subline: (
    <>
      We're Sofrix, a software development company that believes smarter software creates stronger businesses.
    </>
  ),
  features: {
    display: true,
    title: "Why Choose Sofrix",
    description: (
      <>
        Our approach combines technical expertise with business acumen to deliver solutions 
        that drive real value. We're committed to excellence in every project we undertake.
      </>
    ),
    items: [
      {
        title: "Strategic Partnership",
        description: <>We work as an extension of your team, aligning our technical expertise with your business goals to create solutions that deliver lasting value.</>,
        icon: "handshake", // Use an existing icon from your system
        image: {
          src: "/images/projects/project-01/cover-01.jpg",
          alt: "Strategic Partnership",
          width: 16,
          height: 9,
        },
      },
      {
        title: "Technical Excellence",
        description: <>Our engineering teams follow industry best practices, ensuring clean, maintainable code that scales with your business needs.</>,
        icon: "code", // Use an existing icon from your system
        image: {
          src: "/images/projects/project-01/cover-03.jpg",
          alt: "Technical Excellence",
          width: 16,
          height: 9,
        },
      },
      {
        title: "Innovative Solutions",
        description: <>We leverage cutting-edge technologies and methodologies to solve complex problems and create competitive advantages for our clients.</>,
        icon: "lightbulb", // Use an existing icon from your system
        image: {
          src: "/images/projects/project-01/cover-04.jpg",
          alt: "Innovative Solutions",
          width: 16,
          height: 9,
        },
      },
    ],
  },
  benefits: {
    display: true,
    title: "The Sofrix Advantage",
    description: (
      <>
        When you partner with Sofrix, you gain access to a team of experts committed to 
        your success. Our unique approach delivers tangible benefits that help your business thrive.
      </>
    ),
    video: {
      url: "https://files.catbox.moe/75yhmi.mp4", // Using the same video from about section
      title: "The Sofrix Advantage",
      description: "See how our approach delivers real business value through technical excellence and strategic thinking.",
      thumbnail: "/images/projects/project-01/cover-01.jpg",
    },
    items: [
      {
        title: "Accelerated Development",
        description: <>Our streamlined processes and experienced teams help bring your ideas to market faster without sacrificing quality.</>,
        image: {
          src: "/images/why1.png",
          alt: "Accelerated Development",
          width: 16,
          height: 9,
        },
      },
      {
        title: "Cost Efficiency",
        description: <>Our global talent model provides premium development capabilities at competitive rates, maximizing your technology investment.</>,
        image: {
          src: "/images/why2.png",
          alt: "Cost Efficiency",
          width: 16,
          height: 9,
        },
      },
      {
        title: "Scalable Resources",
        description: <>Whether you need a complete development team or specialized expertise, we can scale our services to match your evolving needs.</>,
        image: {
          src: "/images/why3.png",
          alt: "Scalable Resources",
          width: 16,
          height: 9,
        },
      },

    ],
  },
  testimonials: {
    display: true,
    title: "What Our Clients Say",
    backgroundImage: {
      src: "/images/gallery/img-09.jpg",
      alt: "Testimonials background",
    },
    items: [
      {
        quote: "Sofrix delivered a solution that exceeded our expectations and transformed how we operate. Their technical expertise and business understanding made all the difference.",
        author: "Sarah Johnson",
        role: "CTO, TechInnovate",
        avatar: "/images/gallery/img-01.jpg",
      },
      {
        quote: "The development team Sofrix provided integrated seamlessly with our existing staff. Their contributions were invaluable in helping us meet our aggressive timeline.",
        author: "Michael Chen",
        role: "VP of Engineering, DataFlow Systems",
        avatar: "/images/gallery/img-03.jpg",
      },
      {
        quote: "Working with Sofrix has been a game-changer for our business. Their AI integration expertise helped us create a competitive advantage in our market.",
        author: "Elena Rodriguez",
        role: "Product Director, FutureTech",
        avatar: "/images/gallery/img-06.jpg",
      },
    ],
  },
  showcase: {
    display: true,
    title: "Our Work in Action",
    description: (
      <>
        Browse through our portfolio of successful projects and see how we've helped businesses 
        across industries leverage technology to achieve their goals.
      </>
    ),
    gallery: [
      {
        src: "/images/parrot.png",
        alt: "Parrot AI project",
        width: 16,
        height: 9,
        title: "Parrot AI (Top #100 on App Store)",
        description: "Make a celebrity say anything with AI-generated videos in seconds",
      },
      {
        src: "/images/perdiemfood.png",
        alt: "Try Perdiem Food",
        width: 16,
        height: 9,
        title: "Try Perdiem (YC Startup)",
        description: "White label platform for restaurants powered by Square POS",
      },
      
      {
        src: "/images/Voxo.png",
        alt: "Voxo project",
        width: 16,
        height: 9,
        title: "Voxo",
        description: "AI-powered e-commerce platform with personalized shopping experiences",
      },
    ],
    video: {
      url: "https://files.catbox.moe/75yhmi.mp4", // Using the same video from about section
      title: "Project Highlights",
      description: "A quick overview of some of our most impactful projects.",
      thumbnail: "/images/gallery/img-14.jpg",
    },
  },
  callToAction: {
    display: true,
    title: "Ready to Transform Your Business?",
    description: (
      <>
        Let's discuss how our software development and staffing solutions can help you achieve your technology goals.
      </>
    ),
    buttonText: "Get in Touch",
    buttonLink: "/contact",
    backgroundImage: {
      src: "/images/gallery/img-08.jpg",
      alt: "Call to action background",
    },
  },
  teamMembers: {
    display: true,
    title: "Meet Our Team",
    description: (
      <>
        Our talented team of professionals brings diverse expertise and experience to every project.
        Get to know the people behind Sofrix's success.
      </>
    ),
    members: [
      {
        name: "Eric Chesbrough",
        title: "Chief Executive Officer",
        image: "/images/eric.jpg",
        bio: "Eric leads our technology strategy with over 15 years of experience in software architecture and AI."
      },
      {
        name: "Abeer A",
        title: "Chief Technology Officer",
        image: "/images/aa.png",
        bio: "Abeer ensures our solutions align perfectly with client business objectives and market needs."
      },
      {
        name: "Mike Chen",
        title: "Senior Full-Stack Developer",
        image: "/images/mike1.png",
        bio: "Mike specializes in building scalable systems and architectures."
      },
    ]
  },
  resourceAugmentation: {
    display: true,
    title: "Resource Augmentation",
    description: (
      <>
        Enhance your team with our skilled professionals. We provide dedicated engineers 
        who integrate seamlessly with your existing teams to accelerate your projects.
      </>
    ),
    categories: [
      "All",
      "Front-End",
      "Back-End",
      "Full-Stack",
      "Mobile",
     
    ],
    engineers: [
    
      {
        name: "Julian Perez",
        expertise: "Front-End",
        image: "/images/user2.jpg",
        skills: ["React", "Vue.js", "TypeScript", "CSS/SASS", "Angular", "Node.js", "Python", "MongoDB", "SQL"],
        experience: "7 years"
      },
      {
        name: "Mesut Yilmaz",
        expertise: "Mobile",
        image: "/images/ln1.png",
        skills: ["React Native", "Swift", "Kotlin", "Firebase","UI/UX"],
        experience: "7 years"
      },
      {
        name: "Abeer Ahmad",
        expertise: "Full-Stack",
        image: "/images/aa.png",
        skills: ["React", "Vue.js", "TypeScript", "CSS/SASS", "Angular", "Node.js", "Python", "MongoDB", "SQL"],
        experience: "6 years"
      },
      {
        name: "Aw***** ***",
        expertise: "Back-End",
        image: "/images/aw.png",
        skills: ["Node.js", "Python", "MongoDB", "SQL"],
        experience: "4 years"
      },
      {
        name: "B***** ***",
        expertise: "Back-End",
        image: "/images/a.png",
        skills: ["Node.js", "Python", "MongoDB", "SQL"],
        experience: "4 years"
      },
      {
        name: "A***** ***",
        expertise: "Full-Stack",
        image: "/images/U.jpg",
        skills: ["JavaScript", "React", "Node.js", "AWS"],
        experience: "2 years"
      },
      {
        name: "A***** ***",
        expertise: "Mobile",
        image: "/images/ww.png",
        skills: ["React Native", "Swift", "Kotlin", "Firebase"],
        experience: "5 years"
      },
      {
        name: "A***** ***",
        expertise: "Mobile",
        image: "/images/Pic1.jpg",
        skills: ["React Native", "Swift", "Kotlin", "Firebase"],
        experience: "3 years"
      },
      
    ]
  },
};

const about = {
  label: "About",
  title: "About Sofrix",
  description: `Learn about ${person.company}, premium software development and staffing services`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/sofrix",
  },
  video: {
    url: "https://files.catbox.moe/75yhmi.mp4", // A professional ambient music video
    title: "About Sofrix",
    description: "Discover how we combine technical excellence with business acumen to deliver solutions that drive real value for our clients."
  },
  intro: {
    display: true,
    title: "Our Story",
    description: (
      <>
        Sofrix emerged from a vision to deliver premium technology solutions differently. By partnering U.S. 
        product managers with exceptional global engineering talent, we provide world-class software 
        development and staffing services at competitive rates. Our dual expertise in custom solutions 
        and resource augmentation gives businesses the technical capabilities they need to scale efficiently.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Our Services",
    experiences: [
      {
        company: "Custom Software Development",
        timeframe: "Core Service",
        role: "End-to-End Solutions",
        achievements: [
          <>
            We build tailored software solutions that address your unique business challenges, 
            from initial concept to deployment and maintenance.
          </>,
          <>
            Our expertise spans web applications, mobile development, AI integration, and 
            enterprise systems that scale with your business.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Software Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Technical Staffing",
        timeframe: "Core Service",
        role: "Talent Augmentation",
        achievements: [
          <>
            We connect businesses with exceptional engineering talent to augment your team, 
            providing the technical capabilities needed to scale efficiently.
          </>,
          <>
            Our rigorous vetting process ensures you get access to skilled professionals who 
            integrate seamlessly with your existing workflows.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Our Approach",
    institutions: [
      {
        name: "AI-Driven Innovation",
        description: <>We leverage cutting-edge AI technologies to enhance development processes and deliver smarter solutions.</>,
      },
      {
        name: "Engineering Excellence",
        description: <>Our commitment to quality code, thorough testing, and best practices ensures reliable, maintainable software.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Expertise",
    skills: [
      {
        title: "Full-Stack Development",
        description: <>Comprehensive development capabilities across frontend, backend, and infrastructure.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Development image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Development image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI Integration",
        description: <>Transforming business challenges into opportunities through strategic AI implementation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "AI integration image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Blogs",
  description: `Read the latest software development insights from ${person.company}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Our Solutions & Expertise",
  description: `Discover how ${person.company} delivers exceptional software solutions and technical talent to help businesses thrive in the digital landscape`,
  intro: {
    display: true,
    title: "How We Work",
    description: (
      <>
        At Sofrix, we combine technical excellence with business acumen to deliver solutions that drive real value. 
        Our dual expertise in custom software development and technical staffing allows us to provide the right 
        approach for your specific needs - whether that's a complete software solution or augmenting your team 
        with specialized talent.
      </>
    ),
  },
  expertise: [
    {
      title: "Custom Software Development",
      description: "End-to-end solutions tailored to your unique business challenges",
      areas: ["Web Applications", "Mobile Development", "AI Integration", "Enterprise Systems"]
    },
    {
      title: "Technical Staffing",
      description: "Connect with exceptional engineering talent to augment your team",
      areas: ["Senior Developers", "Product Managers", "DevOps Engineers", "AI Specialists"]
    },
    {
      title: "Technology Consulting",
      description: "Strategic guidance to optimize your technology investments",
      areas: ["Technical Architecture", "Digital Transformation", "Process Optimization", "Technology Selection"]
    }
  ],
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Project Gallery",
  description: `A showcase of ${person.company}'s software development work`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const contact = {
  label: "Contact",
  title: "",
  description: `Get in touch with ${person.company} for your software development and staffing needs`,
  intro: {
    display: true,
    title: "Let's Connect",
    description: (
      <>
        We're always interested in discussing new projects and opportunities.
        Whether you need custom software development, technical staffing, or just want to say hello, we'd love to hear from you.
      </>
    ),
  },
  contactInfo: {
    email: "info@sofrix.com",
    phone: "+1 (555) 123-4567",
    address: "2219 Main St. Santa Monica, CA 90405",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM PST"
  }
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  contact,
};
