import Footer from "./Footer"
import Navbar from "./Navbar"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

export default function Layout({children} : {children: any}) {
    return(
        <div>
            <Navbar />
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
                className=""

            >
                <main>{children}</main>
            </motion.main>
            <Footer />
        </div>
    )
}