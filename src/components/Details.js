import React from "react";
import productService from "../services/productService";
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoading: true
    };
  }
  componentDidMount() {
    productService.get(this.props.match.params.id).on("value", snapshot => {
      const productObject = snapshot.val();

      if (productObject) {
        this.setState({ isLoading: false, product: productObject });
      } else {
        this.setState({ product: {}, loading: false });
      }
    });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={this.state.product.image}
            alt="Card image cap"
          />

          <div className="card-body">
            <h5 className="card-title">{this.state.product.name}</h5>
            <p className="card-text">{this.state.product.price} DT</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
