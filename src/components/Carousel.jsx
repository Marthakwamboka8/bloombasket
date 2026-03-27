import React from 'react'

const Carousel = () => {
  return (
    <section class="row">
            <div class="col-md-12" className='bg-dark'>
                {/* <!-- a division containg carousel content  --> */}
                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- division containing images  --> */}
                    <div class="carousel-inner">
                        {/* <!-- div with image 1  --> */}
                        <div class="carousel-item">
                            <img src="images/p3.avif" alt="slide1" />
                        </div>
                        {/* <!-- div with image 2  --> */}
                        <div class="carousel-item active">
                            <img src="images/p7.avif" alt=" slide 2"  />
                        </div>
                        {/* <!-- div with image 3  --> */}
                        <div class="carousel-item">
                            <img src="images/1.webp" alt="slide 3" />
                        </div>
                        {/* <!-- div with image 4  --> */}
                        <div class="carousel-item">
                            <img src="images/p6.avif" alt="slide 4" />
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