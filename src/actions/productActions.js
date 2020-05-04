import {
  FETCH_PRODUCTS,
  ORDER_PRODUCTS_BY_PRICE,
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

export const filterProducts = (products, type) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      type: type,
      items:
        type === "" ? products : products.filter((x) => x.category == type),
    },
  });
};

export const priceRangeFunc = (products, range) => (dispatch) => {
  let ranges = "";

  if (range !== "") ranges = range.split("-");

  console.log(range);

  dispatch({
    type: FILTER_PRODUCTS_BY_PRICE_RANGE,
    payload: {
      range: range,
      items:
        range === ""
          ? products
          : products.filter(
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
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};
