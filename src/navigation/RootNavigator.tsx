import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import LogOutNavigator from "./LogOutNavigator/LogOutNavigator";
import { StackNavigator } from "./StackNavigator/StackNavigator";

export const RootNavigator = () => {
  //   const { isLoggedIn } = useAuthSelector(); // TODO: implement useAuthSelector
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <StackNavigator /> : <LogOutNavigator />}
      <StatusBar hidden translucent backgroundColor='transparent' />
    </NavigationContainer>
  );
};
