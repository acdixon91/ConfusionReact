import React, { useState } from "react";
import { DISHES } from "../assets/dishes";
import { COMMENTS } from "../shared/comments";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { Card, Icon } from "react-native-elements";

function RenderDish(props) {
  const dish = props.dish;
  if (dish != null) {
    return (
      <Card>
        <Card.Title>{dish.name}</Card.Title>
        {/* <Card.Divider /> */}
        <Card.Image
          style={{ height: 350 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",
          }}
        />
        {/* <Card.Image source={require("../shared/images/buffet.jpg")} /> */}
        <Text style={{ margin: 10 }}>{dish.description}</Text>
        <Icon
          raised
          reverse
          name={props.favorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          onPress={() => {
            props.favorite
              ? console.log("Already favorite ", props.favorites)
              : props.onPress();
          }}
        />
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

function RenderComments(props) {
  const comments = props.comments;
  const renderCommentItem = ({ item, index }) => {
    return (
      <View key={index} style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}> {item.comment} </Text>
        <Text style={{ fontSize: 12 }}> {item.rating + " Stars"} </Text>
        <Text style={{ fontSize: 12 }}>
          {"- " + item.author + ", " + item.date}
        </Text>
      </View>
    );
  };

  return (
    <Card>
      <Card.Title>Comments</Card.Title>
      <Card.Divider />
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
}

function Dishdetail({ route, navigation }) {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [favorites, setFavorites] = useState([]);
  const dish = route.params.dishId;

  function markFavorite(dish) {
    setFavorites((favorites) => favorites.concat(dish));
  }

  return (
    <ScrollView style={{ paddingBottom: 30 }}>
      <RenderDish
        dish={dishes[+dish]}
        favorite={favorites.some((el) => el === dish)}
        onPress={() => {
          markFavorite(dish);
          console.log(favorites);
        }}
        favorites={favorites}
      />
      <RenderComments
        style={{ marginBottom: 100 }}
        comments={comments.filter((comment) => comment.dishId === dish)}
      />
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

export default Dishdetail;
