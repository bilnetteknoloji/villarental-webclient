import {ProductsDTOAction, ProductsDTOState} from "../../data/types/productsDTO";

const defaultState: ProductsDTOState = {
    data: [],
    loading: false,
    error: "",
};

// Define the action types
const GET_PRODUCTSDTO_START = "GET_PRODUCTSDTO_START";
const GET_PRODUCTSDTO_SUCCESS = "GET_PRODUCTSDTO_SUCCESS";
const GET_PRODUCTSDTO_ERROR = "GET_PRODUCTSDTO_ERROR";

// Define the action creators
const getProductsDTOStart = () => ({ type: GET_PRODUCTSDTO_START });
const getProductsDTOSuccess = (payload: any) => ({ type: GET_PRODUCTSDTO_SUCCESS, payload });
const getProductsDTOError = () => ({ type: GET_PRODUCTSDTO_ERROR });

const productDTOReducer = (
    state: ProductsDTOState = defaultState,
    action: ProductsDTOAction
): ProductsDTOState => {
    switch (action.type) {
        case "GET_PRODUCTSDTO_START":
            return { ...state, loading: true, error: "" };
        case "GET_PRODUCTSDTO_SUCCESS":
            return { ...state, loading: false, data: action.payload };
        case "GET_PRODUCTSDTO_ERROR":
            return { ...state, loading: false, error: "Error fetching records" };
        default:
            return state;
    }
};

export default productDTOReducer;