import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { buttonSizes, buttonVariants } from "./buttonVariant";
import { spacing } from "@/ui-framework/theme";


export type BaseButtonProps = {
  title: string;
  onPress: () => void;
  buttonVariant?: keyof typeof buttonVariants;
  buttonSize?: keyof typeof buttonSizes;
  fullWidth?: boolean;
  px?: keyof typeof spacing,
  py?: keyof typeof spacing,
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
