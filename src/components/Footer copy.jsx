import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-start">

          <div className="space-y-2 text-center md:text-left">
            <Link className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              ICL
            </Link>
            <p className="text-xs sm:text-sm text-gray-400">www.icl.today</p>

            <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Industry-aligned curriculum</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Hands-on projects</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Placement support</span>
            </div>

            <div className="flex gap-3 pt-3 justify-center md:justify-start text-lg">
              <a href="https://www.linkedin.com/company/infoziant/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-200 hover:text-gray-300">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com/infoziant/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-200 hover:text-gray-300">
                <FiInstagram />
              </a>
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left text-sm text-gray-300">

            {/* Chennai */}
            <div>
              <h4 className="font-semibold text-gray-100 flex items-center gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-teal-300" />
                Chennai
              </h4>
              <p className="mt-1 leading-relaxed">
                Akshaya HQ, Rajiv Gandhi Salai,<br />
                Kazhipattur,<br />
                Tamil Nadu, Chennai - 603103, India
              </p>
            </div>

            {/* USA */}
            <div>
              <h4 className="font-semibold text-gray-100 flex items-center gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-teal-300" />
                United States
              </h4>
              <p className="mt-1 leading-relaxed">
                1401, 21st ST STE 6310,<br />
                Sacramento, CA 95811, USA<br />
                <span className="flex items-center gap-2 justify-center md:justify-start mt-1">
                  <FaPhoneAlt className="text-teal-300" />
                  Tel:{" "}
                  <a href="tel:+19402907007" className="hover:underline text-gray-200">
                    +1 (940) 290 7007
                  </a>
                </span>
              </p>
            </div>

          </div>


          <div className="text-center md:text-left">
            <h3 className="text-md font-semibold text-gray-100 mb-2">Navigation</h3>
            <ul className="space-y-2">
              <li className="text-sm font-medium text-teal-200 hover:text-blue-400 transition-colors duration-150">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="text-sm font-medium text-teal-200 hover:text-blue-400 transition-colors duration-150">
                <Link to="/placement">Placement</Link>
              </li>
              <li className="text-sm font-medium text-teal-200 hover:text-blue-400 transition-colors duration-150">
                <Link to="/internship">Internship</Link>
              </li>
              <li className="text-sm font-medium text-teal-200 hover:text-blue-400 transition-colors duration-150">
                <Link to="/coe">CoE</Link>
              </li>
              <li className="text-sm font-medium text-teal-200 hover:text-blue-400 transition-colors duration-150">
                <Link to="/codechef">CodeChef</Link>
              </li>
              <li className="text-sm font-medium text-teal-200 hover:text-blue-400 transition-colors duration-150">
                <Link to="/edutech">EduTech</Link>
              </li>
            </ul>
          </div>


          {/* Technical Support */}
<div className="footer-support text-center md:text-left">
  <h3 className="text-md font-semibold text-gray-100 mb-3">Technical Support</h3>

  <div className="space-y-2 text-gray-300 text-sm">
    <p className="flex items-center justify-center md:justify-start gap-2">
      <FaEnvelope className="text-teal-300 text-md" />
      <a href="mailto:Support@icl.today" className="hover:text-teal-200 transition font-medium">
        Support@icl.today
      </a>
    </p>

    <p className="flex items-center justify-center md:justify-start gap-2">
      <FaPhoneAlt className="text-teal-300 text-md" />
      <a href="tel:+918667214326" className="hover:text-teal-200 transition font-medium">
        +91 86672 14326
      </a>
    </p>
    <p className="flex items-center justify-center md:justify-start gap-2">
      <FaPhoneAlt className="text-teal-300 text-md" />
      <a href="tel:+917550272103" className="hover:text-teal-200 transition font-medium">
       +91 75502 72103
      </a>
    </p>
  </div>
</div>

        </div>

        {/* Bottom Footer */}
        <div className="text-center text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-4 mt-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 items-center">
            <Link to="/refund" className="hover:text-teal-300 transition-colors duration-200">Refund Policy</Link>
            <span>|</span>
            <Link to="/privacypolicy" className="hover:text-teal-300 transition-colors duration-200">Privacy Policy</Link>
            <span>|</span>
            <Link to="/termsandconditions" className="hover:text-teal-300 transition-colors duration-200">Terms & Conditions</Link>
          </div>

          <p className="mt-3">
            © 2025 ICL - www.icl.today. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
