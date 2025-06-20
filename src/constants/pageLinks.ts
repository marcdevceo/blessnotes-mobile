import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ComponentProps } from "react";

type MaterialIconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

type AppRoute =
  | "/journal"
//   | "/prayer-wall"
//   | "/music";

export type PageLinkType = {
  title: string;
  icon: MaterialIconName;
  route: AppRoute;
  buttonTitle: string;
};

export const pageLinks: PageLinkType[] = [
  {
    title: "Ready to Journal",
    icon: "notebook-multiple",
    route: "/journal",
    buttonTitle: "Journal",
  },
//   {
//     title: "Need Prayer",
//     icon: "hands-pray",
//     route: "/prayer-wall",
//     buttonTitle: "Prayer Wall",
//   },
//   {
//     title: "Some Inspiration",
//     icon: "music",
//     route: "/music",
//     buttonTitle: "Music",
//   },
];
