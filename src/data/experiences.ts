export type ResponseDataExperiance = {
  id: number;
  fromTo: string;
  duration: string;
  companyName: string;
  position: string;
  page: ExperiancePage;
}
export type ExperiancePage = {
  title: string;
  headingText: string;
  aboutCompany: string;
  aboutCompanyImages: string[];
  featuredProjectsText: string;
  featuredProjects: FeaturedProjects[];
  technologies: TechnologiesPage[];
  conclusion: TechnologiesPage[];

}

export type FeaturedProjects = {
  title: string;
  text: string;
  stacl: string[];
  images: string[];
}

export type TechnologiesPage = {
  title: string;
  text: string;
}
export const experiances: ResponseDataExperiance[] = [
  {
    id: 1, fromTo: "2023-2024", duration: "1 year 3 months", companyName: "Blackbird", position: "Full-stack developer | React, Next & ASP.NET",
    page: {
      title: "Blackbird: Full-stack developer",
      headingText: "At Black Bird, I turned ideas into reality by building modern web applications with React and Next.js, seamlessly integrating and creating ASP.NET APIs to deliver robust and user-centric solutions. From creating the company’s website to contributing to the Prostore app, I combined technical expertise and collaboration to meet client needs and exceed expectations.",
      aboutCompany: "Black Bird is a forward-thinking company specializing in developing cutting-edge digital solutions.With a collaborative and fast-paced environment, it provides an incredible opportunity to gain hands-on experience and deepen your expertise. Working here means contributing to impactful projects while learning from challenges that push your technical and creative boundaries. It’s a place where ambitious developers can grow alongside a passionate team, shaping solutions that make a real difference.",
      aboutCompanyImages: ["/images/bb_site.png", "/images/prostore_site.png", "/images/svezna.png"],
      featuredProjectsText: "Here are some of the standout projects I worked on at Black Bird, where I combined technical expertise and creativity to deliver impactful solutions. These projects highlight my contributions to building modern web applications, seamless integrations, and user-focused experiences.",
      featuredProjects: [
        {
          title: "Prostore",
          text: "Contributed to the development of Prostore, an innovative platform for renting spaces, aimed at simplifying the process for users and clients. \nCollaborated with a cross-functional team to ensure smooth API integration. \nFocused on user-centric features to enhance usability. \nDelivered scalable and efficient solutions aligned with client requirements.",
          stacl: ["Next.js", "React", "ASP.NET Core"],
          images: ["/images/prostore_1.png", "/images/prostore_2.png", "/images/prostore_3.png"],
        },
        {
          title: "Blackbird Website",
          text: "Developed the company’s official website from the ground up to reflect its brand identity and showcase services. \nBuilt a fully responsive and modern interface. \nDelivered a seamless user experience that aligns with the company’s vision.",
          stacl: ["Next.js", "ASP.NET Core"],
          images: ["/images/bb_site.png", "/images/bb_1.png", "/images/bb_2.png"],
        },
        {
          title: "Sve Zna",
          text: "Contributed to the front-end development of Sve Zna, an application designed to provide counseling to users. \nDeveloped user-friendly interfaces to enhance accessibility and usability. \nCollaborated with the team to ensure smooth functionality and an intuitive user experience. \nFocused on delivering responsive and efficient solutions tailored to the application's purpose.",
          stacl: ["React", "Next.js"],
          images: ["/images/svezna.png", "/images/svezna_1.png", "/images/svezna_2.png"],
        }
      ],
      technologies: [
        {
          title : "Frontend", 
          text: "I have worked with React and Next.js to develop dynamic, scalable, and SEO-friendly user interfaces, focusing on delivering exceptional user experiences. By leveraging Tailwind CSS and HTML5, I ensured responsive, accessible, and visually appealing designs. Additionally, I utilized JavaScript and TypeScript to create interactive and maintainable front-end functionality."
        },
        {
          title : "Backend", 
          text: "On the back end, I utilized ASP.NET Core to design and develop robust, scalable APIs. My work involved seamless integration with SQL databases using entity framework for efficient data storage and retrieval, as well as implementing secure authentication and authorization systems. These tools and practices enabled me to deliver reliable and high-performing server-side functionality."
        }
      ],
      conclusion: [
        {
          title : "Challenge", 
          text: "Building modern, scalable web applications that deliver exceptional user experiences while ensuring seamless communication between the front end and back end can be complex. The challenge often lies in creating responsive, accessible interfaces that align with user needs while managing robust server-side functionality to support dynamic features and data integrations."
        },
        {
          title : "Solution", 
          text: "To tackle these challenges, I utilized React and Next.js for front-end development, focusing on crafting dynamic and intuitive user interfaces. For back-end development, I leveraged ASP.NET Core to build scalable APIs, ensuring seamless integration with SQL databases. Collaborating closely with cross-functional teams, I implemented secure authentication mechanisms, optimized performance, and maintained clear communication between client-side and server-side components."
        },
        {
          title : "Result", 
          text: "The solutions delivered were high-performing web applications that offered users seamless, intuitive experiences. These projects not only met but often exceeded client expectations by ensuring fast loading times, secure data handling, and scalable architecture. The combination of front-end and back-end technologies enabled the successful deployment of applications like the company website, Prostore app, and Sve Zna, each tailored to meet specific user and client needs."
        }
      ]

    }
  },
  { id: 2, fromTo: "2024-2025", duration: "5 months", companyName: "Belit", position: "Full-stack developer | React & ASP.NET",
    page: {
      title: "",
      headingText: "",
      aboutCompany: "",
      aboutCompanyImages: ["", "", ""],
      featuredProjectsText: "",
      featuredProjects: [
        {
          title: "",
          text: "",
          stacl: ["", "", ""],
          images: ["", "", ""],
        }
      ],
      technologies: [
        {title : "", text: ""}
      ],
      conclusion: [
        {title : "", text: ""}
      ]


    }
   },
  { id: 3, fromTo: "2022", duration: "5 months", companyName: "Synsoft LTD.", position: "Front-end developer | Angular & Spring boot",
    page: {
      title: "",
      headingText: "",
      aboutCompany: "",
      aboutCompanyImages: ["", "", ""],
      featuredProjectsText: "",
      featuredProjects: [
        {
          title: "",
          text: "",
          stacl: ["", "", ""],
          images: ["", "", ""],
        }
      ],
      technologies: [
        {title : "", text: ""}
      ],
      conclusion: [
        {title : "", text: ""}
      ]


    }
   },
  { id: 4, fromTo: "2020", duration: "3 months", companyName: "Microsoft", position: "Map labeling | JOMS & team coordination",
    page: {
      title: "",
      headingText: "",
      aboutCompany: "",
      aboutCompanyImages: ["", "", ""],
      featuredProjectsText: "",
      featuredProjects: [
        {
          title: "",
          text: "",
          stacl: ["", "", ""],
          images: ["", "", ""],
        }
      ],
      technologies: [
        {title : "", text: ""}
      ],
      conclusion: [
        {title : "", text: ""}
      ]


    }
   }
]