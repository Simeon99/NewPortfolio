'use client'

import React, { useEffect, useState } from 'react'
import ExperianceCard from './ExperianceCard';
import { ResponseDataExperiance } from '@/data/experiences';


const Experiance = () => {

  const [experiances, setExperiances] = useState<ResponseDataExperiance[]>([]);

  const fetchExperiance = async () => {

    try {
      const response = await fetch('api/experience');
      const data: ResponseDataExperiance[] = await response.json();
      setExperiances(data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchExperiance();
  }, [])

  return (
    <div id='experience' className='bg-black w-full text-white mt-40 py-16'>
      <div className='px-8 text-green max-w-screen-sw flex flex-col mx-auto my-auto '>
        <h1 className='text-[64px] max-ssw:text-[50px] font-berghan leading-none mb-8'>Experience</h1>
        {experiances && experiances.map((experiance, index) =>
          // <div key={experiance.id}>{experiance.fromTo}</div>
          <ExperianceCard key={experiance.id} item={experiance} className={index === experiances.length - 1 ? "border-b-[1px]" : ""} />
        )}
      </div>
    </div>
  )
}

export default Experiance