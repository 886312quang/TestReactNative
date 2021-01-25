import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export class Detail extends Component {
  state = {};

  render() {
    let data = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          alignContent: "center",
          backgroundColor: "#dcdcdc",
        }}
      >
        <Image
          style={{ width: "40%", height: "80%", resizeMode: "stretch" }}
          source={{ uri: data.image }}
        />
        <Text>{data.book_title}</Text>
        <Text>{data.author}</Text>
      </View>
    );
  }
}
