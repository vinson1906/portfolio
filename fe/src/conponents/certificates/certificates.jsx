'use client'
import React, { useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;

        if (section && cards) {
            gsap.fromTo(cards.children,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        end: "bottom 25%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    const certificates = [
        {
            title: "MySQL Bootcamp",
            provider: "Udemy",
            date: "June 2024",
            description: "Comprehensive course covering advanced MySQL concepts, database design, optimization, and performance tuning.",
            skills: ["MySQL", "Database Design", "Query Optimization", "Stored Procedures"],
            color: "from-blue-500 to-indigo-600"
        },
        {
            title: "Emerging Trends in AI & ML",
            provider: "ETAIML 2K25",
            date: "2024",
            description: "Advanced certification in artificial intelligence and machine learning trends, covering latest algorithms and applications.",
            skills: ["Machine Learning", "AI Algorithms", "Data Analysis", "Python"],
            color: "from-purple-500 to-pink-600"
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Certificates & <span className="text-purple-600 dark:text-purple-400">Achievements</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Continuous learning and professional development through recognized certifications
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certificates.map((certificate, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
                        >
                            {/* Certificate Header */}
                            <div className={`h-24 bg-gradient-to-r ${certificate.color} flex items-center justify-center relative overflow-hidden`}>
                                <div className="text-white text-4xl transform group-hover:scale-110 transition-transform duration-300">
                                    <Award />
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                            </div>

                            {/* Certificate Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                    {certificate.title}
                                </h3>

                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Award className="w-4 h-4 text-purple-600" />
                                        <span className="font-medium">{certificate.provider}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4 text-purple-600" />
                                        <span>{certificate.date}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {certificate.description}
                                </p>

                                {/* Skills Covered */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                        Skills Covered:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {certificate.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* View Certificate Button */}
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                                    <ExternalLink size={16} />
                                    View Certificate
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Learning */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Continuous Learning Journey
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I'm committed to staying up-to-date with the latest technologies and industry best practices.
                            Currently exploring advanced React patterns, serverless architectures, and cloud computing solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["React Advanced Patterns", "Cloud Computing", "DevOps", "System Design"].map((topic, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-full font-medium shadow-sm"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;