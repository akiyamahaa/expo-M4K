import { StyleSheet } from "react-native";
import React from "react";
import { HStack, useTheme } from "native-base";
import BoxAnswer from "./BoxAnswer";
import { IQuizAnswer } from "../types/utils";

type Props = {
  size: "M" | "S";
  dataAnswer: IQuizAnswer;
  answerTag: any;
  setAnswerTag: any;
};

const GroupAnswer = (props: Props) => {
  const { colors } = useTheme();

  const btnColorOption: any = {
    0: colors.gradient.secondary.green,
    1: colors.gradient.secondary.red,
    2: colors.gradient.secondary.orange,
  };
  const handleChoice = (choice: number, index: number) => {
    if (choice == props.dataAnswer.answer) {
      props.setAnswerTag(
        <BoxAnswer
          size={props.size}
          btnColor={btnColorOption[index]}
          key={`${choice}-${index}`}
          boxText={choice}
          handleBtn={() => {}}
        />
      );
    }
  };
  
  // Styling
  let spacing;
  if (props.size == "M") {
    spacing = 8;
  } else if (props.size == "S") {
    spacing = 4;
  }
  return (
    <HStack justifyContent={"center"} space={spacing}>
      {/* Delete choice when pick right */}
      {props.dataAnswer.choices.map((choice, index) =>
        props.answerTag && choice == props.dataAnswer.answer ? null : (
          <BoxAnswer
            size={props.size}
            btnColor={btnColorOption[index]}
            key={`${choice}-${index}`}
            boxText={choice}
            handleBtn={() => handleChoice(choice, index)}
          />
        )
      )}
    </HStack>
  );
};

export default GroupAnswer;

const styles = StyleSheet.create({});
