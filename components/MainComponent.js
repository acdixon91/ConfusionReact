import React, { Component } from "react";
import { View } from "react-native";
import Menu from "./MenuComponent";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TestComp from "./TestComp";
import Dishdetail from "./DishdetailComponent";
import Home from "./HomeComponent";
import { Platform } from "react-native";
import MenuStackNavigator from "./navigation/MenuStackNavigator";
import "react-native-gesture-handler";
import HomeStackNavigator from "./navigation/HomeNavigator";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

class Main extends Component {
  render() {
    return (
      //   <View style={{ padding: 20, paddingTop: 40 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Menu">
          <Drawer.Screen name="Home" component={HomeStackNavigator} />
          <Drawer.Screen name="Menu" component={MenuStackNavigator} />
        </Drawer.Navigator>
        {/* <StackNavigator /> */}
      </NavigationContainer>
    );
  }
}

export default Main;
