import gsap from 'gsap'
import { ExternalLink, Github, GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function ProjectCard({ project }) {
    return (
        <div

            className="group bg-white dark:bg-gray-700 cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-[1.02] hover:-rotate-1"
            style={{
                transformStyle: 'preserve-3d',
            }}
            onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                    duration: 0.2,
                    rotationY: 5,
                    rotationX: 10,
                    scale: 1.05,
                    ease: "power2.out"
                });
            }}
            onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                    duration: 0.3,
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    ease: "power2.out"
                });
            }}
        >
            {/* Project Header */}
            <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#6BF216] dark:group-hover:text-[#6BF216] transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[#6BF216] rounded-full"></div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">

                        <Link
                            href={project?.links?.github || "#"}
                            target="_blank"
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#6BF216] text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${!project?.links?.github ? "pointer-events-none opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            <Github size={16} />
                            Code
                        </Link>

               
                    
                        <Link
                            href={project?.links?.host || "#"}
                            target="_blank"
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#6BF216] text-[#6BF216] hover:bg-[#6BF216] hover:text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${!project?.links?.host ? "pointer-events-none opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </Link>
                  
                </div>
            </div>
        </div>
    )
}

export default ProjectCard