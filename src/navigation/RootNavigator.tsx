import { useAuth } from "@providers/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LogOutNavigator from "./LogOutNavigator/LogOutNavigator";
import { StackNavigator } from "./StackNavigator/StackNavigator";

export const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return <NavigationContainer>{isAuthenticated ? <StackNavigator /> : <LogOutNavigator />}</NavigationContainer>;
};
