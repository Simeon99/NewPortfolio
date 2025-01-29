import React from 'react'

interface ITechnologies {
    title: string;
    text: string;
}

const Technologies = ({item} : {item: ITechnologies}) => {
  return (
    <div>
        <h3 className="text-[50px] max-ssw:text-[40px] text-left leading-none font-berghan">{item.title}</h3>
        <p className="ssw:text-[20px] text-justify max-w-full mt-8">{item.text}</p>
    </div>
  )
}

export default Technologies