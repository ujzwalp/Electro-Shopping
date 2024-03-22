const Footer = () => {
  return (
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
            </div>
            <div class="col-md-3 col-sm-6">
              <h4>Quick Links</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h4>Contact Info</h4>
              <ul class="list-unstyled">
                <li>
                  <i class="fa fa-map-marker"></i> 123 Main Street, City,
                  Country
                </li>
                <li>
                  <i class="fa fa-phone"></i> +123-456-7890
                </li>
                <li>
                  <i class="fa fa-envelope"></i> info@example.com
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h4>Follow Us</h4>
              <ul class="list-unstyled social-media">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p class="text-center">
                &copy; 2024 Electronic Store. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
