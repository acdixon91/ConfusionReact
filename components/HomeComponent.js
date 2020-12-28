import React, { useState } from "react";
import { StyleSheet, FlatList, View, Text, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

function RenderItem(props) {
  const item = props.item;
  console.log("Made it here");
  console.log(props.item);

  if (item != null) {
    console.log("made it to if statement");
    return (
      <Card>
        <Card.Title>{item.name}</Card.Title>
        <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
        <Card.Divider />
        <Card.Image
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",
          }}
        />
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

function Home() {
  const [dishes, setDishes] = useState(DISHES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);

  console.log("Dishes: ", dishes);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <RenderItem item={dishes.filter((dish) => dish.featured)[0]} />
        <RenderItem item={promotions.filter((promo) => promo.featured)[0]} />
        <RenderItem item={leaders.filter((leader) => leader.featured)[0]} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginTop: 0,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
});

export default Home;
