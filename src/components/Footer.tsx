import { motion } from "framer-motion";


const footerContainer = {
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


const footerItem = {
    hidden:{
        opacity:0,
        y:40
    },

    show:{
        opacity:1,
        y:0
    }
};



function Footer(){

    return(

        <motion.footer

            className="footer"

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


            <div className="footer-container">



                <motion.div

                    className="footer-newsletter"

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:0.7
                    }}

                    viewport={{
                        once:true
                    }}

                >


                    <div className="newsletter-text">

                        <h3>
                            Join Our Newsletter
                        </h3>


                        <p>
                            Subscribe to get updates on product launches,
                            <br/>
                            financial tips, and exclusive offers.
                        </p>


                    </div>





                    <motion.form

                        className="newsletter-form"

                        whileHover={{
                            scale:1.02
                        }}

                    >

                        <input
                            type="email"
                            placeholder="Enter Your Email"
                        />



                        <motion.button

                            type="submit"

                            whileHover={{
                                scale:1.05
                            }}

                            whileTap={{
                                scale:0.95
                            }}

                        >

                            <span>
                                Send
                            </span>


                            <img
                                src="assets/arrow-up.png"
                                alt="Send"
                            />


                        </motion.button>



                    </motion.form>



                </motion.div>







                <motion.div

                    className="footer-main"

                    variants={footerContainer}

                    initial="hidden"

                    whileInView="show"

                    viewport={{
                        once:true
                    }}

                >




                    <motion.div

                        className="footer-brand"

                        variants={footerItem}

                    >



                        <motion.div

                            className="footer-logo"

                            whileHover={{
                                scale:1.05
                            }}

                        >

                            <img
                                src="assets/Vector.png"
                                alt="Fork Logo"
                            />

                            <span>
                                /
                            </span>

                            <h2>
                                Fork
                            </h2>


                        </motion.div>






                        <div className="footer-social">

                            <p>
                                Follow Us
                            </p>


                            <div className="social-icons">


                                <motion.a

                                    href="#"

                                    whileHover={{
                                        y:-5,
                                        scale:1.1
                                    }}

                                >

                                    <img
                                        src="assets/Vector (4).png"
                                        alt="Facebook"
                                    />

                                </motion.a>





                                <motion.a

                                    href="#"

                                    whileHover={{
                                        y:-5,
                                        scale:1.1
                                    }}

                                >

                                    <img
                                        src="assets/Vector (5).png"
                                        alt="Instagram"
                                    />

                                </motion.a>





                                <motion.a

                                    href="#"

                                    whileHover={{
                                        y:-5,
                                        scale:1.1
                                    }}

                                >

                                    <img
                                        src="assets/twitter.png"
                                        alt="Twitter"
                                    />

                                </motion.a>



                            </div>


                        </div>



                    </motion.div>









                    <motion.div

                        className="footer-column"

                        variants={footerItem}

                    >

                        <h3>
                            About Us
                        </h3>

                        <a href="#">
                            Our Story
                        </a>

                        <a href="#">
                            Mission & Values
                        </a>

                        <a href="#">
                            Careers
                        </a>

                        <a href="#">
                            Press
                        </a>


                    </motion.div>






                    <motion.div

                        className="footer-column"

                        variants={footerItem}

                    >

                        <h3>
                            Product
                        </h3>

                        <a href="#">
                            Features
                        </a>

                        <a href="#">
                            Pricing
                        </a>

                        <a href="#">
                            Docs API
                        </a>

                        <a href="#">
                            Use Cases
                        </a>


                    </motion.div>







                    <motion.div

                        className="footer-column"

                        variants={footerItem}

                    >

                        <h3>
                            Resources
                        </h3>

                        <a href="#">
                            Help Center
                        </a>

                        <a href="#">
                            FAQ
                        </a>

                        <a href="#">
                            Tutorials
                        </a>

                        <a href="#">
                            Status Page
                        </a>


                    </motion.div>



                </motion.div>







                <motion.div

                    className="footer-bottom"

                    initial={{
                        opacity:0
                    }}

                    whileInView={{
                        opacity:1
                    }}

                    transition={{
                        duration:0.8,
                        delay:0.3
                    }}

                    viewport={{
                        once:true
                    }}

                >


                    <p>
                        © 2025 Fork. All Rights Reserved
                    </p>



                    <div className="footer-bottom-links">


                        <a href="#">
                            Privacy Policy
                        </a>


                        <a href="#">
                            Terms & Conditions
                        </a>


                        <a href="#">
                            FAQs
                        </a>


                    </div>


                </motion.div>



            </div>


        </motion.footer>

    )

}


export default Footer;