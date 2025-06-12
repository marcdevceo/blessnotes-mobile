import { Text } from "react-native";
import { BaseTextProps } from "./types-text";
import { colors, spacing, typography } from "@/ui-framework/theme";

export default function BodyText({
  children,
  color = "neutralText",
  bg = "transparent",
  size = "base",
  weight = "regular",
  italic = false,
  align = "left",
  opacity,
  lineHeight,
  padding,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  style,
}: BaseTextProps) {
  return (
    <Text
      style={[
        {
          color: colors[color],
          backgroundColor: colors[bg],
          fontSize: typography.fontSize[size],
          fontWeight: typography.fontWeight[weight],
          fontStyle: italic ? "italic" : "normal",
          textAlign: align,
          ...(opacity && { opacity }),
          ...(lineHeight && { lineHeight: typography.lineHeight[lineHeight] }),
          ...(padding && { padding: spacing[padding] }),
          ...(pt && { paddingTop: spacing[pt] }),
          ...(pb && { paddingBottom: spacing[pb] }),
          ...(pl && { paddingLeft: spacing[pl] }),
          ...(pr && { paddingRight: spacing[pr] }),
          ...(px && {
            paddingLeft: spacing[px],
            paddingRight: spacing[px],
          }),
          ...(py && {
            paddingTop: spacing[py],
            paddingBottom: spacing[py],
          }),
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

