import { View, Pressable, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { Title, Subtitle } from "../typography";
import ContainerView from "../spacing/ContainerView";
import { BaseFormProps } from "./types-form";

export default function Form({
  title,
  subtitle,
  onSubmit,
  children,
  gap = "lg",
  padding = "lg",
  bg = "transparent",
  style,
}: BaseFormProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <ContainerView
          flex={1}
          justify="flex-start"
          alignItems="stretch"
          gap={gap}
          padding={padding}
          bg={bg}
          style={style}
        >
          {title && <Title align="center">{title}</Title>}
          {subtitle && <Subtitle align="center">{subtitle}</Subtitle>}
          <View>{children}</View>
        </ContainerView>
      </Pressable>
    </KeyboardAvoidingView>
  );
}
