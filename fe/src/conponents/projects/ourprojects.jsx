import React from 'react'
import ProjectCard from './project-card'

function Ourprojects() {

    const projects = [
        {
            image: {
                alt: "project image",
                src: "https://www.sourcecodester.com/sites/default/files/images/Ronald%20Ronnie/dasboard.png",
            },
            title: "Student Management System",
            description: "Any specific component/props to fill Any specific component/props to fill Any specific component/props to fill",
            live_link: "",
            github_link: "/project",
        },
        {
            image: {
                alt: "project image",
                src: "https://www.sourcecodester.com/sites/default/files/images/Ronald%20Ronnie/dasboard.png",
            },
            title: "Student Management System",
            description: "Any specific component/props to fill Any specific component/props to fill Any specific component/props to fill",
            live_link: "",
            github_link: "/project",
        }
    ]


    return (
        <div className='main-component pb-[20px] mx-10'>
            <div className='text-4xl text-purple-700 font-bold  pb-10'>
                Our Projects
            </div>
            <div className='flex gap-2'>
            {
                projects.length > 0 && projects.map((ele,i) => {
                    return (
                        <div className='pl-[10px]' key={i}>
                            <ProjectCard projects={ele} />
                        </div>
                    )
                })
            }

            </div>
          


        </div>


    )
}

export default Ourprojects