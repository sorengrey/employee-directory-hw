import React, { Component } from "react";
import API from "../../utils/API";
import DataTable from "../DataTable";

class Container extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <DataTable />
      </div>
    );
  }
}

export default Container;
