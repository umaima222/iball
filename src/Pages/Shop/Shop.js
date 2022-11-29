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
<section class="paralax_scroll">
    {/* <!-- Shop Sec Start Here --> */}
    <section class="shop_sec">
        {/* <!-- page header start --> */}
        <section class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="content-wrapper text-center">
                            <h2>Shop</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- page header ends --> */}
        <div class="container">
            <div class="row mt-1">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-8 drbtn">
                            <div class="row">
                                <div class="col-lg-6">
                                </div>
                                <div class="col-lg-6"></div>
                            </div>

                        </div>
                        <div class="col-lg-4">
                            <p class="item_showing">Showing 1–4 of 4 results</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="shop-sidebar">

                                <div class="categoryDv variation-attr">
                                    <div class="fhead">
                                        <h5>Categories</h5>
                                    </div>
                                    <ul class="categories">
                                        <div class="alltxt">
                                            <span class="dot"></span>
                                            <p class="green_para">All</p>
                                        </div>
                                        <li><a href="#"><span class="property">lorem</span> <span
                                                    class="value"></span></a>
                                        </li>
                                        <li><a href="#"><span class="property">lorem </span> <span
                                                    class="value"></span></a>
                                        </li>
                                        <li><a href="#"><span class="property">lorem </span> <span
                                                    class="value"></span></a>
                                        </li>
                                        <li><a href="#"><span class="property">lorem </span> <span
                                                    class="value"></span></a>
                                        </li>
                                        <li><a href="#"><span class="property">lorem </span> <span
                                                    class="value"></span></a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="filter_Dv variation-attr">
                                    <div class="fhead">
                                        <h5 class="green_para">Price Range</h5>
                                    </div>
                                    <div class="filter_all">
                                        <div class="mintxt">
                                            <p>MIN</p>
                                            <p>MAX</p>
                                        </div>
                                        <div class="range_slider">
                                            <div class="range">
                                                <div class="middle">
                                                    <div class="multi-range-slider">
                                                        <input type="range" id="input-left" class="range2" min="0"
                                                            max="100" value="25"
                                                            onmousemove="rangeLeftSlider(this.value)"/>
                                                        <input type="range" id="input-right" class="range2" min="0"
                                                            max="100" value="75"
                                                            onmousemove="rangeRightSlider(this.value)"/>

                                                        <div class="slider">
                                                            <div class="track"></div>
                                                            <div class="range"></div>
                                                            <div class="thumb left"></div>
                                                            <div class="thumb right"></div>
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
                                <div class="rateDv variation-attr">
                                    <div class="fhead">
                                        <h5>Rated</h5>
                                    </div>
                                    <ul class="categories">
                                        <div class="alltxt">
                                            <span class="dot"></span>
                                            <div class="product_stars_icon">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="product_stars_icon1">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                        <div class="product_stars_icon1">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                        <div class="product_stars_icon1">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                        <div class="product_stars_icon1">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="row">

                                <div class="col-lg-4">
                                    <div class="product-sec">
                                        <div class="product-img"><a href="product-detail.php">
                                                <img class="img-fluid" src={ shop1 } alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <p class="product_name">iBall T-Shirt</p>
                                        </div>

                                        <div class="products-par">
                                            <div class="product_price">
                                                <p class="green_para2">
                                                    £19.99
                                                </p>

                                            </div>
                
                                        </div>
                                        <div class="addtocartbtn ">
                                            <a href="product-detail.php" class="btn"><i class="fa fa-shopping-cart mr-3"
                                                    aria-hidden="true"></i>Add
                                                to
                                                Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="product-sec">
                                        <div class="product-img"><a href="product-detail.php">
                                                <img class="img-fluid" src={ shop2 } alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <p class="product_name">iBall T-Shirt</p>
                                        </div>

                                        <div class="products-par">
                                            <div class="product_price">
                                                <p class="green_para2">
                                                    £19.99
                                                </p>
                                            </div>
                 
                                        </div>
                                        <div class="addtocartbtn ">
                                            <a href="#" class="btn"><i class="fa fa-shopping-cart mr-3"
                                                    aria-hidden="true"></i>Add
                                                to
                                                Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="product-sec">
                                        <div class="product-img"><a href="product-detail.php">
                                                <img class="img-fluid" src={ shop1 } alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <p class="product_name">iBall T-Shirt</p>
                                        </div>

                                        <div class="products-par">
                                            <div class="product_price">
                                                <p class="green_para2">
                                                    £19.99
                                                </p>
                                            </div>
             
                                        </div>
                                        <div class="addtocartbtn ">
                                            <a href="#" class="btn"><i class="fa fa-shopping-cart mr-3"
                                                    aria-hidden="true"></i>Add
                                                to
                                                Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="product-sec">
                                        <div class="product-img"><a href="product-detail.php">
                                                <img class="img-fluid" src={ shop2 } alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <p class="product_name">iBall T-Shirt</p>
                                        </div>

                                        <div class="products-par">
                                            <div class="product_price">
                                                <p class="green_para2">
                                                    £19.99
                                                </p>

                                            </div>
                                            
                                        </div>
                                        <div class="addtocartbtn ">
                                            <a href="#" class="btn"><i class="fa fa-shopping-cart mr-3"
                                                    aria-hidden="true"></i>Add
                                                to
                                                Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul class="paginations">
                            <li class="active">01</li>
                            <li>02</li>
                            <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
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