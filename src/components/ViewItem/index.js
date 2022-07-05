import { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import "./index.css";

class ViewItem extends Component {
  state = {
    data: [],
  };
  getData = () => {
    axios.get("http://localhost:5000/users/").then((response) => {
      this.setState({ data: response?.data });
    });
  };

  handleDelete = (id) => {
    console.log(id);
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .delete(`http://localhost:5000/users/${id}`)
              .then((response) => {
                this.getData();
              }),
        },
        {
          label: "No",
          onClick: () => window.location.reload(),
        },
      ],
    });
  };

  // trigger

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {/* {this.state.data.map((i) => (
          <h1>{i.firstName}</h1>
        ))} */}

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Skill</th>
              <th>ID</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {this.state?.data?.map((i, index) => (
              <tr key={index}>
                <td>{i.firstName}</td>
                <td>{i.lastName}</td>
                <td>{new Date(i.DOB).toLocaleDateString()}</td>
                <td>{i.skill}</td>
                <td>{i.id}</td>
                <td>{i.available}</td>

                <td>
                  <div>
                    <RiDeleteBin7Fill
                      className="mx-5"
                      onClick={() => this.handleDelete(i.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ViewItem;
