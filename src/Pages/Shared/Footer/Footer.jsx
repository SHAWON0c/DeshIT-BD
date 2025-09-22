import React, { useState } from 'react';

const Footer = () => {

      const [email, setEmail] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
    return (
        <div>
            <footer className="bg-[#FDF8F8] py-16 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Links Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                        Company
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Training Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">Training</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                        Flutter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                        Node.JS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                        Laravel
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Our Address Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">Our Address</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                D/36, Block-E Lalmatiya, Dhaka
                                <br />
                                1207, Bangladesh
                            </p>
                            <div className="flex space-x-3">
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Get In Touch Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">Get In Touch</h3>
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                                />
                                <button className="w-full  bg-[#FA7B70] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                        <p className="text-gray-600">
                            © 2020-2025 All Rights Reserved Design by <span className="text-[#FA7B70] font-medium">DeshIT-BD</span>
                        </p>
                    </div>
                </div>

                {/* Back to Top Button */}
                {showBackToTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 w-12 h-12 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
                        aria-label="Back to top"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                )}
            </footer>
        </div>
    );
};

export default Footer;