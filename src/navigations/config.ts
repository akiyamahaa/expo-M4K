import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParams = {
  Home: undefined;
  Lessons: undefined;
  Examination: {
    idx: number;
  };
  Quiz: undefined;
  Collection: undefined;
  QuizImage: undefined;
};

export type ScreenNavigationProps = NativeStackNavigationProp<RootStackParams>;
