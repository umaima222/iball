import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/ourservice.css"
import { coa } from '../../Constant/Img'
import { skill } from '../../Constant/Img'
import { bp } from '../../Constant/Img'
import { league } from '../../Constant/Img'
const Ourservice = () => {
  return (
   <>
   <Header/>
   {/* <!-- page header start --> */}
   <section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Our Services</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
{/* <!-- Our Road map section  --> */}

<section className="road-map">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main-heading-of-all">
                    <h2>IBall's roadmap for 2022/2023 will be published soon.</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End of Our road map section  --> */}
{/* <!-- Service section   --> */}
<section className="service-sec">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="images">
                    <h2>Coaching</h2>
                    <img className="img-fluid" src={coa} alt=""/>
                    <p>For information about Group or One to One coaching contact us at <a
                            href="mailto:admin@iBall.uk">admin@iBall.uk</a></p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="images">
                    <h2>Skills Camps</h2>
                    <img className="img-fluid" src={skill} alt=""/>

                    <p>
                            For information about upcoming skills camps please visit our events page.</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="images">
                    <h2>Birthday Parties</h2>
                    <img className="img-fluid" src={bp} alt=""/>
                    <p>To enquire or book and iBall Basketball Activity Birthday Party please contact us at <a
                            href="mailto:admin@iBall.uk">admin@iBall.uk</a>
                    </p>
                </div>
            </div>

            <div className="col-md-6">

                <div className="images">
                    <h2>Community Leagues and Tournaments</h2>
                    <img className="img-fluid" src={league} alt=""/>
                    <p>To find out what teams you can join or support please visit our events page.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End of Service section  --> */}
   <Footer/>
   </>
  )
}

export default Ourservice