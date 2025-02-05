import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { postApi } from "../../app/postServices";

import {
  Card,
  Typography,
  Button,
  AppBar,
  Toolbar,
  TextField,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "../MainBody/components/Popup.css";

export const CreatePost = () => {
  const [addNewPost, setAddNewPost] = useState("");
  const [addNewBody, setNewBody] = useState("");
  const [isShown, setIsShown] = useState(false);
  const toggleModalCreat = () => setIsShown(!isShown);

  const [createPost] = postApi.useCreatPostMutation();
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setAddNewPost(e.target.value);
  };
  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewBody(e.target.value);
  };
  const onClickCreate = () => {
    const post = {
      userId: 1,
      title: addNewPost,
      body: addNewBody,
    };
    createPost(post);
    toggleModalCreat();
  };
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
        <div className="modal">
          <Card className="modal-content">
            <AppBar className="popupHeaderStyle">
              <Toolbar
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography className="P-Popupheader robotoSlab">
                  Creat Post
                </Typography>
                <Button
                  onClick={toggleModalCreat}
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
              value={addNewPost}
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
              placeholder="New Post"
              value={addNewBody}
              onChange={onChangeBody}
            ></textarea>
            <div>
              <Button className="btnCreatPost" onClick={onClickCreate}>
                Creat Post
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
