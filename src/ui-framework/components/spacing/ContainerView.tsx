import { View } from "react-native";
import { BaseViewProps } from "./types-spacing";
import { colors, spacing, spacingPercentage } from "@/ui-framework/theme";

export default function ContainerView({
  children,
  bg = "transparent",
  flex,
  flexDirection,
  justify = "flex-start",
  alignItems = "flex-start",
  alignContent,
  margin,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  padding,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  gap,
  width,
  height,
  borderRadius,
  style,
}: BaseViewProps) {
  return (
    <View
      style={[
        {
          flex,
          flexDirection,
          backgroundColor: colors[bg],
          justifyContent: justify,
          alignItems,
          alignContent,
          ...(margin && { margin: spacing[margin] }),
          ...(mt && { marginTop: spacing[mt] }),
          ...(mb && { marginBottom: spacing[mb] }),
          ...(ml && { marginLeft: spacing[ml] }),
          ...(mr && { marginRight: spacing[mr] }),
          ...(mx && {
            marginLeft: spacing[mx],
            marginRight: spacing[mx],
          }),
          ...(my && {
            marginTop: spacing[my],
            marginBottom: spacing[my],
          }),
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
          ...(gap && { gap: spacing[gap] }),
          ...(width && {
            width: typeof width === "string" ? spacing[width] : width,
          }),
          ...(height && {
            height: typeof height === "string" ? spacing[height] : height,
          }),
          ...(borderRadius && {
            borderRadius:
              typeof borderRadius === "string"
                ? spacing[borderRadius]
                : borderRadius,
          }),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
