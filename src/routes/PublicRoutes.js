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
import Newevents from "../Pages/Newevents/Newevents";
import NewPassword from "../Pages/NewPassword/NewPassword";
import Ourmodel from "../Pages/our_model/Our_model";
import Ourachivement from "../Pages/Ourachivement/Ourachivement";
import Ourroadmap from "../Pages/ourroadmap/Ourroadmap";
import Ourservice from "../Pages/Ourservice/Ourservice";
import Ourstaff from "../Pages/Ourstaff/Ourstaff";
import Privacy from "../Pages/Privacy/Privacy";
import Productdetail from "../Pages/Productdetail/Productdetail";
import Profilechangepassword from "../Pages/Profilechangepassword/Profilechangepassword";
import Profile from "../Pages/Profile/Profile";
import Signup from "../Pages/Signup/Signup";
import Terms from "../Pages/Terms/Terms";
import Login from "../Pages/Login/Login";
import Cart from "../Pages/Cart/Cart"
import Thankyou from "../Pages/Thankyou/Thankyou";
import Theteam from "../Pages/Theteam/Theteam";
import Video from "../Pages/Video/Video";
import Whatwedo from "../Pages/Whatwedo/Whatwedo";
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
					<Route path="/Newevents" element={<Newevents/>} />
					<Route path="/NewPassword" element={<NewPassword/>}/>
					<Route path="/Ourmodel" element={<Ourmodel/>}/>
					<Route path="/Ourachivement" element={<Ourachivement/>}/>
					<Route path="/Ourroadmap" element={<Ourroadmap/>}/>
					<Route path="/Ourservice" element={<Ourservice/>}/>
					<Route path="/Ourstaff" element={<Ourstaff/>}/>
					<Route path="/Privacy" element={<Privacy/>}/>
					<Route path="/Productdetail" element={<Productdetail/>}/>
					<Route path="/Profilechangepassword" element={<Profilechangepassword/>}/>
					<Route path="/Profile" element={<Profile/>}/>
					<Route path="/ Signup" element={< Signup/>}/>
					<Route path="/Terms" element={<Terms/>}/>
					<Route path="/Login" element={<Login/>}/>
					<Route path="/Cart" element={<Cart/>}/>
					<Route path="/Thankyou" element={<Thankyou/>}/>
					<Route path="/Theteam" element={<Theteam/>}/>
					<Route path="/Video" element={<Video/>}/>
					<Route path="/Whatwedo" element={<Whatwedo/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
