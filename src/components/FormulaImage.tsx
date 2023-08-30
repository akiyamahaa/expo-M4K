import { StyleSheet } from "react-native";
import React from "react";
import { HStack, Text } from "native-base";
import { EFont } from "../types/utils";
import BoxQuestion from "./BoxQuestion";
import { Image } from "expo-image";

type Props = {};

const FormulaImage = (props: Props) => {
  return (
    <HStack space={8} alignItems={"center"}>
      {/* Formula */}
      <HStack height={160} space={2}>
        <Image
          style={{ height: 80, width: 75 }}
          source={require("../../assets/quiz/elephant.png")}
        />
        <Image
          style={{ height: 80, width: 75, alignSelf: "flex-end" }}
          source={require("../../assets/quiz/elephant.png")}
        />
      </HStack>
      <Text color={"white"} fontSize={48} fontFamily={EFont.Quicksand_700Bold}>
        =
      </Text>
      {/* Box Ques */}
      <BoxQuestion size={"M"} />
      {/* Box Ans */}
    </HStack>
  );
};

export default FormulaImage;

const styles = StyleSheet.create({});
