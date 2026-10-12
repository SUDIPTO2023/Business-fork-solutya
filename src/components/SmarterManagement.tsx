import { motion } from "framer-motion";


const featureContainer = {

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



const featureItem = {

    hidden:{
        opacity:0,
        y:40
    },

    show:{
        opacity:1,
        y:0
    }

};



function SmarterManagement(){

    return(

        <motion.section

            className="smarter-management"

            initial={{
                opacity:0,
                y:60
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:0.8
            }}

            viewport={{
                once:true,
                amount:0.2
            }}

        >



            <div className="smarter-management-container">



                <motion.div

                    className="smarter-features"

                    variants={featureContainer}

                    initial="hidden"

                    whileInView="show"

                    viewport={{
                        once:true
                    }}

                >

                    <motion.div

                        className="smart-feature"

                        variants={featureItem}

                        whileHover={{
                            y:-10,
                            scale:1.03
                        }}

                        transition={{
                            duration:0.3
                        }}

                    >

                        <motion.div

                            className="smart-icon-box"

                            animate={{
                                y:[0,-6,0]
                            }}

                            transition={{
                                duration:3,
                                repeat:Infinity,
                                ease:"easeInOut"
                            }}

                        >

                            <img 
                                src="assets/Vector (1).png"
                                alt="Built for Simplicity"
                            />

                        </motion.div>


                        <h3>
                            Built for Simplicity
                        </h3>


                        <p>
                            Give your team intuitive interface to manage operations.
                        </p>


                    </motion.div>
                    <motion.div

                        className="smart-feature active-smart-feature"

                        variants={featureItem}

                        whileHover={{
                            y:-12,
                            scale:1.05
                        }}

                        transition={{
                            duration:0.3
                        }}

                    >


                        <motion.div

                            className="smart-icon-box"

                            animate={{
                                rotate:360
                            }}

                            transition={{
                                duration:10,
                                repeat:Infinity,
                                ease:"linear"
                            }}

                        >

                            <img 
                                src="assets/eye.png"
                                alt="Smart Performance Tracking"
                            />

                        </motion.div>




                        <h3>
                            Smart Performance Tracking
                        </h3>


                        <p>
                            Set measurable goals, track performance in real time, and gain insights.
                        </p>



                    </motion.div>

                    <motion.div

                        className="smart-feature"

                        variants={featureItem}

                        whileHover={{
                            y:-10,
                            scale:1.03
                        }}

                        transition={{
                            duration:0.3
                        }}

                    >


                        <motion.div

                            className="smart-icon-box"

                            animate={{
                                y:[0,-6,0]
                            }}

                            transition={{
                                duration:3,
                                repeat:Infinity,
                                ease:"easeInOut"
                            }}

                        >

                            <img 
                                src="assets/Vector (2).png"
                                alt="Fast and Secure Collaboration"
                            />

                        </motion.div>



                        <h3>
                            Fast & Secure Collaboration
                        </h3>


                        <p>
                            Share updates, assign tasks, and communicate seamlessly.
                        </p>


                    </motion.div>

                    <motion.div

                        className="smart-feature"

                        variants={featureItem}

                        whileHover={{
                            y:-10,
                            scale:1.03
                        }}

                        transition={{
                            duration:0.3
                        }}

                    >


                        <motion.div

                            className="smart-icon-box"

                            animate={{
                                y:[0,-6,0]
                            }}

                            transition={{
                                duration:3,
                                repeat:Infinity,
                                ease:"easeInOut"
                            }}

                        >


                            <img 
                                src="assets/Vector (3).png"
                                alt="Actionable Business Insights"
                            />


                        </motion.div>



                        <h3>
                            Actionable Business Insights
                        </h3>


                        <p>
                            Receive recommendations based on data trends and performance.
                        </p>


                    </motion.div>

                </motion.div>

                <motion.div

                    className="smarter-management-content"

                    initial={{
                        opacity:0,
                        x:60
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

                    <h2>
                        Smarter Ways to Manage,
                        <br />
                        Optimize, and Scale
                    </h2>

                    <p className="smarter-management-desc">

                        Explore intelligent tools that help you streamline workflows,
                        improve performance, and manage your entire business.

                    </p>

                    <div className="management-actions">



                        <motion.a

                            href="#"

                            className="management-action"

                            whileHover={{
                                x:10
                            }}

                        >

                            <span>
                                Explore Management Tools
                            </span>



                            <div className="management-arrow">

                                <img 
                                    src="assets/arrow-up.png"
                                    alt="arrow"
                                />

                            </div>


                        </motion.a>

                        <motion.a

                            href="#"

                            className="management-action"

                            whileHover={{
                                x:10
                            }}

                        >

                            <span>
                                Discover Business Insights
                            </span>




                            <div className="management-arrow">

                                <img 
                                    src="assets/arrow-up.png"
                                    alt="arrow"
                                />

                            </div>



                        </motion.a>


                    </div>

                </motion.div>


            </div>


            <div className="smarter-management-bottom-shape"></div>

            <div className="section-seam-fix"></div>


        </motion.section>

    )


}


export default SmarterManagement;