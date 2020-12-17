import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../HomeComponent";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();
const hamIcon = <FontAwesome5 name={"bars"} />;

const HomeStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
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
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Button
              icon={hamIcon}
              //   onPress={() => alert("This is a button!")}
              onPress={() => navigation.toggleDrawer()}
              type="clear"
              buttonStyle={{
                backgroundColor: "#ff7626",
                marginLeft: 15,
                width: 40,
                height: 30,
              }}
              titleStyle={{
                color: "white",
              }}
            />
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
