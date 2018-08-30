import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default props => {
  return (
    <TouchableOpacity onPress={props.callback || console.log("no callback")}>
      <Text style={styles.openSpecText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  openSpecText: {
    backgroundColor: "transparent",
    fontFamily: "OpenSans",
    letterSpacing: 0.6,
    fontSize: 16,
    color: "rgba(25,160,239,1)",
    flex: 1,
    alignSelf: "stretch"
  }
});
