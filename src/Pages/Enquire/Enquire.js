import React from "react";
import "../../Assets/css/enquire.css"
import Header from "../../Components/Header";
import { location } from "../../Constant/Img";
import { mail } from "../../Constant/Img";
import { phone } from "../../Constant/Img";
import { contact_img } from "../../Constant/Img";
import Footer from "../../Components/Footer";
function Enquire() {
	return (
		<>
			<Header />
			{/* <!-- page header start --> */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper text-center">
								<h2>Enquire Now</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- page header ends --> */}

			{/* <!-- contact form starts here --> */}
			<section className="contact-form">
				<div className="container-fluid px-0">
					<div className="row">
						<div className="col-lg-6">
							<div className="img-wrapper">
								<figure>
									<img src={contact_img} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-4 align-self-center">
							<div className="contact-form-content-wrapper mb-3">
								<h5>Enquiry Form</h5>
								<h2>Get In Touch</h2>
							</div>
							<div className="contact-form-wrapper mt-3">
								<form action="">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Your Name"
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<input
											type="number"
											className="form-control"
											placeholder="Contact"
										/>
									</div>
									<div className="form-group">
										<textarea
											name=""
											id=""
											cols="30"
											rows="4"
											className="form-control"
											placeholder="Message"
										></textarea>
									</div>
									<div className="form-group">
										<button className="btn">Send</button>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-2"></div>
					</div>
				</div>
			</section>
			{/* <!-- contact form ends here --> */}

			{/* <!-- contact icon starts here --> */}
			<section className="contact-icon pt-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="contact-icon-wrapper text-center">
								<div className="icon-img-wrapper">
									<figure>
										<img src={phone} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="icon-content-wrapper">
									<h5>Phone</h5>
									<h6>
										Toll-Free : <span>07943 985 552</span>
									</h6>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="contact-icon-wrapper text-center">
								<div className="icon-img-wrapper">
									<figure>
										<img src={mail} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="icon-content-wrapper">
									<h5>Email</h5>
									<h6>
										<span> admin@iball.uk</span>
									</h6>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="contact-icon-wrapper text-center">
								<div className="icon-img-wrapper">
									<figure>
										<img src={location} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="icon-content-wrapper">
									<h5>Address</h5>
									<h6>
										<span>South Croydon, Surrey, UK</span>
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- contact icon ends here --> */}
			<Footer />
		</>
	);
}

export default Enquire;
