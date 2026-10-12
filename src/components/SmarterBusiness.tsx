import { motion } from "framer-motion";


function SmarterBusiness() {

    return (

        <motion.section

            className="smarter-business"

            initial={{
                opacity: 0,
                y: 60
            }}

            whileInView={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.8
            }}

            viewport={{
                once: true,
                amount: 0.2
            }}

        >



            <div className="smarter-container">



                <motion.div

                    className="smarter-left"

                    initial={{
                        opacity: 0,
                        x: -60
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    viewport={{
                        once: true
                    }}

                >



                    <h2 className="smarter-title">
                        Smarter Business Strategies
                        <br />
                        for Sustainable Growth
                    </h2>




                    <motion.div

                        className="strategy-tabs"

                        initial={{
                            opacity: 0,
                            y: 30
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.6,
                            delay: 0.2
                        }}

                        viewport={{
                            once: true
                        }}

                    >

                        <button>
                            Operations
                        </button>


                        <button className="active-tab">
                            Analytics
                        </button>


                        <button>
                            Copywriting
                        </button>


                    </motion.div>






                    <motion.div

                        className="growth-content"

                        initial={{
                            opacity: 0,
                            y: 40
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.7,
                            delay: 0.3
                        }}

                        viewport={{
                            once: true
                        }}

                    >

                        <h3>
                            YOUR DIGITAL GROWTH PARTNER FOR THE LONG RUN
                        </h3>


                        <p>
                            Stay ahead of competition with strategic management tools that help you plan smarter, execute
                            faster, and scale with confidence.
                        </p>


                    </motion.div>








                    <motion.div

                        className="reliability-box"

                        initial={{
                            opacity: 0,
                            scale: 0.7
                        }}

                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}

                        transition={{
                            duration: 0.6,
                            delay: 0.4
                        }}

                        viewport={{
                            once: true
                        }}

                    >



                        <div className="reliability-circles">

                            <div className="reliability-circle reliability-img-one"></div>

                            <div className="reliability-circle reliability-img-two"></div>

                            <div className="reliability-circle reliability-img-three"></div>


                        </div>




                        <div className="reliability-text">

                            <h4>
                                99.8%
                            </h4>


                            <p>
                                Uptime Reliability
                            </p>


                        </div>


                    </motion.div>




                </motion.div>









                <motion.div

                    className="smarter-right"

                    initial={{
                        opacity: 0,
                        x: 60
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    viewport={{
                        once: true
                    }}

                >




                    <motion.div

                        className="smarter-image-box"

                        initial={{
                            opacity: 0,
                            scale: 0.8,
                            y: 50
                        }}

                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}

                        viewport={{
                            once: true
                        }}


                        whileHover={{

                            scale: 1.05,

                            y: -10

                        }}


                        whileTap={{

                            scale: 0.95,

                            rotate: 2

                        }}

                    >

                    </motion.div>



                    <div className="smarter-stats">


                        <motion.div

                            className="smarter-stat"

                            whileHover={{
                                y: -10,
                                scale: 1.03
                            }}

                            transition={{
                                duration: 0.3
                            }}

                        >


                            <motion.div

                                className="stat-icon"

                                animate={{
                                    rotate: 360
                                }}

                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}

                            >

                                <img
                                    src="assets/vector7.png"
                                    alt="Management icon"
                                />

                            </motion.div>



                            <div className="stat-content">

                                <h3>
                                    120+
                                </h3>


                                <p>
                                    Businesses powered by our integrated management ecosystem.
                                </p>


                            </div>


                        </motion.div>







                        <motion.div

                            className="smarter-stat"

                            whileHover={{
                                y: -10,
                                scale: 1.03
                            }}

                            transition={{
                                duration: 0.3
                            }}

                        >


                            <motion.div

                                className="stat-icon"

                                animate={{
                                    rotate: 360
                                }}

                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}

                            >

                                <img
                                    src="./assets/vector7.png"
                                    alt="Management icon"
                                />

                            </motion.div>



                            <div className="stat-content">

                                <h3>
                                    98%
                                </h3>


                                <p>
                                    Accuracy in reporting with advanced monitoring and data-driven diagnostics.
                                </p>


                            </div>


                        </motion.div>


                    </div>





                </motion.div>






            </div>


            <div className="smarter-bottom-shape"></div>




        </motion.section>

    )


}


export default SmarterBusiness;