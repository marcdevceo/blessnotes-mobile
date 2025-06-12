import { pageLinks } from "@/constants/pageLinks";
import { BodyText, Button, colors, ContainerView } from "@/ui-framework";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

export default function Navigator() {
  return (
    <ContainerView gap="lg">
      {pageLinks.map((link) => (
        <ContainerView
          key={link.route}
          flexDirection="row"
          justify="space-between"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <ContainerView flexDirection="row" gap="sm">
            <BodyText size="lg" weight="semibold">
              {link.title}
            </BodyText>
            <MaterialCommunityIcons
              name={link.icon}
              size={24}
              color={colors.gold}
            />
          </ContainerView>
          <Link href={ link.route } asChild>
            <Button
                title={link.buttonTitle}
                buttonSize="sm"
                shadow
                style={{ width: 150 }}
            />
          </Link>
        </ContainerView>
      ))}
    </ContainerView>
  );
}
