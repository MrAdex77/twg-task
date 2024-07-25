import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { Header } from "@components/Header/Header";
import { Routes } from "@navigation/routes";
import { RootStackParamList } from "@navigation/types";
import ChatScreen from "@screens/ChatScreen/ChatScreen";
import DevScreen from "@screens/DevScreen/DevScreen";
import RoomsScreen from "@screens/RoomsScreen/RoomsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Rooms}
        component={RoomsScreen}
        options={{
          title: "Rooms",
          header: (props) => <Header {...props} />,
        }}
      />
      <Stack.Screen name={Routes.Dev} component={DevScreen} />
      <Stack.Screen
        name={Routes.Chat}
        component={ChatScreen}
        options={{
          title: "Rooms",
          header: (props) => <Header {...props} isBackButton />,
        }}
      />
    </Stack.Navigator>
  );
};
