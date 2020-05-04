import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterProducts,
  sortProducts,
  priceRangeFunc,
} from "../actions/productActions";
class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2">{`${this.props.filteredProducts.length} products found.`}</div>
        <div className="col-md-3">
          <label>
            Filter By Price Range
            <select
              className="form-control"
              value={this.props.priceRange}
              onChange={(event) => {
                if (filterProducts !== "")
                  this.props.priceRangeFunc(
                    this.props.products,
                    event.target.value
                  );
              }}
            >
              <option value="">Select</option>
              <option value="0-5">Rs 0 - Rs 5</option>
              <option value="5-10">Rs 5 - Rs 10</option>
              <option value="10-20">Rs 10 - Rs 20</option>
              <option value="20-30">Rs 20 - Rs 30</option>
              <option value="30-100">Rs 30 - Rs 100</option>
            </select>
          </label>
        </div>

        <div className="col-md-2">
          <label>
            {" "}
            Filter By Category
            <select
              className="form-control"
              value={this.props.size}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="laptop">laptop</option>
              <option value="mobile">Mobile</option>
            </select>
          </label>
        </div>

        <div className="col-md-2">
          <label>
            Order By
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort,
  priceRange: state.products.priceRange,
});
export default connect(mapStateToProps, {
  filterProducts,
  sortProducts,
  priceRangeFunc,
})(Filter);
