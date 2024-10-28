import React, { useRef } from 'react'
import '../Components/Style/style.css'
import Navbar from './NavBar/Navbar'
import { motion, useInView } from 'framer-motion'
import goodfood from './Images/goodfood.png'
import travel from './Images/travel.png'
import airplane from './Images/airplane.png'
import beach from './Images/beach.png'
import mountain from './Images/mountain.png'
import balloon from './Images/balloon.png'
import hotels from './Images/hotels.jpg'
import slider1 from './Images/slider1.jpg'
import slider2 from './Images/slider2.jpg'
import slider3 from './Images/slider3.jpg'
import blog1 from './Images/blog1.jpg'
import blog2 from './Images/blog2.jpg'
import blog3 from './Images/blog3.jpg'
import Footer from './Footer/Footer'

const Hotels = () => {
  //For First Row (2nd Section)
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.2 });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, amount: 0.2 });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true, amount: 0.2 });

  //For Second Row (2nd Section)
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true, amount: 0.2 });

  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { once: true, amount: 0.2 });


  const ref6 = useRef(null);
  const isInView6 = useInView(ref6, { once: true, amount: 0.2 });

  //For Third Section
  const ref7 = useRef(null);
  const isInView7 = useInView(ref7, { once: true, amount: 0.2 });


  const ref8 = useRef(null);
  const isInView8 = useInView(ref8, { once: true, amount: 0.2 });

  //For Forth Section
  const ref9 = useRef(null);
  const isInView9 = useInView(ref9, { once: true, amount: 0.2 });


  const ref10 = useRef(null);
  const isInView10 = useInView(ref10, { once: true, amount: 0.2 });

  //For Slider
  const ref11 = useRef(null);
  const isInView11 = useInView(ref11, { once: true, amount: 0.2 });

  //for Fifth Section
  const ref12 = useRef(null);
  const isInView12 = useInView(ref12, { once: true, amount: 0.2 });

  const ref13 = useRef(null);
  const isInView13 = useInView(ref13, { once: true, amount: 0.2 });

  const ref14 = useRef(null);
  const isInView14 = useInView(ref14, { once: true, amount: 0.2 });

  const ref15 = useRef(null);
  const isInView15 = useInView(ref15, { once: true, amount: 0.2 });


  return (
    <>
      {/* Main Image */}
      <div className="container-fluid" id='hotels_img'>
        <div className='navbar_margin'>
          <Navbar />
          <h4 className="hepta-heading" style={{ marginTop: "-30px", fontWeight: "bolder" }}>Hepta</h4>
          <div>
            <motion.h1
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: "1", delay: "0" }}
              className="font">Our Hotel</motion.h1>

            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: "1", delay: "0" }} className="para">Stay once, carry memories forever</motion.p>
          </div>
        </div>
      </div>
      {/* Main Image Div Ends*/}


      {/* First Row of Images */}
      <div className="container-fluid HotelsTop_margin">
        <div class="row">
          <div class="col-sm-4">
            <div class="card cardsBorder">
              <motion.div
                ref={ref1}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card-body ">
                <div className="text-center">
                  <img src={goodfood} class="img-fluid" alt="Responsive image" />
                  <h2 className='font_fam'>Good Foods</h2>
                  <p className='aboutUs_text'>Far far away, behind the word mountains, far <br />
                    from the countries Vokalia and Consonantia, <br />
                    there live the blind texts.</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card cardsBorder">
              <motion.div
                ref={ref2}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} class="card-body ">
                <div className="text-center">
                  <img src={travel} class="img-fluid" alt="Responsive image" />
                  <h2 className='font_fam'>Travel Anywhere</h2>
                  <p className='aboutUs_text'>Far far away, behind the word mountains, far <br />
                    from the countries Vokalia and Consonantia, <br />
                    there live the blind texts.</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card cardsBorder">
              <motion.div
                ref={ref3}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card-body">
                <div className="text-center">
                  <img src={airplane} class="img-fluid" alt="Responsive image" />
                  <h2 className='font_fam'>Airplane</h2>
                  <p className='aboutUs_text'>Far far away, behind the word mountains, far <br />
                    from the countries Vokalia and Consonantia, <br />
                    there live the blind texts.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Second Row of Images */}
        <div class="row">
          <div class="col-sm-4">
            <div class="card cardsBorder">
              <motion.div
                ref={ref4}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView4 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card-body ">
                <div className="text-center">
                  <img src={beach} class="img-fluid" alt="Responsive image" />
                  <h2 className='font_fam'>Beach Resord</h2>
                  <p className='aboutUs_text'>Far far away, behind the word mountains, far <br />
                    from the countries Vokalia and Consonantia, <br />
                    there live the blind texts.</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card cardsBorder">
              <div class="card-body first_image_text">
                <motion.div
                  ref={ref5}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView5 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} className="text-center">
                  <img src={mountain} class="img-fluid" alt="Responsive image" />
                  <h2 className='font_fam'>Mountain Climbing</h2>
                  <p className='aboutUs_text'>Far far away, behind the word mountains, far <br />
                    from the countries Vokalia and Consonantia, <br />
                    there live the blind texts.</p>
                </motion.div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card cardsBorder">
              <motion.div
                ref={ref6}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView6 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
                class="card-body first_image_text">
                <div className="text-center">
                  <img src={balloon} class="img-fluid" alt="Responsive image" />
                  <h2 className='font_fam'>Hot Air Balloon</h2>
                  <p className='aboutUs_text'>Far far away, behind the word mountains, far <br />
                    from the countries Vokalia and Consonantia, <br />
                    there live the blind texts.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div> <br /><br />

      {/* Left Side Image with Right Side Text */}
      <div className="container-fluid">
        <div class="row">
          <motion.div ref={ref7}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView7 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0, ease: "easeOut" }} class="col-sm-6">
            <div class="card cardsBorder">
              <div class="card-body">
                <img src={hotels} class="img-fluid" alt="Responsive image" />
              </div>
            </div>
          </motion.div>


          <div class="col-sm-6">
            <div class="card cardsBorder">
              <motion.div ref={ref8}
                initial={{ x: -100, opacity: 0 }}  // Start off-screen to the left (negative x value)
                animate={isInView8 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}  // Move to the center of the screen (x: 0)
                transition={{ duration: 0.8, delay: 0, ease: "easeOut" }} class="card-body">
                <h2 className='font_fam'>Family Room</h2>
                <p className='aboutUs_text'>Far far away, behind the word mountains, far from the countries
                  <br />Vokalia and Consonantia, there live the blind texts.
                  Separated they live <br /> in Bookmarksgrove right at the coast of the Semantics, a large <br />
                  language ocean.<br /><br />
                  A small river named Duden flows by their place and supplies it with the <br /> necessary regelialia.</p>
                <br />
                <button className='btn btn-primary'>Learn More</button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image with Left Side Text */}
      <div className="container-fluid" >
        <div class="row">
          <motion.div
            ref={ref10}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView10 ? { x: -0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
            class="col-sm-6">
            <div class="card cardsBorder" style={{ marginTop: "-80px" }}>
              <div class="card-body">
                <h2 className='font_fam'>Presidential Room</h2>
                <p className='aboutUs_text'>Far far away, behind the word mountains, far from the countries
                  <br />Vokalia and Consonantia, there live the blind texts.
                  Separated they live <br /> in Bookmarksgrove right at the coast of the Semantics, a large <br />
                  language ocean.<br /><br />
                  A small river named Duden flows by their place and supplies it with the <br /> necessary regelialia.</p>
                <br />
                <button className='btn btn-primary'>Learn More</button>
              </div>
            </div>
          </motion.div>

          <motion.div ref={ref9}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView9 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" ,delay:0}}
            class="col-sm-6">
            <div class="card cardsBorder">
              <div class="card-body">
                <img src={hotels} class="img-fluid" alt="Responsive image" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Internation Tour Management Div */}
      <motion.div
        ref={ref10}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView10 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} className="container-fluid home_topMargin">
        <div className="text-center">
          <h1 className="headingSize font_fam">
            International Tour Management
          </h1>
          <p className='aboutUs_text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />
            Semantics, a large language ocean.</p>
        </div>
      </motion.div> <br />

      {/* Images Slider */}
      <motion.div ref={ref11}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView11 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
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

      {/* More Hotel Features */}
      <div className="container-fluid background1 blog_section_margin" >
        <motion.div ref={ref12}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView12 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} className="text-center blog_section_margin">
          <h1 className="headingSize font_fam">
            More Hotel Features
          </h1>
          <p className='aboutUs_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo <br />
            odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores <br />
            quis, blanditiis laboriosam alias. Sed.</p>
        </motion.div><br />

        <div className="container-fluid blog_container">
          <div class="row">
            <div class="col-sm-4">
              <motion.div ref={ref13}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView13 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card cardsBorder">
                <img src={blog1} alt="Responsive image" className='img-fluid' />
                <div class="card-body">
                  <h3 className='font_fam'>Five Reasons to Stay <br />at Villa Resort</h3>
                </div>
              </motion.div>
            </div>
            <div class="col-sm-4">
              <motion.div ref={ref14}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView14 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} class="card cardsBorder">
                <img src={blog2} alt="Responsive image" className='img-fluid' />
                <div class="card-body">
                  <h3 className='font_fam'>Five Reasons to Stay <br />at Villa Resort</h3>
                </div>
              </motion.div>
            </div>

            <div class="col-sm-4">
              <motion.div ref={ref15}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView15 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card cardsBorder">
                <img src={blog3} alt="Responsive image" className='img-fluid' />
                <div class="card-body">
                  <h3 className='font_fam'>Five Reasons to Stay <br />at Villa Resort</h3>

                </div>
              </motion.div>
            </div>
          </div>
        </div><br /><br /><br />
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Hotels