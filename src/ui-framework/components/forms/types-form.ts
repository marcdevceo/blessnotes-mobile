import { colors, spacing } from "@/ui-framework/theme";
import { StyleProp, ViewStyle } from "react-native";

export type BaseFormProps = {
  title?: string;
  subtitle?: string;
  onSubmit?: () => void;
  children: React.ReactNode;
  gap?: keyof typeof spacing;
  padding?: keyof typeof spacing;
  bg?: keyof typeof colors;
  style?: StyleProp<ViewStyle>;
};

export type InputFieldProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
};