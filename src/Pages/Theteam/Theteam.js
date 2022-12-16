import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../../Assets/css/theteam.css"
import { coach3, jaden_gonzales, william_lawmann } from '../../Constant/Img'
const Theteam = () => {
  return (
   <>
   <Header/>
   <section className="theteam_sec">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="theteam_img">
                    <img src={william_lawmann} className="img-fluid" alt=""/>
                </div>
                <div className="theteam_desc">
                    <h3>William Lawmann</h3>
                    <h5>iBall Founder and Senior Coach</h5>
                    <p>
                        Will is a qualified Basketball Coach who has almost 20 years experience. Since winning an Adidas 3 on 3 which was watched by Michael Jordan’s teammate ‘Scott Williams’ many years ago, his love and involvement in the game has only grown and grown. He is passionate about growing the enjoyment of the game throughout Croydon and beyond and has a clear vision of how that development through, schools, local leagues, and tournaments, will develop.
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="theteam_img">
                    <img src={jaden_gonzales} className="img-fluid" alt=""/>
                </div>
                <div className="theteam_desc">
                    <h3>Jaden Gonzales</h3>
                    <h5>iBall Senior Coach and Coordinator</h5>
                    <p>Jaden is a qualified Basketball Coach and is currently furthering his study into Basketball coaching. He brings several years of one-to-one coaching and competitive playing experience to our sessions. Jaden’s love of the Game developed Basketball as a growing sport at his secondary school and has since been an asset to iBall’s development also. </p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="theteam_img">
                    <img src={coach3} className="img-fluid" alt=""/>
                </div>
                <div className="theteam_desc">
                    <h3>Naseya Cottrell</h3>
                    <h5>iBall Senior Coach and Coordinator</h5>
                    <p>‘Nas’ is a qualified Basketball Coach and brings years of Basketball experience from Club level competition in the competitive Australian Basketball leagues. She also has solid experience of coaching Basketball to people of all abilities and her enthusiasm and love of the game energises her sessions. iBall is fortunate to have her as a valued member of the team.</p>
                </div>
            </div>
        </div>

    </div>
</section>
   <Footer/>
   </>
  )
}

export default Theteam