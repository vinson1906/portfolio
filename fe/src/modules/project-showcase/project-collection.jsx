"use client"

const { ProjectCard } = require("./project-card")

const ProjectShowCase = () => {

    const projects = [
        {
            "startDate": "7th Jan",
            "endDate": "26 Feb",
            "description": "desct fjugfi sjuttw bkjagdui gjhdgswy whgiwutw iwodiwydb dwgwudtg gwdiyutld7 dguwiydtlw giudtgwi wdvydfu fhiuui ghfdiuwgi jwgfiugf giufwiu wugfiug giygfw.",
            "tech": [
                "React",
                "Node.js",
                "Next.js",
                "Express.js",
                "MongoDB"
            ],
            "gitHub": "https://github.com/vinson1906",
            "host": "https://vinson-portfolio.netlify.app"
        },
        {
            "startDate": "7th Jan",
            "endDate": "26 Feb",
            "description": "desct fjugfi sjuttw bkjagdui gjhdgswy whgiwutw iwodiwydb dwgwudtg gwdiyutld7 dguwiydtlw giudtgwi wdvydfu fhiuui ghfdiuwgi jwgfiugf giufwiu wugfiug giygfw.",
            "tech": [
                "React",
                "Node.js",
                "Next.js",
                "Express.js",
                "MongoDB"
            ],
            "gitHub": "https://github.com/vinson1906",
            "host": "https://vinson-portfolio.netlify.app"
        },
        {
            "startDate": "7th Jan",
            "endDate": "26 Feb",
            "description": "desct fjugfi sjuttw bkjagdui gjhdgswy whgiwutw iwodiwydb dwgwudtg gwdiyutld7 dguwiydtlw giudtgwi wdvydfu fhiuui ghfdiuwgi jwgfiugf giufwiu wugfiug giygfw.",
            "tech": [
                "React",
                "Node.js",
                "Next.js",
                "Express.js",
                "MongoDB"
            ],
            "gitHub": "https://github.com/vinson1906",
            "host": "https://vinson-portfolio.netlify.app"
        }
    ]

    return (
        <>
            <div className="flex gap-2">
                {
                    projects?.map((ele, i) => (
                        <ProjectCard key={i} project={ele} />
                    ))
                }
            </div>


        </>
    )
}

export default ProjectShowCase