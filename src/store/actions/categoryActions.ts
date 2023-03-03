import {Category, CategoryDispatch} from "../../data/types/category";
import api from "../../utils/api";

export const getCategories = () => async (dispatch: CategoryDispatch)=>{
    dispatch({type: "GET_CATEGORIES_START"});
    try{
        const response = await api().get<Category[]>("/Categories/GetAllKategoriler")
        dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data});
    }catch {
        dispatch({ type: "GET_CATEGORIES_ERROR"});
    }
};