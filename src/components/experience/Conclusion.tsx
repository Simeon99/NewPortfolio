import React from 'react'

interface IConclusion {
    title: string;
    text: string;
}

const Conclusion = ({ item, reverse }: { item: IConclusion,  reverse:boolean}) => {
  return (
    <div>
        <h2 className={`text-[64px] max-ssw:text-[50px]  leading-none font-berghan ${reverse ? 'text-right' : 'text-left'}`}>{item.title}</h2>
        <p className="ssw:text-[20px] text-justify max-w-full mt-8">{item.text}</p>
    </div>
  )
}

export default Conclusion