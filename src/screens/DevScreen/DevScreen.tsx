// TODO: Remove this file
import { StyledButton } from "@components/StyledButton/StyledButton";
import { StyledText } from "@components/StyledText/StyledText";
import { StyledTextInput } from "@components/StyledTextInput/StyledTextInput";
import { colors } from "@styles/colors";
import { defaultStyles } from "@styles/typography";
import { StyleSheet, View } from "react-native";

const DevScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10, backgroundColor: colors.gray500 }}>
      <StyledText style={{ ...defaultStyles.heading1 }}>Heading 1</StyledText>
      <StyledText style={{ ...defaultStyles.heading2 }}>Heading 2</StyledText>
      <StyledText style={{ ...defaultStyles.heading3 }}>Heading 3</StyledText>
      <StyledText style={{ ...defaultStyles.heading4 }}>Heading 4</StyledText>
      <StyledText style={{ ...defaultStyles.buttonText }}>button text</StyledText>
      <StyledText style={{ ...defaultStyles.label }}>label</StyledText>
      <StyledText style={{ ...defaultStyles.titleAndInput }}>title&input</StyledText>
      <StyledText style={{ ...defaultStyles.caption }}>Caption</StyledText>
      <StyledText style={{ ...defaultStyles.bodyText }}>body text</StyledText>
      <StyledText style={{ ...defaultStyles.caption2 }}>caption2</StyledText>
      <StyledText style={{ ...defaultStyles.specialText }}>special text</StyledText>
      <StyledButton label='Label' onPress={() => {}} />
      <StyledButton disabled label='Label' onPress={() => {}} />
      <StyledTextInput value='' placeholder='Placeholder' onChangeText={() => {}} label='label' secureTextEntry />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DevScreen;
