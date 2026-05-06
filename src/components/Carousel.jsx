import React from 'react'

const Carousel = () => {
    return (
        <section class="row">
            <div class="col-md-12 carousel" className='bg-dark'>
                {/* <!-- a division containg carousel content  --> */}
                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- division containing images  --> */}
                    <div class="carousel-inner">
                        {/* <!-- div with image 1  --> */}

                        <div class="carousel-item active">
                            <img src="images/carousel1.avif" alt=" slide1" style={{ height: "500px", width: "500px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- div with image 2  --> */}
                        <div class="carousel-item active">
                            <img src="images/carousel.avif" alt=" slide1" style={{ height: "500px", width: "500px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- div with image 3  --> */}
                        <div class="carousel-item">
                            <img src="images/carousel2.avif" alt="slide1" style={{ height: "500px", width: "500px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- div with image 4  --> */}
                        <div class="carousel-item">
                            <img src="images/carousel3.avif" alt="slide1" style={{ height: "500px", width: "500px ", objectFit: "cover" }} />
                        </div>

                    </div>
                    {/* <!-- previous control  --> */}

                    <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    {/* <!-- next control  --> */}
                    <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Carousel