import React from 'react'

const Footer = () => {
  return (
   <div>
     <section class="row bg-dark p-3">
            {/* <!-- child 1 --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">About us</h2>
                <p class="text-white text-center">Brighten someone’s day with fresh, handpicked blooms! 🌸 Our flower shop creates beautiful, custom arrangements perfect for birthdays, weddings, and every special moment. Enjoy same-day delivery, stunning designs, and flowers that speak from the heart—because every occasion deserves something beautiful.</p>
            </div>
            {/* <!-- child 2  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">Contact us</h2>
                <form action="">
                    <input type="email" placeholder="Enter you email" class="form-control" /><br /><br />
                    <textarea name="" id="" class="form-control" placeholder="leave a comment"></textarea><br /><br />
                    <input type="submit" value="send message" class="btn btn-outline-danger" />
                </form>
            </div>
            {/* <!-- child 3  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">Stay connected</h2>
                <a href="https://facebook.com">
                    <img src="images/fb.png" alt=" facebook" />
                </a>
                <a href="https://instagram.com">
                    <img src="images/in.png" alt="instagram" />
                </a>
                <a href="https://twitte.com">
                    <img src="images/x.png" alt="x" />
                </a>
                <p>We take your feed back seriously and hope to keep in touch until you get your products.</p>
            </div>
        </section>
   </div>
  )
}

export default Footer