import { useMutation } from "@apollo/client";
import FlatButton from "@components/FlatButton/FlatButton";
import { Row } from "@components/layout/Row/Row";
import { ScreenWrapper } from "@components/layout/ScreenWrapper/ScreenWrapper";
import { StyledButton } from "@components/StyledButton/StyledButton";
import { StyledText } from "@components/StyledText/StyledText";
import { StyledTextInput } from "@components/StyledTextInput/StyledTextInput";
import { PRIVACY_POLICY_URL, TOS_URL } from "@constants/common";
import { REGISTER_USER } from "@constants/queries";
import { Routes } from "@navigation/routes";
import { SignUpScreenProps } from "@navigation/types";
import { colors } from "@styles/colors";
import { defaultStyles } from "@styles/typography";
import { openUrl } from "@utils/common";
import { xScale, yScale } from "@utils/scale";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [email, setEmail] = useState<string>("rusty.sabich2@mail.com");
  const [firstName, setFirstName] = useState<string>("Rusty");
  const [lastName, setLastName] = useState<string>("Sabich");
  const [password, setPassword] = useState<string>("u6PCzCBIcHXrb7a");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("u6PCzCBIcHXrb7a");

  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

  useEffect(() => {
    if (data?.registerUser) {
      handleNavigation();
    }
  }, [data]);

  const handleNavigation = () => {
    navigation.navigate(Routes.SignIn);
  };

  const handleSignUp = () => {
    registerUser({
      variables: {
        email,
        firstName,
        lastName,
        password,
        passwordConfirmation,
      },
    });
  };

  return (
    <ScreenWrapper style={styles.container}>
      <StyledText style={styles.h1}>Create account</StyledText>
      <View style={styles.inputsWrapper}>
        <StyledTextInput label='e-mail address' value={email} onChangeText={setEmail} error={error?.message} />
        <StyledTextInput label='first name' value={firstName} onChangeText={setFirstName} error={error?.message} />
        <StyledTextInput label='last name' value={lastName} onChangeText={setLastName} error={error?.message} />
        <StyledTextInput label='password' secureTextEntry value={password} onChangeText={setPassword} error={error?.message} />
        <StyledTextInput
          label='password confirmation'
          secureTextEntry
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
          error={error?.message}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <StyledButton label='Sign up' onPress={handleSignUp} isLoading={loading} />
        <View style={styles.regulations}>
          <StyledText style={defaultStyles.caption2}>By signing up you agree with</StyledText>
          <Row>
            <FlatButton label='Terms and Conditions' onPress={() => openUrl(TOS_URL)} textStyle={[styles.link]} />
            <StyledText style={defaultStyles.caption2}> and </StyledText>
            <FlatButton label='Privacy Policy' onPress={() => openUrl(PRIVACY_POLICY_URL)} textStyle={[styles.link]} />
          </Row>
        </View>
        <Row style={styles.bottomText}>
          <StyledText>Already have an account?</StyledText>
          <FlatButton label='Log in' onPress={handleNavigation} textStyle={styles.link2} />
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
  inputsWrapper: {
    paddingHorizontal: xScale(16),
    gap: yScale(16),
  },
  buttonWrapper: {
    flex: 1,
    paddingHorizontal: xScale(8),
    gap: yScale(16),
    marginBottom: yScale(92),
    justifyContent: "flex-end",
  },
  link: {
    ...defaultStyles.caption2,
    color: colors.blue500,
    textDecorationLine: "underline",
    textDecorationColor: colors.blue500,
  },
  link2: {
    paddingLeft: xScale(12),
    ...defaultStyles.buttonText,
    color: colors.plum500,
  },
  regulations: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    marginTop: yScale(28),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUpScreen;
