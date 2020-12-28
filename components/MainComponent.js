import React, { Component } from "react";
import { useWindowDimensions, Image, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import MenuStackNavigator from "./navigation/MenuStackNavigator";
import "react-native-gesture-handler";
import HomeStackNavigator from "./navigation/HomeNavigator";
import ContactStackNavigator from "./navigation/ContactNavigator";
import AboutStackNavigator from "./navigation/AboutNavigator";
import { Icon } from "react-native-elements";
import { DrawerContent } from "./navigation/DrawerContent";

const Drawer = createDrawerNavigator();

function myDrawer() {
  var dimensions = useWindowDimensions();
  var isLargeScreen = dimensions.width >= 768;
}

function CustomDrawerContent(props) {}

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Menu"
          // drawerType={myDrawer.isLargeScreen ? "permanent" : "front"}
          // overlayColor="transparent"
          drawerContent={(props) => <DrawerContent {...props} />}
          options={{}}
          // hideStatusBar="true"
          // drawerStyle={myDrawer.isLargeScreen ? null : { width: "50%" }}
        >
          <Drawer.Screen
            name="Home"
            options={{
              drawerIcon: ({ tintColor }) => (
                <Icon
                  name="home"
                  type="font-awesome"
                  size={24}
                  color={tintColor}
                />
              ),
            }}
            component={HomeStackNavigator}
          />
          <Drawer.Screen
            name="Menu"
            options={{
              drawerIcon: ({ tintColor }) => (
                <Icon
                  name="list"
                  type="font-awesome"
                  size={22}
                  color={tintColor}
                />
              ),
            }}
            component={MenuStackNavigator}
          />
          <Drawer.Screen
            name="Contact"
            options={{
              drawerIcon: ({ tintColor }) => (
                <Icon
                  name="address-card"
                  type="font-awesome"
                  size={22}
                  color={tintColor}
                />
              ),
            }}
            component={ContactStackNavigator}
          />
          <Drawer.Screen
            name="About"
            options={{
              drawerIcon: ({ tintColor }) => (
                <Icon
                  name="info-circle"
                  type="font-awesome"
                  size={24}
                  color={tintColor}
                />
              ),
            }}
            component={AboutStackNavigator}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
