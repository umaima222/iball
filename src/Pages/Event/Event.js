import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { ballevnt } from '../../Constant/Img';
import "../../Assets/css/events.css";
import { Link } from "react-router-dom";

function Event() {
  return (
   <>
   <Header/>
   {/* <!-- page header start --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Events</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
{/* <!-- events starts here --> */}
<section className="events">
    <div className="container">
        {/* <!-- row 1 --> */}
        <div className="row py-4">
            <div className="col-lg-6">
                <div className="events-img-wrapper">

                    <figure>
                        <a href="events-detail.php">
                            <img src={ballevnt} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="events-content-wrapper">
                    <div className="event-and-option-wrapper">
                        <div className="name-wrapper">

                            <h4> <Link to="/Eventsdetail" className="pf">Event Name here </Link></h4>
                            <a href="#"><i className="fa fa-clock-o"></i> <span className="time">12:00 AM</span></a> <a href="#"><i className="fa fa-calendar"></i> <span>26 / 04 / 2022</span></a>
                        </div>
                        <div className="price-wrapper">
                            <h3>£ 25.00</h3>
                            <a href="#" className="reg">Registration Fees</a>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Link to="/Eventsdetail" className="btn">Register Now</Link>
                </div>
            </div>
        </div>
        {/* <!-- row 1 --> */}
        {/* <!-- row 1 --> */}
        <div className="row py-4">
            <div className="col-lg-6">
                <div className="events-img-wrapper">

                    <figure>
                        <a href="events-detail.php">
                            <img src={ballevnt} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="events-content-wrapper">
                    <div className="event-and-option-wrapper">
                        <div className="name-wrapper">

                        <h4> <Link to="/Eventsdetail" className="pf">Event Name here </Link></h4>
                            <a href="#"><i className="fa fa-clock-o"></i> <span className="time">12:00 AM</span></a> <a href="#"><i className="fa fa-calendar"></i> <span>26 / 04 / 2022</span></a>
                        </div>
                        <div className="price-wrapper">
                            <h3>£ 25.00</h3>
                            <a href="#" className="reg">Registration Fees</a>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Link to="/Eventsdetail" className="btn">Register Now</Link>
                </div>
            </div>
        </div>
        {/* <!-- row 1 --> */}
        {/* <!-- row 1 --> */}
        <div className="row py-4">
            <div className="col-lg-6">
                <div className="events-img-wrapper">

                    <figure>
                        <a href="events-detail.php">
                            <img src={ballevnt} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="events-content-wrapper">
                    <div className="event-and-option-wrapper">
                        <div className="name-wrapper">

                            <h4> <a className="pf" href="events-detail.php">Event Name here </a></h4>
                            <a href="#"><i className="fa fa-clock-o"></i> <span className="time">12:00 AM</span></a> <a href="#"><i className="fa fa-calendar"></i> <span>26 / 04 / 2022</span></a>
                        </div>
                        <div className="price-wrapper">
                            <h3>£ 25.00</h3>
                            <a href="#" className="reg">Registration Fees</a>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Link to="/Eventsdetail" className="btn">Register Now</Link>
                   
                </div>
            </div>
        </div>
        {/* <!-- row 1 --> */}
        {/* <!-- row 1 --> */}
        <div className="row py-4">
            <div className="col-lg-6">
                <div className="events-img-wrapper">

                    <figure>
                        <a href="events-detail.php">
                            <img src={ballevnt} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="events-content-wrapper">
                    <div className="event-and-option-wrapper">
                        <div className="name-wrapper">

                            <h4> <a className="pf" href="events-detail.php">Event Name here </a></h4>
                            <a href="#"><i className="fa fa-clock-o"></i> <span className="time">12:00 AM</span></a> <a href="#"><i className="fa fa-calendar"></i> <span>26 / 04 / 2022</span></a>
                        </div>
                        <div className="price-wrapper">
                            <h3>£ 25.00</h3>
                            <a href="#" className="reg">Registration Fees</a>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Link to="/Eventsdetail" className="btn">Register Now</Link>
                   
                </div>
            </div>
        </div>
        {/* <!-- row 1 --> */}
    </div>
</section>
{/* <!-- events ends here --> */}
   <Footer/>
   </>
  )
}

export default Event