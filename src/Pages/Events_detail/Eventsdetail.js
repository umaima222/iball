import React from "react";
import "../../Assets/css/event_detail.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Form from "react-bootstrap/Form";

export const Eventsdetail = () => {
	return (
		<>
			<Header />
			{/* <!-- page header start --> */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper text-center">
								<h2>Events Details</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- page header ends --> */}
			{/* <!-- events detal starts here --> */}
			<section className="events-detail">
				<div className="container">
					<div className="row py-4">
						<div className="col-lg-12">
							<div className="events-img-wrapper">
								<figure>
									<img src="img/ourModel.png" className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-12 mt-5">
							<div className="events-content-wrapper">
								<div className="event-and-option-wrapper">
									<div className="name-wrapper">
										<h4>Event Name here</h4>
										<a href="#">
											<i className="fa fa-clock-o"></i>{" "}
											<span className="time">12:00 AM</span>
										</a>
										<a href="#">
											<i className="fa fa-calendar"></i>{" "}
											<span>26 / 04 / 2022</span>
										</a>
										<a href="#">
											<i className="fa fa-map-marker"></i>{" "}
											<span>Lorem ipsum dolor sit</span>
										</a>
									</div>
									<div className="price-wrapper">
										<h3>£ 25.00</h3>
										<a href="#" className="reg">
											Registration Fees
										</a>
									</div>
								</div>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.Lorem Ipsum is simply dummy text of the printing
									and typesetting industry.Lorem Ipsum is simply dummy text of
									the printing and typesetting industry. Lorem Ipsum has been
									the industry's standard dummy text ever since the 1500s, when
									an unknown printer took a galley of type and scrambled it to
									make a type specimen book.Lorem Ipsum is simply dummy text of
									the printing and typesetting industry.
								</p>
								<button className="btn">Register Now</button>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-wrapper mt-5">
								<div className="form-content-wrapper mb-5">
									<h4>Fill The Form</h4>
								</div>
								<div className="form-group row">
									<div className="col-lg-6">
										<label for="">First Name</label>
										<input
											type="text"
											placeholder="John"
											className="form-control"
										/>
									</div>
									<div className="col-lg-6">
										<label for="">Last Name</label>
										<input
											type="text"
											placeholder="Doe"
											className="form-control"
										/>
									</div>
								</div>
								<div className="form-group row">
									<div className="col-lg-6">
										<label for="">Email Address</label>
										<input
											type="text"
											placeholder="JohnDoe@gmail.com"
											className="form-control"
										/>
									</div>
									<div className="col-lg-6">
										<label for="">Contact Number</label>
										<input
											type="text"
											placeholder="+ 1- 123456789"
											className="form-control"
										/>
									</div>
								</div>
								<div className="form-group row">
									<div className="col-lg-6">
										<label for="">Date of Birth</label>
										<input type="date" className="form-control" />
									</div>
									<div className="col-lg-6">
										<label for="">Gender</label>
										<Form.Select
											aria-label="Default select example"
											className=""
										>
											<option value="1">Male</option>
											<option value="2">Female</option>
										</Form.Select>
										{/* <Select options={options} />
                            <select name="" className="form-control" id=""/>
                                <option value="Male">Male</option>
                            </select> */}
									</div>
								</div>
							</div>
							<div className="form-group row pt-4">
								<div className="col-lg-8">
									<div className="form-check">
										<input
											type="checkbox"
											className="form-check-input"
											id="exampleCheck1"
										/>
										<label className="form-check-label" for="exampleCheck1">
											I Prefer to be Contacted by (Email, Phone)
										</label>
									</div>
									<div className="form-check">
										<input
											type="checkbox"
											className="form-check-input"
											id="exampleCheck2"
										/>
										<label className="form-check-label" for="exampleCheck2">
											Agree to Terms & Conditions
										</label>
									</div>
								</div>
								<div className="col-lg-4 text-right align-self-end">
									<button
										className="btn"
										type="button"
										data-toggle="modal"
										data-target="#exampleModalCenter"
									>
										Register
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* // <!-- events detal ends here --> */}
			<Footer />
		</>
	);
};
export default Eventsdetail;
