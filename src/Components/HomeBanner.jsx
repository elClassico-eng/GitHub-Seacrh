import React from "react";

import { ReactTyped } from "react-typed";

import { Link } from "react-scroll";

export const HomeBanner = () => {
    return (
        <div className="flex relative top-0 left-0 h-screen w-full">
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/20 to-black/80"></div>
            <img
                className="absolute top-0 left-0 w-full h-full z-0 object-cover"
                src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="background image"
            />
            <div className="flex flex-col justify-center items-center gap-y-12 md:gap-y-24 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 px-4 text-center">
                <ReactTyped
                    className="text-8xl leading-4 md:text-6xl  text-white"
                    strings={["Find the same repository from GitHub!"]}
                    typeSpeed={75}
                    startWhenVisible={true}
                />

                <Link to="section-1" smooth={true} duration={500}>
                    <button className="w-[200px] h-[50px] md:w-[270px] md:h-[65px] bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full text-lg md:text-xl border-black cursor-pointer transition-all">
                        Try now
                    </button>
                </Link>
            </div>
        </div>
    );
};
