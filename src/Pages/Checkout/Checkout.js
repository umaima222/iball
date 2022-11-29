import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { shop2 } from '../../Constant/Img'
import { shop1 } from '../../Constant/Img'
const Checkout = () => {
  return (
    <>
    <Header/>
    <section class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="content-wrapper text-center">
                    <h2>Product Detail</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="checkout">
    <div class="container">
        <form action="Thank-you.php">
            <div class="row">
                <div class="col-lg-6">
                    <div class="first-top-bar">
                        <h3>Shipment Details</h3>
                        <p>Already Have an account? <a href="login.php">Log in</a> </p>
                    </div>

                    {/* <!-- <div class="saved-address">
                        <div class="title">
                            <h5>Use Saved Addresses</h5>
                        </div>
                      
                        <label class="container">
                            <input type="radio" checked="checked" name="radio">
                            <span class="checkmark">
                                <div class="select-address">
                                    <div class="selection">
                                        <i class="fa fa-check" aria-hidden="true"></i>
                                    </div>
                                    <div class="radio-btn">
                                        <span></span>
                                    </div>
                                    <div class="address-detail">
                                        <h5><span class="property">Country:</span><span class="value">United
                                                States</span><span class="property pl-4">State:</span><span class="value">Texas</span>
                                        </h5>
                                        <h5><span class="property">Address:</span><span class="value">10515 Fox Ave
                                                Fairdale, Kentucky(KY), 40118</span></h5>
                                        <h5><span class="property">Phone:</span><span class="value">+44-123-456-789</span>
                                        </h5>
                                        <button class="btn default disabled">Default</button>
                                    </div>
                                </div>
                            </span>
                        </label>

                        <label class="container">
                            <input type="radio" name="radio">
                            <span class="checkmark">
                                <div class="select-address">
                                    <div class="selection">
                                        <i class="fa fa-check" aria-hidden="true"></i>
                                    </div>
                                    <div class="radio-btn">
                                        <span></span>
                                    </div>
                                    <div class="address-detail">
                                        <h5><span class="property">Country:</span><span class="value">United
                                                States</span><span class="property pl-4">State:</span><span class="value">Texas</span>
                                        </h5>
                                        <h5><span class="property">Address:</span><span class="value">10515 Fox Ave
                                                Fairdale, Kentucky(KY), 40118</span></h5>
                                        <h5><span class="property">Phone:</span><span class="value">+44-123-456-789</span>
                                        </h5>
                                    </div>
                                </div>
                            </span>
                        </label>
                    </div> --> */}
                    <div class="add-new-address">
                     
                        <div class="form-group mb-4">
                            <label for="method">Shipment Method</label>
                            <select id="method" class="form-control">
                                <option selected>Select Shipment method</option>
                                <option>Select Shipment method 1</option>
                                <option>Select Shipment method 2</option>
                                <option>Select Shipment method 3</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" id="phone" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" id="email" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" id="address" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="apartmnt">Suite, Apartment, etc </label>
                                    <input type="text" id="apartmnt" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input type="text" id="city" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="region">Country/Region</label>
                                    <input type="text" id="region" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="state">State</label>
                                    <input type="text" id="state" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="zip-code">Post Code</label>
                                    <input type="text" id="zip-code" class="form-control"/>
                                </div>
                            </div>
                            {/* <!-- <div class="col-md-12">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Save Shipping Details</label>
                                </div>
                            </div> --> */}
                        </div>
                    </div>
                    <div class="payment-details">
                        <div class="heading">
                            <h3>Payment Details</h3>
                        </div>
                        <div class="saved-payment-method">
                            {/* <!-- <h5>Use Saved Payments</h5> -->
                            <!-- Saved payments Method --> */}
                            {/* <!-- <label class="container">
                                <input type="radio" checked="checked" name="payment-radio">
                                <span class="checkmark">
                                    <div class="card-details">
                                        <div class="radio-btn">
                                            <span></span>
                                        </div>
                                        <div class="visa-card">
                                            <div class="img-box">
                                                <figure><img src="img/visa.webp" alt="No Image Found">
                                                </figure>
                                            </div>
                                            <div class="input-box">
                                                <label for="card-number">My Personal Card</label>
                                                <input id="card-number" value="**********1239" type="text" readonly>
                                            </div>
                                        </div>
                                        <div class="extra-btn">
                                            <button class="btn default disabled">Default</button>
                                            <div class="selection">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </label>

                            <label class="container second-card">
                                <input type="radio" name="payment-radio">
                                <span class="checkmark">
                                    <div class="card-details">
                                        <div class="radio-btn">
                                            <span></span>
                                        </div>
                                        <div class="visa-card">
                                            <div class="img-box">
                                                <figure><img src="img/visa.webp" alt="No Image Found">
                                                </figure>
                                            </div>
                                            <div class="input-box">
                                                <label for="card-number">My Personal Card</label>
                                                <input id="card-number" value="**********1239" type="text" readonly>
                                            </div>
                                        </div>
                                        <div class="extra-btn">
                                            <button class="btn default disabled">Default</button>
                                            <div class="selection">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </label> --> */}

                            <div class="add-new-method">
                                {/* <!-- <label class="container"> Add New Address
                                    <input type="radio" name="payment-radio">
                                    <span class="checkmark"></span>
                                </label> --> */}
                                <div class="form-group">
                                    <input type="text" class="form-control"/>
                                </div>
                                {/* <!-- <button type="button">Add Card</button> --> */}
                            </div>
                            {/* <!-- Saved payments Method --> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="second-top-bar">
                        <div class="title pb-4">
                            <h3>Order Summery</h3>
                        </div>
      
                    </div>
                    <div class="cart-product-detail">
                        <div class="title">
                            <h3>Products Details</h3>
                        </div>
                        <div class="checkout-products">
                            <div class="products br-right">
                                <div class="abt-product">
                                    <div class="img-box">
                                        <figure><img src={shop1} alt="123"/></figure>
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
                            <div class="products br-right">
                                <div class="abt-product">
                                    <div class="img-box">
                                        <figure><img src={shop1} alt="123"/></figure>
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