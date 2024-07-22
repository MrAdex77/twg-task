import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { Routes } from "@navigation/routes";
import { RootStackParamList } from "@navigation/types";
import ChatScreen from "@screens/ChatScreen/ChatScreen";
import RoomsScreen from "@screens/RoomsScreen/RoomsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.RoomsScreen} component={RoomsScreen} />
      <Stack.Screen name={Routes.ChatScreen} component={ChatScreen} />
    </Stack.Navigator>
  );
};
