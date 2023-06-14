import Link from "next/link"
import { CircularText } from "./Icons"


function HireMe() {
    return (
        <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden md:left-8 md:right-auto md:top-0 md:bottom-auto md:absolute sm:left-0 z-10 ">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24 ">
                <CircularText className={'fill-dark animate-spin-slow dark:fill-greenLight '} />
                <Link href='mailto:henrypcv1995@gmail.com' className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark dark:border-greenLight w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-greenLight dark:text-dark hover:dark:bg-dark hover:dark:text-greenLight hover:dark:border-greenLight md:w-12 md:h-12 md:text-[10px] dark:drop-shadow-[0px_0px_4px_#4FD59D] drop-shadow-[0px_0px_4px_#000] sm:dark:drop-shadow-[0px_0px_2px_#61EFB3] sm:drop-shadow-[0px_0px_2px_#000]">
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export { HireMe }