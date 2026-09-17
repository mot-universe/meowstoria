import React from "react";
import menuLogo from '../assets/img/Menu_LogoMeowstoria.png';

export default function Footer() {
    return(
        <section id="footer" className="bg-[#1F1C1A] w-full flex flex-col items-center">
            <img src={menuLogo} alt="" className="w-56 pt-10 sm:w-64"/>
            <h2 className="font-paragraf text-xl text-[#FEC95E] pt-2">contact@motstudio.com</h2>
            <div className="py-10 grid grid-cols-3 gap-6 sm:grid-cols-6">
                <button className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105">
                        <i class="ti ti-brand-instagram text-3xl text-[#23201E] sm:text-4xl sm:w-16 sm:h-16"></i>
                </button>
                <button className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105">
                        <i class="ti ti-brand-facebook text-3xl text-[#23201E] sm:text-4xl sm:w-16 sm:h-16"></i>
                </button>
                <button className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105">
                        <i class="ti ti-brand-x text-3xl text-[#23201E] sm:text-4xl sm:w-16 sm:h-16"></i>
                </button>
                <button className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105">
                        <i class="ti ti-brand-discord text-3xl text-[#23201E] sm:text-4xl sm:w-16 sm:h-16"></i>
                </button>
                <button className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105">
                        <i class="ti ti-brand-tiktok text-3xl text-[#23201E] sm:text-4xl sm:w-16 sm:h-16"></i>
                </button>
                <button className="bg-[#FEC95E] p-2 rounded-full shadow-xl/50 hover:scale-105">
                        <i class="ti ti-brand-youtube text-3xl text-[#23201E] sm:text-4xl sm:w-16 sm:h-16"></i>
                </button>
            </div>

            <p className="font-paragraf text-sm text-[#FEC95E] text-center py-8">Meowstoria is &copy; Copyright 2026 MoT Studio. Hak cipta dilindungi.</p>
        </section>
    );
}