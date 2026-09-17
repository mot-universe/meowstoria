import React from "react";
import MoTlogo from '../assets/img/mot.png';

export default function Contact() {
    return(
        <section id="contact" className="bg-[#0F0D30] w-full flex flex-col items-center px-4 py-4 sm:px-8 lg:px-16 xl:px-24">
            <img src={MoTlogo} alt="" className="w-56 xl:w-72"/>
            <p className="font-paragraf text-sm text-center text-[#FCE394] px-3 pt-5 pb-10 sm:text-lg xl:text-xl xl:px-40 xl:pt-1">MEOWSTORIA is being developed by MoT Studio in Indonesia. We are a small team of cat lovers; in addition to developing the game, we also handle website creation, trailer editing, and various other tasks. Although the workload is heavy, we truly enjoy it, especially thanks to the enthusiastic support we continue to receive from fans throughout the process.</p>
        </section>
    );
}