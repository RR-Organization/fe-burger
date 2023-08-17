import React, { useEffect, useState } from "react";
import { Restaurant } from "@mui/icons-material";
import AOS from "aos";
import 'aos/dist/aos.css';
import axios from "axios";
import DOMPurify from "dompurify";

const AboutBody = () => {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/page")
            .then(res => {
                if (res.data.data && res.data.data.length > 0) {
                    const cleanedDescription = DOMPurify.sanitize(res.data.data[0].description);
                    setAboutData({ description: cleanedDescription });
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container 2xl:mx-auto 2xl:px-28 pt-10 2l:pt-28" id="about">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-1/2 flex-1 p-2">
                    <div className="flex h-full">
                        <div className="w-full p-2">
                            <div className="grid grid-cols-2 gap-2 h-96">
                                <div className="h-full flex items-center justify-center overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
                                    <img className="object-cover " src="/public/assets/img/restoran-1.jpg" alt="Gambar 1" />
                                </div>
                                <div className="h-full flex items-center justify-center overflow-hidden" data-aos="fade-left" data-aos-duration="1000">
                                    <img className="object-cover " src="/public/assets/img/restoran-2.jpg" alt="Gambar 2" />
                                </div>
                                <div className="h-full flex items-center justify-center overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
                                    <img className="object-cover" src="/public/assets/img/restoran-3.jpg" alt="Gambar 3" />
                                </div>
                                <div className="h-full flex items-center justify-center overflow-hidden" data-aos="fade-left" data-aos-duration="1000">
                                    <img className="object-cover " src="/public/assets/img/burger-hero.jpg" alt="Gambar 4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex-1 p-2">
                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-left text-xl text-orange-600  font-pacifico">About Us</h5>
                        <h1 className="mb-4 font-nunito text-2xl text-black 2xl:text-4xl">Welcome to <Restaurant className="text-orange-600 pr-1" style={{ height: '58px', width: '40px' }} />Restoran</h1>
                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: aboutData.description }}></p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="border-start border-5 border-orange-600 border-l-4 p-3 flex items-center">
                                <h1 className="flex-shrink-0 text-orange-600 text-3xl mb-0 font-nunito" data-toggle="counter-up">2</h1>
                                <div className="ps-4">
                                    <p className="mb-0 font-nunito">Years of</p>
                                    <h6 className="text-uppercase mb-0 font-nunito text-black">EXPERIENCE</h6>
                                </div>
                            </div>
                            <div className="border-start border-5 border-orange-600 border-l-4 p-3 flex items-center">
                                <h1 className="flex-shrink-0 text-3xl mb-0 font-nunito text-orange-600" data-toggle="counter-up">15</h1>
                                <div className="ps-4">
                                    <p className="mb-0 font-nunito">Popular</p>
                                    <h6 className="text-uppercase mb-0 font-nunito text-black">MASTER CHEF</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutBody;
