import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { recent1 } from '../../Constant/Img'
import { recent2 } from '../../Constant/Img'
import { recent3 } from '../../Constant/Img'
import { recent4 } from '../../Constant/Img'
import { recent5 } from '../../Constant/Img'
import { recent6 } from '../../Constant/Img'
import { recent7 } from '../../Constant/Img'
import { recent8 } from '../../Constant/Img'
import { recent9 } from '../../Constant/Img'
const Gallery = () => {
  return (
<>
<Header/>
{/* <!-- page header start --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Gallery</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
{/* <!-- instagram sec starts here --> */}
<section className="instagram">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="img-wrapper">
                    <figure>
                        <img src={recent1} className="img-fluid gal1" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <figure>
                                <img src={recent6} className="img-fluid gal2" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <figure>
                                <img src={recent2} className="img-fluid gal3" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <figure>
                        <img src={recent3} className="img-fluid gal4" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="img-wrapper">
                    <figure>
                        <img src={recent4} className="img-fluid gal5" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="img-wrapper">
                    <figure>
                        <img src={recent5} className="img-fluid gal6" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="img-wrapper">
                    <figure>
                        <img src={recent7} className="img-fluid gal7" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="img-wrapper">
                    <figure>
                        <img src={recent8} className="img-fluid gal8" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="img-wrapper">
                    <figure>
                        <img src={recent7} className="img-fluid gal9" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="img-wrapper">
                    <figure>
                        <img src={recent9} className="img-fluid gal10" alt=""/>
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

export default Gallery