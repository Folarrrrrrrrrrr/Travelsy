import React from "react";
import "../styles/footer.css";
import mpesa from '../src/assets/images/mpesa.png'
import paypal from '../src/assets/images/paypal.png'
import usa from '../src/assets/images/usa.png'
import visa from '../src/assets/images/visa.png'
import discovery from '../src/assets/images/discovery.png'
import master from '../src/assets/images/master.png'

const Footer = () => {
 

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="help-section">
          <h4>Need Travelsy Help?</h4>
          <p>Got Questions? Call us 24/7!</p>
          <p>
            Call Us: <a href="tel:+254716909815">+254 716909 815</a>
          </p>
          <p>
            Email Us: <a href="mailto:info@travelsy.com">info@travelsy.com</a>
          </p>
          <div className="contact-info">
            <p>Contact Info:</p>
            <p>2nd Floor, Fedha Plaza, Westlands, Nairobi, Kenya.</p>
            <p>P.O Box 7231-00300, Nairobi, Kenya.</p>
          </div>
        </div>

        <div className="company-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/terms">Terms Of Use</a>
            </li>
            <li>
              <a href="/privacy">Privacy Statement</a>
            </li>
            <li>
              <a href="/feedback">Give Us Feedback</a>
            </li>
            <li>
              <a href="/partner">Partner With Us</a>
            </li>
          </ul>
        </div>

        <div className="services-section">
          <h4>Other Services & Support</h4>
          <ul>
            <li>
              <a href="/rewards">Rewards Program</a>
            </li>
            <li>
              <a href="/partners">Partners</a>
            </li>
            <li>
              <a href="/legal">Legal</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/customer-service">Customer Service Help</a>
            </li>
          </ul>
        </div>

        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/account">Your Account</a>
            </li>
            <li>
              <a href="/camping">Camping Locations</a>
            </li>
            <li>
              <a href="/activities">Activities</a>
            </li>
            <li>
              <a href="/hire">Hire Equipment</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="mailing-list">
          <h4>Mailing List</h4>
          <p>
            Sign up for our mailing lists and get the latest offers and
            promotions straight in your inbox.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Your Email" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-one">
          <h2 className="brand"> Travelsy </h2>
          <div className="payment-methods">
            <img src={mpesa} alt="Mpesa" />
            <img src={discovery} alt="Discover" />
            <img src={visa} alt="Visa" />
            <img src={paypal} alt="PayPal" />
            <img src={master} alt="MasterCard" />
            <select className="" name="" id="">
            <option value="">English(United States)</option>
          </select>
            <select className="" name="" id="">
            <option value="">KES</option>
          </select>
          </div>
        </div>
        </div>
        <hr />
        <div className="footer-credits footer-bottom-two">
          <p>Copyright © 2019 Travelsy Ltd. All rights reserved</p>
          <p>Made in Kenya by Rolak</p>
      </div>
    </footer>
  );
};

export default Footer;
