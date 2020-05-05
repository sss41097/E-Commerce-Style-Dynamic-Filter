import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div
        className="col-md-4"
        key={product.id}
        style={{ borderRadius: "25px" }}
      >
        <div
          className="thumbnail text-center"
          style={{ borderRadius: "25px", backgroundColor: "#a3c1ce" }}
        >
          <img
            src={process.env.PUBLIC_URL + `/products/${product.sku}.jfif`}
            alt={product.title}
            style={{ height: "200px", width: "200px", borderRadius: "25px" }}
          />
          <p style={{ color: "black" }}>{product.title}</p>
          <b style={{ color: "black" }}>{"Rs: " + product.price}</b>
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
