export interface INormalButton {
  onPress?: () => void,
  text?: string,
  containerStyle?: any,
  disabled?: boolean,
  textStyle?: any,
}

export interface IDangerButton {
  onPress?: () => void,
  text?: string,
  containerStyle?: any,
  textStyle?: any,
}