import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { FaBehance } from "react-icons/fa" // Import Behance icon

const projects = [
  {
    name: "Bazarpay Wholesaler UX Case Study",
    description:
      "This is a case study of an app that I've designed for my client",
    image: "/wholesale.png",
    behance: "https://www.behance.net/gallery/201439443/Bazarpay-Wholesaler-UX-Case-Study",
    link: "https://www.behance.net/gallery/201439443/Bazarpay-Wholesaler-UX-Case-Study",
  },
  {
    name: "100 Days of Daily UI",
    description:
      "I've taken an everday UI Challenge for 100 days and this is the compilation of what I've done.",
    image: "/dailyui.png",
    behance: "https://www.behance.net/gallery/201117593/Daily-UI-100-Days-of-Daily-UI-Challenge",
    link: "https://www.figma.com/community/file/1338059066334201983",
  },
  {
    name: "Polio CRM SaaS Landing Page",
    description:
      "This is a landing page of a CRM Landing Page",
    image: "/polio.png",
    behance: "https://www.behance.net/gallery/198474281/Polio-CRM-SaaS-Landing-Page",
    link: "https://www.figma.com/community/file/1371567137719211765",
  },
  {
    name: "Tesla Homepage Recreated",
    description:
      "This is a recreation I've done of Tesla Homepage",
    image: "/tesla.png",
    behance: "https://www.behance.net/gallery/189406901/Tesla-Homepage-Design",
    link: "https://www.figma.com/community/file/1330237119538682628",
  },
  {
    name: "Agency Website (Recreated)",
    description:
      "This is a website that I've been recreated",
    image: "/agency.png",
    behance: "https://www.behance.net/gallery/194590613/Agency-Website-Inspired",
    link: "https://www.behance.net/gallery/194590613/Agency-Website-Inspired",
  },
  {
    name: "Bazarpay Retailer App UI",
    description:
      "I have recently worked on a freelance project to design an app. This project contains the UI pages of that particular app. In another project, I'd like to breakdown the UX strategy behind it.",
    image: "/retailer.png",
    behance: "https://www.behance.net/gallery/198912839/Bazarpay-Retailer-App-UI-Design",
    link: "https://www.behance.net/gallery/198912839/Bazarpay-Retailer-App-UI-Design",
  },
  {
    name: "Sushiman",
    description:
      "Sushiman is a web app that is primarily an imaginary restaurant theme based on japanese culture.",
    image: "/sushiman.png",
    github: "https://github.com/mubinakib5/sushiman",
    link: "https://sushiman-teal.vercel.app/",
  },
  {
    name: "Advice",
    description: "Advice App is an API Based app, that generated random motivational quotes.",
    image: "/advice.png",
    github: "https://github.com/mubinakib5/advice-react-app",
    link: "https://advice-react-app-delta.vercel.app/",
  },
  {
    name: "Netflix - Clone",
    description:
      "This is a Netflix Clone app created with HTML, CSS and Javascript.",
    image: "/netflix.png",
    github: "https://github.com/mubinakib5/Netflix-Clone",
    link: "https://netflix-clone-ten-wine.vercel.app/",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.behance && (
                        <Link href={project.behance} target="_blank">
                          <FaBehance
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
