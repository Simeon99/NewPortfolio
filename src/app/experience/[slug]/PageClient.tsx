"use client";

import Conclusion from "@/components/experience/Conclusion";
import Projects from "@/components/experience/Projects";
import Technologies from "@/components/experience/Technologies";
import { ResponseDataExperiance } from "@/data/experiences";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PageClient = ({ slug }: { slug: string }) => {

  const [experiances, setExperiances] = useState<ResponseDataExperiance>();

  const fetchExperiance = async () => {

    try {
      const response = await fetch(`/api/experience/${slug}`);
      const data: ResponseDataExperiance = await response.json();
      setExperiances(data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchExperiance();
  }, [])

  return (
    <div className="w-full">
      <div className="max-w-screen-sw px-8 flex flex-col  mx-auto my-auto">
        <div className="flex flex-col items-center max-ssw:pt-7 pt-32">
          <h1 className='text-[64px] max-ssw:text-[50px] text-center leading-none font-bold font-berghan'>
            {experiances?.page?.title}
          </h1>
          <p className="ssw:text-[20px] text-center max-ssw:text-justify max-w-[900px] mt-8">{experiances?.page?.headingText}</p>
        </div>
        <div className="flex flex-row max-md:flex-col justify-between mt-40 items-center gap-8">
          <div className="flex flex-col">
            <h2 className="text-[64px] max-ssw:text-[50px] text-left leading-none font-berghan">About company</h2>
            <p className="ssw:text-[20px] text-justify max-w-[600px] max-md:max-w-full mt-8">{experiances?.page?.aboutCompany}</p>
          </div>
          <div className="max-md:hidden flex flex-col gap-4 max-lsw:min-w-[300px] min-w-[500px]">
            {experiances?.page?.aboutCompanyImages && experiances?.page?.aboutCompanyImages.map((i, index) =>
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
            {experiances?.page?.aboutCompanyImages &&
              <Image
                src={experiances?.page?.aboutCompanyImages[0]} // Public folder path
                alt="Blackbird webiste"
                className="w-full h-auto max-w-[500px] shadow-xl rounded-lg"
                width={500}
                height={800}
                priority
              />

            }
          </div>
        </div>
        <div className="flex flex-col items-center mt-40">
          <h2 className="text-[64px] max-ssw:text-[50px] text-center max-sm:text-left leading-none font-berghan">
            Featured Projects
          </h2>
          <p className="ssw:text-[20px] text-center max-ssw:text-justify max-w-[900px] mt-8">{experiances?.page?.featuredProjectsText}</p>
        </div>
        <div>
          {
            experiances?.page?.featuredProjects.map((p, index) =>
              <Projects key={index} item={p} reverse={index % 2 !== 0} />
            )
          }
        </div>
      </div>
      {experiances?.page?.technologies && experiances?.page?.technologies.length > 0 ? 
      <div className="max-w-screen-sw px-8 flex flex-col mt-40  mx-auto my-auto">
        <h2 className="text-[64px] max-ssw:text-[50px] text-left leading-none font-berghan">Technologies</h2>
        <div className="flex flex-row max-sm:flex-col gap-8 pt-16">
          
          { experiances?.page?.technologies && experiances?.page?.technologies.map((i, index) =>
            <Technologies key={index} item={i} />
          )}
        </div>

      </div>
    : ""  
    }
      <div className="w-full  bg-gray mt-40 pb-40">
        <div className="max-w-screen-sw px-8 flex flex-col gap-16  mx-auto my-auto pt-16">
          {experiances?.page?.conclusion && experiances?.page?.conclusion.map((i, index) =>
            <Conclusion key={index} item={i} reverse={index % 2 !== 0} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageClient;
