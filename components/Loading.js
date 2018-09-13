import React, { Component } from "react";
import { Icon } from "native-base";
import { Image, View } from "react-native";
import Main from "./Main";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.setState({ loading: false });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    if (this.state.loading)
      return (
        <View>
          <Image
            source={require("../Images/slack.png")}
            style={{
              width: 400,
              height: 600,
              alignSelf: "center"
            }}
          />
        </View>
      );

    return <Main />;
  }
}

export default Loading;
