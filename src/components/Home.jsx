import React from "react";
import { motion } from "framer-motion";
import homeAllCharacter from '../assets/img/Home_AllCharacter.png';
import homeBackground from '../assets/img/Home_Background.png';
import homeClifBottom from '../assets/img/Home_ClifBottom.png';
import homeLionis from '../assets/img/Home_Lionis.png';
import homeButton from '../assets/img/HomeButton.png';

export default function Home() {
    return(
        <section id="home" className="relative w-full min-h-screen flex justify-center overflow-hidden">
                <motion.img
                    src={homeBackground} 
                    alt="gambar background"
                    initial={{ opacity: 0, scale: 1 }} 
                    animate={{ 
                        opacity: 1, 
                        scale: [1, 1.08, 1] 
                    }} 
                    transition={{ 
                        opacity: { duration: 1.2, ease: "easeOut" },
                        scale: { 
                        duration: 12,           
                        ease: "easeInOut",      
                        repeat: Infinity,       
                        repeatType: "reverse"   
                        }
                    }} 
                    className="absolute inset-0 w-full h-full object-cover origin-center"/>

                <motion.img 
                    src={homeAllCharacter} 
                    alt="gambar AllCharacter" 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}         
                    transition={{ 
                        duration: 1,                          
                        delay: 1.5,                           
                        ease: "easeOut" 
                    }}
                    className="relative -top-3 w-full object-cover origin-cente 2xl:absolute 2xl:-top-36"/>

                <motion.img
                    src={homeLionis} 
                    alt="gambar Lionis" 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}         
                    transition={{ 
                        duration: 1,                          
                        delay: 1.7,                           
                        ease: "easeOut" 
                    }}
                    className="absolute top-0 w-full h-full object-cover origin-center 2xl:-top-16"/>
                
                <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}         
                    transition={{ 
                        duration: 1,                          
                        delay: 0.5,                           
                        ease: "easeOut" 
                    }}
                    src={homeClifBottom} alt="gambar AllCharacter" className="absolute bottom-0 w-full h-1/5 block object-cover origin-center"/>
                {/* <div style={{ backgroundImage: `url(${homeClifBottom})` }} className="w-full h-1/5 absolute bottom-0 bg-cover bg-center bg-no-repeat"></div> */}
                
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}         
                    transition={{ 
                        type: "spring",      
                        stiffness: 260,      
                        damping: 15,          
                        duration: 0.5,                          
                        delay: 2,                           
                        ease: "easeOut" 
                    }} 
                    className="absolute bottom-48 w-60 h-20 flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform sm:w-80 sm:h-56 lg:w-60 lg:h-20 lg:bottom-32 xl:bottom-40 xl:h-20 2xl:bottom-52">
                    <img src={homeButton} alt="Button Frame" className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"/>
                    <div className="relative z-10 flex items-center justify-center gap-1 px-2">
                        <i className="ri-steam-fill text-5xl text-[#FEC95C] sm:text-7xl lg:text-5xl"></i>
                        <div className="flex flex-col text-left">
                            <span className="font-paragraf text-[11px] uppercase tracking-wider text-[#FEC95C] font-semibold leading-tight sm:text-lg lg:text-xs xl:text-sm">
                                Wishlist On
                            </span>
                            <span className="font-paragraf font-bold text-2xl text-[#FEC95C] leading-tight sm:text:6xl lg:text-2xl">
                                STEAM
                            </span>
                        </div>
                    </div>
                </motion.button>

                <div className="absolute bottom-24 w-full flex gap-3 justify-center sm:gap-6 lg:gap-4 lg:bottom-16 xl:bottom-24">
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}         
                        transition={{ 
                            type: "spring",      
                            stiffness: 260,      
                            damping: 15,          
                            duration: 0.5,                          
                            delay: 2.7,                           
                            ease: "easeOut" 
                        }} 
                        className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105 cursor-pointer">
                            <i class="ti ti-brand-instagram text-4xl text-[#23201E] md:text-5xl lg:text-2xl xl:text-4xl"></i>
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}         
                        transition={{ 
                            type: "spring",      
                            stiffness: 260,      
                            damping: 15,          
                            duration: 0.5,                          
                            delay: 2.9,                           
                            ease: "easeOut" 
                        }} 
                        className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105 cursor-pointer">
                            <i class="ti ti-brand-discord text-4xl text-[#23201E] md:text-5xl lg:text-2xl xl:text-4xl"></i>
                    </motion.button>
                    <motion.button 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}         
                        transition={{ 
                            type: "spring",      
                            stiffness: 260,      
                            damping: 15,          
                            duration: 0.5,                          
                            delay: 3.1,                           
                            ease: "easeOut" 
                        }} 
                        className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105 cursor-pointer">
                            <i class="ti ti-brand-youtube text-4xl text-[#23201E] md:text-5xl lg:text-2xl xl:text-4xl"></i>
                    </motion.button>
                </div>
        </section>
    );
}