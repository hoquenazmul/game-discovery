import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { TbDeviceNintendo } from "react-icons/tb";
import { SiPlaystation5 } from "react-icons/si";
import { PiPlaceholderDuotone } from "react-icons/pi";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation5: SiPlaystation5,
    xbox: FaXbox,
    nintendo: TbDeviceNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    default: PiPlaceholderDuotone,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={
            iconMap[platform.slug] ? iconMap[platform.slug] : iconMap["default"]
          }
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
