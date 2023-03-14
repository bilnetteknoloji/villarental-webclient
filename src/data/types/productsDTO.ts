import {CategoryData} from "./categoryData";

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
    kategoriId: number;
    category: CategoryData[];
}