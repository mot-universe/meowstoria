import React from "react";
import { motion } from "framer-motion";
import uniqueSwordBottom from '../assets/img/Unique_SwordBottom.png'
import uniqueSwordBottomXL from '../assets/img/Unique_SwordBottomXL.png'
import featurePattern from '../assets/img/Feature_Pattern.png'
import gambar1 from '../assets/img/Story_Background.png'
import borderKonten from '../assets/img/border_konten.png'
import paw1 from '../assets/img/feature_paw1.png'
import paw2 from '../assets/img/feature_paw2.png'
import meowBattle from '../assets/video/meowBattle.mp4'
import meowMeowtime from '../assets/video/meowMeowtime.mp4'
import meowBoss from '../assets/video/meowBoss.mp4'

export default function Fitur() {
    return(
        <section id="feature" style={{ backgroundImage: `url(${featurePattern})` }} className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[#2C225F]">
            <img src={uniqueSwordBottomXL} alt="" className="absolute -top-3 w-full lg:-top-5 xl:-top-10 2xl:-top-5"/>
            <div className="py-16 px-4 flex flex-col gap-16 justify-center items-center sm:px-8 sm:py-20 lg:px-16 xl:px-24 xl:py-24 2xl:px-36 2xl:py-32 2xl:gap-24">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}        
                    transition={{ 
                        duration: 0.8,                          
                        delay: 0.5,                           
                        ease: "easeOut" 
                    }}
                    className="flex flex-col gap-5 lg:flex-row lg:gap-8 2xl:gap-14">
                    <div className="relative lg:w-1/2">
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
                            src={meowBattle} // Import file video MP4/WebM kamu di sini
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 z-10 w-full h-full object-cover p-4 rounded-lg"
                        />
                        <img src={borderKonten} alt="" className="absolute inset-0 z-20 w-full p-3" />
                        <img src={paw1} alt="" className="absolute -top-2 -left-2 inset-0 z-20 w-36 rotate-20" />
                    </div>
                    <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:gap-4">
                        <h1 className="font-title font-medium text-3xl text-[#FCE394] sm:text-5xl">2.5 D Souls Like</h1>
                        <p className="font-paragraf text-sm text-[#FCE394] sm:text-lg xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores qui eos aut corrupti, magni exercitationem voluptatum dolor labore explicabo.</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}        
                    transition={{ 
                        duration: 0.8,                          
                        delay: 0.8,                           
                        ease: "easeOut" 
                    }}
                    className="flex flex-col gap-5 lg:flex-row-reverse lg:gap-8 2xl:gap-14">
                    <div className="relative lg:w-1/2">
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
                            src={meowMeowtime} // Import file video MP4/WebM kamu di sini
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 z-10 w-full h-full object-cover p-4 rounded-lg"
                        />
                        <img src={borderKonten} alt="" className="absolute inset-0 z-20 w-full p-3" />
                        <img src={paw2} alt="" className="absolute -top-2 -right-2 z-20 w-36 -rotate-20" />
                    </div>
                    <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:gap-4">
                        <h1 className="font-title font-medium text-3xl text-[#FCE394] sm:text-5xl">Meowtime</h1>
                        <p className="font-paragraf text-sm text-[#FCE394] sm:text-lg xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores qui eos aut corrupti, magni exercitationem voluptatum dolor labore explicabo.</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}        
                    transition={{ 
                        duration: 0.8,                          
                        delay: 1.1,                           
                        ease: "easeOut" 
                    }}
                    className="flex flex-col gap-5 lg:flex-row lg:gap-8 2xl:gap-14">
                    <div className="relative lg:w-1/2">
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
                            src={meowBoss} // Import file video MP4/WebM kamu di sini
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 z-10 w-full h-full object-cover p-4 rounded-lg"
                        />
                        <img src={borderKonten} alt="" className="absolute inset-0 z-20 w-full p-3" />
                        <img src={paw1} alt="" className="absolute -top-2 -left-2 inset-0 z-20 w-36 rotate-20" />
                    </div>
                    <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:gap-4">
                        <h1 className="font-title font-medium text-3xl text-[#FCE394] sm:text-5xl">Epic Boss Battle</h1>
                        <p className="font-paragraf text-sm text-[#FCE394] sm:text-lg xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores qui eos aut corrupti, magni exercitationem voluptatum dolor labore explicabo.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}