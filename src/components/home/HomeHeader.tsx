import { colors, ContainerView, Title } from "@/ui-framework";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeHeader() {
  return (
    <ContainerView
      flexDirection="row"
      alignItems="center"
      justify="space-between"
      style={{ width: "100%" }}
    >
      <ContainerView justify="center" alignItems="center">
        <Title size="2xl">Welcome, Marcus</Title>
      </ContainerView>
      <ContainerView
        padding="sm"
        borderRadius="2xl"
        style={{ borderWidth: 2, borderColor: colors.gold }}
      >
        <MaterialCommunityIcons name="account" size={24} color="black" />
        {/* <Image
          source={require("../../../assets/images/react-logo.png")}
          style={{ width: 35, height: 35 }}
        /> */}
      </ContainerView>
    </ContainerView>
  );
}
