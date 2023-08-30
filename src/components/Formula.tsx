import { StyleSheet } from "react-native";
import React from "react";
import { HStack, Text } from "native-base";
import { EFont } from "../types/utils";
import BoxQuestion from "./BoxQuestion";

type Props = {
  size: "M" | "S";
  answered?: boolean;
};

const Formula = (props: Props) => {
  const { size, answered = true } = props;
  let fontSize, spacing;
  if (size == "M") {
    fontSize = 48;
    spacing = 8;
  } else if (size == "S") {
    fontSize = 30;
    spacing = 4;
  }
  return (
    <HStack space={spacing} alignItems={"center"}>
      {/* Formula */}
      <Text
        color={answered ? "white" : "#76c0f5"}
        fontSize={fontSize}
        fontFamily={EFont.Quicksand_700Bold}
      >
        2
      </Text>
      <Text
        color={answered ? "white" : "#76c0f5"}
        fontSize={fontSize}
        fontFamily={EFont.Quicksand_700Bold}
      >
        +
      </Text>
      <Text
        color={answered ? "white" : "#76c0f5"}
        fontSize={fontSize}
        fontFamily={EFont.Quicksand_700Bold}
      >
        7
      </Text>
      <Text
        color={answered ? "white" : "#76c0f5"}
        fontSize={fontSize}
        fontFamily={EFont.Quicksand_700Bold}
      >
        =
      </Text>
      {/* Box Ques */}
      <BoxQuestion size={size} answered={answered} />
      {/* Box Ans */}
    </HStack>
  );
};

export default Formula;

const styles = StyleSheet.create({});
