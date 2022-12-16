import React from 'react';
import "../../Assets/css/what.css"
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { commitmentAndPatience, Patience, Teamwork } from '../../Constant/Img';
const Why_basketball = () => {
  return (
    <>
    <Header/>
    {/* <!-- page header start --> */}
<section className="page-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-wrapper text-center">
                    <h2>Why Basketball</h2>
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

            </div>
        </div>
        <div className="row pt-5">
            <div className="col-lg-6 align-self-center">
                <div className="work-content-wrapper">
                    <div className="heading-wrapper">
                        <p>
                            Basketball is a highly skilled, energetic, and exciting game to play and spectate. To be a good to great Basketball player you will require development of the following characteristics:
                        </p>
                    </div>
                    <div className="bullets-wrapper">
                        <h4>i) Patience </h4>
                        <p>
                            Repetition of specific drills over time will greatly develop your skills
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="img-wrapper">
                    <figure>
                        <img src={Patience}className="img-fluid" alt=""/>
                    </figure>
                </div>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-lg-6">
                <div className="img-wrapper">
                    <figure>
                        <img src={commitmentAndPatience} className="img-fluid" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6 align-self-center">
                <div className="work-content-wrapper">
                    <div className="bullets-wrapper">
                        <h4>ii) Commitment</h4>
                        <p>
                            To become good at anything in life requires dedication to a regime, Basketball is no different and your game will improve drastically when you develop consistency.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div className="row pt-5">
            <div className="col-lg-6 align-self-center">
                <div className="work-content-wrapper">
                    <div className="bullets-wrapper">
                        <h4>iii) Discipline </h4>
                        <p>
                            Listening, learning, and applying the drills and exercises from our programmes require discipline and commitment. Our achievement and recognition programme inspire our clients to achieve.
                        </p>
                    </div>
                    <div className="bullets-wrapper">
                        <h4>iv) Teamwork </h4>
                        <p>
                            Learning to work as part of a team is one of the greatest skills a Basketball player can learn. IBall encourages competitions for this very reason. Understanding your role and learning how to support others within your team develops valuable transferable skill which are used later on in life.
                        </p>
                    </div>

                </div>
            </div>
            <div className="col-lg-6">
                <div className="img-wrapper">
                    <figure>
                        <img src={ Teamwork} className="img-fluid" alt=""/>
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

export default Why_basketball