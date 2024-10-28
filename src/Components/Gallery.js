import React, { useRef } from 'react'
import Navbar from './NavBar/Navbar'
import { motion } from 'framer-motion'
import blog1 from './Images/blog1.jpg'
import blog2 from './Images/blog2.jpg'
import blog3 from './Images/blog3.jpg'
import blog4 from './Images/hotels.jpg'
import customer1 from './Images/customer1.jpg'
import customer2 from './Images/customer2.jpg'
import customer3 from './Images/customer3.jpg'
import customer4 from './Images/WelcomeImg.jpg'
import team1 from './Images/slider1.jpg'
import team2 from './Images/slider2.jpg'
import main from './Images/main.jpg'
import hotels from './Images/hotels.jpg'
import Footer from './Footer/Footer'


const Gallery = () => {

  return (
    <>
      {/* Main Image */}
      <div className="container-fluid" id='Gallery_img'>
        <div className='navbar_margin'>
          <Navbar />
          <h4 className='hepta-heading' style={{ marginTop: "-30px", fontWeight: "bolder" }}>Hepta</h4>
          <div>
            <motion.h1
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: "1", delay: "0" }}
              className="font">Our Gallery</motion.h1>

            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: "1", delay: "0" }} className="para">Everything you can imagine is real.</motion.p>
          </div>
        </div>
      </div>
      {/* Main Image Div Ends*/}


      {/* Images  Start*/}
      <div className="container-fluid blog_container gallery_bottomMargin">
        {/* First Images Row */}
        <div class="row">
          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body ">
                <div>
                  <img src={blog1} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body ">
                <div>
                  <img src={blog2} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body">
                <div>
                  <img src={blog3} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body">
                <div>
                  <img src={blog4} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

        </div><br />

        {/* Second Images Row */}
        <div class="row">
          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body ">
                <div>
                  <img src={customer1} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body ">
                <div>
                  <img src={customer2} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body">
                <div>
                  <img src={customer3} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body">
                <div>
                  <img src={customer4} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

        </div><br />

        {/* Third Images Row */}
        <div class="row">
          <div class="col-sm-6">
            <div class="card cardsBorder">
              <div class="card-body ">
                <div>
                  <img src={team1} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card cardsBorder">
              <div class="card-body ">
                <div>
                  <img src={team2} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>
        </div><br />

        {/* Forth Images Row */}
        <div class="row">
          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body ">
                <div>
                  <img src={hotels} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body ">
                <div>
                  <img src={main} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body">
                <div>
                  <img src={blog1} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card cardsBorder">
              <div class="card-body">
                <div>
                  <img src={blog2} class="img-fluid" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>
        </div><br />
      </div>
      {/* Images  Ends*/}

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Gallery