import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { AssessmentAndDevelopment } from '../../Constant/Img'
import "../../Assets/css/whoworkwithus.css"
const Our_model = () => {
  return (
   <>
   <Header/>
   {/* <!-- page header start --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Our Model</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
{/* <!-- sample text section start here --> */}
<section className="sample_text_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="work-content-wrapper">
                    <div className="heading-wrapper">
                        <p>
                            Whilst it is important that all our clients have fun engaging in our programmes, their development and progress is also valuable to us.
                        </p>
                    </div>
                    <div className="bullets-wrapper">
                        <h4>Initial assessment </h4>
                        <p>
                            After completing several core Basketball drills an initial assessment of each player is recorded to track their progression.
                        </p>
                    </div>
                    <div className="bullets-wrapper">
                        <h4>Development </h4>
                        <p>
                            As the coaching sessions progress several more checkpoint assessments with more advanced basketball drills are taken. After our coaches focus in areas where they may need extra support, they are then awarded certificates or medals based on their improvement and progression.
                        </p>
                    </div>
                </div>
                <div className="img-wrapper">
                    <figure className="mb-0">
                        <img src={AssessmentAndDevelopment} className="img-fluid" alt=""/>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- sample text section end here --> */}
   <Footer/>
   </>
  )
}

export default Our_model