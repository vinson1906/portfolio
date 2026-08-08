'use client'

import { useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const scrollToContact = (e) => {
  e.preventDefault()
  gsap.to(window, { duration: 1.2, scrollTo: { y: '#about', offsetY: 80 }, ease: 'power3.inOut' })
}

const projects = [
  {
    title: 'Hipic',
    description:
      'A TV product showcase application to display featured products, banners, and promotional content in an interactive, visually rich format. Implemented dynamic content management and responsive layouts optimized for large-screen displays.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    features: ['Image upload', 'Dynamic attributes', 'VPS hosting'],
    links: { github: null, host: 'https://hipic.in' },
    preview: 'dashboard',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Modern, responsive portfolio showcasing projects and skills with smooth animations, contact integration, and optimized performance.',
    technologies: ['Next.js', 'Tailwind CSS', 'GSAP', 'Nodemailer'],
    features: ['Smooth animations', 'Contact form', 'Responsive design', 'Performance optimized'],
    links: { github: 'https://github.com/vinson1906/portfolio', host: 'https://vinson-portfolio-plum.vercel.app/' },
    preview: 'portfolio',
  },
  {
    title: 'Electronics & Furniture E-commerce Website',
    description:
      'A full-stack e-commerce platform with dynamic product listings, advanced filters, cart, and secure checkout. Implemented responsive UI and scalable backend APIs for product, order, and inventory management with admin controls.',
    technologies: ['Next.js', 'Vite', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST APIs'],
    features: ['User authentication', 'CRUD operations', 'Search & filter', 'Admin dashboard'],
    links: { github: null, host: 'https://nikavitronics.in' },
    preview: 'shop',
  },
]

const mono = "[font-family:'JetBrains_Mono',monospace]"

function ProjectPreview({ type }) {
  const frame =
    'w-full aspect-[1.55] bg-[#0b151c] border border-[#29404b] shadow-[10px_10px_0_#152831] overflow-hidden relative'
  const bar = 'h-5 flex items-center gap-1 px-[9px] border-b border-[#263943]'
  const dot = 'w-[5px] h-[5px] rounded-full bg-[#617177]'

  if (type === 'dashboard') {
    return (
      <div className={frame}>
        <div className={bar}>
          <span className={dot} /><span className={dot} /><span className={dot} />
        </div>
        <div className={`${mono} text-[9px] leading-[1.8] text-[#9fb2ac] px-[18px] py-5`}>
          <b className="text-[#d9a8fb] font-normal">const</b> products = <em className="text-[#c6ff3d] not-italic">await</em> fetchProducts()<br />
          products.map(product =&gt; {'{'}<br />
          &nbsp;&nbsp;title: product.name,<br />
          &nbsp;&nbsp;image: product.image,<br />
          &nbsp;&nbsp;featured: <strong className="text-[#f0ae78] font-normal">true</strong><br />
          {'}'})<br />
          <i className="block not-italic text-[#c6ff3d] mt-[10px]">Successfully loaded 24 products</i>
        </div>
      </div>
    )
  }

  if (type === 'portfolio') {
    return (
      <div className={frame}>
        <div className={bar}>
          <span className={dot} /><span className={dot} /><span className={dot} />
        </div>
        <div className="bg-[#edf0ec] h-[calc(100%-20px)] text-[#132129] px-[25px] py-[18px]">
          <div className={`${mono} font-bold text-[8px] border-b border-[#c7d0cb] pb-3`}>
            VINSON <small className="float-right text-[6px] font-normal">WORK&nbsp;&nbsp; ABOUT&nbsp;&nbsp; CONTACT</small>
          </div>
          <h3 className="text-[clamp(20px,4vw,42px)] leading-[0.95] tracking-[-0.08em] mt-[16%] mb-0 font-sans">
            Building digital<br /><mark className="bg-transparent text-[#789d20]">experiences</mark><br />with intention.
          </h3>
          <div className="w-[45%] border-b-2 border-[#789d20] mt-[15px]" />
        </div>
      </div>
    )
  }

  return (
    <div className={`${frame} flex bg-[#dddacb] text-[#20251f]`}>
      <div className={`${mono} w-[26%] bg-[#c7d0b5] px-3 py-5 flex flex-col gap-[18px] text-[7px]`}>
        <b className="font-sans font-bold text-[18px] tracking-[-0.1em] mb-5">Nikavi</b>
        <span>NEW IN</span>
        <span>COLLECTIONS</span>
        <span>JOURNAL</span>
      </div>
      <div className="flex-1 px-[22px] py-[18px]">
        <div className={`${mono} text-[7px] border-b border-[#a7aa9d] pb-[11px]`}>
          SUMMER / 2026 <b className="float-right">SHOP NOW ↗</b>
        </div>
        <div className="flex items-center justify-around h-[80%]">
          {/* <div
            className="w-[30%] aspect-[0.75] bg-[#b7b397]"
            style={{
              clipPath:
                'polygon(23% 12%, 38% 0, 62% 0, 77% 12%, 100% 25%, 82% 45%, 73% 35%, 73% 100%, 27% 100%, 27% 35%, 18% 45%, 0 25%)',
            }}
          /> */}
          <div className=" flex flex-col gap-2">
            <small className={`${mono} text-[7px]`}>ESSENTIAL FORM</small>
            <h3 className="text-[clamp(24px,4vw,45px)] leading-[0.85] tracking-[-0.1em] my-[10px_0_20px] font-sans">
              Minimal<br />everyday.
            </h3>
            <button className="bg-transparent border border-[#20251f] px-[10px] py-[7px] text-[8px] mt-2">
              Explore Products ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Featured', 'Websites']
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((_, index) => (activeFilter === 'Featured' ? index !== 2 : index === 1))

  const eyebrow = `${mono} text-[10px] leading-[1.4] tracking-[0.16em] uppercase text-[#91a0a4]`
  const border = 'border-[#29404b]'
  const primary = '#c6ff3d'
  const muted = '#91a0a4'

  return (
    <div className="bg-gray-900" id='project'>
      <main
        className="max-w-[1160px] mx-auto px-[22px] md:px-12 overflow-hidden bg-gray-900 text-[#f2f4f2] [font-family:'DM_Sans',sans-serif]"
      >
        {/* Header */}

        {/* Intro */}
        <section className="pt-[86px] pb-[90px] md:pt-[112px] md:pb-[126px] text-center">
          <p className={eyebrow}>Selected work / 2024—26</p>
          <h1 className="text-[clamp(64px,11vw,134px)] tracking-[-0.09em] leading-[0.9] my-6 font-bold">
            Projects<span className="text-[0.8em]" style={{ color: primary }}>.</span>
          </h1>
          <p className="max-w-[360px] mx-auto text-[14px] leading-[1.7]" style={{ color: muted }}>
            A collection of digital products, experiments, and experiences built with care.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className={`border-t ${border}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-0 pt-[25px] pb-[42px]">
            <p className={eyebrow}>01 — Selected projects</p>
            <div className="flex gap-[9px]">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-[15px] py-2 text-[11px] cursor-pointer transition-colors ${activeFilter === filter
                    ? 'border-[#c6ff3d] text-[#c6ff3d]'
                    : `${border} text-[#91a0a4] hover:border-[#c6ff3d] hover:text-[#c6ff3d]`
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div>
            {visibleProjects.map((project, index) => (
              <article
                key={project.title}
                className={`grid grid-cols-1 md:grid-cols-[38px_1fr_1.12fr] gap-[14px] md:gap-[26px] pt-[38px] pb-[50px] md:pt-[48px] md:pb-[64px] border-t ${border} items-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 duration-700 fill-mode-both ${index === 1 ? 'delay-100' : index === 2 ? 'delay-150' : ''
                  }`}
              >
                <div className={`hidden md:block ${mono} text-[11px] pt-[5px]`} style={{ color: primary }}>
                  0{index + 1}
                </div>

                <div className="min-w-0 md:order-none order-2">
                  <p className={`${mono} text-[10px] tracking-[0.12em] uppercase mb-4`} style={{ color: primary }}>
                    {project.preview === 'shop'
                      ? 'E-commerce / Full stack'
                      : project.preview === 'portfolio'
                        ? 'Personal / Portfolio'
                        : 'Product / Showcase'}
                  </p>
                  <h2 className="text-[clamp(25px,3vw,39px)] tracking-[-0.06em] leading-none mb-[18px]">
                    {project.title}
                  </h2>
                  <p
                    className="text-[12px] leading-[1.7] max-w-none md:max-w-[390px] mb-[21px]"
                    style={{ color: muted }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-[6px] mb-[27px]">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className={`${mono} text-[9px] rounded-full px-[9px] py-[5px] text-[#c8d0cf] bg-[#1a303b]`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-[22px] text-[11px] font-semibold">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-80"
                        style={{ color: primary }}
                      >
                        GitHub <span className="ml-1.5">↗</span>
                      </a>
                    )}
                    {project.links.host && (
                      <a
                        href={project.links.host}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-80"
                        style={{ color: primary }}
                      >
                        View project <span className="ml-1.5">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="min-w-0 order-1 md:order-none mb-[14px] md:mb-0">
                  <ProjectPreview type={project.preview} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section id="about" className={`py-[100px] md:py-[140px] border-t ${border}`}>
          <p className={eyebrow}>02 — What I do</p>
          <h2 className="text-[clamp(42px,7vw,88px)] tracking-[-0.09em] leading-[0.95] my-[22px]">
            Thoughtful interfaces<br />for <span style={{ color: primary }}>curious people.</span>
          </h2>
          <a className="text-[12px] font-semibold" style={{ color: primary }} href="#about" onClick={scrollToContact}>
            More about me <span className="ml-1.5">↗</span>
          </a>
        </section>

        {/* Footer */}
        <footer id="contact" className={`border-t ${border} pt-[60px] pb-[35px]`}>
          <p className={`${mono} text-[11px] mb-[14px]`} style={{ color: muted }}>Have a project in mind?</p>
          <a
            className="text-[clamp(35px,5vw,60px)] font-bold tracking-[-0.08em]"
            style={{ color: primary }}
            href="mailto:josephvinson0305@gmail.com"
          >
            Let&apos;s talk <span className="ml-1.5">↗</span>
          </a>
          <small className={`${mono} block text-[10px] mt-[100px]`} style={{ color: muted }}>
            © 2026 Vinson. Built with curiosity.
          </small>
        </footer>
      </main>
    </div>

  )
}