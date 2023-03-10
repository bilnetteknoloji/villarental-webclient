import { ThunkDispatch } from "redux-thunk";
import {CategoryData} from "./categoryData";

export interface ProductsDTOState{
    data: ProductsDTO[];
    loading: boolean;
    error: string;
}

export interface ProductsDTO {
    urunId: number;
    sinifId: number;
    urunKodu: string;
    adres: string;
    bolgeId: number;
    ilId: number;
    ilceId: number;
    urunAdi: string;
    puan: number;
    fiyat: number;
    resim: string;
    dilId: number;
    link: string;
    kampanyaId: number;
    uyefavoriId: number;
    category: CategoryData;
}

export interface ProductsDTOFrom{
    name: string;
    type:"income" | "expense";
    color?: string;
}

interface GET_START{
    type: "GET_PRODUCTSDTO_START";
}

interface GET_SUCCESS {
    type: "GET_PRODUCTSDTO_SUCCESS";
    payload: ProductsDTO[];
}

interface GET_ERROR {
    type: "GET_PRODUCTSDTO_ERROR";
}

export type ProductsDTOAction =
    | GET_START
    | GET_SUCCESS
    | GET_ERROR
export type ProductsDTODispatch = ThunkDispatch<
    ProductsDTOState,
    void,
    ProductsDTOAction
>;