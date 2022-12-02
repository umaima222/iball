import React from "react";
import "../../Assets/css/shop.css"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { shop2 } from "../../Constant/Img";
import { shop1 } from "../../Constant/Img";

const Shop = () => {
  return (
<>
<Header/>
<section className="paralax_scroll">
    {/* <!-- Shop Sec Start Here --> */}
    <section className="shop_sec">
        {/* <!-- page header start --> */}
        <section className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content-wrapper text-center">
                            <h2>Shop</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- page header ends --> */}
        <div className="container">
            <div className="row mt-1">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-8 drbtn">
                            <div className="row">
                                <div className="col-lg-6">
                                </div>
                                <div className="col-lg-6"></div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <p className="item_showing">Showing 1–4 of 4 results</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="shop-sidebar">

                                <div className="categoryDv variation-attr">
                                    <div className="fhead">
                                        <h5>Categories</h5>
                                    </div>
                                    <ul className="categories">
                                        <div className="alltxt">
                                            <span className="dot"></span>
                                            <p className="green_para">All</p>
                                        </div>
                                        <li><a href="#"><span className="property">lorem</span> <span
                                                    className="value"></span></a>
                                        </li>
                                        <li><a href="#"><span className="property">lorem </span> <span
                                                    className="value"></span></a>
                                        </li>
                                        <li><a href="#"><span className="property">lorem </span> <span
                                                    className="value"></span></a>
                                        </li>
                                        <li><a href="#"><span className="property">lorem </span> <span
                                                    className="value"></span></a>
                                        </li>
                                        <li><a href="#"><span className="property">lorem </span> <span
                                                    className="value"></span></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="filter_Dv variation-attr">
                                    <div className="fhead">
                                        <h5 className="green_para">Price Range</h5>
                                    </div>
                                    <div className="filter_all">
                                        <div className="mintxt">
                                            <p>MIN</p>
                                            <p>MAX</p>
                                        </div>
                                        <div className="range_slider">
                                            <div className="range">
                                                <div className="middle">
                                                    <div className="multi-range-slider">
                                                        <input type="range" id="input-left" className="range2" min="0"
                                                            max="100" value="25"
                                                            onmousemove="rangeLeftSlider(this.value)"/>
                                                        <input type="range" id="input-right" className="range2" min="0"
                                                            max="100" value="75"
                                                            onmousemove="rangeRightSlider(this.value)"/>

                                                        <div className="slider">
                                                            <div className="track"></div>
                                                            <div className="range"></div>
                                                            <div className="thumb left"></div>
                                                            <div className="thumb right"></div>
                                                        </div>
                                                    </div>
                                                    <div id="multi_range">
                                                        <span id="range2LeftValue">25</span>
                                                        <span> ~ </span>
                                                        <span id="range2RightValue">75</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rateDv variation-attr">
                                    <div className="fhead">
                                        <h5>Rated</h5>
                                    </div>
                                    <ul className="categories">
                                        <div className="alltxt">
                                            <span className="dot"></span>
                                            <div className="product_stars_icon">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="product_stars_icon1">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="product_stars_icon1">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="product_stars_icon1">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="product_stars_icon1">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">

                                <div className="col-lg-4">
                                    <div className="product-sec">
                                        <div className="product-img"><a href="product-detail.php">
                                                <img className="img-fluid" src={ shop1 } alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <p className="product_name">iBall T-Shirt</p>
                                        </div>

                                        <div className="products-par">
                                            <div className="product_price">
                                                <p className="green_para2">
                                                    £19.99
                                                </p>

                                            </div>
                
                                        </div>
                                        <div className="addtocartbtn ">
                                            <a href="product-detail.php" className="btn"><i className="fa fa-shopping-cart mr-3"
                                                    aria-hidden="true"></i>Add
                                                to
                                                Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-sec">
                                        <div className="product-img"><a href="product-detail.php">
                                                <img className="img-fluid" src={ shop2 } alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <p className="product_name">iBall T-Shirt</p>
                                        </div>

                                        <div className="products-par">
                                            <div className="product_price">
                                                <p className="green_para2">
                                                    £19.99
                                                </p>
                                            </div>
                 
                                        </div>
                                        <div className="addtocartbtn ">
                                            <a href="#" className="btn"><i className="fa fa-shopping-cart mr-3"
                                                    aria-hidden="true"></i>Add
                                                to
                                                Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-sec">
                                        <div className="product-img"><a href="product-detail.php">
                                                <img className="img-fluid" src={ shop1 } alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <p className="product_name">iBall T-Shirt</p>
                                        </div>

                                        <div className="products-par">
                                            <div className="product_price">
                                                <p className="green_para2">
                                                    £19.99
                                                </p>
                                            </div>
             
                                        </div>
                                        <div className="addtocartbtn ">
                                            <a href="#" className="btn"><i className="fa fa-shopping-cart mr-3"
                                                    aria-hidden="true"></i>Add
                                                to
                                                Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-sec">
                                        <div className="product-img"><a href="product-detail.php">
                                                <img className="img-fluid" src={ shop2 } alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <p className="product_name">iBall T-Shirt</p>
                                        </div>

                                        <div className="products-par">
                                            <div className="product_price">
                                                <p className="green_para2">
                                                    £19.99
                                                </p>

                                            </div>
                                            
                                        </div>
                                        <div className="addtocartbtn ">
                                            <a href="#" className="btn"><i className="fa fa-shopping-cart mr-3"
                                                    aria-hidden="true"></i>Add
                                                to
                                                Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="paginations">
                            <li className="active">01</li>
                            <li>02</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                        </ul>

                    </div>
                </div>
            </div>
            </div>
    </section>
    {/* <!-- Shop Sec End Here --> */}
</section>
<Footer/>
</>
  )
}

export default Shop