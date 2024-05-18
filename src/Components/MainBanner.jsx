import React from "react";

import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`};
`;

export const MainBanner = () => {
    return (
        <div className="flex justify-center items-center border-x w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="flex flex-col justify-center items-center gap-2 z-10">
                <Bounce>
                    <h1 className="text-6xl ">GitHub Search</h1>
                </Bounce>

                <p className="font-normal">
                    Try to find the person you are interested in and check out
                    their repositories!
                </p>
            </div>
        </div>
    );
};
