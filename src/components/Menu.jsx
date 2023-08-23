import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenuBody = () => {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/menu")
        .then(res => {
            setMenuData(res.data.data)
        })
        .catch(err => console.log(err));
    },[])

    return (
        <div className='menu-body' id='menu'>
            <div className='container 2xl:mx-auto 2xl:px-28 pt-36 pb-10'>
                <div className='header flex justify-center pb-2'>
                    <h2 className='font-pacifico text-2xl text-orange-600'>Menu</h2>
                </div>
                <h2 className='font-nunito text-2xl pb-2 text-white flex justify-center font-bold'>MENU POPULER</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-custom justify-center">
                    {menuData.map((data, index) => (
                        <div key={index} className="card bg-white shadow-md mx-auto p-4 max-w-sm rounded-lg overflow-hidden" data-aos = "fade-up" data-aos-duration="1000">
                        <img className="w-full h-32 object-cover" src={data.gambar} alt="Menu Item" />
                        <div className="py-2">
                            <h3 className="text-lg font-semibold text-black">{data.nama_menu}</h3>
                            <p className="text-gray-500">{data.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                        </div>
                        <Link to="/" className="btn bg-orange-500 hover:bg-orange-600 py-3 px-5 mt-2 text-white border-none">Buy</Link>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default MenuBody;
