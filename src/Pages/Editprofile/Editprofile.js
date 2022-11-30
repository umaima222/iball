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
    <section class="checkout profile-sec">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="img-and-username-wrapper">
                        <div class="profile-img">
                            <figure>
                                <img src={profile} class="img-fluid" alt="" />
                                <a href="#" class="chnage">
                                    Change image
                                </a>
                            </figure>
                        </div>
                        <div class="username mt-4">
                            <h3 class="username">John Doe</h3>
                        </div>
                    </div>
                    <div class="for-proflie">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
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
                            <li class="nav-item">
                                <a
                                    class="nav-link"
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
                            <li class="nav-item">
                                <a
                                    class="nav-link"
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

                        <div class="sign-out">
                            <button class="btn" onclick="location.href='index.php'">
                                SIGN OUT
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <h3 class="basic_head">Edit Information</h3>
                    <div class="information">
                        <div class="row profile-h">
                            <div class="col-md-2">
                                <div class="avatar-preview active_img align-self-center">
                                    <figure>
                                        <img src={profile} class="img-fluid" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div class="col-md-5  align-self-center">
                                <div class="jpg-png">
                                    <p>Jpeg or Png maximum size (5mb)</p>
                                </div>
                                <div class="avatar-edit">
                                    <label for="imageUpload" class="btn">
                                        Upload Photo
                                    </label>
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        class="custom-file-input"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                </div>
                            </div>
                            <div class="col-md-5 p-0">
                                <div class="loader-pro">
                                    <p>Processing</p>
                                    {/* <i><img src={icon_loader} alt=""/></i> */}
                                </div>
                            </div>
                        </div>
                        <div class="form-start add-new-address">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="oldPassword">First Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="inputName"
                                            name="first_name"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="oldPassword">Last Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="last_name"
                                            id="inputLname"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="oldPassword">Phone</label>
                                        <input
                                            type="tel"
                                            class="form-control"
                                            id="inputPhone"
                                            name="inputPhone"
                                            required="Phone"
                                        />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="row align-items-center">
                                        <div class="col-lg-12 text-right">
                                            <div class="add-new-method">
                                                <button type="button" class="btn">
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
