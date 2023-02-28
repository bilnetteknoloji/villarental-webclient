import { combineReducers} from "redux";

interface  AppState {
    Area: void;
    Pages: any;

    Country: any;
    Products: any;
    FullDays: any;
    District: any;
    Province: any;
    Features: any;
    Campaigns: any;
    Languages: any;
    Variables: any;
    Categories: any;
    Currencies: any;
    FAQQuestions: any;
    CurrencyUnits: any;
    ProductsPrice: any;

    FeatureGroups: any;
    RentalRequests: any;

    RentalPictures: any;
    ProductBedroom: any;
    ProductFeature: any;
    PicturesRental: any;

    ProductsPicture: any;
    ProductBathroom: any;
    FeatureLanguage: any;
    ProductsComment: any;
    PreReservations: any;
    VariablesGroups: any;

    ProductsContract: any;
    ShowcaseProducts: any;
    ProductsShowcase: any;
    ProductsVariables: any;
    ProductsLanguages: any;
    VariablesLanguage: any;
    OccupancyCalendar: any;
    ProductsStatistics: any;

    ReservationProducts: any;

    FeatureGroupLanguage: any;
    PreReservationsProduct: any;
    ProductsAdditionalPrice: any;
    VariablesGroupsLanguage: any;
    PreReservationsAdditionalServices: any;
}


const rootReducer = combineReducers<AppState> ({
    Area: () => {},
    Pages: () => {},

    Country: () => {},
    Products: () => {},
    FullDays: () => {},
    District: () => {},
    Province: () => {},
    Features: () => {},
    Campaigns: () => {},
    Languages: () => {},
    Variables: () => {},
    Categories: () => {},
    Currencies: () => {},
    FAQQuestions: () => {},
    CurrencyUnits: () => {},
    ProductsPrice: () => {},

    FeatureGroups: () => {},
    RentalRequests: () => {},

    RentalPictures: () => {},
    ProductBedroom: () => {},
    ProductFeature: () => {},
    PicturesRental: () => {},

    ProductsPicture: () => {},
    ProductBathroom: () => {},
    FeatureLanguage: () => {},
    ProductsComment: () => {},
    PreReservations: () => {},
    VariablesGroups: () => {},

    ProductsContract: () => {},
    ShowcaseProducts: () => {},
    ProductsShowcase: () => {},
    ProductsVariables: () => {},
    ProductsLanguages: () => {},
    VariablesLanguage: () => {},
    OccupancyCalendar: () => {},
    ProductsStatistics: () => {},

    ReservationProducts: () => {},

    FeatureGroupLanguage: () => {},
    PreReservationsProduct: () => {},
    ProductsAdditionalPrice: () => {},
    VariablesGroupsLanguage: () => {},
    PreReservationsAdditionalServices: () => {},

});

export default rootReducer;

