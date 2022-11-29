import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/cart.css"
import { shop1 } from '../../Constant/Img'
const cart = () => {
  return (
   <>
   <Header/>
   <section class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="content-wrapper text-center">
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="add-to-cart">
    <div class="container">
        <div class="row rowt">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="cart-items-wrapper">
                            <div class="single-cart-wrapper mb-4">
                                <div class="single-cart-img-wrapper">
                                    <figure>
                                        <img src={shop1} class="img-fluid" alt=""/>
                                    </figure>
                                </div>
                                <div class="single-cart-content-wrapper">
                                    <h4>iBall T-Shirt</h4>
                                    <p>Price: <span>£19.99</span></p>
                                    <div class="number">
                                        <span class="plus">+</span>
                                        <input type="text" value="01"/>
                                        <span class="minus">-</span>
                                    </div>
                                    <h6>Total : <span class="total-price">£19.99</span></h6>
                                </div>
                                <button><i class="fa fa-close"></i></button>
                            </div>
                            <div class="single-cart-wrapper mb-4">
                                <div class="single-cart-img-wrapper">
                                    <figure>
                                        <img src={shop1} class="img-fluid" alt=""/>
                                    </figure>
                                </div>
                                <div class="single-cart-content-wrapper">
                                    <h4>iBall T-Shirt</h4>
                                    <p>Price: <span>£19.99</span></p>
                                    <div class="number">
                                        <span class="plus">+</span>
                                        <input type="text" value="01"/>
                                        <span class="minus">-</span>
                                    </div>
                                    <h6>Total : <span class="total-price">£19.99</span></h6>
                                </div>
                                <button><i class="fa fa-close"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 align-self">
                        <div class="order-summry-wrapper">
                            <div class="summary-content-wrapper">
                                <h4>Order Summary</h4>
                                <h5>Shipping : £250</h5>
                                <h5>Sub Total : £288</h5>
                                <p class="mb-4">Taxes and discounts will be calculated at checkout</p>
                                <button onclick="location.href='£'" class="btn up-btn">UPDATE</button>
                                <button onclick="location.href='checkout.php'" class="btn up-btn">CHECKOUT</button>
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

export default cart