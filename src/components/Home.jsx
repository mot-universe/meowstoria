import React from "react";
import { motion } from "framer-motion";
import homeBG from '../assets/video/homeBG.mp4';
import menuLogo from '../assets/img/Menu_LogoMeowstoria.png';
import paw1 from '../assets/img/feature_paw3.png'
import mot from '../assets/img/mot.png'

export default function Home() {
    return(
        <section id="home" className="bg-red-400 min-h-screen overflow-hidden">
            <video
                src={homeBG} // Import file video MP4/WebM kamu di sini
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-14 bottom-14 left-16 w-2/6 z-10">
                <img src={menuLogo} alt="" className="w-60"/>
                <h1 
                    className="font-title text-6xl font-extrabold text-[#FCE95C] [text-shadow:1px_1px_0_#C9881C,-1px_-1px_0_#C9881C,1px_-1px_0_#C9881C,-1px_1px_0_#C9881C,0_0_12px_#FCE95C] mt-20"
                    >
                    Get Chonky or Die!
                </h1>
                <div className="relative w-full p-8 min-h-64 mt-5">
                    {/* Layer 1 (Background SVG) */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 1921 843"
                        className="absolute inset-0 z-0 w-full h-full drop-shadow-[0_0_3px_#FEC95C]"
                        preserveAspectRatio="none" /* Agar SVG memenuhi seluruh area div secara responsif */
                    >
                        <path
                        fill="#23201E" 
                        d="M0 91.8v90.7l7.2 2.5 7.2 2.5 15.2 26c8.4 14.3 15.3 26.8 15.3 27.8.1 1-3.6 5.8-8.2 10.5-12.7 13.3-18 22-21.8 35.9-2.5 9.1-3 24.3-1 33.6 1.5 6.7.9 7.9-4.8 10.3-2 .8-4.8 2-6.3 2.7L0 335.5V842h782.6l7.4-7.6c21.8-22 34.1-28.4 55.7-29 8-.2 13.4-.8 15.9-1.9 4.7-1.9 12.7-1.9 16.5 0 2.6 1.4 4.1 1.4 11 .4 4.3-.6 10.9-.9 14.7-.7 4.3.4 10.8-.2 18.2-1.5 10.6-1.8 13-1.9 32.7-.9 13.6.8 22.7 1.7 25.5 2.7 5.6 1.9 9 1.9 12.6-.2 2.9-1.7 3-1.7 10.1 2.6l7.1 4.3h12.9c7.1 0 15.6-.6 19-1.3 3.8-.7 11.7-1 21.8-.7 12.9.4 17.6 1 25.7 3.2 14.8 3.9 21.1 4.2 34.1 1.6 10.7-2.2 11.7-2.2 33.5-1.1 12.4.7 27.5 1.7 33.5 2.2 23.3 2.3 34.3 2.5 73 1.5 22-.5 44.3-1 49.5-1 13.6-.1 47.7 3.8 66.7 7.6 15.2 3.1 16.5 3.2 22 1.9 3.2-.7 8.7-1.6 12.3-1.8 8.3-.6 10.8 1.1 14.5 10.4 1.5 3.8 3.1 7.4 3.7 8 .8 1 50.9 1.3 244.4 1.3H1920l-.2-109.1-.3-109-7.5-3.2c-5.6-2.3-8.8-4.4-12.6-8.4-2.7-2.9-5.6-5.3-6.2-5.3-2.2 0-1.2-1.5 2.4-3.8 4.5-2.9 7.3-9.1 7.4-15.9 0-2.8-1.1-10.8-2.5-17.7-4.2-21.3-3.4-25.9 6-34.3 3.1-2.8 5.5-5.8 5.3-6.6-.5-2.3-25.1-25.2-28.6-26.6-3-1.3-3.2-1.6-3.2-6.5 0-2.9-.7-7.6-1.6-10.5-.8-3-1.3-6.3-1-7.5.8-3.2 10.1-10.7 14.4-11.7 2-.5 9.2-1.2 16-1.5l12.2-.7V86l-2.5-1c-2.8-1.1-7.9-6-14.9-14.3-3.6-4.3-5.4-5.6-6.7-5.2-1.4.5-2.3-.2-3.6-2.9-.9-2.1-2.4-3.6-3.4-3.6-.9 0-3.8-2.4-6.4-5.3-10.5-11.8-26-23.7-30.8-23.7-.8 0-3.2-1.4-5.3-3.1-3-2.4-4.4-2.9-6.4-2.3-1.4.4-4.3.8-6.5.9s-5.8 1-8 2c-3.4 1.6-6.9 1.8-24.3 1.9H1781l-3.1-3.8c-1.8-2-4.2-4.2-5.6-4.7-2.4-.9-2.7-1.4-3.7-6.2-.7-3-7.9-8.1-13-9.3-1.6-.3-3.1-1.4-3.3-2.5-.5-1.9-12.6-1.9-602.7-1.9H547.4l-1.8 13.7c-2.3 18-2.6 19.3-4.3 19.3-.7 0-3.7-1.2-6.6-2.8-4.9-2.6-5.9-2.7-18.2-2.6-15.5.1-21.6 1.8-38.6 11.4-13.8 7.7-17.9 8.8-26.1 7.1-6.8-1.4-13.9-4.7-20.7-9.5l-4.4-3.1h-17.6c-30.4-.1-54.7-2-71.6-5.6-14.5-3-15.6-3.1-31-2.5-8.8.4-18.2 1.2-21 1.7-2.7.6-13.6 1.3-24.1 1.7l-19 .7-13.3 6.7c-11.4 5.9-13.9 6.8-18.5 6.8-7.5 0-11.4-2.8-14.5-10.5-2.2-5.3-2.5-7.6-2.5-19.2L193.5 1H0z"
                        />
                    </svg>

                    {/* Layer 2 (Konten di atas SVG Background) */}
                    <div className="relative z-10 text-[#FCE394]">
                        <p className="text-paragraf text-4xl">Magicless cat devour monster to Chonky Powerful, and became a God of Parry</p>
                        <p className="text-paragraf mt-16">Cat Style 2.5D Soulslike</p>
                    </div>
                    <img src={paw1} alt="" className="absolute bottom-10 right-10 z-20 w-20 rotate-20" />
                </div>
                <div className="flex gap-10 mt-10">
                    <button
                        className="group relative px-8 py-4 font-bold text-[#0F0D30] uppercase tracking-wider rounded-2xl bg-[#FEC95C] border-b-8 border-[#b88322] hover:bg-[#FCE394] hover:border-b-5 hover:-translate-y-1 active:translate-y-1 active:border-b-0 transition-all duration-150 shadow-[0_10px_20px_rgba(254,201,92,0.3)] hover:shadow-[0_10px_25px_rgba(254,201,92,0.6)] focus:outline-none focus:ring-4 focus:ring-[#FEC95C]/50 cursor-pointer"
                        >
                            <span className="absolute inset-0 w-full h-full rounded-2xl bg-linear-to-t from-black/15 to-transparent pointer-events-none" />

                        <span className="absolute top-2 left-3 w-8 h-3 rounded-full bg-white/60 blur-[2px] pointer-events-none group-hover:w-12 transition-all duration-300" />

                        <span className="relative flex items-center justify-center gap-2 font-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                            Watch Trailer
                        </span>
                    </button>

                    <button
                        className="group relative px-8 py-4 font-bold text-[#FCE394] uppercase tracking-wider rounded-2xl bg-[#3D2E7C] border-b-8 border-[#241A50] hover:bg-[#4E3CA3] hover:text-white hover:border-b-10 hover:-translate-y-0.5 active:translate-y-2 active:border-b-0 transition-all duration-150 shadow-[0_10px_20px_rgba(91,72,184,0.3)] hover:shadow-[0_15px_25px_rgba(91,72,184,0.6)] focus:outline-none focus:ring-4 focus:ring-[#5B48B8]/50 cursor-pointer"
                        >
                        {/* Gradien Overlay */}
                        <span className="absolute inset-0 w-full h-full rounded-2xl bg-linear-to-t from-black/30 to-transparent pointer-events-none" />

                        {/* Highlight Shine */}
                        <span className="absolute top-2 left-3 w-8 h-3 rounded-full bg-white/30 blur-[2px] pointer-events-none group-hover:w-12 transition-all duration-300" />

                        {/* Teks Tombol */}
                        <span className="relative flex items-center justify-center gap-2 font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                            Check on STEAM
                        </span>
                        </button>
                </div>
                <div className="flex gap-4 mt-12">
                    <button className="bg-[#23201E] p-2 rounded-full shadow-xl/50 hover:scale-105 cursor-pointer">
                        <i class="ti ti-brand-instagram text-3xl text-[#FEC95C] sm:text-4xl sm:w-16 sm:h-16"></i>
                    </button>
                    <button className="bg-[#23201E] p-2 rounded-full shadow-xl/90 hover:scale-105 cursor-pointer">
                        <i class="ti ti-brand-discord text-3xl text-[#FEC95C] sm:text-4xl sm:w-16 sm:h-16"></i>
                    </button>
                    <button className="bg-[#23201E] p-2 rounded-full shadow-xl/90 hover:scale-105 cursor-pointer">
                        <i class="ti ti-brand-youtube text-3xl text-[#FEC95C] sm:text-4xl sm:w-16 sm:h-16"></i>
                    </button>
                </div>

                <div className="flex mt-14">
                    <div className="px-3 border-r-2 border-[#FEC95C]">
                        <img src={mot} alt="" className="w-14"/>
                    </div>
                    <div className="pl-2 flex flex-col justify-center">
                        <p className="font-paragraf text-sm text-[#FEC95C]">&copy; Copyright 2026 MoT Studio. Hak cipta dilindungi.</p>
                        <p className="font-paragraf text-sm text-[#FEC95C]">Based in: Indonesia</p>
                        <p className="font-paragraf text-sm text-[#FEC95C]">dev.mot.universe@gmail.com</p>
                    </div>
                </div>
            </div>

        </section>
    );
}