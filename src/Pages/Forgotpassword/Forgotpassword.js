import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../Assets/css/about.css";


const Forgotpassword = () => {
  return (
	<>
	<Header />
	<section class="checkout">
    <div class="container">
        <form action="thank-you.php">
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6 kip">
                    <div class="first-top-bar">
                        <h3>Forgets Password</h3>
                    </div>
                    <div class="add-new-address">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="Email">Email</label>
                                    <input type="email" id="Email" class="form-control"/>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row align-items-center">
                                    <div class="col-lg-8">
                                        {/* <!-- <p>6 digit code will be sent to your email <br> <small>Haven't Recieved the code? try again</small></p> --> */}
                                    </div>
                                    <div class="col-lg-4 text-right">
                                        <div class="add-new-method">

                                            <button type="button" onclick="location.href='New-Password.php'" class="btn">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3"></div>
            </div>
        </form>
    </div>
</section>
	<Footer />
</>
  )
}

export default Forgotpassword

