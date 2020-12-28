import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  Image,
  Text,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import SafeAreaView from "react-native-safe-area-view";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const windowHeight = Dimensions.get("window").height;

const drawerHeight = windowHeight - 100;

function StatusBarPlaceHolder() {
  return (
    <View
      style={{
        width: "100%",
        height: STATUS_BAR_HEIGHT,
        backgroundColor: "#512DA8",
      }}
    >
      <StatusBar barStyle="light-content" />
    </View>
  );
}

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBarPlaceHolder /> */}
      {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}

      <DrawerContentScrollView
        {...props}
        style={{ paddingTop: 0, backgroundColor: "#512DA8" }}
      >
        <View style={styles.drawerHeader}>
          {/* <DrawerItem label="Help" style={{ backgroundColor: "white",  } } /> */}
          <View style={{ flex: 1 }}>
            <Image
              style={styles.drawerImage}
              source={{
                uri:
                  "https://www.pinclipart.com/picdir/big/76-769424_big-image-cool-logos-clip-art-png-download.png",
              }}
            ></Image>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <View style={styles.drawerContent}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "white",
    height: drawerHeight,
    paddingTop: 20,
    // paddingBottom: 400,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  drawerHeader: {
    backgroundColor: "#512DA8",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginTop: 0,
    paddingTop: 0,
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
