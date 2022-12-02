import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { blog1 } from '../../Constant/Img'
import { blog2 } from '../../Constant/Img'
import { blog3 } from '../../Constant/Img'
import "../../Assets/css/events.css"
const Newevents = () => {
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
        <div className="row pb-4">
            <div className="col-lg-12">
                <div className="main-content-wrapper text-center wow animate__animated animate__fadeInDown">
                    <h5>Events</h5>
                    <h2>Our Events</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="events-card-wrapper wow animate__animated animate__fadeInLeft event-all">
                    <div className="events-img-wrapper">
                        <figure>
                            <img src={blog1} className="img-fluid" alt=""/>
                        </figure>
                        <div className="event-name-wrapper for-change">
                            <h3>Croydon Basketball League</h3>
                        </div>
                    </div>

                    <div className="events-content-wrapper for-event-bold">
                        <h6> <i className="fa fa-calendar"></i> <span>26 Sep 2022 |</span> <i className="fa fa-user"></i>
                            <span>By Admin</span>
                        </h6>
                        <p>
                        IBall Launches the croydon <br/> League this Autumn, watch <br/> this space for more details
                        </p>
                        <a href="events.php" className="btn">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="events-card-wrapper wow animate__animated animate__fadeInDown event-all">
                    <div className="events-img-wrapper">
                        <figure>
                            <img src={blog2} className="img-fluid" alt=""/>
                        </figure>
                        <div className="event-name-wrapper for-change">
                            <h3>Basketball Camps</h3>
                        </div>
                    </div>

                    <div className="events-content-wrapper for-event-bold">
                        <h6> <i className="fa fa-calendar"></i> <span>26 Sep 2022 |</span> <i className="fa fa-user"></i>
                            <span>By Admin</span>
                        </h6>
                        <p>
                        We will shortly be updating <br/> you with the details of our <br/> next Skills Camp
                        </p>
                        <a href="events.php" className="btn">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="events-card-wrapper wow animate__animated animate__fadeInRight event-all">
                    <div className="events-img-wrapper">
                        <figure>
                            <img src={blog3} className="img-fluid" alt=""/>
                        </figure>
                        <div className="event-name-wrapper for-change">
                            <h3>Croydon School League</h3>
                        </div>
                    </div>

                    <div className="events-content-wrapper for-event-bold">
                        <h6> <i className="fa fa-calendar"></i> <span>26 Sep 2022 |</span> <i className="fa fa-user"></i>
                            <span>By Admin</span>
                        </h6>
                        <p>
                        We will shortly be updating <br/> you with the details of the <br/> Croydon School League
                        </p>
                        <a href="events.php" className="btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
{/* <!-- events ends here --> */}
   <Footer/>
   </>
  )
}

export default Newevents