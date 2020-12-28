import React, { useState } from "react";
import { Text, View } from "react-native";
import { ListItem, Card } from "react-native-elements";

function Contact() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        containerStyle={{
          minWidth: "90%",
          marginTop: 50,
          justify: "center",
        }}
      >
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text
          style={{
            marginLeft: 10,
          }}
        >
          121, Clear Water Bay Road {"\n"}
          Clear Water Bay, Kowloon {"\n"}
          HONG KONG {"\n"}
          Tel: +852 1234 5678 {"\n"}
          Fax: +852 8765 4321 {"\n"}
          Email:confusion@food.net
        </Text>
      </Card>
    </View>
  );
}

export default Contact;
