import React, { Component } from "react";
import { View } from "react-native";
import Menu from "./MenuComponent";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TestComp from "./TestComp";
import Dishdetail from "./DishdetailComponent";
import { Platform } from "react-native";
import { Button } from "react-native-elements";

const Stack = createStackNavigator();

class Main extends Component {
  render() {
    return (
      //   <View style={{ padding: 20, paddingTop: 40 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#512DA8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="Info"
                  type="clear"
                  titleStyle: {
                    color: 'red',
                  },
                />
              ),
            }}
          />
          <Stack.Screen name="Dish" component={Dishdetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
