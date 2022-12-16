import React from "react";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { HiEnvelope } from "react-icons/hi2";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { AiOutlineInstagram } from "react-icons/ai";
import { iballlogo1 } from "../Constant/Img";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<>
			<section className="newsletter">
				<div className="container-fluid px-0">
					<div className="row">
						<div className="col-lg-7">
							<div className="news-letter-icon-wrapper">
								<div className="row">
									<div className="col-lg-3"></div>
									<div className="col-lg-4">
										<div className="icon-wrapper icon-1-wrapper">
											<div className="icon-img-wrapper">
												<FaMapMarkerAlt />
											</div>
											<div className="icon-content-wrapper">
												<h6>LOcation</h6>
												<p>
													South Croydon, <br /> Surrey, UK
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-5">
										<div className="icon-wrapper">
											<div className="icon-img-wrapper">
												<HiEnvelope />
											</div>
											<div className="icon-content-wrapper">
												<h6>Email</h6>
												<p>
													williamlawmann@iball.uk <br />
													admin@iball.uk{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5 pl-0"></div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="footer-widget-1">
								<a href="/Home">
									<img
										src={iballlogo1}
										className="img-fluid i-logo-header"
										alt=""
									/>
								</a>
								<p>
									iBall is a Basketball Foundation specialising in training,
									development and coaching and Basketball themed events
									management (Birthday’s, Camps and tournaments)
								</p>
								<div className="footer-icon-wrapper">
									<a href="#">
										<FaFacebookF />
									</a>
									<a href="#">
										<AiOutlineInstagram />
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footer-widget-2">
								<h4>Explore</h4>
								<div className="footerlinks-wrapper">
									<ul>
										<li>
											<Link to="/">Home</Link>
										</li>
										<li>
											<Link to="/About">About us</Link>
										</li>
										<li>
											<a href="/Whatwedo">What we do</a>
										</li>
										<li>
											<a href="/Event">Events</a>
										</li>
										<li>
											<a href="blogs.php">Blogs</a>
										</li>

										<li>
											<a href="ourservice.php">Our Service</a>
										</li>
										<li>
											<a href="contact-us.php">Contact us</a>
										</li>
										<li>
											<a href="enquiry.php">Enquiry Now</a>
										</li>
										<li>
											<a href="ourroadmap.php">Our Roadmap</a>
										</li>

										<li>
											<a href="ourstaff.php">Our Staff</a>
										</li>

										<li>
											<a href="ourachivement.php">Our Achievements</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="footer-widget-3 ml-5">
								<h4>Media</h4>
								<div className="footerlinks-wrapper">
									<ul>
										<li>
											<a href="gallery.php">GALLERY</a>
										</li>
										<li>
											<a href="videos.php">VIDEOS</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer-widget-3 ml-5">
								<h4>contact us</h4>
								<div className="footerlinks-wrapper">
									<ul>
										<li>
											<a href="tel:4407943985552 ">
												<BsTelephoneFill /> +44(0)7943 985552{" "}
											</a>
										</li>
										<li>
											<a href="mailto:admin@iball.uk">
												{" "}
												<HiEnvelope /> Email: admin@iball.uk
											</a>
										</li>
										<li>
											<a href="#">
												{" "}
												<FaMapMarkerAlt /> South Croydon, Surrey, UK.
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div id="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<p>© Iball.uk 2021. All rights reserved.</p>
						</div>
						<div className="col-lg-6 ">
							<div className="copy-right">
								<a href="privacy.php">Privacy Policy</a> |{" "}
								<a href="terms.php">Terms & condition</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
