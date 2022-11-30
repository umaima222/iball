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
<section class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="content-wrapper text-center">
                    <h2>Gallery</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
{/* <!-- instagram sec starts here --> */}
<section class="instagram">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="img-wrapper">
                    <figure>
                        <img src={recent1} class="img-fluid gal1" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="img-wrapper">
                            <figure>
                                <img src={recent6} class="img-fluid gal2" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img-wrapper">
                            <figure>
                                <img src={recent2} class="img-fluid gal3" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <figure>
                        <img src={recent3} class="img-fluid gal4" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="img-wrapper">
                    <figure>
                        <img src={recent4} class="img-fluid gal5" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="img-wrapper">
                    <figure>
                        <img src={recent5} class="img-fluid gal6" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="img-wrapper">
                    <figure>
                        <img src={recent7} class="img-fluid gal7" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="img-wrapper">
                    <figure>
                        <img src={recent8} class="img-fluid gal8" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="img-wrapper">
                    <figure>
                        <img src={recent7} class="img-fluid gal9" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="img-wrapper">
                    <figure>
                        <img src={recent9} class="img-fluid gal10" alt=""/>
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