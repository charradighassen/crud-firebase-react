import React from "react";
import ProductList from "../components/ProductList";
import productService from "../services/productService";
class Home extends React.Component {
  state = {
    products: [],
    isLoading: true
  };
  componentDidMount() {
    productService.getAll().on("value", snapshot => {
      const productObject = snapshot.val();
      if (productObject) {
        const products = Object.keys(productObject).map(key => ({
          ...productObject[key],
          uid: key
        }));
        this.setState({ isLoading: false, products: products });
      } else {
        this.setState({ products: [], loading: false });
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.isLoading && (
          <ProductList products={this.state.products} />
        )}
        {this.state.isLoading && (
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
