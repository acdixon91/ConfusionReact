import React from "react";
import { View, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

function Menu(props) {
  const keyExtractor = (item, index) => index.toString();

  const rednerMenuItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={require("../shared//images/buffet.jpg")} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={props.dishes}
      renderItem={rednerMenuItem}
    />
  );
}

export default Menu;
