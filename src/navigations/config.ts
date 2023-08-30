import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParams = {
  Home: undefined;
  Lessons: undefined;
  Examination: undefined;
  Quiz: undefined;
  Collection: undefined;
  CountNumber: undefined;
};

export type ScreenNavigationProps = NativeStackNavigationProp<RootStackParams>;
