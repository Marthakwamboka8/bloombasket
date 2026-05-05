
import React, { useEffect, useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        setUser(loggeduser);
    }, []);
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }

    return (
        <section class="row">
            <div class="col-md-12 header" >
                {/* <!-- a nav with navbar content  --> */}
                <nav class="navbar navbar-expand-md ">
                    <h1 class="navbar-brand text dark "> Bloom Basket 🪷</h1> <img src="image/flower.png" alt="" width={100} />
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class='nav-link text-light'>Home</a>
                            <a href="/addproduct" class='nav-link text-light'>Addproduct</a>
                            {
                                user ? (
                                    <>
                                        <span className='nav-link'>
                                            welcome {user.username}
                                        </span>
                                        <button onClick={logout} className='btn btn-light logout-btn:hover logout-btn'>
                                            log out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <a href="/signin" class="nav-link" className='text-light'>Signin</a>
                                        <a href="/signup" class="nav-link" className='text-light'>Signup</a>
                                    </>

                                )}

                        </div>
                    </div>
                </nav>
            </div>
        </section>



    )
}

export default Navbar