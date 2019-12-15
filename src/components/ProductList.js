import React from "react";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const products = this.props.products;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {products &&
          products.map(product => (
            <div
              className="card"
              style={{
                width: "18rem",
                margin: "20px",
                minWidth: "max-content"
              }}
            >
              <div
                style={{
                  padding: "10px",
                  width: "300px",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <img
                  src={product.image}
                  width="200px"
                  className=" card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h5 className="card-title">{product.price}</h5>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default ProductList;
