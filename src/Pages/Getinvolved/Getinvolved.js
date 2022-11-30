import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/whoworkwithus.css"


const Getinvolved = () => {
  return (
    <>
    <Header/>
    {/* <!-- page header start --> */}
<section class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="content-wrapper text-center">
                    <h2>How to get involved</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
    {/* <!-- sample text section start here --> */}
<section class="sample_text_sec">
    <div class="container">
        <div class="work-content-wrapper">
            <div class="heading-wrapper">
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