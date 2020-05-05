import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterProducts,
  sortProducts,
  priceRangeFunc,
  reset_sort,
} from "../actions/productActions";

// this class based component shows the panel containing filters and changes the state of products
// if filtering is done
class Filter extends Component {
  render() {
    {
      console.log("inside component");
      console.log(this.props.category);
      console.log(this.props.priceRange);
    }
    return (
      <div className="row">
        <div
          className="col-md-2"
          style={{ color: "black" }}
        >{`${this.props.filteredProducts.length} products found.`}</div>
        <div className="col-md-3">
          <label>
            Filter By Price Range
            <select
              className="form-control"
              value={this.props.priceRange}
              onChange={(event) => {
                this.props.priceRangeFunc(
                  this.props.products,
                  this.props.category,
                  event.target.value
                );
                this.props.reset_sort();
              }}
            >
              <option value="">No Filter</option>
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
                  event.target.value,
                  this.props.priceRange
                );

                this.props.reset_sort();
              }}
            >
              <option value="">No Filter</option>
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
  category: state.products.category,
  sort: state.products.sort,
  priceRange: state.products.priceRange,
});
export default connect(mapStateToProps, {
  filterProducts,
  sortProducts,
  priceRangeFunc,
  reset_sort,
})(Filter);
