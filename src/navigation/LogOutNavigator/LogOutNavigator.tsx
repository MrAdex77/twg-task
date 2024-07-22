import { Routes } from "@navigation/routes";
import { LogOutStackParamList } from "@navigation/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/LoginScreen/LoginScreen";
import React from "react";

const LogOutStack = createNativeStackNavigator<LogOutStackParamList>();

const LogOutNavigator: React.FC = () => (
  <LogOutStack.Navigator>
    <LogOutStack.Screen name={Routes.LoginScreen} component={LoginScreen} options={{ headerShown: false }} />
  </LogOutStack.Navigator>
);

export default LogOutNavigator;
