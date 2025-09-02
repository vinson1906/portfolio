import { GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectCard({ projects }) {
    return (
        <div className='card-main w-[450px] h-[280px] bg-gray-50 rounded-xl shadow-md'>
            <div>
                <Image src={projects?.image?.src} alt={projects?.image?.alt} height={2000} width={2000} className='w-full h-[160px] object-center rounded-md' />
            </div>
            <div className="p-2 mb-2">
                <h1 className='text-gray-700 font-bold'>{projects?.title}</h1>
                <p className='text-[13px] pl-2 text-gray-600'>{projects?.description}</p>
            </div>
            <div className='social-links flex '>
                <Link href={projects?.[`github_link`]}  className='pl-[10px] mb-[10px]'>
                    <GithubIcon  size={20} className='w-[24px] h-[24px]  text-white font-bold bg-black rounded-full p-1  '/>
                </Link>

            </div>
        </div>
    )
}

export default ProjectCard