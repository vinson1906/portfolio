"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'

function Skills() {

    const skills = [
        {
            "skill": "HTML5",
            "skill_domain": "Front end",
            "image": "https://www.educative.io/api/page/5184213461499904/image/download/6096311389519872",
            "language": false
        },
        {
            "skill": "css3",
            "skill_domain": "Front end",
            "image": "https://1.bp.blogspot.com/-m4TTXg7Oof4/XlJFOC9iQmI/AAAAAAAAACc/gjl4x37MVFIH7th8Y1xmelomiX4rYRwewCLcBGAsYHQ/s1600/css3.png",
            "language": false
        },
        {
            "skill": "React",
            "skill_domain": "Front end",
            "image": "https://www.pngkey.com/png/full/222-2224712_react-react-logo-png.png",
            "languge": false
        },
        {
            "skill": "java Script",
            "skill_domain": "Front end",
            "image": "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png",
            "language": true
        }
    ]

    return (
        <div className='flex flex-col gap-8 p-8'>
            <h1 className='text-4xl font-bold text-purple-800'>
                skills
            </h1>
            <div className='grid grid-cols-5'>
                {
                    skills.length > 0 && skills.map((ele, i) => (
                        <div key={i}>
                            <div className='grid grid-cols-4' >
                                <div className='h-[65px] w-[70px] bg-gray-200 shadow-md shadow-gray-700 rounded-lg flex flex-col justify-center items-center'>
                                    <Image src={ele?.image} alt={`${ele.skill} text`} height={2000} width={2000} className='h-[30px] w-fit' />
                                    <p className='text-gray-700 tracking-[0.5px] text-[12px] font-bold'>
                                        {
                                            ele.skill
                                        }
                                    </p>
                                </div>


                            </div>
                        </div>

                    ))
                }
            </div>

            <div className='skill'>

            </div>
        </div>

    )
}

export default Skills