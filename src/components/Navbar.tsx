import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="top-0 z-50 sticky bg-white shadow-sm border-maroon/15 border-b-2">
            <div className="flex justify-between items-center mx-auto px-6 py-4 container">
                <div className="font-bold text-maroon text-2xl tracking-tight">
                    Fadilah Ukhti Rianda
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-medium text-[#2c2c2c]">
                    <a href="#" className="hover:text-maroon transition-colors">Beranda</a>
                    <a href="#services" className="hover:text-maroon transition-colors">Fokus</a>
                    <a href="#experience" className="hover:text-maroon transition-colors">Pengalaman</a>
                    <a href="#gallery" className="hover:text-maroon transition-colors">Karya</a>
                    <a href="#contact" className="bg-maroon hover:bg-maroon-dark px-6 py-2 rounded-full text-white transition-colors">Kontak</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-maroon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden flex flex-col gap-4 bg-white p-6 border-maroon/10 border-t font-medium"
                >
                    <a href="#" className="hover:text-maroon">Beranda</a>
                    <a href="#services" className="hover:text-maroon">Fokus</a>
                    <a href="#experience" className="hover:text-maroon">Pengalaman</a>
                    <a href="#gallery" className="hover:text-maroon">Karya</a>
                    <a href="#contact" className="text-maroon">Kontak</a>
                </motion.div>
            )}
        </nav>
    );
}
