import React from "react";

import { ReactTyped } from "react-typed";

export const MainBanner = () => {
    return (
        <div className="flex justify-center items-center relative h-screen  w-full overflow-hidden  bg-blueBG">
            <div className="text-white">
                <ReactTyped
                    className="font-normal text-7xl text-center"
                    strings={[
                        "Find repositories of interest",
                        "Add repositories of interest to your favorites",
                    ]}
                    typeSpeed={70}
                    backSpeed={30}
                    loop
                    startWhenVisible={true}
                    fadeOut={true}
                    backDelay={1000}
                />
            </div>
        </div>
    );
};
