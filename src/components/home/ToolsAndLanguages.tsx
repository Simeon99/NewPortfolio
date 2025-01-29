import React from 'react'
import ToolsAndLanguagesCard, { IToolsAndLanguages } from './ToolsAndLanguagesCard'

const ToolsAndLanguages = () => {

    const toolsAndLanguages: IToolsAndLanguages[] = [
        { id: 1, title: "Back-end", text: ["ASP.NET | Spring Boot | Flask", "MySQL | PostgresSQL"] },
        { id: 2, title: "Front-end", text: ["React | Next.js | Angular", "HTML | CSS|  Sass | Tailwind | Bootstrap", "JSON"] },
        { id: 3, title: "Programing languages", text: ["Java | C# |TypeScript | JavaScript | Python"] },
        { id: 4, title: "Other", text: ["Git | Firebase | Postman  | Linux | jsReport"] },
    ]

    return (
        <div id='tools' className='w-screen mt-40 flex flex-col gap-8 items-center'>
            <h1 className='text-[64px] max-ssw:text-[50px] font-berghan'>
                Tools And Languages
            </h1>
            <div className='max-[1200px]:grid-cols-1  max-[1200px]:w-full grid grid-cols-2 gap-8'>

                {/* <div>
                    
                </div> */}
                {/* Desktop view  */}
                <div className='flex flex-col  gap-8 max-[1200px]:hidden'>
                    <ToolsAndLanguagesCard key={toolsAndLanguages[0].id} item={toolsAndLanguages[0]} />
                    <ToolsAndLanguagesCard key={toolsAndLanguages[2].id} item={toolsAndLanguages[2]} />
                </div>
                <div className='flex  flex-col gap-8 max-[1200px]:hidden'>
                    <ToolsAndLanguagesCard key={toolsAndLanguages[1].id} item={toolsAndLanguages[1]} />
                    <ToolsAndLanguagesCard key={toolsAndLanguages[3].id} item={toolsAndLanguages[3]} />
                </div>

                {/* Mobile view  */}
                <div className='w-full  max-[1200px]:flex justify-center hidden'>
                    <ToolsAndLanguagesCard key={toolsAndLanguages[1].id} item={toolsAndLanguages[1]} />

                </div>
                <div className='w-full b max-[1200px]:flex justify-center hidden'>
                    <ToolsAndLanguagesCard key={toolsAndLanguages[0].id} item={toolsAndLanguages[0]} />

                </div>
                <div className='w-full  max-[1200px]:flex justify-center hidden'>
                    <ToolsAndLanguagesCard key={toolsAndLanguages[2].id} item={toolsAndLanguages[2]} />

                </div>
                <div className='w-full  max-[1200px]:flex justify-center hidden'>
                    <ToolsAndLanguagesCard key={toolsAndLanguages[3].id} item={toolsAndLanguages[3]} />

                </div>
                {/* {toolsAndLanguages.map((i) => 
                <ToolsAndLanguagesCard key={i.id} item={i} />
                
                )} */}
            </div>
        </div>
    )
}

export default ToolsAndLanguages