import {
  BodyText,
  Button,
  ContainerView,
  FrostedCard,
  MainView,
  Subtitle,
  Title,
} from "@/ui-framework";
import { router } from "expo-router";

export default function Index() {
  return (
    <MainView bg="primaryDark" gap="lg">
      <Title size="4xl">BlessNotes</Title>
      <Subtitle color="neutral">Start Your Day with Purpose and Peace</Subtitle>
      <FrostedCard margin="md">
        <BodyText align="center" italic lineHeight="md" py="md">
          BlessNotes is your daily space for reflection, encouragement, and
          connection. Check in with your mood, journal your thoughts, receive a
          scripture for the day, and discover music that lifts your spirit.
        </BodyText>
      </FrostedCard>
      <ContainerView flexDirection="row" gap="xl">
        <Button
          buttonVariant="secondary"
          buttonSize="lg"
          title="Sign In"
          onPress={() => router.push("/sign-in")}
        />
        <Button
          title="Sign Up"
          buttonSize="lg"
          onPress={() => router.push("/sign-up")}
        />
      </ContainerView>
    </MainView>
  );
}
