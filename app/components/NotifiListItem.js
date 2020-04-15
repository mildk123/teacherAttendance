import React from "react";
import { View } from "react-native";

import Colors from "../modules/Colors";
import {
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Icon
} from "native-base";

const NotifiListItem = props => (
  <ListItem
    thumbnail
    style={{
      backgroundColor: Colors.brandBlue,
      marginVertical: 5,
      borderRadius: 100,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      elevation: 5
    }}
  >
    <View style={{ flexDirection: "row" }}>
      
      <View style={{ padding: 10 }}>
        <Icon type="MaterialCommunityIcons" name="bell" style={{color: Colors.brandWhite, }} />
      </View>

      <View
        style={{
          flexDirection: "column",
        }}
      >
          <Text style={{ alignSelf: 'flex-start', color: Colors.brandWhite, fontWeight: '700' }}>{props.title}</Text>
          <Text note style={{  alignSelf: 'flex-start',color: Colors.brandWhite,  }}>{props.desc}</Text>
      </View>

    </View>

    <View style={{ alignSelf: "center", padding: 5, }}>
      <Text note style={{color: Colors.brandWhite, }}>{props.time}</Text>
    </View>

  </ListItem>
);

export default NotifiListItem;
