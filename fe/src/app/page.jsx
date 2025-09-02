// import Ourprojects from "../conponents/projects/ourprojects";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import('../conponents/Herosection/Hero'))
const About = dynamic(() => import('../conponents/Herosection/about-me'))
const Ourprojects = dynamic(() => import('../conponents/projects/ourprojects'))
const Skills = dynamic(() => import('../conponents/skills/skills'))

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Skills />
        <Ourprojects />
        {/* //ui designs banners figma
        //feedbacks
        //Contact
        //small quates
        //footer  */}
      </div>

    </>
  );
}
