import React, { useRef, useEffect, useState } from 'react'
import '../Components/Style/style.css'
import { motion, useInView } from 'framer-motion'
import Navbar from './NavBar/Navbar'
import Footer from '../Components/Footer/Footer'
import goodfood from './Images/goodfood.png'
import travel from './Images/travel.png'
import airplane from './Images/airplane.png'
import beach from './Images/beach.png'
import mountain from './Images/mountain.png'
import balloon from './Images/balloon.png'
import slider1 from './Images/slider1.jpg'
import slider2 from './Images/slider2.jpg'
import slider3 from './Images/slider3.jpg'
import WelcomeImg from './Images/WelcomeImg.jpg'
import blog1 from './Images/blog1.jpg'
import blog2 from './Images/blog2.jpg'
import blog3 from './Images/blog3.jpg'
import cust1 from './Images/customer1.jpg'
import cust2 from './Images/customer2.jpg'
import cust3 from './Images/customer3.jpg'


const Home = () => {

    // For Second Section Image
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.8 }); // Trigger only once when 80% image is in view
    // For Second Section Text
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: 0.8 });
    // For Third Section Text
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 0.8 });

    // For FirstRow Card Images
    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true, amount: 0.8 });

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, { once: true, amount: 0.8 });

    const ref5 = useRef(null);
    const isInView5 = useInView(ref5, { once: true, amount: 0.8 });

    // For SecondRow Card Images
    const ref6 = useRef(null);
    const isInView6 = useInView(ref6, { once: true, amount: 0.8 });

    const ref7 = useRef(null);
    const isInView7 = useInView(ref7, { once: true, amount: 0.8 });

    const ref8 = useRef(null);
    const isInView8 = useInView(ref8, { once: true, amount: 0.8 });

    // For Slider Heading
    const ref9 = useRef(null);
    const isInView9 = useInView(ref9, { once: true, amount: 0.8 });

    // For Slider
    const ref10 = useRef(null);
    const isInView10 = useInView(ref10, { once: true, amount: 0.2 });

    // For Recent Blog Posts
    const ref11 = useRef(null);
    const isInView11 = useInView(ref11, { once: true, amount: 0.2 });

    const ref12 = useRef(null);
    const isInView12 = useInView(ref12, { once: true, amount: 0.2 });

    const ref13 = useRef(null);
    const isInView13 = useInView(ref13, { once: true, amount: 0.2 });

    const ref14 = useRef(null);
    const isInView14 = useInView(ref14, { once: true, amount: 0.2 });

    // For Happy Customers
    const ref15 = useRef(null);
    const isInView15 = useInView(ref15, { once: true, amount: 0.2 });

    const ref16 = useRef(null);
    const isInView16 = useInView(ref16, { once: true, amount: 0.2 });

    const ref17 = useRef(null);
    const isInView17 = useInView(ref17, { once: true, amount: 0.2 });

    const ref18 = useRef(null);
    const isInView18 = useInView(ref18, { once: true, amount: 0.2 });

    //for Top Destination
    const ref19 = useRef(null);
    const isInView19 = useInView(ref19, { once: true, amount: 0.2 });

    const ref20 = useRef(null);
    const isInView20 = useInView(ref20, { once: true, amount: 0.2 });

    const ref21 = useRef(null);
    const isInView21 = useInView(ref21, { once: true, amount: 0.2 });

    const ref22 = useRef(null);
    const isInView22 = useInView(ref22, { once: true, amount: 0.2 });

    const ref23 = useRef(null);
    const isInView23 = useInView(ref23, { once: true, amount: 0.2 });

    // For Slider to automatically move to next
    useEffect(() => {
        let currentIndex = 0;

        const showNextImage = () => {

            const carouselItems = document.querySelectorAll('.carousel-item');
            carouselItems[currentIndex].classList.remove('active'); //Hide current img
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active'); // Show the next img
            setTimeout(showNextImage, 3000);
        };

        // Start the automatic scrolling
        const timeoutId = setTimeout(showNextImage, 3000);
        return () => clearTimeout(timeoutId);

    }, []);

    const openVideo = (e) => {
        e.preventDefault();
        document.getElementById("videoIframe").src = "https://player.vimeo.com/video/93951774";
        document.getElementById("videoModal").style.display = 'block';
    }

    const closeVideo = (e) => {

        e.preventDefault();
        document.getElementById("videoIframe").src = "";
        document.getElementById("videoModal").style.display = 'none';
    }


    return (
        <>
            {/* First Section */}
            <section>
                <div className="container-fluid" id='home_Navimg'>
                    <div className='navbar_margin'>
                        <Navbar />
                        <h4 className="hepta-heading" style={{ marginTop: "-30px", fontWeight: "bolder" }}>Hepta</h4>
                        <div>
                            <motion.h1
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: "1", delay: "0" }}
                                className="font">Travel & Tours</motion.h1>

                            <motion.p
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: "1", delay: "0" }} className="para">Explore, Dream, Discover</motion.p>
                            <motion.div
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: "1", delay: "0" }} className="text-center">
                                <button className="btn btn-outline-light" style={{ border: "2px solid white" }} to="/">
                                    <b>Learn More</b>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Left Side Image with Right Side Text */}
            <div className="container-fluid home_topMargin" >
                <div class="row">
                    <motion.div ref={ref}
                        initial={{ y: 100, opacity: 0 }} // Start from below the viewport
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Animate in when in view, reset when out of view
                        transition={{ duration: 0.8, ease: "easeOut" }} // Adjust the timing as per your need
                        class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card cardsBorder">
                            <div class="card-body first_image_padding">
                                <img src={WelcomeImg} class="img-fluid" alt="Responsive image" />
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
                            <div class="card-body first_image_text">
                                <h2 className='font_fam'>
                                    <b>Welcome To Our Website</b>
                                </h2>
                                <p  >Far far away, behind the word mountains, far from the countries
                                    <br />Vokalia and Consonantia, there live the blind texts.
                                    Separated they live <br /> in Bookmarksgrove right at the coast of the Semantics, a large <br />
                                    language ocean.<br /><br />
                                    A small river named Duden flows by their place and supplies it with the <br /> necessary regelialia.</p>
                                <br />

                                <button className='btn btn-success'>
                                    <a href="#" class="btn-play d-flex" onClick={openVideo} >
                                        <span><i class="fa fa-play"></i></span>
                                        <span style={{ paddingLeft: "5px" }}>Watch The Video</span>
                                    </a>
                                </button>

                                {/* <!-- Modal to show the video --> */}
                                <div id="videoModal" className='modal'>
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" id="videoIframe" width="100%" src="" frameborder="0" allowfullscreen>
                                        </iframe>
                                    </div><br /><br />
                                    <button onClick={closeVideo} className='btn btn-danger' style={{ marginTop: "5px" }}>Close</button><br />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div >
            </div ><br /><br /><br />

            {/* Cards Section */}
            <div className="container-fluid home_topMargin background">
                {/* Heading */}
                <motion.div
                    ref={ref2}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center">
                    <h1 className='font_fam'>Experience Once In Your Life Time</h1>
                    <p  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br />
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />
                        Semantics, a large language ocean.</p>
                </motion.div><br />

                {/* First Images Row */}
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card cardsBorder background">
                            <motion.div
                                ref={ref3}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card-body ">
                                <div className="text-center">
                                    <img src={goodfood} class="img-fluid" alt="Responsive image" />
                                    <h2 className='font_fam'>Good Foods</h2>
                                    <p  >Far far away, behind the word mountains, far <br />
                                        from the countries Vokalia and Consonantia, <br />
                                        there live the blind texts.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardsBorder background">
                            <motion.div
                                ref={ref4}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView4 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} class="card-body ">
                                <div className="text-center">
                                    <img src={travel} class="img-fluid" alt="Responsive image" />
                                    <h2 className='font_fam'>Travel Anywhere</h2>
                                    <p  >Far far away, behind the word mountains, far <br />
                                        from the countries Vokalia and Consonantia, <br />
                                        there live the blind texts.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardsBorder background">
                            <motion.div
                                ref={ref5}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView5 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card-body">
                                <div className="text-center">
                                    <img src={airplane} class="img-fluid" alt="Responsive image" />
                                    <h2 className='font_fam'>Airplane</h2>
                                    <p  >Far far away, behind the word mountains, far <br />
                                        from the countries Vokalia and Consonantia, <br />
                                        there live the blind texts.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Second Images Row */}
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card cardsBorder background">
                            <motion.div
                                ref={ref6}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView6 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card-body ">
                                <div className="text-center">
                                    <img src={beach} class="img-fluid" alt="Responsive image" />
                                    <h2 className='font_fam'>Beach Resord</h2>
                                    <p>Far far away, behind the word mountains, far <br />
                                        from the countries Vokalia and Consonantia, <br />
                                        there live the blind texts.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardsBorder background">
                            <div class="card-body first_image_text">
                                <motion.div
                                    ref={ref7}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={isInView7 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} className="text-center">
                                    <img src={mountain} class="img-fluid" alt="Responsive image" />
                                    <h2 className='font_fam'>Mountain Climbing</h2>
                                    <p>Far far away, behind the word mountains, far <br />
                                        from the countries Vokalia and Consonantia, <br />
                                        there live the blind texts.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardsBorder background">
                            <motion.div
                                ref={ref8}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView8 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
                                class="card-body first_image_text">
                                <div className="text-center">
                                    <img src={balloon} class="img-fluid" alt="Responsive image" />
                                    <h2 className='font_fam'>Hot Air Balloon</h2>
                                    <p>Far far away, behind the word mountains, far <br />
                                        from the countries Vokalia and Consonantia, <br />
                                        there live the blind texts.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div><br />

            <motion.div
                ref={ref9}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView9 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="container-fluid home_topMargin">
                <div className="text-center">
                    <h1 className="headingSize font_fam">
                        International Tour Management
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />
                        Semantics, a large language ocean.</p>
                </div>
            </motion.div>

            {/* Images Slider */}
            <motion.div ref={ref10}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView10 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
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
            </motion.div>

            {/* Blogs Section */}
            <div className="container-fluid background1 blog_section_margin" >
                <motion.div ref={ref11}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView11 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className="text-center blog_section_margin">
                    <h1 className="headingSize font_fam">
                        Recent Blog Post
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />
                        Semantics, a large language ocean.</p>
                </motion.div><br />

                <div className="container-fluid blog_container">
                    <div class="row">
                        <div class="col-sm-4">
                            <motion.div ref={ref12}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView12 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card cardsBorder">
                                <img src={blog1} alt="Responsive image" className='img-fluid' />
                                <div class="card-body">
                                    <h3 className='font_fam'>45 Best Places To Unwind</h3>
                                    <p>Far far away, behind the word<br /> mountains, far
                                        from the countries<br /> Vokalia and Consonantia,
                                        there live the <br />blind texts.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-sm-4">
                            <motion.div ref={ref13}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView13 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} class="card cardsBorder">
                                <img src={blog2} alt="Responsive image" className='img-fluid' />
                                <div class="card-body">
                                    <h3 className='font_fam'>45 Best Places To Unwind</h3>
                                    <p>Far far away, behind the word<br /> mountains, far
                                        from the countries<br /> Vokalia and Consonantia,
                                        there live the <br />blind texts.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-sm-4">
                            <motion.div ref={ref14}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView14 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card cardsBorder">
                                <img src={blog3} alt="Responsive image" className='img-fluid' />
                                <div class="card-body">
                                    <h3 className='font_fam'>45 Best Places To Unwind</h3>
                                    <p>Far far away, behind the word<br /> mountains, far
                                        from the countries<br /> Vokalia and Consonantia,
                                        there live the <br />blind texts.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div><br /><br /><br />
            </div> <br /> <br /><br />

            {/* Happy Customers Sections */}
            <div className="container-fluid">
                <motion.div ref={ref15}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView15 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center">
                    <h1 className="headingSize font_fam">
                        Happy Customers
                    </h1>
                </motion.div><br /><br />

                <div className="container-fluid blog_container">
                    <div class="row">
                        <div class="col-sm-4">
                            <motion.div ref={ref16}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView16 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card cardsBorder">
                                <div class="card-body ">
                                    <img src={cust1} alt="Responsive image" className='customer_cards_images' />
                                    <p className='customer_cards_margin'>“Far far away, behind the word mountains, <br />
                                        far from the countries Vokalia and <br />
                                        Consonantia, there live the blind texts. <br />
                                        Separated they live in Bookmarksgrove right <br />
                                        at the coast of the Semantics, a large <br />
                                        language ocean.”<br /><br />

                                        — Clare Gupta</p>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-sm-4">
                            <motion.div ref={ref17}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView17 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} class="card cardsBorder">
                                <img src={cust2} alt="Responsive image" className='customer_cards_images' />
                                <div class="card-body">
                                    <p className='customer_cards_margin'>“Far far away, behind the word mountains, <br />
                                        far from the countries Vokalia and <br />
                                        Consonantia, there live the blind texts. <br />
                                        Separated they live in Bookmarksgrove right <br />
                                        at the coast of the Semantics, a large <br />
                                        language ocean.”<br /><br />

                                        — Rogie Slater</p>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-sm-4">
                            <motion.div ref={ref18}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView18 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card cardsBorder">
                                <img src={cust3} alt="Responsive image" className='customer_cards_images' />
                                <div class="card-body">
                                    <p className='customer_cards_margin'>“Far far away, behind the word mountains, <br />
                                        far from the countries Vokalia and <br />
                                        Consonantia, there live the blind texts. <br />
                                        Separated they live in Bookmarksgrove right <br />
                                        at the coast of the Semantics, a large <br />
                                        language ocean.”<br /><br />

                                        — John Doe</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Destinations */}
            <div className="container-fluid" >
                <motion.div ref={ref19}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView19 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className="text-center">
                    <h1 className="headingSize font_fam">
                        Top Destination
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo <br />
                        odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores <br />
                        quis, blanditiis laboriosam alias. Sed.</p>
                </motion.div><br />

                <div className="container-fluid ">
                    <div class="row">
                        <div class="col-sm-3 mb-3 mb-sm-0">
                            <motion.div ref={ref20}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView20 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card ">
                                <div class="card-body blogs_cardBorder">
                                    <img src={blog1} alt="Responsive image" className='img-fluid' />
                                    <h4 class="card-title font_fam">Food & Wines</h4>
                                    <div className="d-flex">
                                        <div>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="far fa-star" style={{ color: "gold" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-sm-3">
                            <motion.div ref={ref21}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView21 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card ">
                                <div class="card-body blogs_cardBorder">
                                    <img src={blog2} alt="Responsive image" className='img-fluid' />
                                    <h4 class="card-title font_fam">Resort & Spa</h4>
                                    <div className="d-flex">
                                        <div>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="far fa-star" style={{ color: "gold" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-sm-3">
                            <motion.div ref={ref22}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView22 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 3 }} class="card ">
                                <div class="card-body blogs_cardBorder">
                                    <img src={blog3} alt="Responsive image" className='img-fluid' />
                                    <h4 class="card-title font_fam">Hotel Rooms</h4>
                                    <div className="d-flex">
                                        <div>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="far fa-star" style={{ color: "gold" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-sm-3">
                            <motion.div ref={ref23}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView23 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 4 }} class="card ">
                                <div class="card-body blogs_cardBorder">
                                    <img src={slider3} alt="Responsive image" className='img-fluid' />
                                    <h4 class="card-title font_fam">Mountain Climbing</h4>
                                    <div className="d-flex">
                                        <div>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="fas fa-star" style={{ color: "gold" }}></i>
                                            <i class="far fa-star" style={{ color: "gold" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>


            {/* Footer */}
            <Footer />
        </>
    )
}
export default Home