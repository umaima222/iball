import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { profileimg, shop1 } from '../../Constant/Img';
import "../../Assets/css/profile.css"
const Profile = () => {
  return (
    <>
<Header/>
{/* <!-- Profile section  --> */}
<section className="profile-sec">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="img-and-username-wrapper">
                    <div className="profile-img">
                        <figure>
                            <img src={profileimg} className="img-fluid" alt=""/>
                            <a href="#" className="chnage">Change image</a>
                        </figure>

                    </div>
                    <div className="username mt-4">
                        <h3 className="username">John Doe</h3>
                    </div>
                </div>
                <div className="for-proflie">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                role="tab" aria-controls="pills-home" aria-selected="true">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                role="tab" aria-controls="pills-profile" aria-selected="false">My Order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                role="tab" aria-controls="pills-contact" aria-selected="false">My Wishlist</a>
                        </li>
                    </ul>

                    <div className="sign-out">
                        <button className="btn" onclick="location.href='index.php'">SIGN OUT</button>
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="Accounts">
                                    <h5>Account</h5>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="first-name">
                                            <h4>First Name</h4>
                                            <h3>James</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="first-name">
                                            <h4>Last Name</h4>
                                            <h3>Anderson</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="first-name">
                                            <h4>Phone</h4>
                                            <h3><a href="tel:+1 (322) 422 654">+1 (322) 422 654</a></h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="row for-allign">
                                    <div className="col-md-6">
                                        <div className="address">
                                            <h4>Primary Email</h4>
                                            <h3>Jamesanderson@gmail.com</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <h3>********</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="password-btn">
                                            <a href="profilechangepassword.php">Change Password</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <a href="editprofile.php" className="btn">EDIT PROFILE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="order-table-wrapper table-responsive">
                                    <table>
                                        <tbody>
                                            <tr className="row1">
                                                <th className="order-no">OrderNo</th>
                                                <th className="order-date">Order Date</th>
                                                <th className="order-status">Status</th>
                                                <th className="order-total">Total</th>
                                                <th className="details"></th>
                                            </tr>
                                            <tr className="row2">
                                                <td className="number">#1084598423154</td>
                                                <td className="date">04-12-21</td>
                                                <td className="status">Confirm</td>
                                                
                                                <td className="total-price">£590.00</td>
                                                <td className="order-details">
                                                    <a className="" data-toggle="modal"
                                                        data-target="#exampleModalLong">view Details</a>
                                                </td>
                                            </tr>
                                            <tr className="row2">
                                                <td className="number">#1084598423154</td>
                                                <td className="date">04-12-21</td>
                                                <td className="status">Confirm</td>
                                                <td className="total-price">£590.00</td>
                                                <td className="order-details">
                                                    <a  data-toggle="modal"
                                                        data-target="#exampleModalLong">view Details</a>
                                                </td>
                                            </tr>
                                            <tr className="row2">
                                                <td className="number">#1084598423154</td>
                                                <td className="date">04-12-21</td>
                                                <td className="status">Confirm</td>
                                               
                                                <td className="total-price">£590.00</td>
                                                <td className="order-details">
                                                    <a data-toggle="modal"
                                                        data-target="#exampleModalLong">view Details</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- pagination starts here --> */}
                                <div className="pagination-wrapper">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                        <li><a className="number active" href="#">1</a></li>
                                        <li><a className="number" href="#">2</a></li>
                                        <li><a className="number" href="#">3</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- pagination starts here --> */}
                            </div>
                        </div>

                        {/* <!-- Modal starts here--> */}
                        <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="model-header pt-5">
                                        <h5 className="modal-title" id="exampleModalLongTitle">OrderNo</h5>
                                        <h6>#1084598423154</h6>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i></span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <h6 className="text-center mb-4">Product Detail</h6>
                                        <div className="my-orders-products">
                                            <div className="product-deatail-wrapper  ">
                                                <div className="product-img">
                                                    <figure>
                                                        <img src={shop1} className="img-fluid" alt=""/>
                                                    </figure>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="product-name">JSC FASHION WOMEN'S BAG</h5>
                                                    <h6 className="product-size">X3 | 2XL | Sliver</h6>
                                                </div>
                                                <div className="product-price">
                                                    <h6 className="product-price">£158.07 </h6>
                                                </div>
                                            </div>
                                            <div className="product-deatail-wrapper ">
                                                <div className="product-img">
                                                    <figure>
                                                        <img src={shop1} className="img-fluid" alt=""/>
                                                    </figure>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="product-name">JSC FASHION WOMEN'S BAG</h5>
                                                    <h6 className="product-size">X3 | 2XL | Sliver</h6>
                                                </div>
                                                <div className="product-price">
                                                    <h6 className="product-price">£158.07 </h6>
                                                </div>
                                            </div>
                                            <div className="product-deatail-wrapper ">
                                                <div className="product-img">
                                                    <figure>
                                                        <img src={shop1} className="img-fluid" alt=""/>
                                                    </figure>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="product-name">JSC FASHION WOMEN'S BAG</h5>
                                                    <h6 className="product-size">X3 | 2XL | Sliver</h6>
                                                </div>
                                                <div className="product-price">
                                                    <h6 className="product-price">£158.07 </h6>
                                                </div>
                                            </div>
                                            <div className="product-deatail-wrapper ">
                                                <div className="product-img">
                                                    <figure>
                                                        <img src={shop1} className="img-fluid" alt=""/>
                                                    </figure>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="product-name">JSC FASHION WOMEN'S BAG</h5>
                                                    <h6 className="product-size">X3 | 2XL | Sliver</h6>
                                                </div>
                                                <div className="product-price">
                                                    <h6 className="product-price">£158.07 </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-details">
                                            <h6 className="text-center">Order Detail</h6>
                                            <div className="order-details-wrapper mt-5">
                                                <h6><span>Date :</span> <span className="date">#10005165551651</span></h6>
                                                <h6><span>Subtotal :</span> <span className="subtotal">£785.00</span></h6>
                                                <h6><span>Tax fee :</span> <span className="tax-fee">£80.00</span></h6>
                                                <h6><span>Shipping Fee :</span> <span className="shipping-fee">£5.00</span>
                                                </h6>
                                                <h6><span>Coupon Discount :</span> <span className="Coupon">£50.00</span>
                                                </h6>
                                                <hr/>
                                                <h6><span>Total Amount :</span> <span className="Coupon">£50.00</span>
                                                </h6>
                                            </div>
                                        </div>

                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Modal ends here--> */}
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="everything">
                            <h3 className="heading">My Wishlist</h3>
                            <div className="wishlist-table-wrapper">
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr className="row1">
                                                <th className="wishlist-imgs-col"></th>
                                                <th className="product-name">PRODUCT NAME</th>
                                                <th className="unit-price">UNIT PRICE</th>
                                                <th className="delete-row"></th>
                                            </tr>
                                            <tr className="row2">
                                                <td className="wishlist-images">
                                                    <img src={shop1} className="img-fluid wishlist-img" alt=""/>
                                                </td>
                                                <td className="pro-name">
                                                    iBall T-Shirt
                                                </td>
                                                <td className="unitr-pro">
                                                    £158.07
                                                </td>
                                                <td className="row-close">
                                                    <button><i className="fa fa-close"></i></button>
                                                </td>
                                            </tr>
                                            <tr className="row2">
                                                <td className="wishlist-images">
                                                    <img src={shop1} className="img-fluid wishlist-img" alt=""/>
                                                </td>
                                                <td className="pro-name">
                                                    iBall T-Shirt
                                                </td>
                                                <td className="unitr-pro">
                                                    £158.07
                                                </td>
                                                <td className="row-close">
                                                    <button><i className="fa fa-close"></i></button>
                                                </td>
                                            </tr>
                                            <tr className="row2">
                                                <td className="wishlist-images">
                                                    <img src={shop1} className="img-fluid wishlist-img" alt=""/>
                                                </td>
                                                <td className="pro-name">
                                                    iBall T-Shirt
                                                </td>
                                                <td className="unitr-pro">
                                                    £158.07
                                                </td>
                                                <td className="row-close">
                                                    <button><i className="fa fa-close"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="pagination-wrapper">
                                <ul>
                                    <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                    <li><a className="number active" href="#">1</a></li>
                                    <li><a className="number" href="#">2</a></li>
                                    <li><a className="number" href="#">3</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End of Profile section  --> */}
<Footer/>
    </>
  )
}

export default Profile