export const loadSound = async (sound: any, soundUrl: string) => {
  const { isLoaded } = await sound.getStatusAsync();
  if (!isLoaded) {
    await sound.loadAsync(soundUrl, { shouldPlay: false }, false);
  }
  await sound.playAsync();
};
