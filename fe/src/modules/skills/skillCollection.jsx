import { Languages } from 'lucide-react'
import React from 'react'
import Skills from './skills'

function SkillCollection() {

    const data = {
        front_end: [
            {
                domain: "FE",
                skill: "HTML5",
                image: "https://www.educative.io/api/page/5184213461499904/image/download/6096311389519872"
            },
            {
                domain: "FE",
                skill: "CSS3",
                image: "https://1.bp.blogspot.com/-m4TTXg7Oof4/XlJFOC9iQmI/AAAAAAAAACc/gjl4x37MVFIH7th8Y1xmelomiX4rYRwewCLcBGAsYHQ/s1600/css3.png"
            },
            {
                domain: "FE",
                skill: "React",
                image: "https://www.pngkey.com/png/full/222-2224712_react-react-logo-png.png"
            },
            {
                domain: "FE",
                skill: "JavaScript",
                image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png"
            }
        ],
        back_end: [
            {
                domain: "BE",
                skill: "Node.js",
                image: "https://nodejs.org/static/images/logo.svg"
            },
            {
                domain: "BE",
                skill: "Express",
                image: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
            },
            {
                domain: "BE",
                skill: "Python",
                image: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
            }
        ],
        Data_Base: [
            {
                domain: "DB",
                skill: "MongoDB",
                image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
            },
            {
                domain: "BE",
                skill: "MySQL",
                image: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
            },
            {
                domain: "BE",
                skill: "PostgreSQL",
                image: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
            }
        ],
        Languages: [
            {
                domain: "Language",

                skill: "JavaScript",
                image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png"
            },
            {
                domain: "Language",
                skill: "TypeScript",
                image: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
            },
            {
                domain: "Language",
                skill: "Python",
                image: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
            }
        ],
        Other_Skills: [
            {
                domain: "others",
                skill: "Git",
                image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            },
            {
                domain: "others",
                skill: "Docker",
                image: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
            },
            {
                domain: "others",
                skill: "Kubernetes",
                image: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
            }
        ],
        Mobile_App: [
            {
                domain: "mobile",
                skill: "Flutter",
                image: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
            }

        ]
    }

    console.log("tis is the objects key:", Object.keys(data));

    return (
        <div className='mx-[30px] mb-[40px]'>
            <div className='grid grid-cols-3 max-md:grid-cols-1  gap-4 '>
                {
                    Object.keys(data).map((category, index) => {

                        return (
                            <div key={index} className='flex flex-col w-[500px] content-center align-middle'>
                                <h2 className='text-[#6BF216] font-bold text-[28px] pb-2 tracking-[0.7px]'>{category.replace(/_/g, ' ')}</h2>
                                <div className='grid grid-cols-3 bg-gray-900 rounded-xl shadow-xl '>
                                    {
                                        data[`${category}`].map((skill, index) => {
                                            console.log("skill", skill);
                                            return (
                                                <div key={index}>
                                                    <Skills Skills={skill} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )

                    }
                    )
                }
            </div>
        </div>

    )
}

export default SkillCollection