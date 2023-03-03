 import React, { FC, ReactNode } from "react";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "../../components/StayCard/StayCard";
import {ProductsDTO} from "../../data/types/productsDTO";



 const getProducts: ProductsDTO[] = []; // Initialize the constant with an empty array or some other value.

 const DATA: ProductsDTO[] = getProducts.filter((_, i) => i < 8);

 // rest of the code ...



//
export interface SectionGridFeaturePlacesProps {
    stayListings?: ProductsDTO[];
    gridClass?: string;
    heading?: ReactNode;
    subHeading?: ReactNode;
    headingIsCenter?: boolean;
    tabs?: string[];
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
                                                                         stayListings = DATA,
                                                                         gridClass = "",
                                                                         heading = "Featured places to stay",
                                                                         subHeading = "Popular places to stay that Chisfis recommends for you",
                                                                         headingIsCenter,
                                                                         tabs = ["New York", "Tokyo", "Paris", "London"],

}) => {
    const renderCard = (stay: ProductsDTO) => {
        return <StayCard key={stay.urunId} data={stay} />;
    };

    return (
        <div className="nc-SectionGridFeaturePlaces relative">
            <HeaderFilter
                tabActive={"New York"}
                subHeading={subHeading}
                tabs={tabs}
                heading={heading}
                onClickTab={() => {}}
            />
            <div
                className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
            >
                {DATA.map((stay) => renderCard(stay))}
            </div>
            <div className="flex mt-16 justify-center items-center">
                <ButtonPrimary loading>Show me more</ButtonPrimary>
            </div>
        </div>
    );
};

export default SectionGridFeaturePlaces;