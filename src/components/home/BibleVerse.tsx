import { ContainerView, BodyText, FrostedCard, Caption } from "@/ui-framework";

export default function BibleVerse() {
  return (
    <ContainerView alignItems="center">
      <FrostedCard>
        <BodyText>
          “You will keep in perfect peace those whose minds are steadfast,
          because they trust in you.”
        </BodyText>
        <ContainerView alignItems="flex-end" mt="md">
            <Caption italic lineHeight="md" py="md">
                📖 Isaiah 26:3 (NIV)
            </Caption>
        </ContainerView>
      </FrostedCard>
    </ContainerView>
  );
}
