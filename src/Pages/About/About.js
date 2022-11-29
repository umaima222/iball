import React from 'react';
import Header from "../../Components/Header";
import "../../Assets/css/about.css";
import { tick } from '../../Constant/Img';
import { video } from '../../Constant/Img';
import { recent1 } from "../../Constant/Img";
import { recent6 } from "../../Constant/Img";
import { recent3 } from "../../Constant/Img";
import { recent2 } from "../../Constant/Img";
import { recent5 } from '../../Constant/Img';
import { recent4 } from '../../Constant/Img';
import Footer from "../../Components/Footer";

function About() {
  return (
    <>
    <Header/>
    {/* <!-- page header start --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>About us</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
{/* <!-- about section starts here --> */}
<section className="about-sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper">
                    <h5>Who We Are</h5>
                    <h2>Welcome To Iball.co</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <ul>
                        <li>
                            <img src= { tick } className="img-fluid" alt=""/>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </li>
                        <li>
                            <img src= { tick } className="img-fluid" alt=""/>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </li>
                        <li>
                            <img src= { tick } className="img-fluid" alt=""/>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </li>
                        <li>
                            <img src= { tick } className="img-fluid" alt=""/>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </li>
                        <li>
                            <img src= { tick } className="img-fluid" alt=""/>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row py-5">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="video-wrapper">
                            <figure>
                                <img src= { video } className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="video-wrapper">
                            <figure>
                                <img src= { video } className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="video-wrapper">
                            <figure>
                                <img src= { video } className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="video-wrapper">
                            <figure>
                                <img src= { video } className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <div className="content-wrapper text-center">
                    <h5>The Vission </h5>
                    <h2>Lorem ipsum Dolor Sit</h2>
                    <p className="mt-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
            <div className="col-lg-1"></div>
        </div>
    </div>
</section>
{/* <!-- about section ends here --> */}
{/* <!-- instagram sec starts here --> */}
<section className="instagram pt-0">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="img-wrapper">
                    <figure>
                        <img src={ recent1 } className="img-fluid gal1" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <figure>
                                <img src={ recent6 } className="img-fluid gal2" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <figure>
                                <img src={ recent2 } className="img-fluid gal3" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <figure>
                        <img src={ recent3 } className="img-fluid gal4" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="img-wrapper">
                    <figure>
                        <img src={ recent4 } className="img-fluid gal5" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="img-wrapper">
                    <figure>
                        <img src={ recent5 } className="img-fluid gal6" alt=""/>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- instagram sec ends here --> */}
<Footer/>
    </>
  )
}

export default About