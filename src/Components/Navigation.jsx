import React from "react";

import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-24 bg-slate-500 text-white px-5 py-5 ">
            <h3 className="font-bold">GitHub Search</h3>

            <span>
                <Link to="/" className="uppercase px-2">
                    Home
                </Link>
                <Link to="favorite" className="uppercase">
                    Favorites
                </Link>
            </span>
        </nav>
    );
};
