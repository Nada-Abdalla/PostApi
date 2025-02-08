import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { Button } from "@mui/material";
import "../MainBody/components/Popup.css";
import { Popup } from "../MainBody/components/Popup";

export const CreatePost = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleModalCreat = () => setIsShown(!isShown);

  const style = {
    width: "154px",
    height: "36px",
    backgroundColor: "rgba(25, 35, 75, 1)",
    fontSize: "14px",
    fontWeight: "600",
  };
  return (
    <>
      <Button
        size="small"
        variant="contained"
        startIcon={<AddCircleOutlineIcon sx={{ fontSize: "20px" }} />}
        onClick={toggleModalCreat}
        style={style}
        className="notoSans"
      >
        create post
      </Button>
      {isShown && (
        <Popup
          open={isShown}
          onClose={toggleModalCreat}
          header="Create Post"
          btn="Create Post"
          input="Creat Post"
          textarea="Creat Post"
        />
      )}
    </>
  );
};
