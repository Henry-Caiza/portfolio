import { motion } from "framer-motion"
import { AnimatedText } from "./AnimatedText"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}

            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

function Skills() {
    return (
        <>
            <AnimatedText className="font-bold text-8xl w-full text-center dark:text-light mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" text='&nbsp;Skills' />
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[45vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            ">
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{ scale: 1.05 }}
                >
                    WEB
                </motion.div>
                <Skill name='CSS' x='0vw' y='-7vw' />
                <Skill name='HTML' x='12vw' y='2vw' />
                <Skill name='JavaScript' x='24vw' y='4vw' />
                <Skill name='ReactJS' x='4vw' y='10vw' />
                <Skill name='NextJS' x='-15vw' y='-12vw' />
                <Skill name='TypeScript' x='0vw' y='-18vw' />
                <Skill name='Figma' x='15vw' y='-12vw' />
                <Skill name='Java' x='32vw' y='-5vw' />
                <Skill name='C#' x='-22vw' y='-18vw' />
                <Skill name='MySQL' x='-4vw' y='21vw' />
                <Skill name='PostgreSQL' x='25vw' y='16vw' />
                <Skill name='Tailwind CSS' x='-32vw' y='-5vw' />
                <Skill name='NodeJS' x='-25vw' y='12vw' />
                <Skill name='MongoDB' x='21vw' y='-18vw' />
                <Skill name='Docker' x='-20vw' y='2vw' />
            </div>
        </>
    )
}

export { Skills }