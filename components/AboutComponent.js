import React, { useState } from "react";
import { FlatList, Text, ScrollView } from "react-native";
import { ListItem, Card, Avatar } from "react-native-elements";
import { LEADERS } from "../shared/leaders";

function renderLeadershipCard({ item }) {
  return (
    <ListItem bottomDivider>
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
      {/* <ListItem.Chevron /> */}
    </ListItem>
  );
}

function About() {
  const [leaders, setLeaders] = useState(LEADERS);

  return (
    <ScrollView
      style={
        {
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
      <Card
        containerStyle={{
          minWidth: "90%",
          marginTop: 40,
          justify: "center",
        }}
      >
        <Card.Title>Our History</Card.Title>
        <Card.Divider />
        <Text
          style={{
            marginLeft: 10,
          }}
        >
          Started in 2010, Ristorante con Fusion quickly established itself as a
          culinary icon par excellence in Hong Kong. With its unique brand of
          world fusion cuisine that can be found nowhere else, it enjoys
          patronage from the A-list clientele in Hong Kong. Featuring four of
          the best three-star Michelin chefs in the world, you never know what
          will arrive on your plate the next time you visit us. {"\n"}
          {"\n"}
          The restaurant traces its humble beginnings to The Frying Pan, a
          successful chain started by our CEO, Mr. Peter Pan, that featured for
          the first time the world's best cuisines in a pan.
        </Text>
      </Card>

      <Card
        containerStyle={{
          minWidth: "90%",
          marginTop: 30,
          justify: "center",
        }}
      >
        <Card.Title>Corporate Leadership</Card.Title>
        <Card.Divider />
        <FlatList
          data={leaders}
          renderItem={renderLeadershipCard}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </ScrollView>
  );
}

export default About;
