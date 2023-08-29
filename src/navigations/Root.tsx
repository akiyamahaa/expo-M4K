import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { removeLoading, setLoading } from "../store/loading.reducer";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import Home from "../screens/Home";
import Lessons from "../screens/Lessons";
import Examination from "../screens/Examination";

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
          <Stack.Screen name="Lessons" component={Lessons} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Examination" component={Examination} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
