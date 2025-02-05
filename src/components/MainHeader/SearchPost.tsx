import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { postApi } from "../../app/postServices";

export const SearchPost = () => {
  const [getPost] = postApi.useLazyGetPostQuery();
  const [refetch] = postApi.useLazyGetPostsQuery();

  const [value, setvalue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value);
  };
  const onClick = () => {
    if (!value) {
      refetch();
    } else {
      getPost(value);
    }
  };

  return (
    <>
      <Stack direction={"row"} spacing={1.5}>
        <TextField
          size="small"
          placeholder="Search by ID"
          value={value}
          onChange={onChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
              "&:active": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
            },
          }}
        />
        <Button
          size="small"
          variant="contained"
          onClick={onClick}
          sx={{
            alignSelf: "center",
            height: "40px",
            backgroundColor: "rgba(25, 35, 75, 1)",
          }}
        >
          <SearchIcon />
        </Button>
      </Stack>
    </>
  );
};
