import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default (props) => {
  return (
    <View style={styles.rect5}>
    <View style={styles.rect6}>
      <Text style={styles.text4}>{props.fileName}</Text>
    </View>
    <View style={styles.rect7}>
        <TouchableOpacity onPress={props.callback}>
            <View>
                <Text style={styles.uploadText}>
                    UPLOAD
                </Text>
            </View>
        </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    rect5: {
      height: 36,
      flexDirection: "row",
      alignSelf: "stretch",
      borderRadius: 3,
      borderColor: "rgba(196,196,196,1)",
      borderWidth: 1
    },
    uploadText: {
        color : '#fff',
        fontSize : 14
    },
    text4: {
      flex: 1,
      alignSelf: "stretch",
      backgroundColor: "transparent",
      fontFamily: "OpenSans",
      textAlign: "left"
    },
    rect6: {
      width: "78%",
      justifyContent: "center",
      alignSelf: "stretch",
      paddingTop: 7,
      paddingLeft: 7
    },
    rect7: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "stretch",
      paddingLeft: 8,
      borderWidth: 0,
      borderTopRightRadius:2,
      borderBottomRightRadius:2,
      backgroundColor:'#01579B',
      borderLeftColor: '#01579B',
      borderLeftWidth: 1
    }
  });
