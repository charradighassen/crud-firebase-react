import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./views/Home";
import EditForm from "./components/EditForm";
import AddForm from "./components/AddForm";
import ProductTable from "./components/ProductTable";
import ProductDetails from "./components/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="position-relative container">
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={ProductTable} />

          <Switch>
            <Route exact path="/dashboard/add" component={AddForm} />
            <Route exact path="/dashboard/edit/:id" component={EditForm} />
            <Route
              exact
              path="/dashboard/details/:id"
              component={ProductDetails}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
