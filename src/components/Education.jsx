import { useScroll, motion, spring } from "framer-motion"
import { useRef } from "react"
import { LiIcon } from "./LiIcon"
import { AnimatedText } from "./AnimatedText"


const Deatails = ({ type, time, place, info, link }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: spring }}
            >
                <a href={link} target="_blank" className="capitalize font-bold text-2xl sm:text-xl xs:text-lg cursor-pointer hover:underline">{type}
                </a>
                <br />
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {info}
                </p>
            </motion.div>
        </li >)
}

function Education() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )

    return (
        <div className="mb-32 xs:mb-24   ">
            <AnimatedText className="font-bold text-8xl w-full text-center dark:text-light mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" text='&nbsp;Education' />
            {/* <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2> */}

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">

                    <Deatails
                        type='Software Engineer'
                        time='2016-2022'
                        place='Escuela Superior Politécnica de Chimborazo (ESPOCH)'
                        link='https://www.espoch.edu.ec/es/'
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence, DevOps and networks."
                    />
                    <Deatails
                        type='Computer security'
                        time='2019'
                        link='https://www.espoch.edu.ec/es/'
                        place='Escuela Superior Politécnica de Chimborazo (ESPOCH)'
                        info="Completed coursework in computer security related to software such as: email passwords, operating system passwords, among others, using the Kali Linux operating system."
                    />
                    <Deatails
                        type='Online Coursework'
                        time='2022-present'
                        link='https://platzi.com/p/henrypcv1995/'
                        place='Platzi'
                        info="Completed coursework in topics such as Web Development with JavaScript, API REST, React.js, Next.js, npm, Node.js, Database, Tailwind.css and English."
                    />
                </ul>
            </div>
        </div>
    )
}

export { Education }