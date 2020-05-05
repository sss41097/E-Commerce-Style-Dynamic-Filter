import {
  FETCH_PRODUCTS,
  ORDER_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  FILTER_PRODUCTS_BY_PRICE_RANGE,
} from "./types";
import da from "../db.json";
export const fetchProducts = () => (dispatch) => {
  // fetch("../db.json")
  //   .then((res) => res.json())
  //   .catch((err) =>
  //     fetch("db.json")
  //       .then((res) => res.json())
  //       .then((data) => data.products)
  //   )
  //   .then((data) => {
  dispatch({ type: FETCH_PRODUCTS, payload: da.products });
  // });
};

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

export const reset_sort = () => (dispatch) => {
  dispatch({ type: "RESET_SORT" });
};

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
