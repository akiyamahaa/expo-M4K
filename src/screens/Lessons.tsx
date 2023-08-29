import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LessonLayout from "../components/LessonLayout";
import { Box, HStack, VStack } from "native-base";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react-native";

type Props = {};

const Lessons = (props: Props) => {
  return (
    <LessonLayout iconSource={require("../../assets/images/bg-3.jpg")}>
      <Box flex={1}>
        <VStack flex={1} justifyContent={"center"}>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <TouchableOpacity>
              <ArrowLeft3 size="36" color="#FFFFFF" variant="Bold" />
            </TouchableOpacity>
            <TouchableOpacity>
              <ArrowRight3 size="36" color="#FFFFFF" variant="Bold" />
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </LessonLayout>
  );
};

export default Lessons;

const styles = StyleSheet.create({});
