import { motion } from "framer-motion";


const cardContainer = {

    hidden: {
        opacity: 0
    },

    show: {

        opacity: 1,

        transition: {

            staggerChildren: 0.2

        }

    }

};



const cardItem = {

    hidden: {

        opacity: 0,

        y: 50

    },

    show: {

        opacity: 1,

        y: 0

    }

};



function IntelligentBusiness() {

    return (

        <motion.section

            className="intelligent-business"

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


            <div className="intelligent-container">



                <motion.div

                    className="intelligent-top"

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
                        delay: 0.2
                    }}

                    viewport={{
                        once:true
                    }}

                >

                    <p className="intelligent-intro">

                        Modern business systems built to help organizations operate with more
                        clarity and sustainable growth.

                    </p>


                    <h2 className="intelligent-title">

                        Fully Connected and Intelligent Business Management Ecosystem

                    </h2>


                </motion.div>





                <div className="intelligent-bottom">



                    <motion.div

                        className="business-cards"

                        variants={cardContainer}

                        initial="hidden"

                        whileInView="show"

                        viewport={{
                            once:true
                        }}

                    >



                        <motion.div

                            className="business-card card-one"

                            variants={cardItem}

                            whileHover={{

                                y:-10,

                                scale:1.02

                            }}

                            transition={{

                                duration:0.3

                            }}

                        >


                            <button className="card-learn-btn">

                                Learn More

                            </button>


                            <button className="card-arrow-btn">

                                <img
                                    src="assets/arrow_black.png"
                                    alt="arrow"
                                />

                            </button>



                        </motion.div>






                        <motion.div

                            className="business-card card-two"

                            variants={cardItem}

                            whileHover={{

                                y:-10,

                                scale:1.02

                            }}

                            transition={{

                                duration:0.3

                            }}

                        >



                            <div className="card-two-top">


                                <button className="small-arrow-btn">

                                    <img

                                        src="assets/arrow-up.png"

                                        alt="arrow"

                                    />

                                </button>


                                <button className="card-learn-btn">

                                    Learn More

                                </button>



                            </div>





                            <div className="card-two-content">


                                <p>

                                    Innovate with data-driven insights

                                </p>



                                <h3>

                                    Optimize Performance with End-to-End Business Intelligence

                                </h3>


                            </div>



                        </motion.div>



                    </motion.div>







                    <motion.div

                        className="business-info"

                        initial={{

                            opacity:0,

                            x:50

                        }}

                        whileInView={{

                            opacity:1,

                            x:0

                        }}

                        transition={{

                            duration:0.8,

                            delay:0.3

                        }}

                        viewport={{

                            once:true

                        }}

                    >



                        <div className="management-row">


                            <span className="management-tag">

                                Management

                            </span>



                            <p>

                                Streamline your entire operations with real-time analytics.

                            </p>



                        </div>






                        <div className="business-stats">





                            <motion.div

                                className="stat stat-one"

                                initial={{

                                    opacity:0,

                                    scale:0.5

                                }}

                                whileInView={{

                                    opacity:1,

                                    scale:1

                                }}

                                transition={{

                                    duration:0.5

                                }}

                                viewport={{

                                    once:true

                                }}

                            >


                                <h3>

                                    +35%

                                </h3>


                                <p>

                                    Improved productivity through automated task and workflow.

                                </p>


                            </motion.div>







                            <motion.div

                                className="stat stat-two"

                                initial={{

                                    opacity:0,

                                    scale:0.5

                                }}

                                whileInView={{

                                    opacity:1,

                                    scale:1

                                }}

                                transition={{

                                    duration:0.5,

                                    delay:0.2

                                }}

                                viewport={{

                                    once:true

                                }}

                            >


                                <h3>

                                    -40%

                                </h3>


                                <p>

                                    Reduction in overhead with optimized resource allocation.

                                </p>


                            </motion.div>





                        </div>



                    </motion.div>




                </div>



            </div>



        </motion.section>

    )

}


export default IntelligentBusiness;