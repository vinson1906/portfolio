// import Ourprojects from "../conponents/projects/ourprojects";
import dynamic from "next/dynamic";
// import SkillCollection from "../modules/skills/skillCollection";
import Certificates from "../modules/certificates/certificates";
import Skills from "../modules/skills/skills";
import Contact from "../modules/contact-us/contact-us";
import Experience from "../modules/Experience/experience";
const Hero = dynamic(() => import('../modules/Herosection/Hero'))
const About = dynamic(() => import('../modules/Herosection/about-me'))
const Ourprojects = dynamic(() => import('../modules/projects/ourprojects'))

import { SideBarLinks } from "../modules/sidebar/sidebar";
// const Skills = dynamic(() => import('../modules/skills/skills'))

export default function Home() {
  return (
    <>
      <div>
        <div className="fixed bottom-0 top-72 left-20 min-h-screen z-50">

          {/* <SideBarLinks /> */}
        </div>
        <Hero />
        <Skills />
        <About />
        {/* <SkillCollection />
         */}
        <Experience />

        <Ourprojects />
        {/* <Certificates /> */}
        {/* <Contact /> */}
        {/* //ui designs banners figma
        //feedbacks
        //Contact
        //small quates
        //footer  */}
      </div>

    </>
  );
}
