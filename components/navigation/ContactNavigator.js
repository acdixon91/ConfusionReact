import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Contact from "../ContactComponent";

const Stack = createStackNavigator();
const hamIcon = <FontAwesome5 name={"bars"} size={23} color="white" />;

const ContactStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
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
        name="Contact"
        component={Contact}
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
export default ContactStackNavigator;
