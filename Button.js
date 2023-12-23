import React from "react";

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "muqeet",
      class: "enroll",
      address: "dgk",
    };
  }

  updatename() {
    this.setState({
      name: "muqeet ur rehman",
      class: "graduated",
      address: "islamabad",
    });
  }

  updateAddress() {
    this.setState({
      name: "muqeet ur rehman khan",
      address: "engineer",
    });
  }

  render() {
    return (
      <>
        <div>
          my name is {this.state.name} and address is {this.state.address}
        </div>
        <button onClick={() => this.updatename()}>update name</button>
        <button onClick={() => this.updateAddress()}> update address</button>
      </>
    );
  }
}
