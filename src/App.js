import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import store from "./store";
import "./App.css";

// Thsi is the main App component having Filter and Products component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>PipeSort Filter Assignment</h1>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <Filter />
              <hr />
              <Products />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
