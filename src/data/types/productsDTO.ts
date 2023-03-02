import { ThunkDispatch } from "redux-thunk";
import {Category, CategoryState} from "./category";

export interface ProductsState{
    data: Products[];
    loading: boolean;
    error: string;
}

export interface Products{
    urunId: number
    sinifId: number
    urunKodu: string
    adres: string
    bolgeId: number
    ilId: number
    ilceId: number
    urunAdi: string
    puan: number
    fiyat: number
    resim: string
    dilId: number
    link: string
    kampanyaId: number
    uyefavoriId: number
}

export interface ProductsFrom{
    name: string;
    type:"income" | "expense";
    color?: string;
}

interface GET_START{
    type: "GET_PRODUCTS_START";
}

interface GET_SUCCESS {
    type: "GET_PRODUCTS_SUCCESS";
    payload: Category[];
}

interface GET_ERROR {
    type: "GET_PRODUCTS_ERROR";
}

interface ADD_START {
    type: "ADD_PRODUCTS_START";
}

interface ADD_SUCCESS {
    type: "ADD_PRODUCTS_SUCCESS";
    payload: Category;
}

interface ADD_ERROR {
    type: "ADD_PRODUCTS_ERROR";
}

interface UPDATE_START {
    type: "UPDATE_PRODUCTS_START";
}

interface UPDATE_SUCCESS {
    type: "UPDATE_PRODUCTS_SUCCESS";
    payload: Category;
}

interface UPDATE_ERROR {
    type: "UPDATE_PRODUCTS_ERROR";
}

interface DELETE_START {
    type: "DELETE_PRODUCTS_START";
}

interface DELETE_SUCCESS {
    type: "DELETE_PRODUCTS_SUCCESS";
    payload: number;
}

interface DELETE_ERROR {
    type: "DELETE_PRODUCTS_ERROR";
}

export type CategoryAction =
    | GET_START
    | GET_SUCCESS
    | GET_ERROR
    | ADD_START
    | ADD_SUCCESS
    | ADD_ERROR
    | UPDATE_START
    | UPDATE_SUCCESS
    | UPDATE_ERROR
    | DELETE_START
    | DELETE_SUCCESS
    | DELETE_ERROR;
export type CategoryDispatch = ThunkDispatch<
    CategoryState,
    void,
    CategoryAction
>;