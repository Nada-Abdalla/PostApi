import { IconButton } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import "./Popup.css";
import { Popup } from "./Popup";

type EditPostProps = {
  id: number;
  title: string;
  body: string;
};

export const EditPost = ({ id, title, body }: EditPostProps) => {
  const [popup, setpopup] = useState(false);
  const toggleModalEdit = () => setpopup(!popup);

  return (
    <>
      <IconButton size="small" onClick={toggleModalEdit}>
        <EditIcon sx={{ fontSize: "1.2rem" }} />
      </IconButton>
      {popup && (
        <Popup
          open={popup}
          onClose={toggleModalEdit}
          id={id}
          header="Edit Post"
          btn="Save"
          input={title}
          textarea={body}
        />
      )}
    </>
  );
};
