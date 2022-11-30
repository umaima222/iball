import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Enquire from "../Pages/Enquire/Enquire";
import Eventsdetail from "../Pages/Events_detail/Eventsdetail";
import Event from "../Pages/Event/Event";
import Shop from "../Pages/Shop/Shop";
import Contactus from "../Pages/Contactus/Contactus";
import Editprofile from "../Pages/Editprofile/Editprofile";
import Checkout from "../Pages/Checkout/Checkout";
import  Blogdetailed  from "../Pages/Blogdetail/Blogdetail";
import Eventer from "../Pages/Forgotpassword/Forgotpassword";
import Forgotpassword from "../Pages/Forgotpassword/Forgotpassword";
import Gallery from "../Pages/Gallery/Gallery";
import Getinvolved from "../Pages/Getinvolved/Getinvolved";
const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Enquire" element={<Enquire />} />
					<Route path="/Eventsdetail" element={<Eventsdetail />} />
					<Route path="/Event" element={<Event />} />
					<Route path="/Shop" element={<Shop />} />
					<Route path="/Contactus" element={< Contactus />} />
					<Route path="/Editprofile" element={<Editprofile />} />
					<Route path="/Checkout" element={<Checkout />} />
					<Route path="Blogdetailed" element={< Blogdetailed />} />
					<Route path="/Eventer" element={<Eventer />} />
					<Route path="/Forgotpassword" element={<Forgotpassword />} />
					<Route path="/Gallery" element={< Gallery />} />
					<Route path="/Getinvolved" element={<Getinvolved />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
