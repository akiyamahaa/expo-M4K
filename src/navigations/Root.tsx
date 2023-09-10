import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
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
import QuizImage from "../screens/QuizImage";
import { models } from "../db/models";
import { createTable, getDBConnection } from "../db/db-rn";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {

  useEffect(() => {
    const loadDb = async () => {
      try {
        const db = await getDBConnection();
        // deleteTable(db, "badges");
        // create Tables
        const createTables = Object.keys(models).map((tableName) =>
          createTable(db, tableName, models[tableName])
        );
        await Promise.all(createTables);
      } catch (error: any) {
        throw new Error(error);
      }
    };
    loadDb();
  }, []);
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
          <Stack.Screen name="QuizImage" component={QuizImage} />
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
