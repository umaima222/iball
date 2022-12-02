import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { profile } from "../../Constant/Img";
import "../../Assets/css/signup.css"
import "../../Assets/css/profile.css"
// import {icon_loader} from '../../Constant/Img'


const Editprofile = () => {
  return (
    <>
    <Header />
    <section className="checkout profile-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="img-and-username-wrapper">
                        <div className="profile-img">
                            <figure>
                                <img src={profile} className="img-fluid" alt="" />
                                <a href="#" className="chnage">
                                    Change image
                                </a>
                            </figure>
                        </div>
                        <div className="username mt-4">
                            <h3 className="username">John Doe</h3>
                        </div>
                    </div>
                    <div className="for-proflie">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-toggle="pill"
                                    href="#pills-home"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    Account
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    href="#pills-profile"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                >
                                    My Order
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="pills-contact-tab"
                                    data-toggle="pill"
                                    href="#pills-contact"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                >
                                    My Wishlist
                                </a>
                            </li>
                        </ul>

                        <div className="sign-out">
                            <button className="btn" onclick="location.href='index.php'">
                                SIGN OUT
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h3 className="basic_head">Edit Information</h3>
                    <div className="information">
                        <div className="row profile-h">
                            <div className="col-md-2">
                                <div className="avatar-preview active_img align-self-center">
                                    <figure>
                                        <img src={profile} className="img-fluid" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-md-5  align-self-center">
                                <div className="jpg-png">
                                    <p>Jpeg or Png maximum size (5mb)</p>
                                </div>
                                <div className="avatar-edit">
                                    <label for="imageUpload" className="btn">
                                        Upload Photo
                                    </label>
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        className="custom-file-input"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                </div>
                            </div>
                            <div className="col-md-5 p-0">
                                <div className="loader-pro">
                                    <p>Processing</p>
                                    {/* <i><img src={icon_loader} alt=""/></i> */}
                                </div>
                            </div>
                        </div>
                        <div className="form-start add-new-address">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="oldPassword">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            name="first_name"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="oldPassword">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="last_name"
                                            id="inputLname"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="oldPassword">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="inputPhone"
                                            name="inputPhone"
                                            required="Phone"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12 text-right">
                                            <div className="add-new-method">
                                                <button type="button" className="btn">
                                                    CONFIRM
                                                </button>
                                            </div>
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
    <Footer />
</>
  )
}

export default Editprofile
