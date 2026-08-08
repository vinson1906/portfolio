"use client"

import { Github, LinkedinIcon, Instagram } from "lucide-react"
import Link from "next/link"

export const SideBarLinks = () => {
    return (
        <>
            <div className="flex w-16">
                <div className="h-[500px] border-2 border-l-purple-800 ">

                </div>
                <div>
                    <Link href='https://github.com/vinson1906' target="_blank" >
                        <Github size={40} className="relative left-[-22] top-[120px]  bg-purple-600 rounded-md p-[3px] cursor-pointer" />
                    </Link>
                    <Link href='https://linkedin.com/in/joseph-vinson-samuel' target="_blank" >
                        <LinkedinIcon size={40} className="relative left-[-22] top-[220px]  bg-purple-600 rounded-md p-[3px] cursor-pointer" />
                    </Link>
                    <Link href='https://github.com/vinson1906' target="_blank" >
                        <Instagram size={40} className="relative left-[-22] top-[320px]  bg-purple-600 rounded-md p-[3px] cursor-pointer" />
                    </Link>

                </div>

            </div>


        </>
    )
}