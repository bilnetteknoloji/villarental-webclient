import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useWindowSize from "../hooks/useWindowResize";

import { Page } from "./types"



export const pages: Page[] = [

];

const MyRoutes = () => {
    const WIN_WIDTH = useWindowSize().width || window.innerWidth;
    return(
        <div>test</div>
    );
};

export default MyRoutes;
