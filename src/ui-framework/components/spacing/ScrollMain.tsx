import { ScrollView } from "react-native";
import { BaseViewProps } from "./types-spacing";
import { colors, spacing } from "@/ui-framework/theme";


export default function ScrollMain({
  children,
  bg = "primary",
  flex = 1,
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
  gap = "none",
  width,
  height,
  borderRadius,
  style,
}: BaseViewProps) {
  return (
    <ScrollView
      contentContainerStyle={[
        {
          flex: flex,
          flexDirection: flexDirection,
          backgroundColor: colors[bg],
          justifyContent: justify,
          alignItems: alignItems,
          alignContent: alignContent,
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
          gap: spacing[gap],
          width: typeof width === "string"
              ? spacing[width]
              : width,
          height: typeof height === "string"
              ? spacing[height]
              : height,
          borderRadius:
            typeof borderRadius === "string"
              ? spacing[borderRadius]
              : borderRadius,
        },
        style,
      ]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}
