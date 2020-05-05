import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  ORDER_PRODUCTS,
  FILTER_PRODUCTS_BY_PRICE_RANGE,
  RESET_SORT,
} from "../actions/types";

// below is the initial state of all variables when page loads first time
const initState = {
  items: [],
  filteredItems: [],
  category: "",
  sort: "",
  priceRange: "",
};

// below function is the reducer for executing various filtering actions
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        filteredItems: action.payload.items,
        category: action.payload.category,
      };
    case ORDER_PRODUCTS:
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
    case RESET_SORT:
      return {
        ...state,
        sort: "",
      };

    default:
      return state;
  }
}
