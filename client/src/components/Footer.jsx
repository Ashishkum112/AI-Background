import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-4 lg:px-44">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
        <img src={assets.logo} alt="Logo" className="w-32 lg:w-40" />

        {/* Navigation Links */}
        <nav className="flex flex-col lg:flex-row items-center gap-4 text-sm text-gray-600">
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link to="/policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/cancellation-policy" className="hover:underline">
            Cancellation/Refund Policies
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3">
          <img width={32} src={assets.facebook_icon} alt="Facebook" className="cursor-pointer" />
          <img width={32} src={assets.twitter_icon} alt="Twitter" className="cursor-pointer" />
          <img width={32} src={assets.google_plus_icon} alt="Google Plus" className="cursor-pointer" />
        </div>
      </div>

      {/* Copyright Text */}
      <p className="mt-6 text-center text-xs text-gray-500 lg:text-left">
        &copy; {new Date().getFullYear()} Bg.Removal | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
