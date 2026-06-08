import { Routes, Route } from "react-router-dom";

import {Home} from "./components/Home";
import {About} from "./components/About";
import {Support} from "./components/Support";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <footer className="footer">
  <div className="footer-content">

    <div>
      <h3>AutoRig</h3>
      <p>
        Your trusted destination for quality motorcycle parts and accessories.
      </p>
    </div>

    <div>
      <h3>Quick Links</h3>
      <p>Home</p>
      <p>Products</p>
      <p>About Us</p>
      <p>Support</p>
    </div>

    <div>
      <h3>Contact Us</h3>
      <p>Email: support@autorig.com</p>
      <p>Phone: +91 9876543210</p>
    </div>

  </div>

  <hr />

  <p className="copyright">
    © 2026 AutoRig. All Rights Reserved.
  </p>
</footer>
    </>
  );
}


