import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const BRAND_BLUE = 'rgba(41,174,234,1)';

export default props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.callback}>
      <View style={styles.rect}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      {props.icon && (
        <View style={styles.rect2}>
          <Icon
            style={styles.icon}
            name={props.icon}
            type="MaterialCommunityIcons"
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 35.03,
    backgroundColor: BRAND_BLUE,
    flexDirection: "row",
    opacity: 1,
    alignSelf: "flex-start"
  },
  rect: {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    alignSelf: "stretch",
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    alignSelf: "center",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  rect2: {
    flexWrap: "wrap",
    alignSelf: "stretch",
    paddingTop: 7,
    width: 30
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 21
  }
});
