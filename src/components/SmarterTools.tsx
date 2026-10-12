import { motion } from "framer-motion";


const pricingContainer = {

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



const pricingItem = {

    hidden: {
        opacity: 0,
        y: 60
    },

    show: {
        opacity: 1,
        y: 0
    }

};



function SmarterTools() {

    return (

        <motion.section

            className="smarter-tools"

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


            <div className="smarter-tools-container">



                <motion.div

                    className="tools-heading"

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}

                    viewport={{
                        once: true
                    }}

                >


                    <h2>
                        Smarter Business Management Tools
                        <br />
                        for Measurable Growth
                    </h2>



                    <p>
                        Powerful automation, intelligent insights, and streamlined workflows—built to help teams operate
                        efficiently, scale faster, and make better decisions every day.
                    </p>


                </motion.div>







                <motion.div

                    className="pricing-cards"

                    variants={pricingContainer}

                    initial="hidden"

                    whileInView="show"

                    viewport={{
                        once: true
                    }}

                >






                    {/* Starter Card */}


                    <motion.div

                        className="pricing-card"

                        variants={pricingItem}

                        whileHover={{
                            y: -15,
                            scale: 1.03
                        }}

                        transition={{
                            duration: 0.3
                        }}

                    >


                        <div className="pricing-card-top">


                            <motion.div

                                className="pricing-icon"

                                animate={{
                                    y: [0, -6, 0]
                                }}

                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}

                            >

                                <img
                                    src="assets/eye.png"
                                    alt="Starter Spark"
                                />

                            </motion.div>



                            <button className="pricing-learn-btn">
                                Learn More
                            </button>


                        </div>





                        <motion.div

                            className="pricing-price"

                            initial={{
                                scale: 0.8
                            }}

                            whileInView={{
                                scale: 1
                            }}

                            transition={{
                                duration: 0.5
                            }}

                        >

                            <h3>
                                $12
                            </h3>

                            <span>
                                USD / per month
                            </span>


                        </motion.div>



                        <h4>
                            Starter Spark
                        </h4>



                        <p className="pricing-desc">

                            Perfect for individuals or small teams starting to streamline their workflow.

                        </p>





                        <motion.button

                            className="invest-btn"

                            whileHover={{
                                scale: 1.05
                            }}

                            whileTap={{
                                scale: 0.95
                            }}

                        >

                            Start Investing

                        </motion.button>






                        <div className="pricing-note">

                            <img
                                src="assets/mdi_brain.png"
                                alt="check"
                            />

                            <span>
                                Free 7-Day Trial
                            </span>


                        </div>



                    </motion.div>









                    {/* Featured Card */}


                    <motion.div

                        className="pricing-card featured-pricing-card"

                        variants={pricingItem}

                        whileHover={{
                            y: -20,
                            scale: 1.05
                        }}

                        transition={{
                            duration: 0.3
                        }}

                    >



                        <motion.div

                            className="best-deal"

                            animate={{
                                y: [0, -5, 0]
                            }}

                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}

                        >

                            <img
                                src="./assets/vectorr.png"
                                alt="arrow"
                            />

                            <span>
                                Best Deal Plan
                            </span>


                        </motion.div>







                        <div className="featured-card-body">


                            <motion.div

                                className="pricing-icon"

                                animate={{
                                    rotate: 360
                                }}

                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}

                            >

                                <img
                                    src="assets/eye.png"
                                    alt="Pro Pulse"
                                />

                            </motion.div>






                            <div className="pricing-price">


                                <h3>
                                    $29
                                </h3>


                                <span>
                                    USD / per month
                                </span>


                            </div>




                            <h4>
                                Pro Pulse
                            </h4>




                            <p className="pricing-desc">

                                Full access to advanced features, real-time analytics, and powerful team tools.

                            </p>





                            <motion.button

                                className="invest-btn active-invest-btn"

                                whileHover={{
                                    scale: 1.08
                                }}

                                whileTap={{
                                    scale: 0.95
                                }}

                            >

                                Start Investing

                            </motion.button>





                            <div className="pricing-note">

                                <img
                                    src="assets/mdi_brain.png"
                                    alt="check"
                                />


                                <span>
                                    Best for Growing Teams
                                </span>


                            </div>



                        </div>



                    </motion.div>









                    {/* Scale Card */}



                    <motion.div

                        className="pricing-card"

                        variants={pricingItem}

                        whileHover={{
                            y: -15,
                            scale: 1.03
                        }}

                    >


                        <div className="pricing-card-top">


                            <motion.div

                                className="pricing-icon"

                                animate={{
                                    y: [0, -6, 0]
                                }}

                                transition={{
                                    duration: 3,
                                    repeat: Infinity
                                }}

                            >

                                <img
                                    src="assets/eye.png"
                                    alt="Scale Surge"
                                />

                            </motion.div>



                            <button className="pricing-learn-btn">

                                Learn More

                            </button>


                        </div>




                        <div className="pricing-price">

                            <h3>
                                $69
                            </h3>


                            <span>
                                USD / per month
                            </span>


                        </div>





                        <h4>
                            Scale Surge
                        </h4>



                        <p className="pricing-desc">

                            For organizations that need enterprise-level performance and dedicated support.

                        </p>





                        <motion.button

                            className="invest-btn"

                            whileHover={{
                                scale: 1.05
                            }}

                        >

                            Start Investing

                        </motion.button>




                        <div className="pricing-note">

                            <img
                                src="assets/mdi_brain.png"
                                alt="check"
                            />

                            <span>
                                Includes Dedicated Manager & Support
                            </span>


                        </div>



                    </motion.div>




                </motion.div>



            </div>



        </motion.section>

    )

}


export default SmarterTools;