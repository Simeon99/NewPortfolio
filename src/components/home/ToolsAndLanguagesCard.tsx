import React from 'react'

export interface IToolsAndLanguages {
    id: number;
    title: string;
    text: string[]
}

const ToolsAndLanguagesCard = ({ item }: { item: IToolsAndLanguages }) => {
    return (
        <div className='bg-[#F4F4F4] max-sm:w-full relative w-[550px] h-full pb-8 cursor-pointer'>
            <div className='w-full h-[12px] bg-black'></div>
            <div className='px-[26px] pt-8 flex-col'>
                <div>
                    <h1 className={`#000000 sm:text-[36px] text-[32px]  leading-tight font-bold  font-berghan`}>{item.title}</h1>
                </div>
                {item.text.map((i, index) =>
                    <div key={item.id + index} className='flex flex-row items-center gap-2'>
                        <div className='w-[25px] h-[3px] bg-black'></div>
                        <p key={item.id + index} className=" sm:text-[20px]">{i}</p>

                    </div>

                )}
            </div>
        </div>
    )
}

export default ToolsAndLanguagesCard