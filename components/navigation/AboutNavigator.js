import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import About from "../AboutComponent";

const Stack = createStackNavigator();
const hamIcon = <FontAwesome5 name={"bars"} size={23} color="white" />;

const AboutStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
          height: 80,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerLeft: () => (
            <Button
              icon={hamIcon}
              //   onPress={() => alert("This is a button!")}
              onPress={() => navigation.toggleDrawer()}
              type="clear"
              buttonStyle={{
                marginLeft: 15,
                width: 50,
                height: 40,
              }}
              titleStyle={{
                color: "white",
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default AboutStackNavigator;
