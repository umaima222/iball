import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/thankyou.css"
export const Thankyou = () => {
  return (
   <>
   <Header/>
   {/* <!-- page header starts here --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Thank You</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header starts here --> */}
{/* <!-- Thank You Sec Start Here --> */}
<section className="thankyou-sec">
    <div className="container">
        <div className="head">
            <h1>Thank You for Shopping!!</h1>
            <h4>Your Order is confirmed</h4>
        </div>
        <div className="order-nmber">
            <h4>OrderNo#1084598423154</h4>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-2">

            </div>
            <div className="col-lg-6 col-md-8">
                <div className="order-detail">
                    <div className="shipment-address">
                        <div className="title">
                            <h5>Shipment Address</h5>
                        </div>
                        <ul className="address">
                            <li className="country"><span className="property">Country:</span><span className="value">United
                                    States</span>
                            </li>
                            <li className="address"><span className="property">Address:</span><span className="value">10515 Fox Ave
                                    Fairdale, Kentucky(KY), 40118</span></li>
                            <li className="phone"><span className="property">Phone:</span><span className="value">+44-123-456-789</span>
                            </li>
                            <li className="state"><span className="property">State:</span><span className="value">Texas</span></li>
                        </ul>
                    </div>
                    <div className="payment-detail">
                        <div className="title">
                            <h5>Payment details</h5>
                        </div>
                        <ul className="payment-total">
                            <li className="item-total"><span className="property">Item Total :</span><span className="value">£50</span></li>
                            <li className="delivery"><span className="property">Shipment & Delivery</span><span className="value">£0</span>
                            </li>
                            <li className="item-total"><span className="property">Promo Applied :</span><span className="value">-£5</span>
                            </li>
                        </ul>
                    </div>
                    <div className="order-total">
                        <h3 className="property">Order Total</h3>
                        <h3 className="value">£45</h3>
                    </div>
                </div>
                <a className="btn" href="index.php" type="button">Continue Shopping</a>
            </div>
            <div className="col-lg-3 col-md-2">

            </div>
        </div>
    </div>
</section>
{/* <!-- Thank You Sec End Here --> */}
   <Footer/>
   </>
  )
}

export default Thankyou