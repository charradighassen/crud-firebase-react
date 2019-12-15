import React from "react";

import productService from "../services/productService";
class ProductList extends React.Component {
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
  deletProduct = e => {
    productService.remove(e.target.value);
  };
  render() {
    return (
      <div>
        <div style={{ margin: "5%" }}>
          <h1 className="display-3">Product List</h1>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => this.props.history.push("/dashboard/add")}
          >
            Add new Product
          </button>
        </div>
        {!this.state.isLoading && (
          <table className="table">
            <caption>List of products</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td
                    style={{
                      margin: "0",
                      minWidth: "max-content",
                      float: "right"
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        this.props.history.push(
                          this.props.match.url + "/details/" + product.uid
                        )
                      }
                      className="btn btn-outline-info"
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() =>
                        this.props.history.push(
                          this.props.match.url + "/edit/" + product.uid
                        )
                      }
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      value={product.uid}
                      onClick={this.deletProduct}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {this.state.isLoading && (
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;
