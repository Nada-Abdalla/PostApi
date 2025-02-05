import { IconButton } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { postApi } from "../../../app/postServices";
import { Card, Button, AppBar, Toolbar, TextField } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./Popup.css";

type EditPostProps = {
  id: number;
};

export const EditPost = ({ id }: EditPostProps) => {
  const [updatePost] = postApi.useUpdatePostMutation();
  const [popup, setpopup] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const toggleModalEdit = () => setpopup(!popup);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditBody(e.target.value);
  };

  const handleUpdate = async () => {
    const update = {
      id,
      userId: 1,
      title: editTitle,
      body: editBody,
    };
    try {
      const response = await updatePost(update).unwrap();
      console.log("Updated Post:", response);
      setEditTitle("");
      setEditBody("");
      toggleModalEdit();
    } catch (error) {
      console.error("Update failed", error);
    }
  };
  return (
    <>
      <IconButton size="small" onClick={toggleModalEdit}>
        <EditIcon sx={{ fontSize: "1.2rem" }} />
      </IconButton>
      {popup && (
        <div className="modal">
          <Card className="modal-content">
            <AppBar className="popupHeaderStyle popupHeaderStyleUpdate">
              <Toolbar
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p className="P-Popupheader robotoSlab">Edit Post</p>
                <Button
                  onClick={toggleModalEdit}
                  className="btnCloseStyle"
                  disableRipple
                  disableFocusRipple
                >
                  <CloseOutlinedIcon sx={{ fontSize: 30 }} />
                </Button>
              </Toolbar>
            </AppBar>
            <TextField
              label="Name"
              focused
              placeholder="New Post"
              type="text"
              value={editTitle}
              onChange={onChangeTitle}
              sx={{
                marginTop: "5rem",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                },
              }}
            />
            <textarea
              placeholder="Edit Post"
              value={editBody}
              onChange={onChangeBody}
            ></textarea>
            <div>
              <button className="btnCreatPost" onClick={() => handleUpdate()}>
                Save
              </button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
