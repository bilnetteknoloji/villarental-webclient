import {ProductsDTO} from "./productsDTO";

export interface CategoryData {
    kategoriId: number
    sinifId: number
    resim: string
    link: string
    durum: boolean
    geneltanim: string
    sira: number
    products: ProductsDTO[];
}