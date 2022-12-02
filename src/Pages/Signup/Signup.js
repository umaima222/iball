import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/checkout.css"
import "../../Assets/css/signup.css"
const Signup = () => {
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
                        <h3>Sign Up</h3>
                        <p>Already Have an account? <a href="login.php">Log in</a> </p>
                    </div>
                    <div className="add-new-address">
                        {/* <!-- <div className="form-group mb-4">
                            <label for="method">Shipment Method</label>
                            <select id="method" className="form-control">
                                <option selected="">Select Shipment method</option>
                                <option>Select Shipment method 1</option>
                                <option>Select Shipment method 2</option>
                                <option>Select Shipment method 3</option>
                            </select>
                        </div> --> */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" id="phone" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" id="email" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="Password">Password</label>
                                    <input type="password" id="Password" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="Password">Confirm Password</label>
                                    <input type="password" id="Password" className="form-control"/>
                                </div>
                            </div>
                            {/* <!-- <div className="col-md-12">
                                <div className="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" id="address" className="form-control">
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="apartmnt">Suite, Apartment, etc </label>
                                    <input type="text" id="apartmnt" className="form-control">
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="city">City</label>
                                    <input type="text" id="city" className="form-control">
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="region">Country/Region</label>
                                    <input type="text" id="region" className="form-control">
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="state">State</label>
                                    <input type="text" id="state" className="form-control">
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="zip-code">Zip Code</label>
                                    <input type="text" id="zip-code" className="form-control">
                                </div>
                            </div> --> */}
                            <div className="col-md-12">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" for="exampleCheck1">Agree to <a href="terms.php" target="_blank">Terms & conditions</a></label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <div className="add-new-method">

                                            <button type="button" className="btn" onclick="location.href='index.php'">SIGN UP</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="payment-details">

                        <div className="saved-payment-method">

                            {/* <!-- Saved payments Method --> */}
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

export default Signup