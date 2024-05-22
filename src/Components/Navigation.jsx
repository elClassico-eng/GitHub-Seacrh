import React from "react";

import { Link } from "react-router-dom";

import { fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";

const FadeInRight = styled.div`
    animation: 3s ${keyframes`${fadeInRight}`};
`;

export const Navigation = () => {
    return (
        <nav className="flex fixed top-0 right-0 md:top-1/2 md:right-0 md:transform md:-translate-y-1/2 bg-transparent text-white p-4 md:px-10 md:py-5 z-20">
            <FadeInRight>
                <div className="w-full">
                    <div className="flex flex-row md:flex-col justify-center items-center gap-4">
                        <Link
                            to="/"
                            className="font-semibold text-lg md:text-xl px-2 hover:underline transition-all"
                        >
                            Home
                        </Link>
                        <Link
                            to="favorite"
                            className="font-semibold text-lg md:text-xl hover:underline transition-all"
                        >
                            Favorites
                        </Link>
                    </div>
                </div>
            </FadeInRight>
        </nav>
    );
};
