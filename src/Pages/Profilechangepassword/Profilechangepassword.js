import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { profileimg } from '../../Constant/Img'
import "../../Assets/css/profile.css"
const Profilechangepassword = () => {
  return (
   <>
   <Header/>
   <section className="profile-sec">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="img-and-username-wrapper">
                    <div className="profile-img">
                        <figure>
                            <img src={profileimg} className="img-fluid" alt=""/>
                            <a href="#" className="chnage">Change image</a>
                        </figure>
                    </div>
                    <div className="username mt-4">
                        <h3 className="username">John Doe</h3>
                    </div>
                </div>
                <div className="for-proflie">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                role="tab" aria-controls="pills-home" aria-selected="true">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                role="tab" aria-controls="pills-profile" aria-selected="false">My Order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                role="tab" aria-controls="pills-contact" aria-selected="false">My Wishlist</a>
                        </li>
                    </ul>

                    <div className="sign-out">
                        <button className="btn" onclick="location.href='index.php'">SIGN OUT</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 kip">
                    <div className="first-top-bar">
                        <h3>Password</h3>
                    </div>
                    <div className="add-new-address">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="oldPassword">Old Password</label>
                                    <input type="password" id="oldPassword" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="password">New Password</label>
                                    <input type="password" id="NewPassword" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="ConfirmNewPassword">Confirm New Password</label>
                                    <input type="password" id="ConfirmNewPassword" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="row align-items-center">

                                    <div className="col-lg-12 text-right">
                                        <div className="add-new-method">

                                            <button type="button" className="btn">CONFIRM</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
        </div>
    </div>
</section>
   <Footer/>
   </>
  )
}

export default Profilechangepassword