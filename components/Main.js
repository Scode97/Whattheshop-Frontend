import React, { Component } from "react";
import { Icon } from "native-base";
import Loading from "./Loading";

class Main extends Component {
  render() {
    return (
      <Icon
        type="Octicons"
        name="smiley"
        style={{
          fontSize: 300,
          alignSelf: "center",
          paddingTop: "50%",
          color: "red"
        }}
      />
    );
  }
}

export default Main;
