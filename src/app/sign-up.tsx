import {
  Button,
  ContainerView,
  Form,
  InputField,
  MainView,
  Subtitle,
  Title,
} from "@/ui-framework";

export default function SignUp() {
  return (
    <MainView
      bg="primaryLight"
    >
      <Title color="accentText">BlessNotes</Title>
      <Subtitle color="accentText">Sign Up Here</Subtitle>
      {/* <Form title="Sign Up">
        <InputField
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          label="Password"
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Create Account" onPress={handleSubmit} />
      </Form> */}
    </MainView>
  );
}
