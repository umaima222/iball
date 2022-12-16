import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../Assets/css/whoworkwithus.css"
import { business, res1, res2, res3, res4 } from "../../Constant/Img";
const Whoweworkwith = () => {
	return (
		<>
			<Header />
			{/* <!-- page header start --> */}
			<section className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper text-center">
								<h2>Who we work with </h2>
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
                <h3>IBall works with:</h3>
            </div>
            <div className="bullets-wrapper">
                <h4>i) Schools and Local Authorities </h4>
                <p>
                    We coach students between the ages of 6 – 17 in the following Primary and Secondary schools:
                </p>
                <div className="img-wrapper">
                    <img className="img-fluid" src={res1} alt=""/>
                    <img className="img-fluid" src={res2} alt=""/>
                    <img className="img-fluid" src={res3} alt=""/>
                    <img className="img-fluid" src={res4} alt=""/>
                </div>

            </div>
            <div className="bullets-wrapper">
                <h4>ii) Individuals </h4>
                <p>
                    Anyone who wants to develop their Basketball skills (Dribbling, Shooting, and passing), general fitness, or book one of our services i.e. birthday parties, 1 on 1 coaching development.
                </p>
                <img className="img-fluid big-img" src="img/ind.jpg" alt=""/>
            </div>

            <div className="bullets-wrapper">
                <h4>iii) Business </h4>
                <p>
                    We will work together to provide custom programmes.
                </p>
                <img className="img-fluid big-img" src={business} alt=""/>
            </div>


        </div>
    </div>
</section>
{/* <!-- sample text section end here --> */}
			<Footer />
		</>
	);
};

export default Whoweworkwith;
