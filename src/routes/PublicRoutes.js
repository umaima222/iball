import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Enquire from "../Pages/Enquire/Enquire";
import Eventsdetail from "../Pages/Events_detail/Eventsdetail";
import Event from "../Pages/Event/Event";
import Shop from "../Pages/Shop/Shop";
import Contactus from "../Pages/Contactus/Contactus";

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
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
