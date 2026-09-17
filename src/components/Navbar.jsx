import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import menuLogo from '../assets/img/Menu_LogoMeowstoria.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    // Variasi Animasi Khusus Mobile Menu
    const menuVariants = {
        closed: { 
            opacity: 0, 
            y: -20,
            transitionEnd: { display: "none" } // Baru sembunyikan SETELAH animasi tutup selesai
        },
        open: { 
            display: "flex", 
            opacity: 1, 
            y: 0 
        }
    };

    return(
        <nav className="sticky top-0 z-50 w-full px-4 py-3 bg-[#1F1C1A]/80 backdrop-blur-md flex justify-between items-center sm:px-8 xl:px-24 2xl:px-36">
            {/* Logo */}
            <motion.img whileHover={{scale: 1.05}} src={menuLogo} alt="menuLogo" className="w-24 cursor-pointer sm:w-28 xl:w-36" />
            
            {/* Tombol Burger Menu */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-md cursor-pointer z-50">
                {isOpen ? <i className="ti ti-x text-[#FCE95C]"></i> : <i className="ti ti-menu-2 text-[#FCE95C]"></i>}
            </button>

            {/* 🟢 LIST MENU (ANIMASI BERHASIL 100%) */}
            <motion.div 
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
                
                className={`
                    flex-col md:flex-row 
                    md:flex! md:opacity-100! md:transform-none!
                    absolute md:static 
                    top-full left-0 w-full md:w-auto 
                    bg-[#1F1C1A]/95 md:bg-transparent 
                    border-b border-amber-500/20 md:border-none 
                    px-6 py-4 md:p-0 
                    gap-4 md:gap-8 
                    text-center font-semibold text-[#FCE95C]
                    font-paragraf
                    xl:text-xl
                `}
            >
                <a href="#home" onClick={closeMenu} className="hover:text-amber-400 transition-colors">home</a>
                <a href="#about" onClick={closeMenu} className="hover:text-amber-400 transition-colors">about</a>
                <a href="#feature" onClick={closeMenu} className="hover:text-amber-400 transition-colors">feature</a>
                <a href="#story" onClick={closeMenu} className="hover:text-amber-400 transition-colors">story</a>
                <a href="#contact" onClick={closeMenu} className="hover:text-amber-400 transition-colors">support</a>
            </motion.div>
            
        </nav>
    );
}