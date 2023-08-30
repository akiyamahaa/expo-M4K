import { StyleSheet } from "react-native";
import React from "react";
import LessonLayout from "../components/LessonLayout";
import { Box, Center, HStack, Text, VStack } from "native-base";
import Formula from "../components/Formula";
import GroupAnswer from "../components/GroupAnswer";

type Props = {};

const Examination = (props: Props) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <LessonLayout iconSource={require("../../assets/images/bg-2.jpg")}>
      <Center flex={1}>
        <VStack space={8}>
          <HStack flexWrap={"wrap"} justifyContent={"center"}>
            {arr.map((elm) => (
              <>
                <Formula size="S" answered={true} key={elm} />
                {elm % 2 != 0 && (
                  <Box mx={4} height={12} width={0.5} bgColor={"#fff"}></Box>
                )}
              </>
            ))}
          </HStack>
          <GroupAnswer size="S" />
        </VStack>
      </Center>
    </LessonLayout>
  );
};

export default Examination;

const styles = StyleSheet.create({});
