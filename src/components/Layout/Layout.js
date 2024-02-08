import React from "react";
import HeroComp from "../HeroComp/HeroComp";
import CityChange from "../CityChangeComp/CC";
import PlayAndWin from "../PlayAndWin/PaW";

function Layout () {
    return (
        <>
            <HeroComp />
            <CityChange />
            <PlayAndWin />
        </>
    );
}
export default Layout;