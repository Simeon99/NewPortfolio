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
  
  { id: 1, fromTo: "2024-2025", duration: "5 months", companyName: "Belit", position: "Full-stack developer | React & ASP.NET",
    page: {
      title: "Belit: Full-stack developer",
      headingText: "At Belit, I designed and developed a robust Document Management System (DMS) using ASP.NET Core API and React to streamline internal operations. Managing the project independently, I enhanced document retrieval efficiency by 60%, ensuring secure storage and seamless access while aligning the system with business needs.",
      aboutCompany: "Belit is a Serbian IT company specializing in software development and implementation, primarily working on projects for government institutions, ministries, and the European Union. With a team of around 40 employees, the company focuses on optimizing business processes and data management in the public sector. Over the years, Belit has been involved in numerous IT projects aimed at supporting digitalization and improving administrative efficiency.",
      aboutCompanyImages: ["/images/belit1.png", "/images/belit2.png", "/images/belit3.png"],
      featuredProjectsText: "At Belit, I worked on developing solutions that streamlined internal processes and improved efficiency. My role involved designing and implementing a robust system that aligned with business needs while ensuring security and scalability. This project showcases my ability to independently build and optimize software solutions tailored for real-world applications.",
      featuredProjects: [
        {
          title: "E-archive (DMS)",
          text: "Designed and developed a Document Management System (DMS) to streamline internal document storage and organization for the company. \nWorked on the project independently, overseeing the full development lifecycle. \nImplemented secure document handling, ensuring controlled access with Microsoft identity and data integrity. The system provided role-based access control, ensuring that users had permissions tailored to their roles, enhancing security and compliance. \nUtilized GitLab for version control and structured development workflows. \nOptimized document retrieval processes, reducing access time by 60%.",
          stacl: ["React", "ASP.NET Core"],
          images: ["/images/earchive1.png", "/images/earchive2.png", "/images/earchive3.png", "/images/earchive4.png"],
        }
      ],
      technologies: [
        {title : "Frontend", text: "I worked with React to develop structured and maintainable user interfaces, ensuring smooth interaction and usability. By leveraging HTML5 and Sass, I created responsive and accessible designs tailored to internal company needs. Additionally, I focused on optimizing front-end performance and implementing role-based UI elements to align with user permissions and security requirements."},
        {title : "Backend", text: "On the back end, I utilized ASP.NET Core API to design and develop a well-structured system with role-based access control, ensuring secure document management. My work included seamless integration with SQL databases, optimizing data storage and retrieval processes. Using GitLab for version control and structured workflows, I maintained a scalable and maintainable codebase, enhancing system efficiency and reliability."}
      ],
      conclusion: [
        {title : "Challenge", text: "Managing and organizing internal company documents efficiently was a critical issue, as existing solutions lacked proper structure, access control, and retrieval efficiency. The company needed a secure, role-based Document Management System (DMS) that would allow employees to store, access, and manage files according to their permissions while ensuring data integrity and compliance."},
        {title : "Solution", text: "I designed and developed a well-structured DMS using ASP.NET Core API and React, implementing a role-based access control system to restrict user permissions based on their roles. The system provided secure document handling, optimized search functionality, and efficient retrieval processes, ensuring that users could only access information relevant to their responsibilities. "},
        {title : "Result", text: "The newly developed DMS significantly improved document organization and security, reducing retrieval time by 60% and ensuring proper access management across different user roles. The system streamlined internal processes, minimized document mismanagement, and provided a scalable solution for handling company records efficiently."}
      ]


    }
   },
   {
    id: 2, fromTo: "2023-2024", duration: "1 year 3 months", companyName: "Blackbird", position: "Full-stack developer | React, Next & ASP.NET",
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
  { id: 3, fromTo: "2022", duration: "5 months", companyName: "Synsoft LTD.", position: "Front-end developer | Angular & Spring boot",
    page: {
      title: "Synsoft: Front end",
      headingText: "At Synsoft, I worked as a Front-End Developer, focusing on building intuitive and functional user interfaces using Angular. I collaborated with the backend team to integrate Spring Framework services, gaining hands-on experience in full-stack development. One of my key contributions was developing, as part of a team, a high-quality dispatcher application for the electro industry in Serbia, ensuring efficiency and seamless system interactions.",
      aboutCompany: "Synsoft is an IT solutions provider focused on delivering customized software solutions tailored to client needs. The company positions itself as a one-stop-shop for IT services, offering end-to-end development, implementation, and support. With a strong emphasis on skill development, Synsoft combines experienced engineers with dynamic young talent to create innovative and efficient solutions. They have worked on brilliant projects, including Energy Flux, one of the most advanced platforms for monitoring the flow of electric energy in Serbia, showcasing their expertise in developing high-performance and industry-specific solutions.",
      aboutCompanyImages: ["/images/synsoft1.png", "/images/synsoft2.png", "/images/synsoft3.png"],
      featuredProjectsText: "At Synsoft, I contributed to the development of the impactful web application Dispatcher Log, focusing on building efficient and user-friendly front-end interfaces. As part of a team, I worked on a project that required seamless integration between front-end and back-end systems, ensuring functionality, performance, and reliability. This application was designed for the electro industry in Serbia, aimed at optimizing operations and improving workflow efficiency.",
      featuredProjects: [
        {
          title: "Dispatcher Log",
          text: "Contributed to the development of Dispatcher Log, a web application designed for the electro industry in Serbia, enabling efficient monitoring, coordination, and management of electricity distribution operations. The platform provides real-time data tracking, task automation, and improved communication between dispatchers and field teams. \nDeveloped intuitive and responsive UI using Angular, ensuring a smooth user experience. \nCollaborated with the backend team to integrate Spring Framework services, enabling seamless data flow and system interactions. \nFocused on optimizing the dashboard interface, ensuring quick access to critical information for dispatchers.",
          stacl: ["Angular", "Spring Boot"],
          images: [],
        }
      ],
      technologies: [
        {title : "Frontend", text: "I worked with Angular to develop responsive and user-friendly interfaces, ensuring an intuitive experience for dispatchers managing electricity distribution. By leveraging TypeScript, I enhanced application maintainability and performance, while HTML5 and CSS were used to create structured and visually appealing layouts. I focused on optimizing UI components, ensuring seamless data visualization and real-time updates for efficient decision-making."},
        {title : "Backend", text: "On the backend, I collaborated with the team to integrate Spring Framework services, ensuring smooth communication between the front-end and the server. My work involved handling RESTful API interactions, implementing core business logic, and optimizing data flow for real-time system updates. "}
      ],
      conclusion: [
        {title : "Challenge", text: "The electro industry required an efficient and reliable system to manage electricity distribution operations, but existing solutions lacked real-time data tracking, task automation, and seamless coordination between dispatchers and field teams. The challenge was to develop a scalable, user-friendly application that could handle large amounts of operational data while ensuring fast and accurate decision-making."},
        {title : "Solution", text: "As part of the team, I contributed to the development of Dispatcher Log, leveraging Angular to build an intuitive and responsive front-end interface. The application integrated seamlessly with a Spring Framework backend, allowing real-time data tracking and automated task management. I focused on optimizing the dashboard UI, ensuring dispatchers had quick access to critical information and streamlined workflows."},
        {title : "Result", text: "The new Dispatcher Log system significantly improved coordination and communication, enabling faster response times and better operational control. Real-time data updates allowed dispatchers to efficiently monitor and manage electricity distribution, while automation reduced manual workload and increased overall efficiency. By speaking directly with dispatchers, I received very positive feedback about their user experience, highlighting how the platform streamlined their daily tasks and improved overall workflow. The solution provided a scalable and reliable platform that met industry needs and optimized operational processes."}
      ]


    }
   },
  { id: 4, fromTo: "2020", duration: "3 months", companyName: "Microsoft", position: "Map labeling | JOMS & team coordination",
    page: {
      title: "Microsoft: Map labeling",
      headingText: "At Microsoft, I contributed to the training of artificial intelligence models by inputting relevant map objects using JOSM maps. My work focused on enhancing AI capabilities in object recognition and spatial structure understanding. Collaborating with a team, I ensured that labeling efforts were aligned with project requirements and objectives, optimizing data accuracy for improved AI performance.",
      aboutCompany: "Microsoft is a global leader in technology, known for its innovation in software, cloud computing, artificial intelligence, and enterprise solutions. With a strong focus on AI-driven advancements, the company continually develops solutions that enhance automation, data processing, and machine learning capabilities. As part of its diverse projects, Microsoft invests heavily in mapping technologies and AI training models, ensuring precision and efficiency in spatial data processing.",
      aboutCompanyImages: ["/images/microsoft1.png", "/images/microsoft2.png", "/images/microsoft3.png"],
      featuredProjectsText: "At Microsoft, I contributed to a project focused on enhancing AI-driven mapping technologies, supporting the training of artificial intelligence models for improved object recognition and spatial analysis. My role involved working with JOSM maps to input and refine relevant map data, ensuring accuracy and alignment with project objectives. Through collaboration with the team, I helped optimize the labeling process, improving AI model efficiency and performance.",
      featuredProjects: [
        {
          title: "Map labeling Japan",
          text: "Contributed to the map labeling of Japanese cities using JOSM maps, ensuring accurate spatial data for AI training and geospatial analysis. As the group leader among new students, I took responsibility for organizing tasks, guiding team members, and ensuring labeling accuracy. This involved identifying, tagging, and refining map objects to enhance AI-driven recognition of urban structures and infrastructure. Coordinated closely with the team to align labeling efforts with project requirements, improving the precision and usability of AI models for geospatial applications.",
          stacl: [],
          images: [],
        }
      ],
      technologies: [
        
      ],
      conclusion: [
        {title : "Challenge", text: "The AI models required highly accurate and well-structured geospatial data to improve their ability to recognize objects and understand spatial structures. However, ensuring consistent and precise labeling across multiple team members was a challenge, especially given the complexity of mapping urban environments in Japanese cities using JOSM. Additionally, as a group of new trainees, we needed to quickly adapt to the mapping process and maintain a high standard of data accuracy."},
        {title : "Solution", text: "As the group leader among new students, I took initiative in organizing tasks, guiding team members, and ensuring consistency in labeling efforts. I worked closely with the team to define clear mapping guidelines, streamline the identification and tagging process, and provide quality control to refine map objects. By maintaining close communication and coordination, we effectively improved the labeling workflow, ensuring that AI models received structured and accurate geospatial data."},
        {title : "Result", text: "The improved map labeling process significantly enhanced the AI model's ability to recognize urban structures and spatial relationships, leading to greater precision in geospatial applications. The structured workflow allowed the team to increase efficiency and labeling accuracy, while my leadership in guiding the group contributed to better organization and faster adaptation. The project successfully provided high-quality training data, reinforcing the AI model’s learning capabilities for real-world applications. As a result, the team achieved an average of 4,000 to 6,000 marked objects per person per month, aligning with expected performance benchmarks while maintaining data accuracy and consistency."}
      ]


    }
   }
]