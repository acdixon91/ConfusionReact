import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../MenuComponent";
import Dishdetail from "../DishdetailComponent";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();
const hamIcon = <FontAwesome5 name={"bars"} size={23} color="white" />;

const MenuStackNavigator = ({ navigation }) => {
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
        name="Menu"
        component={Menu}
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
      <Stack.Screen name="Dish" component={Dishdetail} />
    </Stack.Navigator>
  );
};

export default MenuStackNavigator;
