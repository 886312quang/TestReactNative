import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import file from "../json/exam.json";
import { DETAILS_SCREEN } from "./ScreenName";
import { save } from "save-file";

export class Book extends Component {
  state = {
    info: [],
  };

  componentDidMount() {
    const url = "https://www.json-generator.com/api/json/get/ccLAsEcOSq";
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ info: responseJson.book_array });
      })
      .then(() => {
        let data = JSON.stringify(this.state.info);
        save(data, "./rw.json");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(DETAILS_SCREEN, item);
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 5,
            backgroundColor: index % 2 == 0 ? "#dcdcdc" : "#fff",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 80, height: 80 }}
          />
          <View style={{ flex: 1, justifyContent: "center", marginLeft: 15 }}>
            <Text style={{ fontSize: 18, color: "red" }}>
              {item.book_title}
            </Text>
            <Text style={{ fontSize: 16 }}>{item.author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.info}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
});
