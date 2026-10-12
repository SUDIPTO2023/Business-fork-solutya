import { motion } from "framer-motion";


function Discovery() {


    const itemAnimation = {

        hidden:{
            opacity:0,
            y:40
        },

        show:{
            opacity:1,
            y:0
        }

    };



    const imageAnimation = {

        hidden:{
            opacity:0,
            scale:0.5
        },

        show:{
            opacity:1,
            scale:1
        }

    };



    return (

        <section className="discovery">


            <div className="discovery-container">



                <motion.div

                    className="discovery-row row-one"

                    initial="hidden"

                    whileInView="show"

                    viewport={{
                        once:true,
                        amount:0.2
                    }}

                    transition={{
                        staggerChildren:0.2
                    }}

                >


                    <motion.div

                        className="discovery-item"

                        variants={itemAnimation}

                    >

                        <span>
                            01
                        </span>

                        <h2>
                            Discovery & Consultation
                        </h2>

                    </motion.div>





                    <motion.div

                        className="discovery-pill discovery-img-one"

                        variants={imageAnimation}

                        whileHover={{
                            scale:1.08,
                            rotate:5
                        }}

                        transition={{
                            duration:0.3
                        }}

                    />





                    <motion.div

                        className="discovery-item"

                        variants={itemAnimation}

                    >

                        <span>
                            02
                        </span>

                        <h2>
                            Market Research
                        </h2>

                    </motion.div>



                </motion.div>







                <motion.div

                    className="discovery-row row-two"

                    initial="hidden"

                    whileInView="show"

                    viewport={{
                        once:true
                    }}

                    transition={{
                        staggerChildren:0.2
                    }}

                >



                    <motion.div

                        className="discovery-item"

                        variants={itemAnimation}

                    >

                        <span>
                            03
                        </span>

                        <h2>
                            Strategy Development
                        </h2>


                    </motion.div>






                    <motion.div

                        className="discovery-circle discovery-img-two"

                        variants={imageAnimation}

                        whileHover={{
                            scale:1.1,
                            rotate:360
                        }}

                        transition={{
                            duration:0.6
                        }}

                    />






                    <motion.div

                        className="discovery-item"

                        variants={itemAnimation}

                    >

                        <span>
                            04
                        </span>

                        <h2>
                            Creative Execution
                        </h2>


                    </motion.div>






                    <motion.div

                        className="discovery-pill discovery-img-three"

                        variants={imageAnimation}

                        whileHover={{
                            scale:1.08,
                            rotate:-5
                        }}

                        transition={{
                            duration:0.3
                        }}

                    />



                </motion.div>









                <motion.div

                    className="discovery-row row-three"

                    initial="hidden"

                    whileInView="show"

                    viewport={{
                        once:true
                    }}

                    transition={{
                        staggerChildren:0.2
                    }}

                >




                    <motion.div

                        className="discovery-pill discovery-img-four"

                        variants={imageAnimation}

                        whileHover={{
                            scale:1.08,
                            rotate:5
                        }}

                    />






                    <motion.div

                        className="discovery-item"

                        variants={itemAnimation}

                    >

                        <span>
                            05
                        </span>


                        <h2>
                            Campaign Launch
                        </h2>


                    </motion.div>







                    <motion.div

                        className="discovery-circle discovery-img-five"

                        variants={imageAnimation}

                        whileHover={{
                            scale:1.1,
                            rotate:-360
                        }}

                        transition={{
                            duration:0.6
                        }}

                    />







                    <motion.div

                        className="discovery-item"

                        variants={itemAnimation}

                    >

                        <span>
                            06
                        </span>


                        <h2>
                            Growth Insights
                        </h2>


                    </motion.div>





                </motion.div>



            </div>





            <div className="discovery-bottom-shape"></div>

            <div className="section-seam-fix"></div>



        </section>

    )


}


export default Discovery;