import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../Assets/css/blogdetail.css"
import { user1 } from "../../Constant/Img";
import { blog } from "../../Constant/Img";
import { we } from "../../Constant/Img";
import { admin } from "../../Constant/Img";
import { quote1 } from "../../Constant/Img";
import { quote2 } from "../../Constant/Img";
const Blogdetail = () => {
  return (
	<>
	<Header />
	<section className="page-header">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="content-wrapper text-center">
						<h2>Blogs</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="detailed">
		<div className="blog-round-left">
			{/* <img src={round} alt="" /> */}
		</div>
		<div className="container">
			<div className="row">
				<div className="col-sm-12 ">
					<div className="blog-deatiled-img-wrapper pt-5">
						<figure>
							<img src={we} className="img-fluid detailed-img" alt="" />
						</figure>
					</div>
					<div className="blog-admin-and-social pt-4  ">
						<div className="admin-wrapper">
							<img src={admin} className="img-fluid" alt="" />
							<h5>By : Admin</h5>
						</div>
						<div className="calender-wrapper">
							<i className="fa fa-calendar-o"></i>
							<h5>20-Apr-2022</h5>
						</div>
					</div>
					<div className="blog-description pt-5">
						<p>
							Koluptate velit cillum dolre fugiat nula pariatur. Excepteur
							anim idet laborumed perspiciat und omnis iste natus goluptatem
							acusantium dolore mque lorem ipsum dolor sit amet cons ectetur
							adipisicing elit sed incididunt. Lorem ipsum dolor sit amet
							consectetur adipsicing elit sed do eiusmod.
						</p>
						<ul>
							<li>
								Koluptate velit cillum dolre fugiat nula pariatur. Excepteur
								anim idet laborumed perspiciat und omnis iste natus
								goluptatem{" "}
							</li>
							<li>
								Koluptate velit cillum dolre fugiat nula pariatur. Excepteur
								anim idet
							</li>
						</ul>
					</div>
					<div className="quotes-wrapper">
						<div className="row">
							<div className="col-lg-12">
								<div className="quotation-wrapper">
									<div className="quote1 align-self-start">
										<img src={quote1} alt="" />
										<span className="d-md-none">"</span>
									</div>
									<div className="quotation px-3">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing
											elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis
											nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in
											reprehenderit in voluptate velit esse cillum dolore eu
											fugiat nulla pariatur. Excepteur sint occaecat
											cupidatat non proident, sunt in culpa qui officia
											deserunt mollit anim id est laborum.Lorem ipsum dolor
											sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut
											enim Lorem ipsum dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod tempor incididunt ut
											labore et dolore magna aliqua. Ut enim ad minim
											veniam, quis nostrud exercitation ullamco laboris nisi
											ut aliquip ex ea commodo consequat. Duis aute irure
											dolor in reprehenderit in voluptate velit esse cillum
											dolore eu fugiat nulla pariatur. Excepteur sint
											occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
									</div>
									<div className="quote2 align-self-end">
										<img src={quote2} alt="" />
										<span className="d-md-none">"</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="more-des-wrapper">
						<p className="mb-0">
							Koluptate velit cillum dolre fugiat nula pariatur. Excepteur
							anim idet laborumed perspiciat und omnis iste natus goluptatem
							acusantium dolore mque lorem ipsum dolor sit amet cons ectetur
							adipisicing elit sed incididunt. Lorem ipsum dolor sit amet
							consectetur adipsicing elit sed do eiusmod tempor incididunt
							labore et dolore magna aliqua. Koluptate velit cillum dolre
							fugiat nula pariatur. Excepteur anim idet laborumed perspiciat
							und omnis iste natus goluptatem acusantium dolore mque lorem
							ipsum dolor sit amet cons ectetur adipisicing elit sed
							incididunt. Lorem ip dolor sit amet consectetur
						</p>
						<div className="row pb-5">
							<div className="col-lg-9 pr-lg-0">
								<div className="content-wrapper">
									<p>
										Koluptate velit cillum dolre fugiat nula pariatur.
										Excepteur anim idet laborumed perspiciat und omnis iste
										natus goluptatem acusantium dolore mque lorem ipsum
										dolor sit amet cons ectetur adipisicing elit sed
										incididunt. Lorem ipsum dolor sit amet consectetur
										adipsicing elit sed do eiusmod tempor incididunt labore
										et dolore magna aliqua. Koluptate velit cillum dolre
										fugiat nula pariatur. Excepteur anim idet laborumed
										perspiciat und omnis iste natus goluptatem acusantium
										dolore mque lorem ipsum dolor sit amet cons ectetur
										adipisicing elit sed incididunt. Lorem ipsum dolor sit
										amet consectetur adipsicing elit sed do eiusmod tempor
										incididunt labore et dolore magna aliqua. Koluptate
										velit cillum dolre fugiat nula pariatur. Excepteur anim
										idet laborumed perspiciat und omnis iste natus
										goluptatem acusantium dolore mque lorem ipsum dolor sit
										amet cons ectetur adipisicing elit sed incididunt. Lorem
										ipsum dolor sit amet consectetur adipsicing elit sed do
										eiusmod tempor incididunt labore et dolore magna aliqua.
										Koluptate
									</p>
								</div>
							</div>
							<div className="col-lg-3 px-lg-0">
								<div className="img-wrappper">
									<figure>
										<img src={blog} className="img-fluid" alt="" />
									</figure>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="content-wrapper">
									<p>
										There are many variations of passages of Lorem Ipsum
									</p>
									<ul>
										<li>
											Koluptate velit cillum dolre fugiat nula pariatur.
											Excepteur anim idet laborumed perspiciat und omnis
											iste natus goluptatem{" "}
										</li>
										<li>
											Koluptate velit cillum dolre fugiat nula pariatur.
											Excepteur anim idet
										</li>
										<li>
											Koluptate velit cillum dolre fugiat nula pariatur.
											Excepteur anim idet laborumed perspiciat und omnis
											iste natus goluptatem
										</li>
										<li>
											Koluptate velit cillum dolre fugiat nula pariatur.
											Excepteur anim idet
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="blog-replies-wrapper">
						<div className="row">
							<div className="col-sm-12 pb-5">
								<h3>
									3 Replies to “
									<span>
										Lorem ipsum dolor sit amet consectetur adipiscing eli
									</span>
									”
								</h3>
							</div>
							<div className="col-lg-1">
								<div className="user-img-wrapper">
									<figure>
										<img src={user1} className="img-fluid" alt="" />
									</figure>
								</div>
							</div>
							<div className="col-lg-11">
								<div className="user-content-wrapper">
									<h5 className="replied-user-name">John Doe</h5>
									<h6 className="comment-date">28Feb2021</h6>
									<p className="comment-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisLorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
									<a href="#" className="comment-reply">
										Reply :
									</a>
								</div>
							</div>
							<div className="col-lg-1">
								<div className="user-img-wrapper">
									<figure>
										<img src={user1} className="img-fluid" alt="" />
									</figure>
								</div>
							</div>
							<div className="col-lg-11">
								<div className="user-content-wrapper">
									<h5 className="replied-user-name">John Doe</h5>
									<h6 className="comment-date">28Feb2021</h6>
									<p className="comment-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisLorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
									<a href="#" className="comment-reply">
										Reply :
									</a>
								</div>
							</div>
							<div className="col-lg-1">
								<div className="user-img-wrapper">
									<figure>
										<img src={user1} className="img-fluid" alt="" />
									</figure>
								</div>
							</div>
							<div className="col-lg-11">
								<div className="user-content-wrapper">
									<h5 className="replied-user-name">John Doe</h5>
									<h6 className="comment-date">28Feb2021</h6>
									<p className="comment-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisLorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
									<a href="#" className="comment-reply">
										Reply :
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="blog-round">
			{/* <img src={round} alt="" /> */}
		</div>
	</section>
	<Footer />
</>
  )
}

export default Blogdetail
