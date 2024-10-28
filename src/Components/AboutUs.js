import React, { useRef } from 'react'
import Navbar from './NavBar/Navbar'
import { motion, useInView } from 'framer-motion'
import aboutUs from './Images/aboutUs.jpg'
import slider1 from './Images/slider1.jpg'
import slider2 from './Images/slider2.jpg'
import slider3 from './Images/slider3.jpg'
import customer1 from './Images/customer1.jpg'
import customer2 from './Images/WelcomeImg.jpg'
import customer3 from './Images/customer3.jpg'
import Footer from './Footer/Footer'


const AboutUs = () => {

    /* Left Side Image with Right side Text */
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const ref1 = useRef();
    const isInView1 = useInView(ref1, { once: true, amount: 0.2 })

    // For Text and Image Slider
    const ref2 = useRef();
    const isInView2 = useInView(ref2, { once: true, amount: 0.2 })

    const ref3 = useRef();
    const isInView3 = useInView(ref3, { once: true, amount: 0.2 })

    // For Team Section Text
    const ref4 = useRef();
    const isInView4 = useInView(ref4, { once: true, amount: 0.2 })

    // For Team Section Images (First Row)
    const ref5 = useRef();
    const isInView5 = useInView(ref5, { once: true, amount: 0.2 })

    const ref6 = useRef();
    const isInView6 = useInView(ref6, { once: true, amount: 0.2 })

    const ref7 = useRef();
    const isInView7 = useInView(ref7, { once: true, amount: 0.2 })

    // For Team Section Images (Second Row)
    const ref8 = useRef();
    const isInView8 = useInView(ref8, { once: true, amount: 0.2 })

    const ref9 = useRef();
    const isInView9 = useInView(ref9, { once: true, amount: 0.2 })

    const ref10 = useRef();
    const isInView10 = useInView(ref10, { once: true, amount: 0.2 })

    return (
        <>
            {/* Main Image */}
            <div className="container-fluid" id='aboutUs_img'>
                <div className='navbar_margin'>
                    <Navbar />
                    <h4 className="hepta-heading" style={{ marginTop: "-30px", fontWeight: "bolder" }}>Hepta</h4>
                    <div>
                        <motion.h1
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ duration: "1", delay: "0" }}
                            className="font">About Us</motion.h1>

                        <motion.p
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ duration: "1", delay: "0" }} className="para">Everything you can imagine is real.</motion.p>
                    </div>
                </div>
            </div>

            {/* Left Side Image with Right side Text */}
            <div className="container-fluid home_topMargin" >
                <div class="row">
                    <motion.div ref={ref}// Start from below the viewport
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Animate in when in view, reset when out of view
                        transition={{ duration: 0.8, ease: "easeOut" }} // Adjust the timing as per your need
                        class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card cardsBorder">
                            <div class="card-body first_image_padding">
                                <img src={aboutUs} class="img-fluid" alt="Responsive image" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref1}
                        initial={{ y: 100, opacity: 0 }} // Start from below the viewport
                        animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Animate in when in view, reset when out of view
                        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }} // Adjust the timing as per your need
                        class="col-sm-6">
                        <div class="card cardsBorder">
                            <div class="card-body first_image_text aboutUs_text">
                                <h2 >
                                    <b>Welcome To Our Website</b>
                                </h2>
                                <p>Far far away, behind the word mountains, far from the countries
                                    <br />Vokalia and Consonantia, there live the blind texts.
                                    Separated they live <br /> in Bookmarksgrove right at the coast of the Semantics, a large <br />
                                    language ocean.<br /><br />
                                    A small river named Duden flows by their place and supplies it with the <br /> necessary regelialia.</p>
                                <br />
                                <button className='btn btn-outline-primary send_msgBtn'>Learn More</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Text with Image Slider */}
            <motion.div
                ref={ref2}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="container-fluid home_topMargin">
                <div className="text-center aboutUs_text">
                    <h1 className="headingSize">
                        International Tour Management
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />
                        Semantics, a large language ocean.</p>
                </div>
            </motion.div><br />

            {/* Images Slider */}
            <motion.div ref={ref3}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="container-fluid slider_size">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slider1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slider2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slider3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </motion.div> <br /><br />


            {/* For Team Images Text */}
            <motion.div
                ref={ref4}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView4 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="container-fluid aboutUs_topMargin">
                <div className="text-center aboutUs_text">
                    <h1 className="headingSize">
                        Team
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />
                        Semantics, a large language ocean.</p>
                </div>
            </motion.div> 

            {/* For Team Images */}
            <div className="container-fluid HotelsTop_margin blog_container aboutUs_bottomMargin">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card cardsBorder">
                            <motion.div
                                ref={ref5}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView5 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card-body ">
                                <div>
                                    <img src={customer1} class="img-fluid" alt="Responsive image" />
                                    <h5 className='no-underline '>CEO, Co-Founder</h5>
                                    <h3 className='font_fam'>Vince Richardson</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardsBorder">
                            <motion.div
                                ref={ref6}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView6 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} class="card-body ">
                                <div>
                                    <img src={customer2} class="img-fluid" alt="Responsive image" />
                                    <h5 className='no-underline '>CTO, Co-Founder</h5>
                                    <h3 className='font_fam'>Jean Love</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardsBorder">
                            <motion.div
                                ref={ref7}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView7 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card-body">
                                <div>
                                    <img src={customer3} class="img-fluid" alt="Responsive image" />
                                    <h5 className='no-underline '>Marketer, Co-Founder</h5>
                                    <h3 className='font_fam'>Jeff Stark</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div><br /><br />

                {/* Second Images Row */}
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card cardsBorder">
                            <motion.div
                                ref={ref8}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView8 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card-body ">
                                <div>
                                    <img src={customer1} class="img-fluid" alt="Responsive image" />
                                    <h5 className='no-underline '>CEO, Co-Founder</h5>
                                    <h3 className='font_fam'>Vince Richardson</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardsBorder">
                            <motion.div
                                ref={ref9}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView9 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} class="card-body ">
                                <div>
                                    <img src={customer2} class="img-fluid" alt="Responsive image" />
                                    <h5 className='no-underline '>CTO, Co-Founder</h5>
                                    <h3 className='font_fam'>Jean Love</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardsBorder">
                            <motion.div
                                ref={ref10}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView10 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card-body">
                                <div>
                                    <img src={customer3} class="img-fluid" alt="Responsive image" />
                                    <h5 className='no-underline '>Marketer, Co-Founder</h5>
                                    <h3 className='font_fam'>Jeff Stark</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div><br /><br />
            </div>

            {/* Footer */}
            <Footer />


        </>
    )
}

export default AboutUs