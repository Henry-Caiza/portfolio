import { useScroll, motion, spring } from "framer-motion"
import { useRef } from "react"
import { LiIcon } from "./LiIcon"


const Deatails = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: spring }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position} &nbsp;
                    <a href={companyLink} target="_blank" className="text-primary dark:text-greenLight capitalize">
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {work}
                </p>
            </motion.div>
        </li>)
}

function Experience() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )

    return (
        <div className="mb-36 xs:mb-8 sm:mb-20 md:mb-24 lg:mb-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
                    <Deatails
                        position='Intern' company='Riobamba GADM '
                        companyLink='https://www.gadmriobamba.gob.ec/'
                        time='2018-2019' address='Riobamba, EC'
                        work="Preventive and corrective maintenance of computers, installation and updating of software, inventory control and microsoft excel and word classes."
                    />
                    <Deatails
                        position='Computer Systems Engineering Intern' company='Max Compu'
                        companyLink='https://maxcompu.com/'
                        time='2021-2022' address='Riobamba, EC'
                        work="Design and prototyping of an omnichannel business model, Benchmarking of web pages similar to Max Compu. Identification of the geographic market of Max Compu. Identification of the company's problem. Elicitation of requirements Creation of high and low level prototypes for the administrative part of the system web. Evaluation of the prototypes by means of: Heuristic evaluation plural tour questionnaire ASQ."
                    />
                    <Deatails
                        position='LO Developer and Programming teacher' company='Cedia'
                        companyLink='https://roa.cedia.edu.ec/'
                        time='2022-2023' address='Riobamba, EC'
                        work="Creation of Learning Objects for the teaching of programming for children between 11 and 12 years old. The Scratch programming language was taken into account so that children learn in a fun and visual way. Web 2.0 tools were used in the implementation of the LO."
                    />
                </ul>
            </div>
        </div>
    )
}

export { Experience }