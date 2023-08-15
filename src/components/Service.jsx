import React from "react";
import { Person } from "@mui/icons-material";
import "@mui/material/styles";

const CardService = () => {
    return (
        <div className="container mx-auto px-20">
            <div className="flex justify-center p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-orange-500">🔍</div>
                        <h2 className="text-xl font-semibold mb-2">Search Engine Optimization</h2>
                        <p>Improve your website's visibility on search engines.</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-orange-500">💻</div>
                        <h2 className="text-xl font-semibold mb-2">Web Development</h2>
                        <p>Create modern and responsive websites tailored to your needs.</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-orange-500"><Person /></div> {/* Use <Person /> instead of <Person>Person</div> */}
                        <h2 className="text-xl font-semibold mb-2">Mobile App Development</h2>
                        <p>Build native and cross-platform mobile apps.</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-orange-500">🎨</div>
                        <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
                        <p>Design intuitive user interfaces for optimal user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardService;
