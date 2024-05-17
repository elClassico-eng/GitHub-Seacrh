import React from "react";

export const HomeBanner = () => {
    return (
        <div className="flex relative h-screen w-full ">
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/80"></div>
            <img
                className="absolute top-0 left-0 w-full h-full z-0 object-cover"
                src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="background image"
            />
            <div className="flex flex-col justify-center items-center gap-y-24  absolute top-1/2 left-0 ml-80 z-20">
                <h1 className="text-6xl text-white text-center">
                    Find the same repository from GitHub
                </h1>
                <button className="w-[270px] h-[65px] bg-white rounded-full text-xl border-black cursor-pointer">
                    Try now
                </button>
            </div>
        </div>
    );
};
