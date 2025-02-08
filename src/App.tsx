import { Header } from "./components/MainHeader/Header";
import { Stack } from "@mui/material";
import { GridPost } from "./components/MainBody/index";

function App() {
  return (
    <Stack direction={"column"} spacing={2} padding={2}>
      <Header />
      <GridPost />
    </Stack>
  );
}

export default App;
