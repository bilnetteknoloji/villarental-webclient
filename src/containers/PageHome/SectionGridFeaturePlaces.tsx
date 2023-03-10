import React, {FC, ReactNode, useEffect} from "react";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "../../components/StayCard/StayCard";
import { ProductsDTO } from "../../data/types/productsDTO";
import {useDispatch, useSelector} from "react-redux";
import store, {RootState} from "../../store/store";
import {getCategory} from "../../store/features/ CategorySlice";


interface SectionGridFeaturePlacesProps {
    stayListings?: ProductsDTO[];
    gridClass?: string;
    heading?: ReactNode;
    subHeading?: ReactNode;
    headingIsCenter?: boolean;
    icons?: string[];
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
                                                                         stayListings = [],
                                                                         gridClass = "",
                                                                         heading = "Featured places to stay",
                                                                         subHeading = "Popular places to stay that Chisfis recommends for you",
                                                                         icons = ["New York", "Tokyo", "Paris", "London"],
                                                                     }) => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.category);

    useEffect(() => {
        store.dispatch(getCategory());
    }, [dispatch]);

    const renderCard = (stay: ProductsDTO) => {
        return <StayCard key={stay.urunId} data={stay} />;
    };
        return (
        <div className="nc-SectionGridFeaturePlaces relative">
            <HeaderFilter
                tabActive={"New York"}
                subHeading={subHeading}
                icons={icons}
                heading={heading}
                onClickTab={() => {}}
            />
            <div
                className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
            >
                {stayListings.map((stay) => renderCard(stay))}
            </div>
            <div className="flex mt-16 justify-center items-center">
                <ButtonPrimary loading>Daha Fazlası</ButtonPrimary>
            </div>
        </div>
    );
};
export default SectionGridFeaturePlaces;
