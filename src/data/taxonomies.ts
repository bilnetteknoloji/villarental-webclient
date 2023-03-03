import {getCategories} from "../store/actions/categoryActions";


async function getStayCategories({response}: { response: any }) {
    try {
        const Categories = await getCategories();
        const stayCategories = response.data;

        const processedStayCategories = stayCategories.map((item: any) => ({
            ...item,
            taxonomy: "category",
            listingType: "stay",
        }));

        return processedStayCategories;
    } catch (error) {
        console.error(error);
    }
}

export {
    getStayCategories
}