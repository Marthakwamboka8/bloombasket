import React from "react";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light shadow px-4 nav1">
                <a className="navbar-brand d-flex flex-column text-dark" href="/">
                    <span className="fw-bold fs-5">🌸 Welcome to Bloom Basket</span>

                    <span style={{ fontSize: "12px", letterSpacing: "1px" }} className="text-muted">
                        Where flowers blush and bloom
                    </span>
                </a>
                <div className="ms-auto">
                    <ul className="navbar-nav d-flex flex-row gap-3">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/products">Shop</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Signin">signin</a></li>
                    </ul>
                </div>
            </nav>

            {/* HERO SECTION */}

            <section
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "100px 20px",
                    textAlign: "center",
                    color: "#fff",
                    position: "relative"
                }}
            >
                {/* pink overlay */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 182, 193, 0.6)"
                }}></div>

                {/* content */}
                <div style={{ position: "relative", zIndex: 1 }}>
                    <h1 style={{ color: "#b30059", fontWeight: "bold" }}>
                        Fresh Flowers Delivered Daily 🌸
                    </h1>

                    <p style={{ color: "#4a004a", fontSize: "18px" }}>
                        Bringing beauty, love, and elegance to your doorstep
                    </p>

                    <a href="/products" className="btn btn-danger mt-3">
                        Shop Now
                    </a>
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="container my-5">
                <h2 className="text-center mb-4 text-danger">🌸 Our Popular Flowers</h2>

                <div className="row">

                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1520763185298-1b434c91910"
                                className="card-img-top"
                                alt="Roses"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Roses</h5>
                                <p>Classic red roses for love & romance.</p>
                                <button className="btn btn-outline-danger">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                                className="card-img-top"
                                alt="Tulips"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Tulips</h5>
                                <p>Bright tulips to bring happiness.</p>
                                <button className="btn btn-outline-danger">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                                className="card-img-top"
                                alt="Lilies"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Lilies</h5>
                                <p>Elegant lilies with a sweet fragrance.</p>
                                <button className="btn btn-outline-danger">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="bg-light py-5 text-center">
                <h3 className="text-danger">Contact Us</h3>
                <p>Email: bloom@flowershop.com | Phone: +254 700 000 000</p>
            </section>

            {/* FOOTER */}
            <Footer />
            <footer className="bg-dark text-white text-center py-3">
                <b>Developed by Martha ©2026. All rights reserved</b>
            </footer>

        </div>
    );
};

export default Home;