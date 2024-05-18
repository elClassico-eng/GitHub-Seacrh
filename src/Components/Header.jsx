import React from "react";

import { fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

const FadeInDown = styled.div`
    animation: 3s ${keyframes`${fadeInDown}`};
`;

export const Header = () => {
    return (
        <div className="flex justify-center absolute top-0 left-0 w-full h-auto mt-14 z-20">
            <FadeInDown>
                <h3 className="font-light tracking-wider text-white text-4xl">
                    GitHub Search Light
                </h3>
            </FadeInDown>
        </div>
    );
};
