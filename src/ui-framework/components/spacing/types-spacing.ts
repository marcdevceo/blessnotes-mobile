import { colors, spacing } from "@/ui-framework/theme";
import { StyleProp, ViewStyle } from "react-native";

export type BaseViewProps = {
  children: React.ReactNode;
  bg?: keyof typeof colors;
  flex?: 1 | 2 | 3 | 4 | 5;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" ;
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  alignContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "space-between"
    | "space-around";
  margin?: keyof typeof spacing;
  mt?: keyof typeof spacing;
  mb?: keyof typeof spacing;
  ml?: keyof typeof spacing;
  mr?: keyof typeof spacing;
  mx?: keyof typeof spacing;
  my?: keyof typeof spacing;
  padding?: keyof typeof spacing;
  pt?: keyof typeof spacing;
  pb?: keyof typeof spacing;
  pl?: keyof typeof spacing;
  pr?: keyof typeof spacing;
  px?: keyof typeof spacing;
  py?: keyof typeof spacing;
  gap?: keyof typeof spacing;
  height?: keyof typeof spacing | number;
  width?: keyof typeof spacing | number;
  borderRadius?: keyof typeof spacing | number;
  overflow?: "visible" | "hidden" | "scroll";
  style?: StyleProp<ViewStyle>;
};

