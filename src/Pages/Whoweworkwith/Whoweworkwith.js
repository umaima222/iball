import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { business, res1, res2, res3, res4 } from "../../Constant/Img";
const Whoweworkwith = () => {
	return (
		<>
			<Header />
			{/* <!-- page header start --> */}
			<section class="page-header">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="content-wrapper text-center">
								<h2>Who we work with </h2>
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
                <h3>IBall works with:</h3>
            </div>
            <div class="bullets-wrapper">
                <h4>i) Schools and Local Authorities </h4>
                <p>
                    We coach students between the ages of 6 – 17 in the following Primary and Secondary schools:
                </p>
                <div class="img-wrapper">
                    <img class="img-fluid" src={res1} alt=""/>
                    <img class="img-fluid" src={res2} alt=""/>
                    <img class="img-fluid" src={res3} alt=""/>
                    <img class="img-fluid" src={res4} alt=""/>
                </div>

            </div>
            <div class="bullets-wrapper">
                <h4>ii) Individuals </h4>
                <p>
                    Anyone who wants to develop their Basketball skills (Dribbling, Shooting, and passing), general fitness, or book one of our services i.e. birthday parties, 1 on 1 coaching development.
                </p>
                <img class="img-fluid big-img" src="img/ind.jpg" alt=""/>
            </div>

            <div class="bullets-wrapper">
                <h4>iii) Business </h4>
                <p>
                    We will work together to provide custom programmes.
                </p>
                <img class="img-fluid big-img" src={business} alt=""/>
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
