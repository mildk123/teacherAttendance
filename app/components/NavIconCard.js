import React from "react"
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import Colors from "../modules/Colors";

const NavIconCard = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.iconColorSecondary,
        elevation: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: "center",
        padding: 0,
        height: 70,
        margin: 10
      }}
      onPress={() => props.navigation.navigate(props.pathTo)}
    >
      <View
        style={{
          width: 35,
          height: 35,

          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon
          type={props.iconType}
          name={props.iconName}
          style={{ fontSize: 30, color: "white" }}
        />
      </View>
      <Text style={{ fontWeight: "700", fontSize: 14 }}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(NavIconCard);
