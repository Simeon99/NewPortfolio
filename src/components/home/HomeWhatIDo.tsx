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
        <div id='whatIDoo' className='flex flex-col items-center justify-center mt-16'>
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
            As a dedicated and ambitious Software Engineer with a passion for acquiring new experiences and expanding my knowledge of cutting-edge technologies, I believe your company stands out to me as the perfect match for my skills and aspirations.
            <br /><br />Alongside my substantial experience, I can state that I am a fast learner, person with a strong work ethic and I can offer a lot of energy and will to adapt quickly. With a strong desire for continual improvement, my primary objective is to develop innovative software solutions that drive your company&apos;s growth and success.
            </p>
            
        </div>
    )
}

export default HomeWhatIDo