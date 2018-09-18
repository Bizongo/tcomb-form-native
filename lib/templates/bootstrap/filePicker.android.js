import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ActionButton from "../ActionButton";
import TextActionButton from "../TextActionButton";
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import Fileuploader from '../FileUploader';

function filePicker(locals) {
  console.log(locals);
  function openFilePicker(){    
    DocumentPicker.show({
        filetype: [DocumentPickerUtil.pdf()],
      },(error,res) => {
        if(res.didCancel){
          return;
        }
        locals.onChange({file:{name:res.fileName, uri:res.uri,type:res.type,size:res.fileSize}});
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
      <Fileuploader fileName={locals && locals.value && locals.value.file ? locals.value.file.name : ''} callback={openFilePicker} />
    </View>
  );
}

module.exports = filePicker;
