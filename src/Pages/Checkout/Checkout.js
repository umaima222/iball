import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { shop2 } from '../../Constant/Img'
import { shop1 } from '../../Constant/Img'
import "../../Assets/css/checkout.css"
const Checkout = () => {
  return (
    <>
    <Header/>
    <section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Product Detail</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="checkout">
    <div className="container">
        <form action="Thank-you.php">
            <div className="row">
                <div className="col-lg-6">
                    <div className="first-top-bar">
                        <h3>Shipment Details</h3>
                        <p>Already Have an account? <a href="login.php">Log in</a> </p>
                    </div>

                    {/* <!-- <div className="saved-address">
                        <div className="title">
                            <h5>Use Saved Addresses</h5>
                        </div>
                      
                        <label className="container">
                            <input type="radio" checked="checked" name="radio">
                            <span className="checkmark">
                                <div className="select-address">
                                    <div className="selection">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                    </div>
                                    <div className="radio-btn">
                                        <span></span>
                                    </div>
                                    <div className="address-detail">
                                        <h5><span className="property">Country:</span><span className="value">United
                                                States</span><span className="property pl-4">State:</span><span className="value">Texas</span>
                                        </h5>
                                        <h5><span className="property">Address:</span><span className="value">10515 Fox Ave
                                                Fairdale, Kentucky(KY), 40118</span></h5>
                                        <h5><span className="property">Phone:</span><span className="value">+44-123-456-789</span>
                                        </h5>
                                        <button className="btn default disabled">Default</button>
                                    </div>
                                </div>
                            </span>
                        </label>

                        <label className="container">
                            <input type="radio" name="radio">
                            <span className="checkmark">
                                <div className="select-address">
                                    <div className="selection">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                    </div>
                                    <div className="radio-btn">
                                        <span></span>
                                    </div>
                                    <div className="address-detail">
                                        <h5><span className="property">Country:</span><span className="value">United
                                                States</span><span className="property pl-4">State:</span><span className="value">Texas</span>
                                        </h5>
                                        <h5><span className="property">Address:</span><span className="value">10515 Fox Ave
                                                Fairdale, Kentucky(KY), 40118</span></h5>
                                        <h5><span className="property">Phone:</span><span className="value">+44-123-456-789</span>
                                        </h5>
                                    </div>
                                </div>
                            </span>
                        </label>
                    </div> --> */}
                    <div className="add-new-address">
                     
                        <div className="form-group mb-4">
                            <label for="method">Shipment Method</label>
                            <select id="method" className="form-control">
                                <option selected>Select Shipment method</option>
                                <option>Select Shipment method 1</option>
                                <option>Select Shipment method 2</option>
                                <option>Select Shipment method 3</option>
                            </select>
                        </div>
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
                                    <label for="address">Address</label>
                                    <input type="text" id="address" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="apartmnt">Suite, Apartment, etc </label>
                                    <input type="text" id="apartmnt" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="city">City</label>
                                    <input type="text" id="city" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="region">Country/Region</label>
                                    <input type="text" id="region" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="state">State</label>
                                    <input type="text" id="state" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="zip-code">Post Code</label>
                                    <input type="text" id="zip-code" className="form-control"/>
                                </div>
                            </div>
                            {/* <!-- <div className="col-md-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1">
                                    <label className="form-check-label" for="exampleCheck1">Save Shipping Details</label>
                                </div>
                            </div> --> */}
                        </div>
                    </div>
                    <div className="payment-details">
                        <div className="heading">
                            <h3>Payment Details</h3>
                        </div>
                        <div className="saved-payment-method">
                            {/* <!-- <h5>Use Saved Payments</h5> -->
                            <!-- Saved payments Method --> */}
                            {/* <!-- <label className="container">
                                <input type="radio" checked="checked" name="payment-radio">
                                <span className="checkmark">
                                    <div className="card-details">
                                        <div className="radio-btn">
                                            <span></span>
                                        </div>
                                        <div className="visa-card">
                                            <div className="img-box">
                                                <figure><img src="img/visa.webp" alt="No Image Found">
                                                </figure>
                                            </div>
                                            <div className="input-box">
                                                <label for="card-number">My Personal Card</label>
                                                <input id="card-number" value="**********1239" type="text" readonly>
                                            </div>
                                        </div>
                                        <div className="extra-btn">
                                            <button className="btn default disabled">Default</button>
                                            <div className="selection">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </label>

                            <label className="container second-card">
                                <input type="radio" name="payment-radio">
                                <span className="checkmark">
                                    <div className="card-details">
                                        <div className="radio-btn">
                                            <span></span>
                                        </div>
                                        <div className="visa-card">
                                            <div className="img-box">
                                                <figure><img src="img/visa.webp" alt="No Image Found">
                                                </figure>
                                            </div>
                                            <div className="input-box">
                                                <label for="card-number">My Personal Card</label>
                                                <input id="card-number" value="**********1239" type="text" readonly>
                                            </div>
                                        </div>
                                        <div className="extra-btn">
                                            <button className="btn default disabled">Default</button>
                                            <div className="selection">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </label> --> */}

                            <div className="add-new-method">
                                {/* <!-- <label className="container"> Add New Address
                                    <input type="radio" name="payment-radio">
                                    <span className="checkmark"></span>
                                </label> --> */}
                                <div className="form-group">
                                    <input type="text" className="form-control"/>
                                </div>
                                {/* <!-- <button type="button">Add Card</button> --> */}
                            </div>
                            {/* <!-- Saved payments Method --> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="second-top-bar">
                        <div className="title pb-4">
                            <h3>Order Summery</h3>
                        </div>
      
                    </div>
                    <div className="cart-product-detail">
                        <div className="title">
                            <h3>Products Details</h3>
                        </div>
                        <div className="checkout-products">
                            <div className="products br-right">
                                <div className="abt-product">
                                    <div className="img-box">
                                        <figure><img src={shop1} alt="123"/></figure>
                                    </div>
                                    <div className="pro-dtl">
                                        <h5 className="name">Abkhazia 1994 <br/>
                                            Groucho Marx</h5>
                                        <ul className="variations">
                                            <li>Our Ref: 67451</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h4 className="price">£539.00</h4>
                                </div>
                            </div>
                            <div className="products">
                                <div className="abt-product">
                                    <div className="img-box">
                                        <figure><img src={shop2} alt="123"/></figure>
                                    </div>
                                    <div className="pro-dtl">
                                        <h5 className="name">Abkhazia 1994 <br/>
                                            Groucho Marx</h5>
                                        <ul className="variations">
                                            <li>Our Ref: 67451</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h4 className="price">£539.00</h4>
                                </div>
                            </div>
                            <div className="products br-right">
                                <div className="abt-product">
                                    <div className="img-box">
                                        <figure><img src={shop1} alt="123"/></figure>
                                    </div>
                                    <div className="pro-dtl">
                                        <h5 class="name">Abkhazia 1994 <br/>
                                            Groucho Marx</h5>
                                        <ul class="variations">
                                            <li>Our Ref: 67451</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <h4 class="price">£539.00</h4>
                                </div>
                            </div>
                            <div class="products">
                                <div class="abt-product">
                                    <div class="img-box">
                                        <figure><img src={shop2} alt="123"/></figure>
                                    </div>
                                    <div class="pro-dtl">
                                        <h5 class="name">Abkhazia 1994 <br/>
                                            Groucho Marx</h5>
                                        <ul class="variations">
                                            <li>Our Ref: 67451</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <h4 class="price">£539.00</h4>
                                </div>
                            </div>
                        </div>
                        <div class="pricing-details">
                            <div class="item-total">
                                <h4 class="property">Item Total :</h4>
                                <h4 class="value">£50</h4>
                            </div>
                            <div class="item-total">
                                <h4 class="property">Shipment & Delivery</h4>
                                <h4 class="value">£0</h4>
                            </div>
                            <div class="item-total">
                                <h4 class="property">Promo Applied :</h4>
                                <h4 class="value">-£5</h4>
                            </div>
                        </div>

                        <div class="order-total">
                            <h3 class="property">Order Total</h3>
                            <h3 class="value">£3025.00</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-last"></div>
            <div class="confirm-orderDv">
                <div class="checkbox">
                    <input type="checkbox" class="form-control" id="for-checkbox"/>
                    <label for="for-checkbox">Proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.</label>
                </div>
                <div class="button-group">
                    <button type="submit">Confirm Order</button>
                </div>
            </div>
        </form>
    </div>
</section>
    <Footer/>
    </>
  )
}

export default Checkout