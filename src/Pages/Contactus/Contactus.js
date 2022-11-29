import React from 'react'
import "../../Assets/css/enquire.css"
import Header from "../../Components/Header";
import { location } from "../../Constant/Img";
import { mail } from "../../Constant/Img";
import { phone } from "../../Constant/Img";
import { contact_img } from "../../Constant/Img";
import Footer from "../../Components/Footer";

const Contactus = () => {
  return (
   <>
   <Header/>
   <section class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="content-wrapper text-center">
                    <h2>Contact us</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="contact-icon">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="contact-icon-wrapper text-center">
                    <div class="icon-img-wrapper">
                        <figure>
                            <img src={ phone } class="img-fluid" alt=""/>
                        </figure>
                    </div>
                    <div class="icon-content-wrapper">
                        <h5>Phone</h5>
                        <h6>Toll-Free : <span>07943 985 552</span></h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="contact-icon-wrapper text-center">
                    <div class="icon-img-wrapper">
                        <figure>
                            <img src= { mail } class="img-fluid" alt=""/>
                        </figure>
                    </div>
                    <div class="icon-content-wrapper">
                        <h5>Email</h5>
                        <h6><span>admin@iball.uk</span></h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="contact-icon-wrapper text-center">
                    <div class="icon-img-wrapper">
                        <figure>
                            <img src={ location } class="img-fluid" alt=""/>
                        </figure>
                    </div>
                    <div class="icon-content-wrapper">
                        <h5>Address</h5>
                        <h6><span>South Croydon, Surrey, UK</span></h6>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="contact-form">
    <div class="container-fluid px-0">
        <div class="row">
            <div class="col-lg-6">
                <div class="img-wrapper">
                    <figure>
                        <img src={contact_img} class="img-fluid" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="col-lg-4 align-self-center">
                <div class="contact-form-content-wrapper mb-3">
                    <h5>Enquiry Form</h5>
                    <h2>Get In Touch</h2>
                </div>
                <div class="contact-form-wrapper mt-3">
                    <form action="">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Name"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Contact"/>
                        </div>
                        <div class="form-group">
                            <textarea name="" id="" cols="30" rows="4" class="form-control" placeholder="Message"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
    </div>
</section>
   <Footer/>
   </>
  )
}

export default Contactus