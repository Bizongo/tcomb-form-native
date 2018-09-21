import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ActionButton from "../ActionButton";
import TextActionButton from "../TextActionButton";

function imagePicker(locals) {
  function openImagePicker(){
    var ImagePicker = require('react-native-image-picker');

    // More info on all the options is below in the README...just some common use cases shown here
    var options = {};
    
    ImagePicker.showImagePicker(options, (response) => {
      if(response.didCancel){
        return;
      }
      if(locals && locals.value && locals.value.images){
        locals.onChange({images:[...locals.value.images,response.uri]});
      } else {
        locals.onChange({images:[response.uri]});
      }
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
