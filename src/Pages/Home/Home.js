import React, { useEffect, useState } from "react";
import "../../Assets/css/style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { bannerball } from "../../Constant/Img";
import { events4 } from "../../Constant/Img";
import { blog2 } from "../../Constant/Img";
import { blog3 } from "../../Constant/Img";
import { BiCalendar } from "react-icons/bi";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { Enquire } from "../../Constant/Img";
import { shop2 } from "../../Constant/Img";
import { recent1 } from "../../Constant/Img";
import { recent6 } from "../../Constant/Img";
import { recent3 } from "../../Constant/Img";
import { recent2 } from "../../Constant/Img";
import { test2 } from "../../Constant/Img";
import { tes1 } from "../../Constant/Img";

import Modal from "react-modal";
import MediaComponent from '../../Constant/MediaComponent';
const Home = () => {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};
	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}
	useEffect(() => {
		setTimeout(() => {
			setIsOpen(true);
		}, 500);
	}, []);
	return (
		<>
			<Header />
			<div id="video-popup">
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
                      <MediaComponent />
				</Modal>
				<div
					class="modal fade"
					id="exampleModalCenters"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								{/* <video
									width="100%"
									height="100%"
									muted
									autoplay
									controls
									id="video"
								>
									<source src={BallLogoAnimation} type="video/mp4" />
									Your browser does not support the video tag.`
								</video> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="banner-content-wrapper wow animate__animated animate__fadeInLeft">
								<h1>Let’s GOOOOOOO!</h1>
								<p>
									Welcome to iBall! If you love Basketball, you’re in the right
									place. Here at iBall we want you to have a lot of fun playing
									Basketball so please check out some of the great services and
									events we have on offer and find out about our team. We hope
									to hear from you soon!
								</p>
								<a
									href=""
									className="btn"
									data-toggle="modal"
									data-target="#watb"
								>
									Read more
								</a>
								<a
									href=""
									className="btn"
									data-toggle="modal"
									data-target="#bannervideo"
								>
									<i className="fa fa-play" aria-hidden="true"></i> &nbsp; Watch
									Video
								</a>
								<div className="child-text-wrapper">
									<p>
										Please read about our child{" "}
										<a
											type="button"
											href="javascript:void(0)"
											data-toggle="modal"
											data-target=".bd-pdfmodal-modal-lg"
										>
											Safeguarding
										</a>{" "}
										and <a href="#">First Aid</a>
										policies here{" "}
										<button
											type="button"
											className="btn"
											data-toggle="modal"
											data-target=".bd-Healthpdf-modal-lg"
										>
											Read more
										</button>
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="ball">
								<img src={bannerball} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="we">
				<div className="container">
					<div className="row pb-5">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<div className="main-content-wrapper text-center wow animate__animated animate__fadeInDown">
								<h5>What We Do</h5>
								<h2>WE BELIEVE IN MAKING BASKETBALL FUN AND ACCESSIBLE</h2>
							</div>
						</div>
						<div className="col-lg-1"></div>
					</div>

					<div className="row pt-3">
						<div className="col-lg-6 mb-3">
							<div className="basket-card-wrapper basket-card-3">
								<div className="card-content-wrapper">
									<h3>The Team</h3>

									<p>
										Our development, mentoring and recognition <br /> programme
										inspires our players beyond the Basketball court.
									</p>
									<a href="theteam.php"> Read More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-3">
							<div className="basket-card-wrapper basket-card-1">
								<div className="card-content-wrapper">
									<h3>WHO WE WORK WITH</h3>
									<p>We’ll work together with you to meet your requirements</p>
									<a href="who_we_work_with.php">Read More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-3">
							<div className="basket-card-wrapper basket-card-2">
								<div className="card-content-wrapper">
									<h3>Why Basketball ? </h3>
									<p>
										Basketball develops, confidence, discipline, <br />{" "}
										teamwork, and other core ‘life’ skills
									</p>
									<a href="why_basketball.php">Read More</a>
								</div>
							</div>
						</div>

						<div className="col-lg-6 mb-3">
							<div className="basket-card-wrapper basket-card-4">
								<div className="card-content-wrapper">
									<h3>How to get involved</h3>
									<p>
										Don’t be shy. If you are interested get in touch now, <br />{" "}
										even if you are an absolute beginner, you won’t be alone.
									</p>
									<a href="get_involved.php">Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
										<img src={events4} className="img-fluid" alt="" />
									</figure>
									<div className="event-name-wrapper for-change">
										<h3>Croydon Basketball League</h3>
									</div>
								</div>

								<div className="events-content-wrapper for-event-bold">
									<h6>
										{" "}
										<BiCalendar /> <span>26 Sep 2022 |</span> <FaUserAlt />
										<span>By Admin</span>
									</h6>
									<p>
										iBall Launches the Croydon <br /> League launching Autumn
										2023, watch this space for more details
									</p>
									<a href="events.php" className="btn">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="events-card-wrapper wow animate__animated animate__fadeInDown event-all">
								<div className="events-img-wrapper">
									<figure>
										<img src={blog2} className="img-fluid" alt="" />
									</figure>
									<div className="event-name-wrapper for-change">
										<h3>Basketball Camps</h3>
									</div>
								</div>

								<div className="events-content-wrapper for-event-bold">
									<h6>
										{" "}
										<BiCalendar /> <span>26 Sep 2022 |</span> <FaUserAlt />
										<span>By Admin</span>
									</h6>
									<p>
										We will shortly be updating <br /> you with the details of
										our <br /> next Skills Camp
									</p>
									<a href="events.php" className="btn">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="events-card-wrapper wow animate__animated animate__fadeInRight event-all">
								<div className="events-img-wrapper">
									<figure>
										<img src={blog3} className="img-fluid" alt="" />
									</figure>
									<div className="event-name-wrapper for-change">
										<h3>Croydon School League</h3>
									</div>
								</div>

								<div className="events-content-wrapper for-event-bold">
									<h6>
										{" "}
										<BiCalendar /> <span>26 Sep 2022 |</span> <FaUserAlt />
										<span>By Admin</span>
									</h6>
									<p>
										We will shortly be updating <br /> you with the details of
										the <br /> Croydon School League
									</p>
									<a href="events.php" className="btn">
										Read More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="enquire">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<div className="content-wrapper wow animate__animated animate__fadeInLeft">
								<h5>Enquire Now</h5>
								<h2>
									Booking a session, Birthday party or joining the team is one
									click away
								</h2>

								<a href="enquiry.php" className="btn">
									Enquire here
								</a>
							</div>
						</div>
						<div className="col-lg-6 wow animate__animated animate__tada">
							<figure>
								<img src={Enquire} className="img-fluid" alt="" />
							</figure>
						</div>
					</div>
				</div>
			</section>
			<section className="merchandise">
				<div className="container">
					<div className="row pb-5">
						<div className="col-lg-12">
							<div className="main-content-wrapper text-center wow animate__animated animate__fadeInDown">
								<h2>Merchandise</h2>
							</div>
						</div>
					</div>

					<div className="row pt-5">
						<div className="col-lg-4">
							<div className="product-sec">
								<div className="product-img">
									<a href="product-detail.php">
										<img src={shop2} className="img-fluid" alt="" />
									</a>
								</div>
								<div>
									<p className="product_name">iBall T-Shirt</p>
								</div>

								<div className="products-par">
									<div className="product_price">
										<p className="green_para2">£19.99</p>
									</div>
								</div>
								<div className="addtocartbtn ">
									<a href="#" className="btn">
										<FaShoppingCart /> Add to Cart
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="product-sec">
								<div className="product-img">
									<a href="product-detail.php">
										<img src={shop2} className="img-fluid" alt="" />
									</a>
								</div>
								<div>
									<p className="product_name">iBall T-Shirt</p>
								</div>

								<div className="products-par">
									<div className="product_price">
										<p className="green_para2">£19.99</p>
									</div>
								</div>
								<div className="addtocartbtn ">
									<a href="#" className="btn">
										{" "}
										<FaShoppingCart /> Add to Cart
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="product-sec">
								<div className="product-img">
									<a href="product-detail.php">
										<img src={shop2} className="img-fluid" alt="" />
									</a>
								</div>
								<div>
									<p className="product_name">iBall T-Shirt</p>
								</div>

								<div className="products-par">
									<div className="product_price">
										<p className="green_para2">£19.99</p>
									</div>
								</div>
								<div className="addtocartbtn ">
									<a href="#" className="btn">
										<FaShoppingCart /> Add to Cart
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="instagram">
				<div className="container">
					<div className="row pb-5">
						<div className="col-lg-12">
							<div className="main-content-wrapper text-center wow animate__animated animate__fadeInDown">
								<h5>Instagram</h5>
								<h2>Our Recent Photos</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="img-wrapper">
								<figure>
									<img src={recent1} className="img-fluid gal1" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="row">
								<div className="col-lg-6">
									<div className="img-wrapper">
										<figure>
											<img src={recent6} className="img-fluid gal2" alt="" />
										</figure>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="img-wrapper">
										<figure>
											<img src={recent2} className="img-fluid gal3" alt="" />
										</figure>
									</div>
								</div>
							</div>
							<div className="img-wrapper box-none">
								<figure>
									<img src={recent3} className="img-fluid gal4" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={test2} className="img-fluid gal5" alt="" />
									<div className="ball ball2">
										<img src={bannerball} alt="" />
									</div>
								</figure>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={tes1} className="img-fluid gal6" alt="" />
									<div className="ball">
										<img src={bannerball} alt="" />
									</div>
								</figure>
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
