import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <img
            src={`products/${product.sku}.jfif`}
            alt={product.title}
            style={{ height: "200px", width: "200px" }}
          />
          <p>{product.title}</p>
          <b>{"Rs: " + product.price}</b>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
});
export default connect(mapStateToProps, { fetchProducts })(Products);
