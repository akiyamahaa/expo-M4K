import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import Home from "../screens/Home";
import Lessons from "../screens/Lessons";
import Examination from "../screens/Examination";
import Quiz from "../screens/Quiz";
import Collection from "../screens/Collection";
import CountNumber from "../screens/CountNumber";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CountNumber" component={CountNumber} />
          <Stack.Screen name="Collection" component={Collection} />
          <Stack.Screen name="Lessons" component={Lessons} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Examination" component={Examination} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
