import api from "../../utils/api";
import {ProductsDTO, ProductsDTODispatch} from "../../data/types/productsDTO";


export const getProductsDTO = () => async (dispatch: ProductsDTODispatch) => {
    dispatch({ type: "GET_PRODUCTSDTO_START" });
    try {
        const response = await api().get<ProductsDTO[]>("/records");
        response.data.sort((a, b) => b.urunId - a.urunId);
        dispatch({ type: "GET_PRODUCTSDTO_SUCCESS", payload: response.data });
    } catch {
        dispatch({ type: "GET_PRODUCTSDTO_ERROR" });
    }
};