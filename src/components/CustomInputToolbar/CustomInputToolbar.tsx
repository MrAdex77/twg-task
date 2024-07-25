import { IconButton } from "@components/IconButton/IconButton";
import { StyledTextInput } from "@components/StyledTextInput/StyledTextInput";
import { Icons } from "@constants/icons";
import { colors } from "@styles/colors";
import { xScale, yScale } from "@utils/scale";
import React from "react";
import { StyleSheet, View } from "react-native";
import { IMessage, InputToolbar, InputToolbarProps } from "react-native-gifted-chat";

interface CustomInputToolbarProps extends InputToolbarProps<IMessage> {}

const CustomInputToolbar = (props: CustomInputToolbarProps) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={styles.container}
      primaryStyle={styles.primary}
      renderComposer={(composerProps) => (
        <View style={styles.composerContainer}>
          <StyledTextInput inputStyles={styles.textInput} value={composerProps.text} onChangeText={composerProps.onTextChanged} />
        </View>
      )}
      renderSend={(sendProps) => (
        <IconButton
          icon={Icons.Send}
          onPress={() => sendProps.onSend({ text: sendProps.text }, true)}
          iconStyle={styles.icon}
          size={xScale(44)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: yScale(102),
    borderTopLeftRadius: xScale(12),
    borderTopRightRadius: xScale(12),
    paddingHorizontal: xScale(16),
    backgroundColor: colors.blue300,
  },
  primary: {
    alignItems: "center",
    justifyContent: "center",
  },
  composerContainer: {
    height: yScale(41),
    width: xScale(287),
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: xScale(12),
    borderTopLeftRadius: xScale(12),
    borderBottomLeftRadius: xScale(12),
    borderBottomRightRadius: 0,
    backgroundColor: colors.white,
    marginVertical: yScale(20),
  },
  textInput: {
    height: yScale(41),
    width: xScale(287),
    borderTopRightRadius: xScale(12),
    borderTopLeftRadius: xScale(12),
    borderBottomLeftRadius: xScale(12),
    borderBottomRightRadius: 0,
  },
  icon: {
    marginLeft: xScale(16),
    height: xScale(44),
    width: xScale(44),
  },
});

export default CustomInputToolbar;
