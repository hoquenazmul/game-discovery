import usePlatforms, { type Platform } from "@/hooks/usePlatforms";
import { Button, Icon, Menu, Portal, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="md" variant="outline">
          {selectedPlatform?.name || "Platform"}
          <Icon>
            {" "}
            <BsChevronDown />{" "}
          </Icon>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
                value={platform.name}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
