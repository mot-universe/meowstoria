import React from "react";
import { motion } from "framer-motion";
import aboutLogoMeowstoria2 from '../assets/img/About_LogoMeowstoria2.png';
import uniqueSwordTop from '../assets/img/Unique_SwordTop.png';
import video from '../assets/img/video.png';

export default function About() {
    return (
        <section id="about" className="relative bg-[#23201E] w-full -mt-1 overflow-hidden">
                {/* <img src={aboutNHomePattern} alt="gambar background" className="absolute -top-36 w-full h-full object-cover origin-center"/> */}
                
                <div className="relative w-full flex justify-center items-center py-5 xl:py-8">
                    <motion.img
                        src={aboutLogoMeowstoria2}
                        className="pt-10 w-72 sm:w-80 2xl:w-96 2xl:pt-16"
                        alt="Logo Meowstoria" 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true, amount: 0.3 }}        
                        transition={{ 
                            duration: 0.8,                          
                            delay: 0.5,                           
                            ease: "easeOut" 
                        }} />
                </div>

                <div className="relative flex flex-col justify-center items-center gap-10 w-full p-4 pt-5 pb-28 z-10 sm:px-8 lg:flex-row lg:pb-32 lg:px-16 xl:px-24 xl:pb-48 2xl:px-36 2xl:pt-16 2xl:gap-20 2xl:pb-64">
                    <motion.div
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true, amount: 0.3 }}        
                        transition={{ 
                            duration: 0.8,                          
                            delay: 1,                           
                            ease: "easeOut" 
                        }}
                        className="lg:w-1/2">
                        <img src={video} alt="" srcSet="" className="w-full"/>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true, amount: 0.3 }}        
                        transition={{ 
                            duration: 0.8,                          
                            delay: 1.5,                           
                            ease: "easeOut" 
                        }} 
                        className="lg:w-1/2">
                        <h1 className="font-title text-3xl text-center font-medium text-[#FCE95C] mb-2 pb-2 sm:text-5xl lg:text-left">
                            About Game
                        </h1>
                        <p className="font-paragraf text-sm text-justify text-[#FCE394] sm:text-lg xl:text-xl">Meowstoria adalah action RPG top-down 2.5D yang memadukan intensitas combat ala Sekiro dengan   dunia penuh warna dan karakter menggemaskan ala Cat Quest. 
                        Di sini, setiap kemenangan bukan hanya soal skill, tapi juga soal perut. Kamu akan berperan sebagai petualang kucing pemberani yang menjelajahi dunia fantasi penuh monster legendaris, boss brutal, dan rahasia kuno.
                        </p>
                    </motion.div>
                </div>

                <img src={uniqueSwordTop} alt="" className="absolute -bottom-16 w-full h-36 object-cover origin-center xl:h-44 2xl:h-64 2xl:-bottom-28"/>
        </section>
    );
}