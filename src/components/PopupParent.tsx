import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  Box,
  Center,
  HStack,
  Modal,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { EFont } from "../types/utils";
import CustomBtn from "./CustomBtn";
import BackgroundLayout from "./BackgroundLayout";
import CloseBtn from "./CloseBtn";

type Props = {
  showModal: boolean;
  setShowModal: any;
};

const PopupParent = (props: Props) => {
  const { colors } = useTheme();
  const { showModal, setShowModal } = props;
  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      size="full"
      px={20}
    >
      <Modal.Content>
        <Modal.Body>
          <VStack flex={1}>
            <HStack
              px={1}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text
                fontFamily={EFont.Quicksand_700Bold}
                fontSize={20}
                color={"text.primary"}
              >
                Hướng dẫn sử dụng và lời khuyên cho phụ huynh
              </Text>
              <CloseBtn handleBtn={() => setShowModal(false)} />
            </HStack>
            <Box pl={1} pr={3}>
              <Text fontFamily={EFont.Quicksand_400Regular} fontSize={14}>
                Lorem ipsum dolor sit amet consectetur. Porta pretium id
                suspendisse lectus tempor. Ornare turpis pharetra pellentesque
                sit rhoncus. Vulputate et volutpat duis ullamcorper nec purus.
                Ultrices tellus nisl massa odio. Faucibus sit morbi adipiscing
                ac ligula sed. Imperdiet ut senectus ipsum ut amet ultricies
                suscipit. Mattis interdum integer tempor nisl. Augue placerat
                arcu id neque dolor pulvinar. Vulputate ut eget adipiscing eget.
                Iaculis aliquam sapien orci odio. Sed rhoncus adipiscing
                pulvinar euismod. Cursus ac neque suspendisse mi metus
                vestibulum elementum. Adipiscing ipsum parturient mauris lorem
                quam. Nulla vulputate praesent leo egestas magna metus. Porta
                viverra sapien aliquet eget. Faucibus turpis lacus pharetra
                vestibulum orci. Ut leo tempus in sit felis. Dapibus ullamcorper
                in morbi egestas. Tempus adipiscing turpis sem purus a nulla. In
                aliquam phasellus viverra sit ac ullamcorper odio massa vitae.
                Mattis mi vivamus suspendisse faucibus maecenas quis nulla
                integer aliquet. Ac viverra metus diam ultrices interdum. Nisl
                eleifend nulla molestie augue pulvinar congue enim. Et semper
                habitasse venenatis auctor quisque. Interdum ultrices viverra
                tellus urna netus odio. Tortor arcu in ac odio arcu. Malesuada
                condimentum pulvinar congue vulputate. Sollicitudin diam sapien
                malesuada placerat morbi vitae lorem. Orci pulvinar imperdiet ac
                adipiscing sed cursus ac morbi amet. Nulla risus enim amet
                dictum vulputate arcu nibh velit. Condimentum praesent tristique
                adipiscing tempor nunc velit massa elit phasellus. Quam sed
                adipiscing pretium fermentum mattis at. Nunc vitae condimentum
                arcu sit vel. Tempor felis fringilla sodales cras suscipit in.
                Egestas mauris commodo lacus ipsum vitae in. Faucibus mattis
                quis elementum egestas lacus imperdiet ut sem. Donec ipsum
                gravida sapien tortor dolor et natoque. Nec accumsan elementum
                vitae dictumst. Ultrices placerat accumsan massa velit et lacus
                mattis eget velit. Donec lorem pellentesque orci ullamcorper
                non. Lorem eget proin vulputate morbi a sagittis semper. Turpis
                nisl nisi libero consequat diam nibh diam facilisis.
              </Text>
            </Box>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default PopupParent;

const styles = StyleSheet.create({});
