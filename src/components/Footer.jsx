import React from 'react'

const Footer = () => {
  return (
   <div>
     <section class="row bg-warning p-3">
            {/* <!-- child 1 --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">About us</h2>
                <p class="text-white text-center">Tumaini collections gives hope to all who are out of options. Even
                    from our name which gives a vivid description of what we have to offer. We are located at Nairobi
                    Kenya</p>
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