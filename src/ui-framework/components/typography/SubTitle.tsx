import { Text } from "react-native";
import { BaseTextProps } from "./types-text";
import { colors, spacing, typography } from "@/ui-framework/theme";

export default function Subtitle({
  children,
  color = "secondaryText",
  bg = "transparent",
  size = "2xl",
  weight = "extrabold",
  italic = false,
  align = "left",
  padding = "none",
  pt = "none",
  pb = "none",
  pl = "none",
  pr = "none",
  px = "none",
  py = "none",
  style,
}: BaseTextProps) {
  return (
    <Text
      style={[{
        color: colors[color],
        backgroundColor: colors[bg],
        fontSize: typography.fontSize[size],
        fontWeight: typography.fontWeight[weight],
        fontStyle: italic ? "italic" : "normal",
        textAlign: align,
        padding: spacing[padding],
        paddingTop: spacing[pt],
        paddingBottom: spacing[pb],
        paddingLeft: spacing[pl],
        paddingRight: spacing[pr],
        paddingHorizontal: spacing[px],
        paddingVertical: spacing[py],
      }, style]}
    >
      {children}
    </Text>
  );
}