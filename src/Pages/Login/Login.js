import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/signup.css"
import "../../Assets/css/checkout.css"

const Login = () => {
  return (
    <>
    <Header/>
    <section className="checkout">
    <div className="container">
        <form action="thank-you.php">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 kip">
                    <div className="first-top-bar">
                        <h3>Sign In</h3>
                        <p>Don’t have an account? <a href="Sign-up.php">Sign Up</a> </p>
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
                                <div className="form-group">
                                    <label for="Password">Password</label>
                                    <input type="password" id="Password" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-right">
                                    <a href="forgot-password.php">Forgotten Password?</a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <div className="add-new-method">

                                            <button type="button" onclick="location.href='profile.php'" className="btn">SIGN IN</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="payment-details">

                        <div className="saved-payment-method">
{/* 
                            <!-- Saved payments Method --> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </form>
    </div>
</section>
    <Footer/>
    </>
  )
}

export default Login