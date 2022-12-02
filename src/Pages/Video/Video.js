import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { video1, video2 } from '../../Constant/Img'
import "../../Assets/css/video.css"
const Video = () => {
  return (
    <>
    <Header/>
    {/* <!-- page header start --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Videos</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
{/* <!-- video starts here --> */}
<section className="videos">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="video-wrapper">
                    <figure>
                        <img src={video1} className="img-fluid" alt=""/>
                        <img src={video2}className="video-btn" alt=""/>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- video ends here --> */}
    <Footer/>
    </>
  )
}

export default Video