import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Rental Household</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Culture</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Our Benefits</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Documents Required</a>
            </li>
            <li>
              <a href="#">Annual Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Policies</h3>
          <ul>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Cancellation and Return</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Rental Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Referral Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Need Help</h3>
          <ul>
            <li>Phone: +1-123-456-7890</li>
            <li>Email: info@example.com</li>
            <li>Telegram: t.me/example_channel</li>
          </ul>
        </div>
      </div>

      <div className="footer-line"></div>
      <div className="footer-bottom">
        <div className="social-media-logos">
          <a href="#" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
