import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { DISHES } from "../shared/dishes";

function Menu({ navigation }) {
  const [dishes, setDishes] = useState(DISHES);

  const rednerMenuItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => {
        navigation.navigate("Dish", { dishId: item.id });
        console.log("Nav test", item.id);
      }}
    >
      <Avatar
        rounded
        source={{
          uri: "https://reactjs.org/logo-og.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={dishes}
        renderItem={rednerMenuItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default Menu;
