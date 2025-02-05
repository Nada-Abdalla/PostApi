import { Stack } from "@mui/material";
import { CreatePost } from "./CreatPost";
import { SearchPost } from "./SearchPost";

export const Header = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <CreatePost />
      <SearchPost />
    </Stack>
  );
};
