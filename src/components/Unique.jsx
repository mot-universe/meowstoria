import React from "react";
import { motion } from "framer-motion";
import makeChonk from '../assets/img/makeChonk.png';
import makeCoklat from '../assets/img/makeCoklat.png';

export default function Unique() {
    return(
        <section className="relative w-full bg-[#FEC95C] p-4 sm:p-8">
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}        
                    transition={{ 
                        duration: 0.8,                          
                        delay: 1,                           
                        ease: "easeOut" 
                    }}
                    className="font-title font-medium text-center text-3xl text-[#23201E] pt-5 sm:text-5xl">Chonk is Everything!</motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}        
                    transition={{ 
                        duration: 0.8,                          
                        delay: 1.2,                           
                        ease: "easeOut" 
                    }}
                    className="font-paragraf text-center text-lg text-[#23201E] pb-5 sm:text-lg xl:text-xl">kau bisa merubah semua monster menjadi coklat dan memakanya</motion.p>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}        
                    transition={{ 
                        duration: 0.8,                          
                        delay: 1.5,                           
                        ease: "easeOut" 
                    }}
                    className="py-5 flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-3">
                        <img src={makeCoklat} alt="" className="w-full lg:w-96"/>
                        <p className="font-paragraf text-center text-sm text-[#23201E] sm:text-md xl:text-lg">ZED dengan sihirnya akan merubah monster yang sudah dikalahkan menjadi coklat</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <img src={makeChonk} alt="" className="w-full lg:w-96"/>
                        <p className="font-paragraf text-center text-sm text-[#23201E] sm:text-md xl:text-lg">makan coklat yang banyak sampai gendut dan karaktermu jadi tambah kuat</p>
                    </div>
                </motion.div>
        </section>
    );
}