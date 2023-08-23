import React from "react";
import { Restaurant } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbar bg-[#0F172B] container 2xl:mx-auto 2xl:px-28  top-0 left-0 w-full z-50 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                        <li><a onClick={() => scrollToSection("about")}>About Us</a></li>
                        <li><a onClick={() => scrollToSection("menu")}>Menu</a></li>
                    </ul>
                </div>
                <Link className=" text-orange-600 normal-case text-sm 2xl:text-xl" to={"/"}>
                    <h3 className="2xl:text-2xl font-nunito "><Restaurant className="mr-2" style={{ height: '40px', width: '30px' }} />R&R Burger</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><a onClick={() => scrollToSection("about")}>About Us</a></li>
                    <li><a onClick={() => scrollToSection("menu")}>Menu</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/login"} className="">Login</Link>
            </div>
        </div>
    )
}


export default NavBar