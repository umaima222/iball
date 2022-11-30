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
	<section class="page-header">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="content-wrapper text-center">
						<h2>Blogs</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="detailed">
		<div class="blog-round-left">
			{/* <img src={round} alt="" /> */}
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 ">
					<div class="blog-deatiled-img-wrapper pt-5">
						<figure>
							<img src={we} class="img-fluid detailed-img" alt="" />
						</figure>
					</div>
					<div class="blog-admin-and-social pt-4  ">
						<div class="admin-wrapper">
							<img src={admin} class="img-fluid" alt="" />
							<h5>By : Admin</h5>
						</div>
						<div class="calender-wrapper">
							<i class="fa fa-calendar-o"></i>
							<h5>20-Apr-2022</h5>
						</div>
					</div>
					<div class="blog-description pt-5">
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
					<div class="quotes-wrapper">
						<div class="row">
							<div class="col-lg-12">
								<div class="quotation-wrapper">
									<div class="quote1 align-self-start">
										<img src={quote1} alt="" />
										<span class="d-md-none">"</span>
									</div>
									<div class="quotation px-3">
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
									<div class="quote2 align-self-end">
										<img src={quote2} alt="" />
										<span class="d-md-none">"</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="more-des-wrapper">
						<p class="mb-0">
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
						<div class="row pb-5">
							<div class="col-lg-9 pr-lg-0">
								<div class="content-wrapper">
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
							<div class="col-lg-3 px-lg-0">
								<div class="img-wrappper">
									<figure>
										<img src={blog} class="img-fluid" alt="" />
									</figure>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12">
								<div class="content-wrapper">
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
					<div class="blog-replies-wrapper">
						<div class="row">
							<div class="col-sm-12 pb-5">
								<h3>
									3 Replies to “
									<span>
										Lorem ipsum dolor sit amet consectetur adipiscing eli
									</span>
									”
								</h3>
							</div>
							<div class="col-lg-1">
								<div class="user-img-wrapper">
									<figure>
										<img src={user1} class="img-fluid" alt="" />
									</figure>
								</div>
							</div>
							<div class="col-lg-11">
								<div class="user-content-wrapper">
									<h5 class="replied-user-name">John Doe</h5>
									<h6 class="comment-date">28Feb2021</h6>
									<p class="comment-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisLorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
									<a href="#" class="comment-reply">
										Reply :
									</a>
								</div>
							</div>
							<div class="col-lg-1">
								<div class="user-img-wrapper">
									<figure>
										<img src={user1} class="img-fluid" alt="" />
									</figure>
								</div>
							</div>
							<div class="col-lg-11">
								<div class="user-content-wrapper">
									<h5 class="replied-user-name">John Doe</h5>
									<h6 class="comment-date">28Feb2021</h6>
									<p class="comment-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisLorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
									<a href="#" class="comment-reply">
										Reply :
									</a>
								</div>
							</div>
							<div class="col-lg-1">
								<div class="user-img-wrapper">
									<figure>
										<img src={user1} class="img-fluid" alt="" />
									</figure>
								</div>
							</div>
							<div class="col-lg-11">
								<div class="user-content-wrapper">
									<h5 class="replied-user-name">John Doe</h5>
									<h6 class="comment-date">28Feb2021</h6>
									<p class="comment-content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisLorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
									<a href="#" class="comment-reply">
										Reply :
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="blog-round">
			{/* <img src={round} alt="" /> */}
		</div>
	</section>
	<Footer />
</>
  )
}

export default Blogdetail
