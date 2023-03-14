import React, {FC, ReactNode, useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { getShowcaseProducts } from "../../store/features/ShowcaseProductsSlice";
import {getCategory} from "../../store/features/ CategorySlice";
import StayCard from "../../components/StayCard/StayCard";
import {ProductsDTO} from "../../data/types/productsDTO";
import HeaderFilter from "./HeaderFilter";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";

export interface SectionGridFeaturePlacesProps {
    stayListings?: ProductsDTO[];
    gridClass?: string;
    heading?: ReactNode;
    subHeading?: ReactNode;
    headingIsCenter?: boolean;
    tabs?: string[];
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
                                                                         gridClass = "",
                                                                         heading = "Featured places to stay",
                                                                         subHeading = "Popular places to stay that Chisfis recommends for you",
                                                                         headingIsCenter,
                                                                         tabs = ["New York", "Tokyo", "Paris", "London"],
                                                                         stayListings = [],
                                                                     }) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.category.category);
    const showcaseProduct = useAppSelector((state) => state.showcaseProduct.products);
    const status = useAppSelector((state) => state.showcaseProduct.status);
    const error = useAppSelector((state) => state.showcaseProduct.error);

    useEffect(() => {
        dispatch(getCategory());
        dispatch(getShowcaseProducts());
    }, [dispatch]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>{error}</div>;
    }

    const renderCard = (stay: ProductsDTO) => {
        return <StayCard key={stay.kategoriId} data={stay} />;
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
                {stayListings.map((stay) => renderCard(stay))}
            </div>
            <div className="flex mt-16 justify-center items-center">
                <ButtonPrimary loading>Show me more</ButtonPrimary>
            </div>
        </div>
    );
};

export default SectionGridFeaturePlaces;

