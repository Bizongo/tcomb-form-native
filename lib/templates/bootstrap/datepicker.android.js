import React from "react";
import {
  View,
  Text,
  DatePickerAndroid,
  TimePickerAndroid,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function datepicker(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var datepickerStyle = stylesheet.datepicker.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;
  var dateValueStyle = stylesheet.dateValue.normal;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    datepickerStyle = stylesheet.datepicker.error;
    helpBlockStyle = stylesheet.helpBlock.error;
    dateValueStyle = stylesheet.dateValue.error;
  }

  // Setup the picker mode
  var datePickerMode = locals.mode;
  if (
    datePickerMode !== "date" &&
    datePickerMode !== "time" &&
    datePickerMode !== "datetime"
  ) {
    throw new Error(`Unrecognized date picker format ${datePickerMode}`);
  }

  /**
   * Check config locals for Android datepicker.
   * `locals.config.background: `TouchableNativeFeedback` background prop
   * `locals.config.format`: Date format function
   * `locals.config.dialogMode`: 'calendar', 'spinner', 'default'
   * `locals.config.dateFormat`: Date only format
   * `locals.config.timeFormat`: Time only format
   */
  var formattedValue = locals.value ? String(locals.value) : "";
  var background = TouchableNativeFeedback.SelectableBackground(); // eslint-disable-line new-cap
  var dialogMode = "default";
  var formattedDateValue = locals.value ? locals.value.toDateString() : "";
  var formattedTimeValue = locals.value ? locals.value.toTimeString() : "";
  if (locals.config) {
    if (locals.config.format && formattedValue) {
      formattedValue = locals.config.format(locals.value);
    } else if (!formattedValue) {
      formattedValue = locals.config.defaultValueText
        ? locals.config.defaultValueText
        : "Tap here to select a date";
    }
    if (locals.config.background) {
      background = locals.config.background;
    }
    if (locals.config.dialogMode) {
      dialogMode = locals.config.dialogMode;
    }
    if (locals.config.dateFormat && formattedDateValue) {
      formattedDateValue = locals.config.dateFormat(locals.value);
    } else if (!formattedDateValue) {
      formattedDateValue = locals.config.defaultValueText
        ? locals.config.defaultValueText
        : "Tap here to select a date";
    }
    if (locals.config.timeFormat && formattedTimeValue) {
      formattedTimeValue = locals.config.timeFormat(locals.value);
    } else if (!formattedTimeValue) {
      formattedTimeValue = locals.config.defaultValueText
        ? locals.config.defaultValueText
        : "Tap here to select a time";
    }
  }

  var label = locals.label ? (
    <Text style={controlLabelStyle}>{locals.label}</Text>
  ) : null;
  var help = locals.help ? (
    <Text style={helpBlockStyle}>{locals.help}</Text>
  ) : null;
  var error =
    locals.hasError && locals.error ? (
      <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>
        {locals.error}
      </Text>
    ) : null;
  var value = formattedValue ? (
    <Text style={dateValueStyle}>{formattedValue}</Text>
  ) : null;

  return (
    <View style={formGroupStyle}>
      <View>
        {label}
        <View style={styles.rect5}>
          <View style={styles.rect6}>
            <Text style={styles.text4}>{formattedDateValue}</Text>
          </View>
          <View style={styles.rect7}>
            <Icon
              name={"calendar"}
              size={24}
              type="MaterialCommunityIcons"
              onPress={function() {
                let config = {
                  date: locals.value || new Date(),
                  mode: dialogMode
                };
                if (locals.minimumDate) {
                  config.minDate = locals.minimumDate;
                }
                if (locals.maximumDate) {
                  config.maxDate = locals.maximumDate;
                }
                DatePickerAndroid.open(config).then(function(date) {
                  if (date.action !== DatePickerAndroid.dismissedAction) {
                    var newDate = new Date(locals.value);
                    newDate.setFullYear(date.year, date.month, date.day);
                    locals.onChange(newDate);
                  }
                });
                if (typeof locals.onPress === "function") {
                  locals.onPress();
                }
              }}
            />
          </View>
        </View>
      </View>
      {help}
      {error}
    </View>
  );
}

const styles = StyleSheet.create({
  rect5: {
    height: 35,
    flexDirection: "row",
    alignSelf: "stretch",
    borderRadius: 3,
    borderColor: "rgba(196,196,196,1)",
    borderWidth: 1
  },
  text4: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    fontFamily: "OpenSans",
    textAlign: "left"
  },
  rect6: {
    width: "89%",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingTop: 6,
    paddingLeft: 6
  },
  rect7: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    paddingLeft: 7,
    borderWidth: 0,
    borderLeftColor: "rgba(196,196,196,1)",
    borderLeftWidth: 1,
    paddingTop: 4
  }
});
module.exports = datepicker;
