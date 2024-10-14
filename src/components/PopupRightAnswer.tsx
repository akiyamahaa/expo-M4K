import React from 'react'
import { Center, Modal, Text, VStack, useTheme } from 'native-base'
import CustomBtn from './CustomBtn'
import BackgroundLayout from './BackgroundLayout'

type Props = {
  showModal: boolean
  setShowModal: any
  handleBtn: () => void
  text?: string
  title?: string
}

const PopupRightAnswer = (props: Props) => {
  const { colors } = useTheme()
  const { showModal, title = 'Yeah!', text = 'Bạn đã trả lời đúng', handleBtn } = props
  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => {}}>
        <Modal.Content>
          <Modal.Body height={200}>
            <BackgroundLayout imageSource={require('../../assets/images/bg-popup-right.gif')}>
              <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
                <Text fontSize={24} color={'text.primary'}>
                  {title}
                </Text>
                <Text fontSize={16} color={'text.coolGray'} mb={4}>
                  {text}
                </Text>
                <CustomBtn
                  btnColor={colors.gradient.primary}
                  size="SM"
                  text="Tiếp tục →"
                  // TODO: Add Function here
                  handleBtn={handleBtn}
                />
              </VStack>
            </BackgroundLayout>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default PopupRightAnswer
