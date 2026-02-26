"use client"
import { GithubIcon, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import ProjectImage from '../../../public/assets/404pagenot found.png'

// const project = {
//     "startDate": "7th Jan",
//     "endDate": "26 Feb",
//     "description": "desct fjugfi sjuttw bkjagdui gjhdgswy whgiwutw iwodiwydb dwgwudtg gwdiyutld7 dguwiydtlw giudtgwi wdvydfu fhiuui ghfdiuwgi jwgfiugf giufwiu wugfiug giygfw.",
//     "tech": [
//         "React",
//         "Node.js",
//         "Next.js",
//         "Express.js",
//         "MongoDB"
//     ],
//     "gitHub": "https://github.com/vinson1906",
//     "host": "https://vinson-portfolio.netlify.app"
// }

export const ProjectCard = ({ project }) => {
    return (
        <>
            <div className='h-[410px] w-[600px] bg-gray-900 flex flex-col rounded-md shadow-md text-white transform transition-all duration-300 ease-in-out
hover:scale-105 hover:shadow-2xl  cursor-pointer'>
                <div className='flex'>
                    <div className='bg-white'>
                        <Image src={ProjectImage} alt='Image' height={2000} width={2000} className='h-[230px] w-[450px]' />

                    </div>
                    <div className=' h-[255px] w-[150px] flex flex-col  pt-4 shadow-md' >
                        <h1 className='text-xl font-semibold shadow-sm text-center'> Project Info </h1>
                        <div className='pt-2 font-semibold'>
                            <ul className='flex flex-col items-center gap-[4px] justify-start px-[5px] tracking-tight'>
                                <li>Start date:</li>
                                <li className='text-center'>({project.startDate})</li>
                                <li>End date:</li>
                                <li className='text-center'>({project.endDate})</li>
                            </ul>
                            <div className='flex flex-col items-center mt-2 gap-1'>
                                <Link href={project.gitHub} className=''>
                                    <button className='h-[40px] flex w-[120px]  justify-center items-center bg-purple-600 rounded-md shadow-sm'>
                                        <GithubIcon /> GitHub
                                    </button>
                                </Link>
                                <Link href={project.host} >
                                    <button className='h-[40px] flex w-[120px]  justify-center items-center bg-green-600 rounded-md shadow-sm'>
                                        <LinkIcon />Live Demo
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='p-2'>
                        <h1 className=' font-semibold'>Description:</h1>
                        <p className='pl-2 text-clip'>{project.description}</p>
                    </div>
                    <div className='flex px-2 items-center'>
                        <h1 className='font-bold px-1'>Tech:</h1>
                        <div className="flex  gap-2 items-center py-1 flex-wrap">

                            {project.tech?.slice(0, 4).map((ele, i) => (
                                <div
                                    key={i}
                                    className="border text-sm px-3 py-1 hover:bg-purple-600 hover:text-white 
                 cursor-pointer border-gray-400 rounded-full 
                 flex justify-center items-center transition duration-200"
                                >
                                    {ele}
                                </div>
                            ))}

                            {project.tech && project.tech.length > 4 && (
                                <div
                                    className="border text-sm px-3 py-1 border-purple-500 
                 rounded-full bg-purple-100 text-purple-700 
                 flex justify-center items-center font-medium"
                                >
                                    +{project.tech.length - 3}
                                </div>
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}