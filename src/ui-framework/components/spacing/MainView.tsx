import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { BaseViewProps } from "./types-spacing";
import { colors, spacing } from "@/ui-framework/theme";

export default function MainView({
  children,
  bg = "transparent",
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
  padding = "md",
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  gap = "lg",
  width,
  height,
  borderRadius,
  style,
}: BaseViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
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
          paddingTop: insets.top + (pt ? spacing[pt]: 0),
          paddingBottom: insets.bottom + (pb ? spacing[pb] : 0),
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
    >
      {children}
    </SafeAreaView>
  );
}
