import {ProductsDTO} from './types/productsDTO';
import {getStayCategories} from "./taxonomies";
import api from "../utils/api";
import {getCategories} from "../store/actions/categoryActions";



// async function ProductsListing() {
//     try {
//         const ProductsDTO: (dispatch: ProductsDTODispatch) => Promise<void> = await getProductsDTO();
//         const stayListing = response.data;
//
//         const stayCategories = await getStayCategories({ response });
//
//         const processedStayListings = stayListing.map((post: any, index: number) => {
//             const category = stayCategories.find(
//                 (category : any) => category.kategoriId === post.listingCategoryId
//             );
//
//             return {
//                 ...post,
//                 id: `stayListing_${index}_`,
//                 saleOff: !index ? "-20% today" : post.saleOff,
//                 isAds: !index ? true : post.isAds,
//                 listingCategory: category,
//             };
//         });
//
//         return processedStayListings;
//     } catch ({ message }) {
//         throw new Error(`Error in getProducts: ${message}`);
//     }
// }


// export const ProductsListing = () => async (dispatch: ProductsDTO) => {
//     ({ type: "GET_PRODUCTSDTO_START" });
//     try {
//         const response = await api().get<ProductsDTO[]>("Homes/VitrinUrunleri");
//         response.data.sort((a, b) => b.urunId - a.urunId);
//
//         const stayCategories = await getStayCategories({ response });
//         const processedStayListings = response.data.map((post: any, index: number) => {
//             const category = stayCategories.find(
//                 (category: any) => category.kategoriId === post.listingCategoryId
//             );
//
//             return {
//                 ...post,
//                 id: `stayListing_${index}_`,
//                 saleOff: !index ? "-20% today" : post.saleOff,
//                 isAds: !index ? true : post.isAds,
//                 listingCategory: category,
//             };
//         });
//
//         ({ type: "GET_PRODUCTSDTO_SUCCESS", payload: processedStayListings });
//     } catch {
//         ({ type: "GET_PRODUCTSDTO_ERROR" });
//     }
// };
export const ProductsListing = async (listings: any[], categories: any[]) => {
    try {
        const processedListings = await Promise.all(listings.map(async (post: any, index: number) => {
            const category = categories.find((category: any) => category.kategoriId === post.listingCategoryId);
            return {
                ...post,
                id: `processedListing_${index}_`,
                saleOff: !index ? "-20% today" : post.saleOff,
                isAds: !index ? true : post.isAds,
                listingCategory: category,
            };
        }));
        return processedListings;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to process listings.");
    }
};
