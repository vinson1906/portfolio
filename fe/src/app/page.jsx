// import Ourprojects from "../conponents/projects/ourprojects";
import dynamic from "next/dynamic";
import SkillCollection from "../conponents/skills/skillCollection";
import Certificates from "../conponents/certificates/certificates";
import Skills from "../conponents/skills/skills";
import Contact from "../conponents/contact-us/contact-us";
import Experience from "../conponents/Experience/experience";
const Hero = dynamic(() => import('../conponents/Herosection/Hero'))
const About = dynamic(() => import('../conponents/Herosection/about-me'))
const Ourprojects = dynamic(() => import('../conponents/projects/ourprojects'))
// const Skills = dynamic(() => import('../conponents/skills/skills'))

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        {/* <SkillCollection />
         */}
         <Experience />
         <Skills />
        <Ourprojects />
        <Certificates />
        <Contact />
        {/* //ui designs banners figma
        //feedbacks
        //Contact
        //small quates
        //footer  */}
      </div>

    </>
  );
}
