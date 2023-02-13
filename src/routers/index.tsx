import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useWindowSize from "../hooks/useWindowResize";

import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Header from "../components/Header/Header";
import Page404 from "../containers/Page404/Page404";
import FooterNav from "../shared/Footer/Footer"
import Footer from "../shared/Footer/Footer";
import PageHome from "../containers/PageHome/PageHome";



export const pages: Page[] = [
    { path: "/", exact: true, component: PageHome},
    { path: "/#", exact: true, component: PageHome},
    { path: "/home-header", exact: true, component: PageHome},
];

const MyRoutes = () => {
    const WIN_WIDTH = useWindowSize().width || window.innerWidth;
    return(
        <BrowserRouter
            basename={process.env.NODE_ENV === "production" ? "chisfis" : ""}
        >
            <ScrollToTop />
            <Header />

            <Routes>
                {pages.map(({ component, path }) => {
                    const Component = component;
                    return <Route key={path} element={<Component />} path={path} />;
                })}
                <Route element={<Page404 />} />
            </Routes>

            {WIN_WIDTH < 768 && <FooterNav />}
            <Footer />
        </BrowserRouter>
    );
};

export default MyRoutes;
