import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <GridItem hideBelow="lg" area="aside">
        Aside
      </GridItem>
      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
