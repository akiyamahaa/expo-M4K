import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";
import { EFont, EQuizStatus, IQuiz } from "../types/utils";
import BoxQuestion from "./BoxQuestion";

type Props = {
  size: "M" | "S";
  status?: string;
  data: IQuiz;
  answerTag?: ChildNode | null;
};

const Formula = (props: Props) => {
  const { size, status = EQuizStatus.ANSWER, data } = props;
  let fontSize: number, spacing;
  if (size == "M") {
    fontSize = 48;
    spacing = 8;
  } else if (size == "S") {
    fontSize = 30;
    spacing = 1;
  }

  const formula: { [key: string]: number | string } = {
    firstNum: data.firstNum,
    operation: data.operation,
    secondNum: data.secondNum,
    equal: "=",
  };

  return (
    <HStack space={spacing} alignItems={"center"}>
      {/* Formula */}
      {Object.keys(formula).map((option) => (
        <Box style={{ width: 36 }} alignItems={"center"} key={option}>
          <Text
            color={status == EQuizStatus.HIDDEN ? "#76c0f5" : "#fff"}
            fontSize={fontSize}
            fontFamily={EFont.Quicksand_700Bold}
          >
            {formula[option]}
          </Text>
        </Box>
      ))}
      {/* Box Ques */}
      {props.answerTag ? props.answerTag : <BoxQuestion size={size} status={status} />}
      {/* Box Ans */}
    </HStack>
  );
};

export default Formula;

const styles = StyleSheet.create({});
