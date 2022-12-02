import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { review, review2, review3, shop1, shop2 } from "../../Constant/Img";
import "../../Assets/css/productdetail.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Productdetail = () => {
	return (
		<>
			<Header />
			{/* <!-- page header starts here --> */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper text-center">
								<h2>Product Detail</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- page header starts here --> */}
			{/* <!-- products destils section wrapper starts here --> */}
			<section className="prduct-details">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="product-detail-img-wrapper">
								<figure>
									<img src={shop1} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-6">
							<div className="product-detail-content-wrapper">
								<h3>iBall T-Shirt</h3>
								<div className="pro-stock-and-ref-wrapper">
									<h4>price: £19.99</h4>
									<h5>
										Stock:{" "}
										<span className="availabel">
											Available <i className="fa fa-check"></i>
										</span>
									</h5>
								</div>
								<p className="des">
									Pellentesque habitant morbi tristique senectus et netus et
									malesuada fames ac turpis egestas. Vestibulum tortor quam,
									feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
									libero sit amet quam
								</p>
								<div className="size-and-counter-wrapper">
									<div className="size-wrapper">
										<label for="Size">Size</label>
										<select name="" id="" className="form-control">
											<option value="Small">S</option>
											<option value="Small">M</option>
											<option value="Small">L</option>
											<option value="Small">XL</option>
										</select>
									</div>
									<div className="number">
										<span className="plus">+</span>
										<input type="text" value="01" />
										<span className="minus">-</span>
									</div>
								</div>
								<div className="detail-btn-wrapper">
									<button
										onclick="location.href='Add-to-Cart.php'"
										className="btn"
									>
										ADD TO CART
									</button>
									<button className="btn">ADD TO WISHLIST</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- products destils section wrapper ends here --> */}
			{/* <!-- reviews section starts here --> */}
			<section className="reviews">
				<div className="container">
					<div className="row py-3">
						<div className="col-lg-12">
							<div className="single-review-wrapper">
								<div className="row">
									<div className="col-lg-1">
										<div className="review-img-wrapper">
											<img src={review} className="img-fluid" alt="" />
										</div>
									</div>
									<div className="col-lg-11">
										<div className="rev-wrapper d-flex justify-content-between">
											<div className="single-review-content-wrapper">
												<h4>
													Cobus Bester -{" "}
													<span className="review-date">june 8 ,2022</span>
												</h4>
												<p className="review-content">
													Really happy with this food. The taste are great, and
													the food quality is good too.
												</p>
											</div>
											<div className="review-star-wrapper">
												<ul>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row py-3">
						<div className="col-lg-12">
							<div className="single-review-wrapper">
								<div className="row">
									<div className="col-lg-1">
										<div className="review-img-wrapper">
											<img src={review2} className="img-fluid" alt="" />
										</div>
									</div>
									<div className="col-lg-11">
										<div className="rev-wrapper d-flex justify-content-between">
											<div className="single-review-content-wrapper">
												<h4>
													Cobus Bester -{" "}
													<span className="review-date">june 8 ,2022</span>
												</h4>
												<p className="review-content">
													Really happy with this food. The taste are great, and
													the food quality is good too.
												</p>
											</div>
											<div className="review-star-wrapper">
												<ul>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row py-3">
						<div className="col-lg-12">
							<div className="single-review-wrapper">
								<div className="row">
									<div className="col-lg-1">
										<div className="review-img-wrapper">
											<img src={review3} className="img-fluid" alt="" />
										</div>
									</div>
									<div className="col-lg-11">
										<div className="rev-wrapper d-flex justify-content-between">
											<div className="single-review-content-wrapper">
												<h4>
													Cobus Bester -{" "}
													<span className="review-date">june 8 ,2022</span>
												</h4>
												<p className="review-content">
													Really happy with this food. The taste are great, and
													the food quality is good too.
												</p>
											</div>
											<div className="review-star-wrapper">
												<ul>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
													<li>
														<i className="fa fa-star"></i>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- reviews section ends here --> */}
			{/* <!-- add a review sec starts here --> */}
			<section className="add-a-reviews">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="add-rev-wrapper">
								<button className="rev">Add a review</button>
								<div className="add-rev-content-wrapper">
									<p>
										Your email address will not be published.Required field are
										marked{" "}
										<span className="star" style={{ color: "red" }}>
											*
										</span>
									</p>
									<p>Your rating</p>
									<div className="rating-wrap">
										<fieldset className="rating">
											<input type="radio" id="star5" name="rating" value="5" />
											<label
												className="full"
												for="star5"
												title="Awesome - 5 stars"
											></label>
											<input
												type="radio"
												id="star4half"
												name="rating"
												value="4 and a half"
											/>
											<label
												className="half"
												for="star4half"
												title="Pretty good - 4.5 stars"
											></label>
											<input type="radio" id="star4" name="rating" value="4" />
											<label
												className="full"
												for="star4"
												title="Pretty good - 4 stars"
											></label>
											<input
												type="radio"
												id="star3half"
												name="rating"
												value="3 and a half"
											/>
											<label
												className="half"
												for="star3half"
												title="Meh - 3.5 stars"
											></label>
											<input type="radio" id="star3" name="rating" value="3" />
											<label
												className="full"
												for="star3"
												title="Meh - 3 stars"
											></label>
											<input
												type="radio"
												id="star2half"
												name="rating"
												value="2 and a half"
											/>
											<label
												className="half"
												for="star2half"
												title="Kinda bad - 2.5 stars"
											></label>
											<input type="radio" id="star2" name="rating" value="2" />
											<label
												className="full"
												for="star2"
												title="Kinda bad - 2 stars"
											></label>
											<input
												type="radio"
												id="star1half"
												name="rating"
												value="1 and a half"
											/>
											<label
												className="half"
												for="star1half"
												title="Meh - 1.5 stars"
											></label>
											<input type="radio" id="star1" name="rating" value="1" />
											<label
												className="full"
												for="star1"
												title="Sucks big time - 1 star"
											></label>
											<input
												type="radio"
												id="starhalf"
												name="rating"
												value="half"
											/>
											<label
												className="half"
												for="starhalf"
												title="Sucks big time - 0.5 stars"
											></label>
										</fieldset>
									</div>
									<div className="rev-form-wrapper">
										<form action="">
											<div className="form-group">
												<label for="Review">
													Your Review <span style={{ color: "red" }}>*</span>
												</label>
												<textarea
													name=""
													className="form-control"
													id=""
													cols="30"
													rows="5"
												></textarea>
											</div>
											<div className="form-group row">
												<div className="col-lg-4">
													<label for="name">Name</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="form-group row">
												<div className="col-lg-4">
													<label for="Email">Email</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="form-group">
												<button className="btn">SUBMIT</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- add a review sec ends here --> */}
			{/* <!-- other items section starts here --> */}
			<section className="other-item">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="item-wrapper">
								<p>
									Other items based on your search for 'Wild+West'{" "}
									<a href="#">(click here to show all)</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- other items section ends here --> */}
			{/* <!-- other Products starts here --> */}
			<section className="shop-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="product-sec">
								<div className="product-img">
									<a href="#">
										<img className="img-fluid" src={shop1} alt="" />
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
										<i
											className="fa fa-shopping-cart mr-3"
											aria-hidden="true"
										></i>
										Add to Cart
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="product-sec">
								<div className="product-img">
									<a href="#.php">
										<img className="img-fluid" src={shop2} alt="" />
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
										<i
											className="fa fa-shopping-cart mr-3"
											aria-hidden="true"
										></i>
										Add to Cart
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="product-sec">
								<div className="product-img">
									<a href="#">
										<img className="img-fluid" src={shop1} alt="" />
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
										<i
											className="fa fa-shopping-cart mr-3"
											aria-hidden="true"
										></i>
										Add to Cart
									</a>
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

export default Productdetail;
