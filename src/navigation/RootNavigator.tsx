import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LogOutNavigator from "./LogOutNavigator/LogOutNavigator";
import { StackNavigator } from "./StackNavigator/StackNavigator";

export const RootNavigator = () => {
  //   const { isLoggedIn } = useAuthSelector(); // TODO: implement useAuthSelector
  const isLoggedIn = false;

  return <NavigationContainer>{isLoggedIn ? <StackNavigator /> : <LogOutNavigator />}</NavigationContainer>;
};
