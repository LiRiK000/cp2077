import React from "react";
import HeroComp from "../HeroComp/HeroComp";
import CityChange from "../CityChangeComp/CC";
import PlayAndWin from "../PlayAndWin/PaW";
import HP from "../HPPR/HP";

function Layout () {
    return (
        <>
            <HeroComp />
            <CityChange />
            <PlayAndWin />
            <HP />
        </>
    );
}
export default Layout;