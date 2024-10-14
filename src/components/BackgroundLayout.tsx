import { ImageBackground, ImageSourcePropType, View } from 'react-native'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  imageSource?: ImageSourcePropType
}

const BackgroundLayout = (props: Props) => {
  const { children, imageSource } = props
  return (
    <View className="flex-1">
      <ImageBackground source={imageSource} style={{ flex: 1 }} resizeMode="stretch" />
      <View className="absolute w-full h-full">{children}</View>
    </View>
  )
}

export default BackgroundLayout
