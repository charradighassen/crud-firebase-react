import React from "react";
import ProductService from "../services/productService";
class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      image: "",
      category: "all"
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    ProductService.add(this.state);
    this.props.history.push("/dashboard/");
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <form onSubmit={this.onSubmit}>
          <h1 className="display-4">Add Product</h1>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Image</label>
            <input
              type="text"
              name="image"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="col-auto my-1">
            <label className="mr-sm-2" for="inlineFormCustomSelect">
              Category
            </label>
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              name="category"
              onChange={this.handleChange}
            >
              <option selected>Choose...</option>
              <option value="IT">IT</option>
              <option value="Clothes">Clothes</option>
              <option value="Games">Games</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
