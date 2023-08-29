import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Box } from "native-base";

interface Props {
  children: ReactNode;
  imageSource?: string;
}

const BackgroundLayout = (props: Props) => {
  return (
    <Box flex={1}>
      <ImageBackground
        source={props.imageSource || require("../../assets/icon.png")}
        style={{ flex: 1 }}
      />
      <Box flex={1} position={"absolute"} height={"100%"} width={"100%"}>
        {props.children}
      </Box>
    </Box>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({});
