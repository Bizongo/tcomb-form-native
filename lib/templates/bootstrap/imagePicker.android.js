import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ActionButton from "../ActionButton";

function imagePicker(locals) {
  console.log(locals);
  function openImagePicker(){
    var ImagePicker = require('react-native-image-picker');

    // More info on all the options is below in the README...just some common use cases shown here
    var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    
    ImagePicker.showImagePicker(options, (response) => {
      locals.onChange(response);
    });
  }
  return (
    <ActionButton icon={'camera'} text={'UPLOAD PICTURES'} callback={openImagePicker} />
  );
}

module.exports = imagePicker;
