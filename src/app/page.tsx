import Experiance from "@/components/home/Experiance";
import HomeHeader from "@/components/home/HomeHeader";
import HomeWhatIDo from "@/components/home/HomeWhatIDo";
import ToolsAndLanguages from "@/components/home/ToolsAndLanguages";

export default function Home() {
  
  return (
    <div className="w-full mb-40">
      <div className="w-full">
        {/* Full-Width Background Section */}
        <div className="absolute bg-primary top-0 bg-hwd-bg-image bg-cover bg-center w-full h-[550px] max-ssw:h-[550px] left-0 -z-10"></div>

        {/* Other Components */}
        <div className="max-w-screen-sw px-8 flex  mx-auto my-auto">

          <HomeHeader />
        </div>
        <div className="max-w-screen-sw px-8 flex  mx-auto my-auto">
          <HomeWhatIDo />

        </div>
        <div className="max-w-screen-full  flex">
          <Experiance />

        </div>
        <div className="max-w-screen-sw px-8 flex  mx-auto my-auto">
          <ToolsAndLanguages />
        </div>
      </div>

    </div>
  );
}
