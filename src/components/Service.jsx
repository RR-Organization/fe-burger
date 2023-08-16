import React from "react";
import { Person } from "@mui/icons-material";
import { Restaurant } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import { SupportAgent } from "@mui/icons-material";
import "@mui/material/styles";

const CardService = () => {
    return (
        <div className="container 2xl:mx-auto 2xl:px-28 ">
            <div className="flex justify-center p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-orange-500"><Restaurant style={{ height: '64px', width: '56px' }}/></div>
                        <h2 className="text-xl font-semibold text-black mb-2">Quality Food</h2>
                        <p>Improve your website's visibility on search engines.</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-orange-500"><ShoppingCart style={{ height: '64px', width: '56px' }}/></div>
                        <h2 className="text-xl font-semibold mb-2 text-black">Online Order</h2>
                        <p>Create modern and responsive websites tailored to your needs.</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-orange-500"><Person style={{ height: '64px', width: '56px' }}/></div> {/* Use <Person /> instead of <Person>Person</div> */}
                        <h2 className="text-xl font-semibold mb-2 text-black">Master Chef</h2>
                        <p>Build native and cross-platform mobile apps.</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="text-3xl mb-4 text-orange-500"><SupportAgent style={{ height: '64px', width: '56px' }}/></div>
                        <h2 className="text-xl font-semibold mb-2 text-black">Customer Service</h2>
                        <p>Design intuitive user interfaces for optimal user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardService;
