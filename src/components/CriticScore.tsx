import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorPalette={color} paddingX={2} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
