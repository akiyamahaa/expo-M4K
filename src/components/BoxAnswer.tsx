import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text } from "native-base";
import { EFont, IGradientColor } from "../types/utils";

type Props = {
  answer?: number;
  size: "M" | "S";
  btnColor: IGradientColor;
};

const BoxAnswer = (props: Props) => {
  const { answer = 9, size, btnColor } = props;
  let width, height, fontSize;
  if (size == "M") {
    width = 60;
    height = 60;
    fontSize = 40;
  } else if (size == "S") {
    width = 40;
    height = 40;
    fontSize = 28;
  }
  return (
    <TouchableOpacity>
      <Box style={[styles.button, { width, height }]} shadow={2}>
        <LinearGradient
          // Button Linear Gradient
          colors={[btnColor.color1, btnColor.color2]}
          style={styles.gradientColor}
        >
          <Text
            fontSize={fontSize}
            color="white"
            fontFamily={EFont.Quicksand_700Bold}
          >
            {answer}
          </Text>
        </LinearGradient>
      </Box>
    </TouchableOpacity>
  );
};

export default BoxAnswer;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 1,
    backgroundColor: "#fff",
  },
  gradientColor: {
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
