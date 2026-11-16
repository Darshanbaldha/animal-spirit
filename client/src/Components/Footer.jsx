import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
    { label: "Home", path: "/home" },
    { label: "Gallery", path: "/gallery" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "Support", path: "/support" }
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="footer-section">
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            Animal Spirit celebrates the beauty and diversity of wildlife.
                            Explore amazing animals and learn why protecting their natural
                            habitats matters.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-yellow-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <p className="text-center text-gray-400">
                    © {new Date().getFullYear()} Animal Spirit | All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
