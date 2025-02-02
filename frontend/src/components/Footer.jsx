import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-800 text-white py-8" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Info</h3>
          <p className="text-sm">Phone: 9466539953</p>
        </div>
        
        {/* Address */}
        <div>
          <h3 className="text-lg font-bold mb-3">Address</h3>
          <p className="text-sm">Sourabh Jewellers, Sunaro Wali Gali</p>
          <p className="text-sm">Near Hanuman Mandir, Gharaunda</p>
        </div>
        
        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="https://www.instagram.com/sourabh.jewellers?igsh=a29ua3VpNzQxaW90"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-pink-500"
            >
              <FaInstagram className="w-6 h-6" />
              <span>@sourabh.jewellers</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center mt-8 text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Sourabh Jewellers. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
