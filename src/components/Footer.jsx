import { Facebook, Instagram, Twitter } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand fade-in">
            <h3 className="footer-logo">THRYNOS</h3>
            <p className="footer-text">
              Premium fashion for the modern lifestyle
            </p>
          </div>

          {/* Shop */}
          <div className="fade-in delay-1">
            <h4 className="footer-title">Shop</h4>
            <ul className="footer-links">
              <li><a href="#men">Men</a></li>
              <li><a href="#women">Women</a></li>
              <li><a href="#accessories">Accessories</a></li>
              <li><a href="#bestsellers">Best Sellers</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="fade-in delay-2">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="fade-in delay-3">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-icons">
              <a href="#facebook" className="social">
                <Facebook />
              </a>
              <a href="#instagram" className="social">
                <Instagram />
              </a>
              <a href="#twitter" className="social">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom fade-in delay-4">
          <p>&copy; 2025 Thrynos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
