import { ThunkDispatch } from "redux-thunk";
import {ProductsDTO} from "./productsDTO";

export interface CategoryState {
    data: CategoryData[];
    loading: boolean;
    error: string;
}

export interface CategoryData {
    kategoriId: number
    sinifId: number
    resim: string
    link: string
    durum: boolean
    geneltanim: string
    sira: number
    products: ProductsDTO
}

export interface CategoryForm {
    name: string;
    type: "income" | "expense";
    color?: string;
}

interface GET_START {
    type: "GET_CATEGORIES_START";
}

interface GET_SUCCESS {
    type: "GET_CATEGORIES_SUCCESS";
    payload: CategoryData[];
}

interface GET_ERROR {
    type: "GET_CATEGORIES_ERROR";
}

interface ADD_START {
    type: "ADD_CATEGORY_START";
}

interface ADD_SUCCESS {
    type: "ADD_CATEGORY_SUCCESS";
    payload: CategoryData;
}

interface ADD_ERROR {
    type: "ADD_CATEGORY_ERROR";
}

interface UPDATE_START {
    type: "UPDATE_CATEGORY_START";
}

interface UPDATE_SUCCESS {
    type: "UPDATE_CATEGORY_SUCCESS";
    payload: CategoryData;
}

interface UPDATE_ERROR {
    type: "UPDATE_CATEGORY_ERROR";
}

interface DELETE_START {
    type: "DELETE_CATEGORY_START";
}

interface DELETE_SUCCESS {
    type: "DELETE_CATEGORY_SUCCESS";
    payload: number;
}

interface DELETE_ERROR {
    type: "DELETE_CATEGORY_ERROR";
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