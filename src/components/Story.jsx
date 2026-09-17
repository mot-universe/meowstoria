import React from "react";
import { motion } from "framer-motion";
import storyBackground from '../assets/img/Story_Background.png';
import storyFrame from '../assets/img/Story_Frame.png';

export default function Story() {
    return(
        <section id="story" className="relative flex justify-center px-4 py-10 bg-red-700 w-full sm:px-8 lg:px-16 2xl:px-36 2xl:py-24">
            <img src={storyBackground} alt="" className="absolute inset-0 w-full h-full object-cover origin-center"/>
            <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}        
                transition={{ 
                    duration: 0.8,                          
                    delay: 1,                           
                    ease: "easeOut" 
                }}
                className="relative w-full h-100 lg:h-120 2xl:h-160 2xl:py-20">
                <img src={storyFrame} alt="" className="absolute inset-0 w-full h-full object-cover origin-center opacity-95 lg:w-2/5 2xl:object-contain"/>
                <div className="absolute w-full lg:w-2/5">
                    <h1 className="font-title text-3xl text-center font-bold pt-8 text-[#FCE95C] sm:text-5xl lg:p-4">Story</h1>
                    <p className="font-paragraf text-sm text-justify px-8 py-2 text-[#FCE394] sm:px-14 sm:text-lg lg:px-6 lg:py-1 xl:px-10 2xl:px-16">Lionis adalah seekor kucing pemberani dengan mimpi besar menjadi pahlawan terhebat di dunia Meowstoria. Tapi masalahnya dia tidak punya sihir sama sekali. Di dunia di mana menguasai sihir adalah hal yang harus dimiliki setiap petualang, Lionis adalah anomali. Teman-temannya mengejek. Guru-gurunya meragukan. Tapi Lionis tidak pernah menyerah dia terus berlatih pedang, terus berharap, dan terus bermimpi. </p>
                    {/* <button className="font-paragraf ml-8 mt-3 py-2 px-4 text-sm bg-[#FCE394] text-[#23201E] rounded-md shadow-xl/50">
                        Read more...
                    </button> */}
                </div>
            </motion.div>
        </section>
    );
}