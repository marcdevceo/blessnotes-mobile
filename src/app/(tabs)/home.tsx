import BibleVerse from "@/components/home/BibleVerse";
import HomeHeader from "@/components/home/HomeHeader";
import Navigator from "@/components/home/Navigator";
import { colors, ContainerView, MainView } from "@/ui-framework";
import { Image } from "react-native";

export default function HomeScreen() {
  return (
    <MainView bg="primary" flex={1} gap="4xl" >
        <HomeHeader />
        <BibleVerse />
        <ContainerView alignItems="center" gap="xl" style={{ width: "100%" }}>
          <ContainerView
            mb="xl"
            style={{
              shadowColor: colors.gold,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.75,
              shadowRadius: 3.5,
              elevation: 6, // For Android
            }}
          >
            <Image
              source={require("../../../assets/images/praying-hands.png")}
              style={{ width: 100, height: 100 }}
            />
          </ContainerView>
          <Navigator />
        </ContainerView>
    </MainView>
  );
}
