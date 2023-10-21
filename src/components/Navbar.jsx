import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    const navItem = [
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "faq"},
    ];
    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white md:bg-transparent">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
                <div className="flex items-center justify-between gap-8 text-base">
                    <a href="" className="flex items-center space-x-3 text-2xl font-semibold">
                        <img src={logo} alt="" className="items-center inline-block w-10" />
                        <span className="text-[#263238]">NEXCENT</span>
                    </a>

                    <ul className="hidden space-x-12 md:flex">
                        {
                            navItem.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base cursor-pointer text-gray900 hover:text-brandPrimary first:font-medium">{link}</Link> )
                        }
                    </ul>

                    <div className="items-center hidden space-x-12 lg:flex">
                        <a href="/" className="items-center hidden lg:flex text-brandPrimary hover:text-gray900">
                            Login
                        </a>
                        <button className="px-4 py-2 text-white transition-all duration-300 rounded bg-brandPrimary hover:bg-neutralDGrey">
                            Sign Up
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-neutralDGray focus:outline-none focus:text-gray-500">
                                {
                                    isMenuOpen ? (<FaXmark className="w-6 h-6"/>) 
                                    : (<FaBars className="w-6 h-6"/>)
                                }
                        </button>
                    </div>
                </div>

                {/* nav item for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" }`}>
                    {
                        navItem.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-white hover:text-brandPrimary first:font-medium">{link}</Link> )
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;