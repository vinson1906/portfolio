"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'

function Skills({ Skills,category }) {

console.log("skills data:",Skills)
    return (
        <div className='flex flex-col gap-8 p-8'>
            <div className='grid grid-cols-5 '>
                <div>
                    <div className='grid grid-cols-4' >
                        <div className='h-[75px] w-[90px] bg-gray-900 shadow-md shadow-gray-700 rounded-lg flex flex-col justify-center items-center'>
                            <Image src={Skills.image} alt={`${Skills.skill} text`} height={2000} width={2000} className='h-[30px] w-fit' />
                            <p className='text-white tracking-[0.5px] text-[12px] font-bold px-[4px]'>
                                {
                                    Skills.skill
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='skill'>

            </div>
        </div>

    )
}

export default Skills