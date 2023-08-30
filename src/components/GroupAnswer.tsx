import { StyleSheet } from "react-native";
import React from "react";
import { HStack, useTheme } from "native-base";
import BoxAnswer from "./BoxAnswer";

type Props = {
  size: "M" | "S";
};

const GroupAnswer = (props: Props) => {
  const { colors } = useTheme();
  let spacing;
  if (props.size == "M") {
    spacing = 8;
  } else if (props.size == "S") {
    spacing = 4;
  }
  return (
    <HStack justifyContent={"center"} space={spacing}>
      <BoxAnswer size={props.size} btnColor={colors.gradient.secondary.green} />
      <BoxAnswer size={props.size} btnColor={colors.gradient.secondary.red} />
      <BoxAnswer
        size={props.size}
        btnColor={colors.gradient.secondary.orange}
      />
    </HStack>
  );
};

export default GroupAnswer;

const styles = StyleSheet.create({});
