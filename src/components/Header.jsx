import React from "react";
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import "../App.css";

export default function Header() {

    return (
            <div className="w-[100%] max-w-80 flex flex-row gap-6 bg-black/90 px-3 py-2 rounded-lg text-white text-5 font-medium fixed flex justify-between items-center top-5 z-20">
                <div className="gap-6 flex flex-row">
                    <span className="">Swap</span>
                    <span className="">Earn</span>
                </div>
                <img src={Logo} alt="Logo" className="w-15 rounded-lg absolute left-[40%] hover:scale-106 transition-all duration-500" />
                <div className="gap-6 flex flex-row">
                    <span className="">Doc</span>
                    <span className="">FAQ</span>
                </div>
          </div>
    )
}