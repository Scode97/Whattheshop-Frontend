import React, { Component } from "react";
import { Icon } from "native-base";
import { Image } from "react-native";

import Main from "./Main";
import Box from "../Images/Box.png"

class Loading extends Component{
  constructor(props) {
    super(props);
    this.state = {
      component : <Main/>
    }


  }
  componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <Image source = {require('../Images/Box.png')} /> })
     }, 5000);
  }

  componentWillUnmount(){
     clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      this.state.component
    );

  }
}

export default Loading;
