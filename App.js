import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Book } from "./Component/Book";
import { Detail } from "./Component/Detail";
import { BOOK_SCREEN, DETAILS_SCREEN } from "./Component/ScreenName";

const AppNavigator = createStackNavigator(
  {
    BOOK_SCREEN: {
      screen: Book,
      navigationOptions: {
        headerTitle: "Trang chu",
      },
    },
    DETAILS_SCREEN: {
      screen: Detail,
      navigationOptions: {
        headerTitle: "Chi tiet",
      },
    },
  },
  {
    initialRouteName: BOOK_SCREEN,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
