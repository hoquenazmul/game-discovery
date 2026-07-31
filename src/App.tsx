import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem hideBelow="lg" area="aside" bg="blue">
        Aside
      </GridItem>
      <GridItem area="main" bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
