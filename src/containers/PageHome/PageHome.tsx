import React, {FC} from "react";

//
import BgGlassmorphism from "../../components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "../../components/SectionHero/SectionHero";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import SectionGridFeaturePlaces from "../PageHome/SectionGridFeaturePlaces";




function PageHome() {
    return (
        <div className="nc-PageHome relative overflow-hidden">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

                {/* SECTION */}
                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionGridFeaturePlaces/>
                </div>

            </div>
        </div>
    );
}

export default PageHome;
