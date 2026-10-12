import { motion } from "framer-motion";


const cardContainer = {
    hidden:{
        opacity:0
    },
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.15
        }
    }
};


const cardItem = {
    hidden:{
        opacity:0,
        y:50
    },
    show:{
        opacity:1,
        y:0
    }
};


function Hero(){

    return(

        <div className="hero-banner">


            {/* Left Callout */}

            <motion.div

                className="hero-callout performance-callout"

                initial={{
                    opacity:0,
                    x:-80
                }}

                animate={{
                    opacity:1,
                    x:0
                }}

                transition={{
                    duration:0.8
                }}

            >

                <div className="callout-pill">
                    OPTIMIZE PERFORMANCE
                </div>


                <img
                    src="./assets/ardw.png"
                    alt=""
                    className="callout-arrow performance-arrow"
                />


            </motion.div>





            {/* Right Callout */}

            <motion.div

                className="hero-callout productivity-callout"

                initial={{
                    opacity:0,
                    x:80
                }}

                animate={{
                    opacity:1,
                    x:0
                }}

                transition={{
                    duration:0.8,
                    delay:0.2
                }}

            >

                <img
                    src="./assets/arup.png"
                    alt=""
                    className="callout-arrow productivity-arrow"
                />


                <div className="callout-pill">
                    IMPROVE PRODUCTIVITY
                </div>


            </motion.div>







            {/* Trusted Section */}

            <motion.div

                className="trusted-section"

                initial={{
                    opacity:0,
                    scale:0.8
                }}

                animate={{
                    opacity:1,
                    scale:1
                }}

                transition={{
                    duration:0.8,
                    delay:0.3
                }}

            >


                <h2>
                    Trusted By
                </h2>


                <div className="trusted-people">

                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>

                </div>


                <h2>
                    25+ Founders & Leaders
                </h2>



                <motion.div

                    className="stars"

                    initial={{
                        opacity:0
                    }}

                    animate={{
                        opacity:1
                    }}

                    transition={{
                        delay:0.6
                    }}

                >

                    {[1,2,3,4,5].map((star)=>(

                        <span key={star}>

                            <i 
                                className="fa-solid fa-star"
                                style={{
                                    color:"rgb(255,212,59)"
                                }}
                            ></i>

                        </span>

                    ))}


                </motion.div>



            </motion.div>








            {/* Hero Text */}

            <motion.div

                className="hero-text"

                initial={{
                    opacity:0,
                    y:70
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:0.9,
                    delay:0.4
                }}

            >


                <motion.h1

                    className="hero-title"

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        delay:0.5
                    }}

                >

                    TRANSFORMING BUSINESS

                </motion.h1>





                <motion.h1

                    className="hero-title2"

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        delay:0.7
                    }}

                >

                    MANAGEMENT FOR THE MODERN ERA

                </motion.h1>





                <motion.p

                    className="hero-desc"

                    initial={{
                        opacity:0
                    }}

                    animate={{
                        opacity:1
                    }}

                    transition={{
                        delay:0.9
                    }}

                >

                    Optimize processes, accelerate decision-making, and boost efficiency with a unified
                    platform designed for modern business management.

                </motion.p>



            </motion.div>









            {/* Buttons */}

            <motion.div

                className="hero-buttons"

                initial={{
                    opacity:0,
                    y:40
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    delay:1
                }}

            >


                <motion.button

                    className="explore-btn"

                    whileHover={{
                        scale:1.08
                    }}

                    whileTap={{
                        scale:0.95
                    }}

                >

                    EXPLORE NOW

                </motion.button>





                <motion.button

                    className="learn-btn"

                    whileHover={{
                        scale:1.08
                    }}

                    whileTap={{
                        scale:0.95
                    }}

                >

                    LEARN MORE

                </motion.button>


            </motion.div>









            {/* Feature Cards */}

            <motion.div

                className="feature-cards"

                variants={cardContainer}

                initial="hidden"

                animate="show"

            >


                {[
                    ["procedure.png","Operational Clarity"],
                    ["conversion.png","Smart Workflow"],
                    ["groups.png","Team Collaboration"],
                    ["avg.png","Real-Time Insights"],
                    ["encrypted.png","Secure Business"]

                ].map((item,index)=>(


                    <motion.div

                        key={index}

                        className={
                            index===2
                            ?
                            "feature-card active-card"
                            :
                            "feature-card"
                        }

                        variants={cardItem}

                        whileHover={{
                            y:-12,
                            scale:1.05
                        }}

                        transition={{
                            duration:0.3
                        }}

                    >

                        <div 
                            className={
                                index===2
                                ?
                                "card-square active-square"
                                :
                                "card-square"
                            }
                        ></div>


                        <img
                            src={`./assets/${item[0]}`}
                            alt={item[1]}
                        />


                        <h2>
                            {item[1]}
                        </h2>


                    </motion.div>


                ))}


            </motion.div>

            <div className="bottom-left-shape"></div>
            <div className="bottom-right-shape"></div>
            <div className="bottom-seam-fix"></div>


        </div>

    )

}


export default Hero;