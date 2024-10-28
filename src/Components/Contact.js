import React, { useRef } from 'react'
import Navbar from './NavBar/Navbar'
import { motion, useInView } from 'framer-motion'
import cust1 from './Images/customer1.jpg'
import cust2 from './Images/customer2.jpg'
import cust3 from './Images/customer3.jpg'
import Footer from './Footer/Footer'

const Contact = () => {

    // For Happy Customer Section
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: 0.2 });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 0.2 });

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true, amount: 0.2 });

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, { once: true, amount: 0.2 });

    return (
        <>
            {/* Main Image */}
            <div className="container-fluid" id='contact_img'>
                <div className='navbar_margin'>
                    <Navbar />
                    <h4 className='hepta-heading' style={{ marginTop: "-30px", fontWeight: "bolder" }}>Hepta</h4>
                    <div>
                        <motion.h1
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ duration: "1", delay: "0" }}
                            className="font">Contact</motion.h1>

                        <motion.p
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ duration: "1", delay: "0" }} className="para">The best moments in life are still on the way.</motion.p>
                    </div>
                </div>
            </div>
            {/* Main Image End */}

            {/* Input Form */}
            <div className="container-fluid contact_inputFormMargin">
                <div class="row">
                    <div class="col-sm-7 mb-3 mb-sm-0">
                        <div class="card contact_form_style">
                            <div class="card-body ">
                                <form>
                                    <div className='col-md-6 form-group'>
                                        <label>Name</label>
                                        <input className="form-control" type="text" name="" id="" /><br />
                                    </div>

                                    <div className='col-md-6 form-group'>
                                        <label>Phone</label>
                                        <input className="form-control" type="text" name="" id="" /><br />
                                    </div>

                                    <div className='col-md-12 form-group'>
                                        <label>Email</label><br />
                                        <input className="form-control" type="text" name="" id="" /><br />
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <label>Write A Message</label><br />
                                        <textarea className="form-control" name="" id="" rows={4}></textarea><br />
                                    </div><br />

                                    <div className="col-md-6 form-group">
                                        <button class="btn btn-outline-success send_msgBtn">Send Message</button><br />

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Input Form End*/}

                    {/* Information */}
                    <div class="col-sm-5">
                        <div class="card cardsBorder">
                            <div class="card-body">
                                <h5 className='contact_formheading'>ADDRESS:</h5>
                                <p className='contact_formtext'>98 West 21th Street, Suite 721 New York NY 10016</p><br />
                                <h5 className='contact_formheading'>PHONE:</h5>
                                <p className='contact_formtext'>(+1) 435 3533</p><br />
                                <h5 className='contact_formheading'>EMAIL:</h5>
                                <p className='contact_formtext'>info@yourdomain.com</p><br />
                            </div>
                        </div>
                    </div>
                    {/* Information End */}
                </div>
            </div><br /><br />

            {/* Happy Customers Sections Starts*/}
            <div className="container-fluid background contact_section_margin">
                <motion.div ref={ref1}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center">
                    <h1 className="headingSize">
                        Happy Customers
                    </h1>
                </motion.div><br /><br />

                <div className="container-fluid blog_container">
                    <div class="row">
                        <div class="col-sm-4">
                            <motion.div ref={ref2}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="card cardsBorder">
                                <div class="card-body background">
                                    <img src={cust1} alt="Responsive image" className='customer_cards_images' />
                                    <p className='customer_cards_margin contact_cardText'>“Far far away, behind the word mountains, <br />
                                        far from the countries Vokalia and <br />
                                        Consonantia, there live the blind texts. <br />
                                        Separated they live in Bookmarksgrove right <br />
                                        at the coast of the Semantics, a large <br />
                                        language ocean.”<br /><br /></p>
                                    <p className='no-underline'>— Clare Gupta</p>
                                </div>
                            </motion.div>
                        </div>

                        <div class="col-sm-4">
                            <motion.div ref={ref3}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} class="card cardsBorder">
                                <div class="card-body background">
                                    <img src={cust2} alt="Responsive image" className='customer_cards_images' />
                                    <p className='customer_cards_margin contact_cardText'>“Far far away, behind the word mountains, <br />
                                        far from the countries Vokalia and <br />
                                        Consonantia, there live the blind texts. <br />
                                        Separated they live in Bookmarksgrove right <br />
                                        at the coast of the Semantics, a large <br />
                                        language ocean.”<br /><br /> </p>
                                    <p className='no-underline'>— Rogie Slater</p>
                                </div>
                            </motion.div>
                        </div>

                        <div class="col-sm-4">
                            <motion.div ref={ref4}
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView4 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }} class="card cardsBorder">
                                <div class="card-body background">
                                    <img src={cust3} alt="Responsive image" className='customer_cards_images' />
                                    <p className='customer_cards_margin contact_cardText'>“Far far away, behind the word mountains, <br />
                                        far from the countries Vokalia and <br />
                                        Consonantia, there live the blind texts. <br />
                                        Separated they live in Bookmarksgrove right <br />
                                        at the coast of the Semantics, a large <br />
                                        language ocean.”<br /><br /></p>
                                    <p className='no-underline'>— John Doe</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {/* Happy Customers Sections Ends*/}
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Contact