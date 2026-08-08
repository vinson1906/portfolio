"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import vinsonImage from '../../../public/assets/vinson.jpg'
import Image from 'next/image'

import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const scrollToProject = (e) => {
  e.preventDefault()
  gsap.to(window, { duration: 1.2, scrollTo: { y: '#project', offsetY: 80 }, ease: 'power3.inOut' })
}


function Navbar() {

    const menuLink = [
        {
            path: "/",
            lable: "Home"
        },
        {
            path: "#project",
            lable: "Project"
        },
        {
            path: "/blog",
            lable: "Blog"
        }
    ]

    const tl = useRef()
    const container = useRef();
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen((prev) => !prev)
    }

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", {
            y: 75
        })

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
    }, { scope: container })

    useEffect(() => {
        if (open) {
            tl.current.play()
        }
        else {
            tl.current.reverse()
        }
    }, [open])

    return (
        <div className='menu-container text-black font-serif ' ref={container}>
            <div className="menu-bar fixed top-0 left-0 w-[100vw] p-6 md:p-[2em] flex justify-between items-center z-10">
                <div className="menu-logo">
                    <Link href="/" className=' cursor-pointer text-white'>Vinson</Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p className=' cursor-pointer text-white'>Menu</p>
                </div>
            </div>
            <div className="menu-overlay fixed top-0 left-0 w-[100vw] h-[100vh] p-6 md:p-[2em] bg-[#c5fb45] z-20 flex flex-col md:flex-row justify-between items-stretch overflow-y-auto [clip-path:polygon(0%_0%,_100%_0%,_100%_0%,_0%_0%)]">

                <div className="menu-overlay-bar flex flex-row md:flex-col justify-between items-center md:items-start w-full md:w-auto md:h-full">
                    <div className="menu-logo">
                        <Link href="/" className='font-bold uppercase '>Welcome Buddy!</Link>
                    </div>
                    <div className="menu-close md:flex-[4] flex md:h-full items-start" onClick={toggleMenu}>
                        <p className='text-4xl md:text-6xl font-bold md:pl-4 cursor-pointer'>&#x2715;</p>
                    </div>
                </div>
                <div className='hidden md:block md:flex-[2]'></div>

                <div className="menu-copy flex-1 md:flex-[4] flex flex-col md:h-full pt-8 md:pt-[2em]">
                    <div className="menu-links flex flex-col flex-1 md:h-full justify-center">
                        {
                            menuLink.map((link, i) => (
                                <div className="menu-link-item" key={i}>
                                    <div className="menu-link-item-holder " onClick={toggleMenu}>
                                        <a onClick={link.path == '#project' ? scrollToProject : null } href={link.path} className='menu-link text-4xl sm:text-5xl md:text-7xl'>{link.lable}</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="menu-info flex flex-col sm:flex-row items-start h-auto md:h-40% md:items-end gap-6 sm:gap-16 md:gap-40 pb-8 md:pb-0">
                        <div className="menu-info-colo flex flex-col">
                            <a href="https://www.instagram.com/its.__.vinson/" target='_blank' className='block hover:underline cursor-pointer'>Instagram &#8599;</a>
                            <a href="https://www.linkedin.com/in/joseph-vinson-samuel/" target='_blank' className='block hover:underline cursor-pointer'> LinkedIn &#8599;</a>
                            <a href="https://github.com/vinson1906" target='_blank' className='block hover:underline cursor-pointer'>GitHub &#8599;</a>
                        </div>
                        <div className="menu-info-colo font-mono">
                            <p>josephvinson0305@gmail.com</p>
                            <p>+91 93614 35967</p>
                        </div>
                    </div>
                </div>

                {/* Image + quote: hidden on mobile, visible from md breakpoint up */}
                <div className="menu-preview hidden md:flex md:flex-[2] flex-col items-end h-full gap-2 ">
                    <Image src={vinsonImage} alt='image' height={2000} width={2000} className=' rounded-md shadow-md' />
                    <div className='h-[25%]  text-gray-900 w-full  text-center text-[22px] font-dancing flex gap-4 font-bold flex-col justify-center'>
                        <p>Confidence and hard work is the best medicine to kill the disease called failure.</p>

                        <p className='flex justify-end font-dancing text-lg'>- Dr.A.P.J Abdul Kalam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar