import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";


import { useState } from "react";

export default function Footer() {
  const [openTech, setOpenTech] = useState(false);
  const [openCampus, setOpenCampus] = useState(false);
  const [openCybersecurity, setOpenCybersecurity] = useState(false);
  const [openAI, setOpenAI] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10">
          {/* Left: Company Info */}
          <div className="w-full md:w-[40%] space-y-4 md:ml-8 text-center md:text-left">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">ICL</h2>
            <p className="text-sm text-gray-300">www.icl.today</p>

            <div className="flex items-start gap-2 justify-center md:justify-start text-xs sm:text-sm">
              <FaEnvelope className="mt-1" />
              <span>support@icl.today</span>
            </div>
            <div className="flex items-start gap-2 justify-center md:justify-start text-xs sm:text-sm">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                <strong>Chennai:</strong> Akshaya HQ, Rajiv Gandhi <br />
                Salai, Kazhipattur, <br />
                Tamil Nadu, Chennai - 603103, India
              </span>
            </div>
            <div className="flex items-start gap-2 justify-center md:justify-start text-xs sm:text-sm">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                <strong>United States:</strong> 1401, 21st ST STE 6310,
                <br />Sacramento, CA 95811, USA
                <br /><a href="tel:+19402907007">+1 (940) 290 7007</a>
              </span>
            </div>
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com" target="_blank" className="text-white text-2xl hover:text-gray-300">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-white text-2xl hover:text-gray-300">
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-600 mx-4 self-stretch"></div>

          {/* Right Side: Navigation & Services */}
          <div className="w-full md:w-[55%] md:mr-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Navigation */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 sm:gap-3">
              <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-br from-teal-400 to-blue-800 text-transparent bg-clip-text mb-4">
                Navigation
              </h3>
              <ul className="space-y-1 sm:space-y-2 md:ml-6 md:mb-2 -mt-2">
                <li className="cursor-pointer font-semibold text-teal-200 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer font-semibold text-teal-200 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">
                  <Link to="/courses">Courses</Link>
                </li>
                <li className="cursor-pointer font-semibold text-teal-200 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">
                  <a href="https://infoziant.com/about" target="_blank" rel="noopener noreferrer">About</a>
                </li>
                <li className="cursor-pointer font-semibold text-teal-200 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">
                  <a href="https://infoziant.com/product" target="_blank" rel="noopener noreferrer">Product</a>
                </li>
                <li className="cursor-pointer font-semibold text-teal-200 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">
                  <a href="https://infoziant.com/awards" target="_blank" rel="noopener noreferrer">Awards</a>
                </li>
                <li className="cursor-pointer font-semibold text-teal-200 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">
                  <a href="https://infoziant.com/blogs" target="_blank" rel="noopener noreferrer">Blogs</a>
                </li>
                <li className="cursor-pointer font-semibold text-teal-200 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">
                  <a href="https://infoziant.com/contact" target="_blank" rel="noopener noreferrer">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:-ml-10 mt-6 sm:mt-8 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-br from-teal-400 to-blue-800 text-transparent bg-clip-text mb-4">
                Services
              </h3>

              {/* Innovative Tech & Business Services */}
              <div className="w-full mb-2">
                <div
                  className="flex justify-center sm:justify-between items-center cursor-pointer text-teal-200 font-semibold text-sm sm:text-base"
                  onClick={() => setOpenTech(!openTech)}
                >
                  <span>TechEdge</span>
                  <span className="text-xl ml-1 font-medium">{openTech ? '-' : '+'}</span>
                </div>

                {openTech && (
                  <ul className="pl-4 text-xs sm:text-sm space-y-2 mt-2 text-gray-300">
                    {/* Cybersecurity with toggle */}
                    <li>
                      <div
                        className="flex justify-center sm:justify-between items-center cursor-pointer hover:text-teal-400 font-semibold"
                        onClick={() => setOpenCybersecurity(!openCybersecurity)}
                      >
                        <span>Cybersecurity Services</span>
                        <span className="text-md ml-1">{openCybersecurity ? '-' : '+'}</span>
                      </div>

                      {openCybersecurity && (
                        <ul className="pl-4 mt-2 space-y-1">
                          <li className="hover:text-teal-400 font-semibold">
                            <a href="https://infoziant.com/services/cybersecurity" target="_blank" rel="noopener noreferrer">Cybersecurity Services</a>
                          </li>
                          <li className="hover:text-teal-400 font-semibold">
                            <a href="https://infoziant.com/services/vapt" target="_blank" rel="noopener noreferrer">VAPT Services</a>
                          </li>
                        </ul>
                      )}
                    </li>


                    {/* AI with toggle */}
                    <li>
                      <div
                        className="flex justify-center sm:justify-between items-center cursor-pointer hover:text-teal-400 font-semibold"
                        onClick={() => setOpenAI(!openAI)}
                      >
                        <span>AI Services</span>
                        <span className="text-md ml-1">{openAI ? '-' : '+'}</span>
                      </div>

                      {openAI && (
                        <ul className="pl-4 mt-2 space-y-1">
                          <li className="hover:text-teal-400 font-semibold">
                            <a href="https://infoziant.com/services/genai" target="_blank" rel="noopener noreferrer">GenAI Services</a>
                          </li>
                          <li className="hover:text-teal-400 font-semibold">
                            <a href="https://infoziant.com/services/llm" target="_blank" rel="noopener noreferrer">LLM Services</a>
                          </li>
                        </ul>
                      )}
                    </li>


                    {/* Other tech services */}
                    <li className="hover:text-teal-400 font-semibold">
                      <a href="https://infoziant.com/services/webapp" target="_blank" rel="noopener noreferrer">Web & App Development</a>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <a href="https://infoziant.com/services/testing" target="_blank" rel="noopener noreferrer">Software Testing</a>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <a href="https://infoziant.com/services/techtalent" target="_blank" rel="noopener noreferrer">
                        Tech Talent Hiring (Staffing Services)
                      </a>
                    </li>
                  </ul>
                )}
              </div>

              {/* Campus to Corporate Services */}
              <div className="w-full mb-2">
                <div
                  className="flex justify-center sm:justify-between items-center cursor-pointer text-teal-200 font-semibold text-sm sm:text-base"
                  onClick={() => setOpenCampus(!openCampus)}
                >
                  <span>EduConnect</span>
                  <span className="text-xl ml-1 font-medium">{openCampus ? '-' : '+'}</span>
                </div>
                {openCampus && (
                  <ul className="pl-4 text-xs sm:text-sm space-y-2 mt-2 text-gray-300">
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/placement">Placement Support</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/internship">Internship Programs</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/training">Training & Upskilling</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/coe">Industry-Academia Collaboration (CoE)</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/codechef">CodeChef Training</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/edutech">Edutech Solutions</Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Case Studies */}
              <div className="w-full mb-2">
                <Link
                  to="/"
                  state={{ scrollTo: 'portfolio' }}
                  className="block text-teal-200 hover:text-blue-500 font-semibold text-sm sm:text-base text-center sm:text-left"
                >
                  Case Studies
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-xs sm:text-sm text-gray-400 border-t border-gray-700 pt-4 mt-8 -mb-8 space-y-2">
          {/* ✅ Policy Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
      <Link to="/refund" className="hover:text-teal-300 transition-colors duration-200 cursor-pointer">Refund Policy</Link>
            <span>|</span>
            <Link to="/privacypolicy" className="hover:text-teal-300 transition-colors duration-200 cursor-pointer">Privacy Policy</Link>
            <span>|</span>
            <Link to="/termsandconditions" className="hover:text-teal-300 transition-colors duration-200 cursor-pointer">Terms & Conditions</Link>
          </div>

          {/* © ICL */}
          <p>
            © 2025 ICL - www.icl.today. All rights reserved.<br />
           
          </p>
        </div>

      </div>
    </footer>
  );
}
