import React, { useState } from "react";
import { DISHES } from "../assets/dishes";
import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";

function RenderDish(props) {
  const dish = props.dish;
  if (dish != null) {
    return (
      <Card>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",
          }}
        />
        {/* <Card.Image source={require("../shared/images/buffet.jpg")} /> */}
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>

      //   <Card
      //     featuredTitle={dish.name}
      //     image={require("../shared/images/buffet.jpg")}
      //   >
      //     <Text style={{ margin: 10 }}>{dish.description}</Text>
      //   </Card>
    );
  } else {
    return <View></View>;
  }
}

function Dishdetail({ route, navigation }) {
  const [dishes, setDishes] = useState(DISHES);

  const dish = route.params.dishId;
  console.log(dishes);
  console.log("DishId = ", dish);

  return <RenderDish dish={dishes[+dish]} />;
}

export default Dishdetail;
