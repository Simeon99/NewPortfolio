import WhatIDoCard from './WhatIDoCard'

const HomeWhatIDo = () => {

    const whatIDo = [
        {
            title: 'Front-end',
            text: 'I specialize in building responsive, user-friendly web interfaces using React, Next.js and Angular. With a focus on modern design principles, accessibility, and performance optimization, I create seamless experiences that meet both user and business needs.'
        },
        {
            title: 'Back-end',
            text: 'I develop robust and scalable server-side applications using .NET and Spring Boot. From building RESTful APIs to integrating databases, I ensure secure, high-performance systems that power seamless user experiences.'
        },
        {
            title: 'End-to-End Development',
            text: 'I deliver complete web solutions by seamlessly integrating front-end and back-end systems. From crafting intuitive interfaces with React and Next.js to building scalable APIs with .NET and Spring Boot, I ensure cohesive and high-performing applications from start to finish.'
        },
    ]

    return (
        <div id='whatIDo' className='flex flex-col items-center justify-center mt-16'>
            <h1 className='text-[64px] max-ssw:text-[50px]  leading-none font-bold font-berghan'>
                What I Do
            </h1>
            <div className='flex flex-row max-[980px]:flex-col max-[980px]:gap-8 items-center justify-between max-w-[1000px] w-full pt-8'>
                {whatIDo.map((i, index) =>
                    <WhatIDoCard key={index} item={i} />
                )}
            </div>
            <h1 id='about' className='text-[64px] max-ssw:text-[50px] mt-40 leading-none font-bold font-berghan'>
                About me
            </h1>
            <p className='ssw:text-[20px] text-justify mt-8'>
            I am a full-stack software developer with over two years of experience building modern, high-performance web applications. Specializing in React, Next.js, and Angular on the frontend and ASP.NET and Spring Boot on the backend, I create scalable and efficient solutions tailored to business needs.
            <br /><br />I thrive in problem-solving environments, whether optimizing API performance, refining user interfaces, or architecting robust backend systems. My approach is hands-on and impact-driven. I&apos;ve built and contributed in building applications that streamline workflows, improve user engagement, and enhance operational efficiency.
            <br /><br /> Beyond code, I bring a proactive mindset, strong collaboration skills, and a passion for building software that delivers real value. My goal is to craft solutions that not only solve technical challenges but also contribute to long-term business success.
            </p>
            
        </div>
    )
}

export default HomeWhatIDo