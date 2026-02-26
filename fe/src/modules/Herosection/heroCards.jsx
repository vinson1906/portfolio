'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import FrontCard from '../../../public/assets/joker-card-front.png'
import BackCard from '../../../public/assets/jocker-card-back.png'
import './card.css'

import Learn from '../../../public/assets/learn.png'
import Build from '../../../public/assets/build.png'
import Repeat from '../../../public/assets/repeat.png'


function HeroCards({ data, index }) {



    let delay = "delay-[0s]"
    console.log(index);


    if (index == 0) {
        delay = "delay-0"
    }
    if (index == 1) {
        delay = "delay-100"
    }
    if (index == 2) {
        delay = "delay-150"
    }



    return (

        <div className='perspective'>
            <div className='relative card cursor-pointer'>

                <div className={`h-[280px] w-[200px]  rounded-md transition-all   ${delay} animate-floating front`} >

                    <Image src={data.back.image} alt='front image' height={2000} width={2000} className='h-full ' />
                </div>

                <div className={`h-[280px] w-[200px]  rounded-md transition-all   ${delay} animate-floating absolute top-0 back`}>

                    <Image src={FrontCard} alt='back image' height={2000} width={2000} className='h-full z-0 ' />
                    <p className={`absolute inset-1 flex items-center justify-center text-4xl text-white z-10 back`} >{data.back.title}</p>
                </div>
            </div>
        </div>

    )
}

export default HeroCards