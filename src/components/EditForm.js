import React from "react";
import productService from "../services/productService";
class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      image: "",
      category: "all"
    };
  }
  componentDidMount() {
    productService.get(this.props.match.params.id).on("value", snapshot => {
      const productObject = snapshot.val();
      console.log(productObject);

      if (productObject) {
        this.setState({ isLoading: false, ...productObject });
      } else {
        this.setState({ loading: false });
      }
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const product = {
      name: this.state.name,
      price: this.state.price,
      category: this.state.category,
      image: this.state.image
    };
    productService.update(product, this.props.match.params.id);
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
              value={this.state.name}
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Price</label>
            <input
              value={this.state.price}
              type="number"
              name="price"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Image</label>
            <input
              value={this.state.image}
              type="text"
              name="image"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-auto my-1">
            <label className="mr-sm-2" for="inlineFormCustomSelect">
              Category
            </label>
            <select
              value={this.state.category}
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

export default EditForm;
