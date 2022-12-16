import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/cart.css"
import { shop1 } from '../../Constant/Img'
const Cart = () => {
  return (
   <>
   <Header/>
   <section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="add-to-cart">
    <div className="container">
        <div className="row rowt">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="cart-items-wrapper">
                            <div className="single-cart-wrapper mb-4">
                                <div className="single-cart-img-wrapper">
                                    <figure>
                                        <img src={shop1} className="img-fluid" alt=""/>
                                    </figure>
                                </div>
                                <div className="single-cart-content-wrapper">
                                    <h4>iBall T-Shirt</h4>
                                    <p>Price: <span>£19.99</span></p>
                                    <div className="number">
                                        <span className="plus">+</span>
                                        <input type="text" value="01"/>
                                        <span className="minus">-</span>
                                    </div>
                                    <h6>Total : <span className="total-price">£19.99</span></h6>
                                </div>
                                <button><i className="fa fa-close"></i></button>
                            </div>
                            <div className="single-cart-wrapper mb-4">
                                <div className="single-cart-img-wrapper">
                                    <figure>
                                        <img src={shop1} className="img-fluid" alt=""/>
                                    </figure>
                                </div>
                                <div className="single-cart-content-wrapper">
                                    <h4>iBall T-Shirt</h4>
                                    <p>Price: <span>£19.99</span></p>
                                    <div className="number">
                                        <span className="plus">+</span>
                                        <input type="text" value="01"/>
                                        <span className="minus">-</span>
                                    </div>
                                    <h6>Total : <span className="total-price">£19.99</span></h6>
                                </div>
                                <button><i className="fa fa-close"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 align-self">
                        <div className="order-summry-wrapper">
                            <div className="summary-content-wrapper">
                                <h4>Order Summary</h4>
                                <h5>Shipping : £250</h5>
                                <h5>Sub Total : £288</h5>
                                <p className="mb-4">Taxes and discounts will be calculated at checkout</p>
                                <button onclick="location.href='£'" className="btn up-btn">UPDATE</button>
                                <button onclick="location.href='checkout.php'" className="btn up-btn">CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
   <Footer/>
   </>
  )
}

export default Cart