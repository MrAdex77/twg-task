import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { Routes } from "@navigation/routes";
import { RootStackParamList } from "@navigation/types";
import ChatScreen from "@screens/ChatScreen/ChatScreen";
import DevScreen from "@screens/DevScreen/DevScreen";
import RoomsScreen from "@screens/RoomsScreen/RoomsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Dev} component={DevScreen} />
      <Stack.Screen name={Routes.Rooms} component={RoomsScreen} />
      <Stack.Screen name={Routes.Chat} component={ChatScreen} />
    </Stack.Navigator>
  );
};
