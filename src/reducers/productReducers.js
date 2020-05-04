import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  ORDER_PRODUCTS_BY_PRICE,
  FILTER_PRODUCTS_BY_PRICE_RANGE,
} from "../actions/types";

const initState = {
  items: [],
  filteredItems: [],
  category: "",
  sort: "",
  priceRange: "",
};
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        filteredItems: action.payload.items,
        category: action.payload.type,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };

    case FILTER_PRODUCTS_BY_PRICE_RANGE:
      return {
        ...state,
        filteredItems: action.payload.items,
        priceRange: action.payload.range,
      };

    default:
      return state;
  }
}
