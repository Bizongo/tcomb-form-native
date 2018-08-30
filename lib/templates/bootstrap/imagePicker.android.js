import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ActionButton from "../ActionButton";
import TextActionButton from "../TextActionButton";

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
      console.log(locals);
      console.log(response);
      if(response.didCancel){
        return;
      }
      locals.onChange({images:[...locals.value.images,response.uri]});
    });
  }
  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var label = locals.label ? (
    <Text style={controlLabelStyle}>{locals.label}</Text>
  ) : null;
  return (
    <View style={formGroupStyle}>
      {label}
      <ActionButton icon={'camera'} text={'UPLOAD PICTURES'} callback={openImagePicker} />
      {locals.value.images && locals.value.images.length >0 ?
      <View style={{marginTop:10}}>
        { locals.value.images.map((image, index)=>{
          return(
            <TextActionButton key={index} text={`Image-${index}.jpg`} callback={()=>locals.config.imagePreviewCallback(image)} />
          )
        })
        }
      </View>
      :
      <Text>
        Please Upload pictures by clicking the above button.
      </Text>
      }
    </View>
  );
}

module.exports = imagePicker;
