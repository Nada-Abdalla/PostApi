import { Card, Button, AppBar, Toolbar, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postApi } from "../../../app/postServices";

import "./Popup.css";

type PopupProps = {
  open: boolean;
  onClose: () => void;
  id?: number;
  header: string;
  btn: string;
  input?: string;
  textarea?: string;
};

export const Popup = ({
  open,
  onClose,
  id,
  header,
  btn,
  input,
  textarea,
}: PopupProps) => {
  const form = useForm();
  const { register, trigger, setValue, formState } = form;
  const { errors } = formState;
  const [updatePost] = postApi.useUpdatePostMutation();
  const [editTitle, setEditTitle] = useState(input || "");
  const [editBody, setEditBody] = useState(textarea || "");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
    setValue("Name", e.target.value);
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditBody(e.target.value);
    setValue("Body", e.target.value);
  };

  const validateFields = async () => {
    const isTitleValid = await trigger("Name");
    const isBodyValid = await trigger("Body");
    return isTitleValid && isBodyValid;
  };

  const handleUpdate = async () => {
    const isValid = await validateFields();
    if (!isValid) return;
    const update = {
      id: id ?? 0,
      userId: 1,
      title: editTitle,
      body: editBody,
    };
    try {
      await updatePost(update).unwrap();
      setEditTitle("");
      setEditBody("");
      onClose();
    } catch (error) {}
  };

  const [createPost] = postApi.useCreatePostMutation();

  const onClickCreate = async () => {
    const isValid = await validateFields();
    if (!isValid) return;
    const post = {
      userId: 1,
      title: editTitle,
      body: editBody,
    };
    createPost(post);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className="modal">
      <Card className="modal-content">
        <AppBar className="popupHeaderStyle popupHeaderStyleUpdate">
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="P-Popupheader robotoSlab">{header}</p>
            <Button
              onClick={onClose}
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
          {...register("Name", {
            required: {
              value: true,
              message: "name is required",
            },
          })}
          placeholder={input || editTitle}
          focused
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
        <p style={{ color: "red" }}>{errors.Name?.message as string}</p>
        <textarea
          placeholder={textarea}
          {...register("Body", {
            required: {
              value: true,
              message: "body is required",
            },
          })}
          value={editBody}
          onChange={onChangeBody}
        ></textarea>
        <p style={{ color: "red" }}>{errors.Body?.message as string}</p>

        <div>
          <button
            className="btnCreatPost"
            onClick={() => (id ? handleUpdate() : onClickCreate())}
          >
            {btn}
          </button>
        </div>
      </Card>
    </Modal>
  );
};
