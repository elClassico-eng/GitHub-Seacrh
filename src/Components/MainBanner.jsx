import React from "react";

export const MainBanner = () => {
    return (
        <div className="flex justify-center items-center relative h-screen  w-full overflow-hidden  bg-blueBG">
            <div className="text-white">
                <h2 className="font-normal text-5xl text-center">
                    Add your favorite repositories to <br /> your page!
                </h2>
            </div>
            <div className="absolute text-[270px] uppercase text-stone-700 top-1/2 left-0 animate-move">
                <h1>GitHub&nbsp;Search</h1>
            </div>
        </div>
    );
};
