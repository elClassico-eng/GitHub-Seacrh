import React from "react";

import { Route, Routes } from "react-router-dom";

import { FavoritePages } from "./Pages/FavoritePages/FavoritePages";
import { HomePages } from "./Pages/HomePages/HomePages";
import { Navigation } from "./Components/Navigation";

export const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/favorite" element={<FavoritePages />} />
            </Routes>
        </>
    );
};
