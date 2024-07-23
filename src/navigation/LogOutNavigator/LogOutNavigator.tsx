import { Routes } from "@navigation/routes";
import { LogOutStackParamList } from "@navigation/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "@screens/SignInScreen/SignInScreen";
import SignUpScreen from "@screens/SignUpScreen/SignUpScreen";
import React from "react";

const LogOutStack = createNativeStackNavigator<LogOutStackParamList>();

const LogOutNavigator: React.FC = () => (
  <LogOutStack.Navigator>
    <LogOutStack.Screen name={Routes.SignUp} component={SignUpScreen} options={{ headerShown: false }} />
    <LogOutStack.Screen name={Routes.SignIn} component={SignInScreen} options={{ headerShown: false }} />
  </LogOutStack.Navigator>
);

export default LogOutNavigator;
