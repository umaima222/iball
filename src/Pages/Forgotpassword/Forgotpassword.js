import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../Assets/css/about.css";


const Forgotpassword = () => {
  return (
	<>
	<Header />
	<section className="checkout">
    <div className="container">
        <form action="thank-you.php">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 kip">
                    <div className="first-top-bar">
                        <h3>Forgets Password</h3>
                    </div>
                    <div className="add-new-address">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="Email">Email</label>
                                    <input type="email" id="Email" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        {/* <!-- <p>6 digit code will be sent to your email <br> <small>Haven't Recieved the code? try again</small></p> --> */}
                                    </div>
                                    <div className="col-lg-4 text-right">
                                        <div className="add-new-method">

                                            <button type="button" onclick="location.href='New-Password.php'" className="btn">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </form>
    </div>
</section>
	<Footer />
</>
  )
}

export default Forgotpassword

