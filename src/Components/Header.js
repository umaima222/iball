import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsHeart,BsCartFill } from "react-icons/bs";
import "../Assets/Css/style.css";
import { iballlogo1 } from "../Constant/Img";


const Header = () => {
	return (
		<>
			<header id="header">
				<div className="secondary-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="secondary-header-content">
									<p>iBall Basketball Foundation</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="secondary-header-social-icon-wrapper">
									<ul>
										<li>
											<FaFacebookF />
											<a href="#"></a>
										</li>
										<li>
											<AiOutlineInstagram />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="main-header-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-lg-3">
								<div className="logo-wrapper">
									<a href="index.php">
										<img src={iballlogo1} className="img-fluid i-logo-header"  />
									</a>
								</div>
							</div>
							<div className="col-lg-6 align-self-center">
								<div className="navbar-wrapper">
									<ul className="navbar-nav">
										<li className="nav-item">
											<a href="index.php" className="nav-link">
												Home
											</a>
										</li>
										<li className="nav-item">
											<a href="shop.php" className="nav-link">
												Shop
											</a>
										</li>
										<li className="nav-item">
											<a href="events.php" className="nav-link">
												Events
											</a>
										</li>
										<li className="nav-item">
											<a href="contact-us.php" className="nav-link">
												Contact us
											</a>
										</li>
										<li className="nav-item">
											<a href="enquiry.php" className="nav-link">
												Enquire Now
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 align-self-center">
								<div className="icon-and-wishlist-wrapper">
									<div className="wishlist-wrapper">
										<ul>
											<li>
												<a
													href="#"
													data-toggle="modal"
													data-target=".search_modal"
												>
													<BiSearch/>
												</a>
											</li>
											<li>
												<a href="#">
													<BsHeart/>
													<span className="count">1</span>
												</a>
											</li>
											<li>
												<a href="Add-to-Cart.php">
													<BsCartFill/>
													<span className="count">1</span>
												</a>
											</li>
										</ul>
									</div>
									<div className="header-cta-button text-right">
										<a href="login.php" className="btn">
											Sign In
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className="modal fade bd-example-modal-lg search_modal" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="input-group">
                    <input className="form-control" type="search" id="gsearch" name="gsearch" placeholder="Search..."/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
			</header>
		</>
	);
};

export default Header;
