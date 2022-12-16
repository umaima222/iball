import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/what.css"
import { company, member, tick, we } from '../../Constant/Img'
const Whatwedo = () => {
  return (
    <>
    <Header/>
    {/* <!-- page header start --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>What We do</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
{/* <!-- what we sec starts --> */}
<section className="what-we-do">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 pb-5">
                <div className="main-content-wrapper text-center">
                    <h5>What We Do</h5>
                    <h2>We believe in the power of sport to change lives</h2>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <figure>
                                <img src={we} className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <figure>
                                <img src={we} className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <figure>
                                <img src={we} className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <figure>
                                <img src={we} className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <div className="content-wrapper text-center">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
            <div className="col-lg-1"></div>
        </div>
    </div>
</section>
{/* <!-- what we sec ends --> */}
{/* <!-- company starts here --> */}
<section className="campany">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
                <div className="content-wrapper">
                    <h5>What The Company Does</h5>
                    <h2>Our Club Organize Courses and events</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <ul>
                        <li>
                            <img src={tick} className="img-fluid" alt=""/>
                            Lorem Ipsum is simply dummy text
                        </li>
                        <li>
                            <img src={tick} className="img-fluid" alt=""/>
                            Lorem Ipsum is simply dummy text
                        </li>
                        <li>
                            <img src={tick} className="img-fluid" alt=""/>
                            Lorem Ipsum is simply dummy text
                        </li>
                        <li>
                            <img src={tick} className="img-fluid" alt=""/>
                            Lorem Ipsum is simply dummy text
                        </li>
                        <li>
                            <img src={tick} className="img-fluid" alt=""/>
                            Lorem Ipsum is simply dummy text
                        </li>
                        <li>
                            <img src={tick} className="img-fluid" alt=""/>
                            Lorem Ipsum is simply dummy text
                        </li>
                    </ul>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="img-wrapper">
                    <figure>
                        <img src={company} className="img-fluid" alt=""/>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- company ends here --> */}
{/* <!-- members starts here --> */}
<section className="members">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 pb-5">
                <div className="main-content-wrapper text-center">
                    <h5>Team Members</h5>
                    <h2>Our Professional Team</h2>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-wrapper">
                    <div className="card-img-wrapper">
                        <figure>
                            <img src={ member} className="img-fluid" alt=""/>
                        </figure>
                    </div>
                    <div className="card-content-wrapper text-center">
                        <h3>John Doe</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-wrapper">
                    <div className="card-img-wrapper">
                        <figure>
                            <img src={member} className="img-fluid" alt=""/>
                        </figure>
                    </div>
                    <div className="card-content-wrapper text-center">
                        <h3>John Doe</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-wrapper">
                    <div className="card-img-wrapper">
                        <figure>
                            <img src={member} className="img-fluid" alt=""/>
                        </figure>
                    </div>
                    <div className="card-content-wrapper text-center">
                        <h3>John Doe</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- members ends here --> */}
    <Footer/>
    </>
  )
}

export default Whatwedo