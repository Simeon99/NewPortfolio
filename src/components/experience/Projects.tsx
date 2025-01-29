import { FeaturedProjects } from '@/data/experiences'
import Image from 'next/image'
import React from 'react'



const Projects = ({ item, reverse }: { item: FeaturedProjects,  reverse:boolean}) => {
    return (
        <div className="flex flex-row max-md:flex-col justify-between mt-40 items-center gap-8">
            <div className={`flex flex-col ${reverse ? 'md:order-2': ''}`}>
                <h2 className={`text-[64px] pb-4 max-ssw:text-[50px] text-left ${reverse ? 'md:text-right': ''} leading-none font-berghan`}>{item.title} {reverse.toString()}</h2>

                {item.text.split("\n").map((line, index) => (
                    // <p key={index}>{line}</p> // Wrap each line in <p> for spacing
                        <p key={index} className="ssw:text-[20px] text-justify max-w-[600px] max-md:max-w-full mt-4">{line}</p>
                ))}
                <p className='mt-4 text-[20px]'><span className='font-bold '>Stack:</span> {item.stacl.join(", ")}</p>
            </div>
            <div className={`max-md:hidden flex flex-col gap-4 max-lsw:min-w-[300px] min-w-[500px] ${reverse ? 'md:order-1': ''}`}>
                {item.images && item.images.map((i, index) =>

                    <Image
                        key={index}
                        src={i} // Public folder path
                        alt="Blackbird webiste"
                        className="w-full h-auto max-w-[500px] shadow-xl rounded-lg"
                        width={500}
                        height={800}
                        priority
                    />
                )}
            </div>
            <div className="hidden max-md:flex flex-col gap-4 max-lsw:min-w-[300px] min-w-[500px]">
                <Image
                    src={item?.images[0]} // Public folder path
                    alt="Blackbird webiste"
                    className="w-full h-auto max-w-[500px] shadow-xl rounded-lg"
                    width={500}
                    height={800}
                    priority
                />
            </div>
        </div>
    )
}

export default Projects