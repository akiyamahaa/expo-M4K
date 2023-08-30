import { StyleSheet } from "react-native";
import React from "react";
import LessonLayout from "../components/LessonLayout";
import { Center, Text, HStack, VStack, useTheme } from "native-base";
import { EFont } from "../types/utils";
import BoxQuestion from "../components/BoxQuestion";
import BoxAnswer from "../components/BoxAnswer";
import Formula from "../components/Formula";
import GroupAnswer from "../components/GroupAnswer";

type Props = {
};

const Quiz = (props: Props) => {
  const { colors } = useTheme();
  return (
    <LessonLayout iconSource={require("../../assets/images/bg-2.jpg")}>
      <Center flex={1}>
        <VStack space={10}>
          <Formula size="M" />
          <GroupAnswer size="M" />
        </VStack>
      </Center>
    </LessonLayout>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
