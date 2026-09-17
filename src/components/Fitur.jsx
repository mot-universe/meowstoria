import React from "react";
import { motion } from "framer-motion";
import uniqueSwordBottom from '../assets/img/Unique_SwordBottom.png'
import featurePattern from '../assets/img/Feature_Pattern.png'
import gambar1 from '../assets/img/Story_Background.png'

export default function Fitur() {
    return(
        <section id="feature" style={{ backgroundImage: `url(${featurePattern})` }} className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[#2C225F]">
            <img src={uniqueSwordBottom} alt="" className="absolute -top-3 w-full lg:-top-5 xl:-top-10 2xl:-top-16"/>
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
                    <div className="lg:w-1/2">
                        <img src={gambar1} alt="" className="w-full"/>
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
                    <div className="lg:w-1/2">
                        <img src={gambar1} alt="" className="w-full"/>
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
                    <div className="lg:w-1/2">
                        <img src={gambar1} alt="" className="w-full"/>
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