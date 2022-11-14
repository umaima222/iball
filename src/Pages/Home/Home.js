import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { bannerball } from "../../Constant/Img";

const Home = () => {
  return (
    <>
      <Header />
      {/* <div id="video-popup">
    <div class="modal fade" id="exampleModalCenters" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <video width="100%" height="100%" muted autoplay controls id="video">
                        <source src={BallLogo} type="video/mp4"/>
                        Your browser does not support the video tag.`
                    </video>
                </div>
            </div>
        </div>
    </div>
</div> */}
      <section className="banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="banner-content-wrapper wow animate__animated animate__fadeInLeft">
                    <h1>Let’s GOOOOOOO!</h1>
                    <p>
                        Welcome to iBall! If you love Basketball, you’re in the right place.
                        Here at iBall we want you to have a lot of fun playing Basketball
                        so please check out some of the great services and events we have
                        on offer and find out about our team. We hope to hear from you soon!
                    </p>
                    <a href="" className="btn" data-toggle="modal" data-target="#watb">Read more</a>
                    <a href="" className="btn" data-toggle="modal" data-target="#bannervideo"><i className="fa fa-play"
                            aria-hidden="true"></i> &nbsp; Watch Video</a>
                    <div className="child-text-wrapper">
                        <p>Please read about our child <a type="button" href="javascript:void(0)" data-toggle="modal"
                                data-target=".bd-pdfmodal-modal-lg">Safeguarding</a> and <a href="#">First Aid</a>
                            policies here <button type="button" className="btn" data-toggle="modal"
                                data-target=".bd-Healthpdf-modal-lg">Read more</button></p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
        
                <div className="ball">
                    
                    <img src={bannerball} alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="we">
    <div class="container">
        <div class="row pb-5">
            <div class="col-lg-1"></div>
            <div class="col-lg-10">
                <div class="main-content-wrapper text-center wow animate__animated animate__fadeInDown">
                    <h5>What We Do</h5>
                    <h2>WE BELIEVE IN MAKING BASKETBALL FUN AND ACCESSIBLE</h2>
                </div>
            </div>
            <div class="col-lg-1"></div>
        </div>

        <div class="row pt-3">
            <div class="col-lg-6 mb-3">
                <div class="basket-card-wrapper basket-card-3">
                    <div class="card-content-wrapper">
                        <h3>The Team</h3>

                        <p>
                            Our development, mentoring and recognition <br/> programme inspires our players beyond the
                            Basketball court.
                        </p>
                        <a href="theteam.php" > Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-3">
                <div class="basket-card-wrapper basket-card-1">
                    <div class="card-content-wrapper">
                        <h3>WHO WE WORK WITH</h3>
                        <p>
                            We’ll work together with you to meet your requirements
                        </p>
                        <a href="who_we_work_with.php">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-3">
                <div class="basket-card-wrapper basket-card-2">
                    <div class="card-content-wrapper">
                        <h3>Why Basketball ? </h3>
                        <p>
                            Basketball develops, confidence, discipline, <br/> teamwork, and other core ‘life’ skills
                        </p>
                        <a href="why_basketball.php">Read More</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mb-3">
                <div class="basket-card-wrapper basket-card-4">
                    <div class="card-content-wrapper">
                        <h3>How to get involved</h3>
                        <p>
                            Don’t be shy. If you are interested get in touch now, <br/> even if you are an absolute
                            beginner, you won’t be alone.
                        </p>
                        <a href="get_involved.php">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      <Footer />
    </>
  );
};

export default Home;
