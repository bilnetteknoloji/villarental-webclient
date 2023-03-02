import {ProductsState,} from "../../data/types/productsDTO";

const defaultState: ProductsState = {
    data: [],
    loading: false,
    error: "",
};

const productsReducer = (
    state: ProductsState = defaultState,
    action: ProductsAction
): ProductsState => {
    switch (action.type) {
        case "GET_PRODUCTS_START":
            return { ...state, loading: true, error: "" };
        case "GET_PRODUCTS_SUCCESS":
            return { ...state, loading: false, data: action.payload };
        case "GET_PRODUCTS_ERROR":
            return { ...state, loading: false, error: "Error fetching records" };
        case "ADD_PRODUCTS_START":
            return { ...state, loading: true, error: "" };
        case "ADD_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: [action.payload, ...state.data],
            };
        case "ADD_PRODUCTS_ERROR":
            return { ...state, loading: false, error: "Error adding record" };
        case "UPDATE_PRODUCTS_START":
            return { ...state, loading: true, error: "" };
        case "UPDATE_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: state.data.map((record) =>
                    record.urunId === action.payload.id ? action.payload : record
                ),
            };
        case "UPDATE_PRODUCTS_ERROR":
            return { ...state, loading: false, error: "Error updating record" };
        case "DELETE_PRODUCTS_START":
            return { ...state, loading: true, error: "" };
        case "DELETE_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: state.data.filter((record) => record.urunId!== action.payload),
            };
        case "DELETE_PRODUCTS_ERROR":
            return { ...state, loading: false, error: "Error deleting record" };
        default:
            return state;
    }
};

export default recordReducer;