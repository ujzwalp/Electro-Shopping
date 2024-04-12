const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
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
            <div className="col-md-3 col-sm-6">
              <h4>Contact Info</h4>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-map-marker"></i> 123 Main Street, City,
                  Country
                </li>
                <li>
                  <i className="fa fa-phone"></i> +123-456-7890
                </li>
                <li>
                  <i className="fa fa-envelope"></i> info@example.com
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Follow Us</h4>
              <ul className="list-unstyled social-media">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
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
