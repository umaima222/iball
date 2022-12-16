import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const Blog = () => {
  return (
    <>
    <Header/>
    {/* <!-- page header start --> */}
<section class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="content-wrapper text-center">
                    <h2>Blogs</h2>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- page header ends --> */}
    <Footer/>
    </>
  )
}

export default Blog