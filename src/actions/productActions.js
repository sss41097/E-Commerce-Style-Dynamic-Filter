import {
  FETCH_PRODUCTS,
  ORDER_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  FILTER_PRODUCTS_BY_PRICE_RANGE,
} from "./types";
import Data from "../db.json";

// this will load products from local json file.
export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS, payload: Data.products });
};

// this function filters products based on category
export const filterProducts = (products, category, range) => (dispatch) => {
  console.log("inside component");
  console.log(range);
  console.log(category);
  let ranges = "";

  let items =
    category === ""
      ? products
      : products.filter((x) => x.category === category);

  if (range !== "") ranges = range.split("-");

  console.log(range);

  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      category: category,
      items:
        range === ""
          ? items
          : items.filter(
              (x) =>
                x.price >= parseInt(ranges[0]) && x.price <= parseInt(ranges[1])
            ),
    },
  });
};

// this small function is used to reset sort value to default when even filter is used.
export const reset_sort = () => (dispatch) => {
  dispatch({ type: "RESET_SORT" });
};

// this function is used to filter products based on price range
export const priceRangeFunc = (products, category, range) => (dispatch) => {
  console.log(range);
  console.log(category);
  let ranges = "";

  let items =
    category === ""
      ? products
      : products.filter((x) => x.category === category);

  if (range !== "") ranges = range.split("-");

  console.log(range);

  dispatch({
    type: FILTER_PRODUCTS_BY_PRICE_RANGE,
    payload: {
      range: range,
      items:
        range === ""
          ? items
          : items.filter(
              (x) =>
                x.price >= parseInt(ranges[0]) && x.price <= parseInt(ranges[1])
            ),
    },
  });
};

// this function is used to sort products
export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS,
    payload: {
      sort: sort,
      items: products,
    },
  });
};
