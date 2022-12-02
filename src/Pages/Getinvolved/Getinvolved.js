import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/whoworkwithus.css"


const Getinvolved = () => {
  return (
    <>
    <Header/>
    {/* <!-- page header start --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>How to get involved</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
    {/* <!-- sample text section start here --> */}
<section className="sample_text_sec">
    <div className="container">
        <div className="work-content-wrapper">
            <div className="heading-wrapper">
                <p>
                    If you are interested in any of the following services, contact us at <a href="mailto:Admin@IBall.Uk">Admin@IBall.Uk</a> with the nature of your enquiry and your preferred contact method and a member of our team will be in touch.
                </p>
            </div>
        </div>
    </div>
</section>
{/* <!-- sample text section end here --> */}
    <Footer/>
    </>
  )
}

export default Getinvolved