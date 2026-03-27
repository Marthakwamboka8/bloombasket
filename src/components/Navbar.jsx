import React from 'react'

const Navbar = () => {
  return (
            <section class="row">
            <div class="col-md-12" >
                {/* <!-- a nav with navbar content  --> */}
                <nav class="navbar navbar-expand-md bg-success">
                    <a href="/" class="navbar-brand text-warning"> Bloom Basket <img src="images/flower.png" alt="" width={100} /></a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link" className='text-light'>Home</a>
                            <a href="/addproduct" class="nav-link" className='text-light'>Addproduct</a>
                            <a href="/signin" class="nav-link" className='text-light'>Signin</a>
                            <a href="/signup" class="nav-link" className='text-light'>Signup</a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>



    )
}

export default Navbar