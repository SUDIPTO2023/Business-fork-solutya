import { motion } from "framer-motion";
import logo from "../assets/Vector.png";
import arrowUp from "../assets/arrow-up.png";


function Navbar() {

    const menuAnimation = {
        hidden:{
            opacity:0,
            y:-20
        },

        show:{
            opacity:1,
            y:0
        }
    };


    return (

        <nav className="navbar">


            <motion.div

                className="logo"

                initial={{
                    opacity:0,
                    scale:0.8
                }}

                animate={{
                    opacity:1,
                    scale:1
                }}

                transition={{
                    duration:0.6
                }}

            >

                <div>

                    <img 
                        src={logo}
                        alt="Logo"
                    />

                </div>


                <h2>
                    /
                </h2>


                <h2>
                    Fork
                </h2>


            </motion.div>


            <motion.ul

                className="nav-menu"

                initial="hidden"

                animate="show"

                transition={{
                    staggerChildren:0.15
                }}

            >


                {[
                    "Features",
                    "Solutions",
                    "Solutions",
                    "Resources"
                ].map((item,index)=>(


                    <motion.li

                        key={index}

                        variants={menuAnimation}

                        whileHover={{
                            y:-3
                        }}

                    >

                        <a href="#">

                            {item}

                        </a>


                    </motion.li>


                ))}


            </motion.ul>








            <motion.button

                className="nav-button"

                initial={{
                    opacity:0,
                    x:40
                }}

                animate={{
                    opacity:1,
                    x:0
                }}

                transition={{
                    duration:0.7,
                    delay:0.4
                }}


                whileHover={{
                    scale:1.05
                }}


                whileTap={{
                    scale:0.95
                }}

            >



                <motion.div

                    className="arrow-box"

                    animate={{
                        x:[0,5,0]
                    }}

                    transition={{
                        duration:2,
                        repeat:Infinity,
                        ease:"easeInOut"
                    }}

                >

                    <img
                        src={arrowUp}
                        alt="arrow"
                    />


                </motion.div>




                <span>
                    GET STARTED
                </span>



            </motion.button>



        </nav>

    )

}


export default Navbar;