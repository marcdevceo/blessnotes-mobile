import { colors, spacing, typography } from "@/ui-framework/theme";
import { StyleProp, TextStyle } from "react-native";

export type TopLevelColorKeys = {
  [K in keyof typeof colors]: (typeof colors)[K] extends string ? K : never;
}[keyof typeof colors];

export type BaseTextProps = {
  children: React.ReactNode;
  bg?: TopLevelColorKeys;
  color?: keyof typeof colors.text;
  size?: keyof typeof typography.fontSize;
  weight?: keyof typeof typography.fontWeight;
  italic?: boolean;
  uppercase?: boolean;
  opacity?: number;
  lineHeight?: keyof typeof typography.lineHeight;
  align?: "left" | "center" | "right";
  padding?: keyof typeof spacing;
  pt?: keyof typeof spacing;
  pb?: keyof typeof spacing;
  pl?: keyof typeof spacing;
  pr?: keyof typeof spacing;
  px?: keyof typeof spacing;
  py?: keyof typeof spacing;
  style?: StyleProp<TextStyle>;
};
