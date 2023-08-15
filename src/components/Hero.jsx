import React from "react";

const HeroBody = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/public/assets/img/hero.png" className="max-w-sm rotation-hero " alt="Hero" />
                <div className="max-w-2xl"> 
                    <h1 className="text-6xl font-bold text-white font-nunito">Enjoy Or Delicious Meal</h1>
                    <p className="py-6 text-white whitespace-pre-line">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                        In deleniti eaque aut repudiandae et a id nisi.asdadkmkwm amdkawmkdkwad akdmkwd
                    </p>
                    <button className="btn bg-orange-500 hover:bg-orange-600 text-white">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default HeroBody;
