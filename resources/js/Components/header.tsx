import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import logo from "../../../public/Gym Glide Logos/Glide/Yellow/Glide 3.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Assicurati che il drawer sia nascosto a sinistra dello schermo quando è chiuso
    const drawerClasses = isOpen ? "translate-x-0" : "-translate-x-full";

    return (
        <nav className="absolute w-full z-50 flex justify-between flex-wrap p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-shrink-0 text-white mr-6">
            <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
        </div>
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex px-3 py-2 border rounded border-none outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className={`lg:hidden fixed top-0 left-0 w-1/2 h-screen bg-gradient-to-b from-transparent text-white shadow-lg p-5 backdrop-blur-md`}>
                <Link href="/" className="block mt-4 text-white hover:bg-gray-700 hover:text-white mr-4 transition duration-300 ease-in-out transform hover:scale-110 rounded px-2 py-1">
                    Women
                </Link>
                <Link href="/about" className="block mt-4 text-white hover:bg-gray-700 hover:text-white mr-4 transition duration-300 ease-in-out transform hover:scale-110 rounded px-2 py-1">
                    Men
                </Link>
                <Link href="/contact" className="block mt-4 text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 rounded px-2 py-1">
                    Accessory
                </Link>
            </div>
            <div className="hidden lg:flex space-x-4 items-end justify-center flex-grow">
                <Link href="/" className="text-white hover:bg-gray-700  mr-4 transition duration-300 ease-in-out transform hover:scale-110 rounded px-2 py-1">
                    Women
                </Link>
                <Link href="/about" className="text-white hover:bg-gray-700  mr-4 transition duration-300 ease-in-out transform hover:scale-110 rounded px-2 py-1">
                    Men
                </Link>
                <Link href="/contact" className="text-white hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110 rounded px-2 py-1">
                    Accessory
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
