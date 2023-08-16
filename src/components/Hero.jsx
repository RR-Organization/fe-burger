import React from "react";

const HeroBody = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/public/assets/img/hero.png" className="w-[270px] 2xl:max-w-sm rotation-hero " alt="Hero" />
                <div className="max-w-2xl">
                    <h1 className="text-6xl font-bold text-white font-nunito">Enjoy Or Delicious Meal</h1>
                    <p className="py-6 text-white whitespace-pre-line">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                        In deleniti eaque aut repudiandae et a id nisi.asdadkmkwm amdkawmkdkwad akdmkwd
                    </p>
                   
                    <a className="btn bg-orange-500 hover:bg-orange-600 text-white" onClick={() => scrollToSection("menu")}>Get started</a>
                </div>
            </div>
        </div>
    )
}

export default HeroBody;
