import React, {FC, useEffect,} from "react";
import { ProductsDTO } from "../../data/types/productsDTO";
import {useAppDispatch} from "../../store/store";
import {getShowcaseProducts} from "../../store/features/ShowcaseProductsSlice";


export interface StayCardProps {
    className?: string;
    data: ProductsDTO;
    size?: "default" | "small";
}

const StayCard: FC<StayCardProps> = ({
                                         size = "default",
                                         data,
                                         className = "",
                                     }) => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch((getShowcaseProducts));
    },[dispatch]);

    const {
        urunId, urunKodu, urunAdi,
    } = data;

    return (
        <div className="card">
            <div className="card-header">{urunId}</div>
            <div className="card-body">
                <h5 className="card-title">{urunAdi}</h5>
                <p className="card-text">{urunKodu}</p>
                <div className="btn btn-primary">Read More...</div>
            </div>
        </div>
    );

};

export default StayCard;
