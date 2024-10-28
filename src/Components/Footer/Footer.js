import React from 'react'

const Footer = () => {
    return (
        <section id="footer" className='footer_background '>
                <div class="container">
                    <div class="row text-center text-xs-center text-sm-left text-md-left">
                        <div class="col-12 col-sm-6 col-md-3 ">
                            <ul class="list-unstyled quick-links footer_text">
                                <li><h4>Quick Link</h4></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">About Us</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">Terms & Conditions</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">Privacy Policy</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">Help</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">Rooms</a></li>
                            </ul>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3">
                            <ul class="list-unstyled quick-links footer_text">
                                <li><h4>Support</h4></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">Our Location</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">The Hosts</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">FAQ</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">Get Started</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02" class="no-underline">Videos</a></li>
                            </ul>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3">
                            <ul class="list-unstyled quick-links footer_text ">
                                <li><h4>Contact Info</h4></li>
                                <li class="no-underline"><span style={{ color: "white" }}>Address:</span> <br />
                                    98 West 21th Street, Suite 721 New York NY 10016
                                </li>
                                <li class="no-underline"><span style={{ color: "white" }}>Phone:</span> <br />
                                    (+1) 435 3533</li>
                                <li class="no-underline"><span style={{ color: "white" }}>Email:</span> <br />
                                    info@yourdomain.com</li>
                            </ul>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <ul class="list-unstyled quick-links footer_text">
                                <li><h4>Subscribe</h4></li>
                                <li class="no-underline">Sign up for our newsletter</li><br />
                                <li className='footer_input_wrapper'>
                                    <input type="text" name="" id="" className='form-control footer_inputField' placeholder='Enter Your Email'/>
                                    <button className="footer_button" type='submit'><i class=" fa fa-paper-plane" aria-hidden="true"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white ">
                            <p className='no-underline'>Copyright © 2024 All rights reserved | This template is made with  by <span><i class="fa fa-heart" aria-hidden="true"></i></span> Colorlib</p>
                            <ul class="list-unstyled list-inline social text-center">
                                <li class="list-inline-item"><a href="https://www.facebook.com"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.linkedin.com"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.youtube.com"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </section >
    )
}

export default Footer
