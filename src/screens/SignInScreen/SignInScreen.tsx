import FlatButton from "@components/FlatButton/FlatButton";
import { Row } from "@components/layout/Row/Row";
import { ScreenWrapper } from "@components/layout/ScreenWrapper/ScreenWrapper";
import { StyledButton } from "@components/StyledButton/StyledButton";
import { StyledText } from "@components/StyledText/StyledText";
import { StyledTextInput } from "@components/StyledTextInput/StyledTextInput";
import { Routes } from "@navigation/routes";
import { SignUpScreenProps } from "@navigation/types";
import { colors } from "@styles/colors";
import { defaultStyles } from "@styles/typography";
import { xScale, yScale } from "@utils/scale";
import { StyleSheet, View } from "react-native";

const SignInScreen = ({ navigation }: SignUpScreenProps) => {
  const handleNavigation = () => {
    navigation.navigate(Routes.SignUp);
  };

  return (
    <ScreenWrapper style={styles.container}>
      <StyledText style={styles.h1}>Welcome back</StyledText>
      <StyledText style={styles.h2}>{`Log in and stay in touch \nwith everyone!`}</StyledText>
      <View style={styles.inputsWrapper}>
        <StyledTextInput label='e-mail address' />
        <StyledTextInput label='password' secureTextEntry />
      </View>
      <View style={styles.buttonWrapper}>
        <StyledButton label='Sign up' onPress={() => {}} />
        <Row style={styles.bottomText}>
          <StyledText>Don't have an account?</StyledText>
          <FlatButton label='Sign up' onPress={handleNavigation} textStyle={styles.link2} />
        </Row>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue300,
    paddingHorizontal: xScale(16),
    paddingTop: yScale(24),
  },
  h1: {
    ...defaultStyles.heading1,
    color: colors.plum500,
    marginBottom: yScale(24),
  },
  h2: {
    ...defaultStyles.heading2,
    marginBottom: yScale(36),
  },
  inputsWrapper: {
    paddingHorizontal: xScale(16),
    gap: yScale(16),
  },
  buttonWrapper: {
    flex: 1,
    marginBottom: yScale(92),
    paddingHorizontal: xScale(8),
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  link2: {
    paddingLeft: xScale(12),
    ...defaultStyles.buttonText,
    color: colors.plum500,
  },
  bottomText: {
    marginTop: yScale(28),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignInScreen;
