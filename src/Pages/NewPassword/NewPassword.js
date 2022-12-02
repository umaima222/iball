import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/checkout.css"
import "../../Assets/css/signup.css"
const NewPassword = () => {
  return (
    <>
    <Header/>
    <section className="checkout">
    <div className="container">
        <form action="thank-you.php">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 kip">
                    <div className="first-top-bar">
                        <h3>Password</h3>
                    </div>
                    <div className="add-new-address">
                        <div className="row">
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
                <div className="col-lg-2"></div>
            </div>
        </form>
    </div>
</section>
    <Footer/>
    </>
  )
}

export default NewPassword