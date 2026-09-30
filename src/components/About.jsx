import React from "react";
import { motion } from "framer-motion";
import aboutLogoMeowstoria2 from '../assets/img/About_LogoMeowstoria2.png';
import aboutPatternClif from '../assets/img/About_PatternClif.png';
import uniqueSwordTop from '../assets/img/Unique_SwordTop.png';
import uniqueSwordTopXL from '../assets/img/Unique_SwordTopXL.png';
import borderKonten from '../assets/img/border_konten.png';
import trailer from '../assets/video/trailerMeow.mp4';

export default function About() {
    return (
        <section id="about" className="relative bg-[#23201E] w-full -mt-1 overflow-hidden">
                <img src={aboutPatternClif} alt="gambar background" className="absolute w-full h-full object-cover origin-center"/>
                
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
                        className="relative lg:w-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1071 621"
                            className="relative z-0 w-full h-auto drop-shadow-[0_0_3px_#5B48B8]"
                        >
                            <path
                            fill="#19162B"
                            d="M1 67.9c0 64 .1 67 1.8 68.3 1.8 1.2 14.2 37.4 14.2 41.3 0 1-1.6 3.9-3.5 6.5C4 197 1 213.2 4.1 234.5c1.1 7.2 1 7.8-1 10.5L1 247.9V621h217.7c193.7 0 217.8-.2 219.3-1.5 4.1-3.7 13.2-5.8 26.5-6.2 9-.3 14.2-.9 16.8-2 3.4-1.5 4.1-1.5 7.1-.1 2.5 1.3 4.3 1.4 8.1.7 2.7-.5 6.3-.7 8-.3 1.7.3 5.9-.2 9.3-1.1 7.2-1.8 24.8-1.2 31.7 1.1 5.2 1.8 6.5 1.7 8.7-.3 1.4-1.3 5.2-1.9 16.1-2.6 21-1.5 28.5-1.2 35.8 1.1 10.1 3.2 12.2 3.4 19 1.7 7.2-1.9 21.3-1.5 41.4 1.1 12.9 1.6 26.6 1.7 49.9.4 15.1-.9 18.5-.8 31 1 7.8 1.2 17.4 3 21.5 4.1 4.8 1.4 8.7 1.9 11 1.5 9.5-1.7 11.3-1.7 15.8-.2 4.2 1.4 18.5 1.6 140 1.6H1071v-80.4c0-71.5-.2-80.5-1.6-81.6-.8-.8-2.1-2.8-2.9-4.6-.7-1.8-2.3-4.2-3.4-5.3-1.8-1.8-1.9-2.2-.6-2.7.9-.4 2.2-1.8 2.9-3.3 2.6-5 2.7-10.3.6-22.4-3-18-2.7-21.9 2.3-27.5l2.1-2.2-2.3-7.3c-1.3-3.9-3.4-8.2-4.7-9.4-1.8-1.6-2.4-3.3-2.4-6.4 0-2.4-.5-6.9-1.2-10-1-5.1-1-6.2.7-9.9 2-4.5 4-6 7.9-6h2.6V1H306v3.5c0 4.1-1.4 4.5-6.2 1.5-6.2-3.7-21.9-1.8-32.7 4-5.8 3.2-11.6 3.9-15.4 1.9-1.2-.7-4.2-2.8-6.6-4.8l-4.5-3.6-13-.4c-27.1-.9-58.7-.2-67.1 1.4-4.7 1-9.7 1.4-12.2 1-5.9-.9-11.2.9-18 5.9-15.2 11.3-21.3 10.1-21.7-4.5l-.1-5.9H1z"
                            />
                        </svg>
                        <video
                            src={trailer} // Import file video MP4/WebM kamu di sini
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 z-10 w-full h-full object-cover p-4 rounded-lg"
                        />
                        <img
                            src={borderKonten}
                            alt=""
                            className="absolute inset-0 z-20 w-full h-full object-contain p-3 pointer-events-none"
                        />
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

                {/* <img src={uniqueSwordTopXL} alt="" className="absolute -bottom-16 w-full h-36 object-cover origin-center xl:h-44 2xl:h-64 2xl:-bottom-28"/> */}
                <img src={uniqueSwordTopXL} alt="" className="absolute -bottom-16 w-full xl:h-44 2xl:-bottom-16"/>
        </section>
    );
}