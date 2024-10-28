import React from 'react'
import Navbar from './NavBar/Navbar'
import { motion } from 'framer-motion'
import customer1 from './Images/news2.jpg'
import customer2 from './Images/news4.jpg'
import customer3 from './Images/news3.jpg'
import customer4 from './Images/news1.jpg'
import blog1 from './Images/blog1.jpg'
import Footer from './Footer/Footer'

const News = () => {
  return (
    <>
      {/* Main Image */}
      <div className="container-fluid" id='news_img'>
        <div className='navbar_margin'>
          <Navbar />
          <h4 className='hepta-heading' style={{ marginTop: "-30px",fontWeight:"bolder" }}>Hepta</h4>
          <div>
            <motion.h1
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: "1", delay: "0" }}
              className="font">Blog</motion.h1>

            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: "1", delay: "0" }} className="para">Everything you can imagine is real.</motion.p>
          </div>
        </div>
      </div>
      {/* Main Img End */}

      {/* For Images */}
      <div className="container-fluid blog_container news_bottomMargin">
        <div className="row">
          <div className="col-lg-8">
            {/* First Row Contains 2 Images */}
            <div class="row">
              <div class="col-sm-6">
                <div class="card blogs_cardBorder">
                  <div class="card-body ">
                    <div>
                      <img src={customer1} class="img-fluid" alt="Responsive image" style={{ height: "400px", width: "320px" }} />
                      <h5 className='no-underline '>February 26, 2018</h5>
                      <h4 className='font_fam'>Traveling on a Budget</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="card blogs_cardBorder">
                  <div class="card-body ">
                    <div>
                      <img src={customer2} class="img-fluid" alt="Responsive image" style={{ height: "400px", width: "320px" }} />
                      <h5 className='no-underline '>February 26, 2019</h5>
                      <h4 className='font_fam'>The Ultimate Adventure</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div> <br />

            {/* Second Row Contains 2 Images */}
            <div className="col-lg-14">
              <div className="row">
                <div class="col-sm-6">
                  <div class="card blogs_cardBorder">
                    <div class="card-body ">
                      <div>
                        <img src={customer3} class="img-fluid" alt="Responsive image" style={{ height: "400px", width: "320px" }} />
                        <h5 className='no-underline '>February 26, 2020</h5>
                        <h4 className='font_fam'>Foodie Adventures</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card blogs_cardBorder">
                    <div class="card-body ">
                      <div>
                        <img src={customer4} class="img-fluid" alt="Responsive image" style={{ height: "400px", width: "320px" }} />
                        <h5 className='no-underline '>February 26, 2021</h5>
                        <h4 className='font_fam'>Photography Journeys</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 Images Div End */}

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Search Field */}
            <div className="mb-4  ">
              <div className=" d-flex search_blog" >
                <span class="input-group-text search_button"><i class="fa fa-search" aria-hidden="true"></i></span>
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
              </div>
            </div>

            {/* First SideBar Div */}
            <div className="mb-4 blogs_cardBorder">
              {/* Heading */}
              <div className="font_fam">
                <h4><b>Popular Post</b></h4>
              </div><br />

              {/* Sidebar Images */}
              <div className="d-flex mb-3">
                <img src={blog1} alt="Thumbnail" className='sidebar_imgs' />
                <div className='news_text'>
                  <p className='font_clr'>February 27, 2018</p>
                  <h4 className='font_fam'>Travelling on a Budget</h4>
                </div>
              </div><br />

              <div className="d-flex mb-3">
                <img src={customer2} alt="Thumbnail" className="sidebar_imgs" />
                <div className='news_text'>
                  <p className='font_clr'>February 27, 2018</p>
                  <h4 className='font_fam'>Backpacking Trails</h4>
                </div>
              </div><br />

              <div className="d-flex mb-3">
                <img src={customer3} alt="Thumbnail" className="sidebar_imgs" />
                <div className='news_text'>
                  <p className='font_clr'>February 27, 2018</p>
                  <h4 className='font_fam'>Romantic Getaways</h4>
                </div>
              </div><br />

              <div className="d-flex mb-3">
                <img src={customer4} alt="Thumbnail" className="sidebar_imgs" />
                <div className='news_text'>
                  <p className='font_clr'>February 27, 2018</p>
                  <h4 className='font_fam'>Cruise Chronicles</h4>
                </div>
              </div><br />

              <div className="d-flex mb-3">
                <img src={blog1} alt="Thumbnail" className="sidebar_imgs" />
                <div className='news_text'>
                  <p className='font_clr'>February 27, 2018</p>
                  <h4 className='font_fam'>Seasonal Escapes</h4>
                </div>
              </div><br /><br />
              {/* SideBar First Div End */}

              {/* SideBar Second Div */}
              <div className="col-lg-4 blogs_cardBorder" style={{ width: "auto", marginTop: "10px" }}>
                <br />
                <h4>Categories</h4>
                <ul className='blog_categories_text '>
                  <li><a href="">Events<span style={{ paddingLeft: "209px" }}>(12)</span></a></li>
                  <li><a href="">Resto Bar<span style={{ paddingLeft: "189px" }}>(14)</span></a></li>
                  <li><a href="">Celebration<span style={{ paddingLeft: "180px" }}>(25)</span></a></li>
                  <li><a href="">Promos<span style={{ paddingLeft: "205px" }}>(03)</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Footer */}
      <Footer />
    </>
  )
}

export default News