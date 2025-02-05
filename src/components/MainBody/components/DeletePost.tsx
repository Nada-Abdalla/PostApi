import { useState } from "react";
import { Card, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { postApi } from "../../../app/postServices";
import "./Popup.css";

type DeletePostProps = {
  id: number;
};

export const DeletePost = ({ id }: DeletePostProps) => {
  const [deletePost] = postApi.useDeletePostMutation();
  const [deleteMss, setDeleteMss] = useState(false);
  const toggleModalDelete = () => setDeleteMss(!deleteMss);
  const handleDelete = (id: string) => {
    deletePost(id).unwrap();
    toggleModalDelete();
  };

  return (
    <>
      <IconButton size="small" onClick={() => toggleModalDelete()}>
        <DeleteIcon sx={{ fontSize: "1.2rem" }} />
      </IconButton>
      {deleteMss && (
        <div className="modal">
          <Card className="cardDelete">
            <h2 className="hDeleteCard notoSans">Delete Post</h2>
            <div>
              <p className="pOneDeleteCard notoSans">
                Are you sure you want to delete this Post
              </p>
              <p
                className="pTwoDeleteCard notoSans"
              >
                This Action Cannot be Reversed
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "4px",
              }}
            >
              <Button
                className="btnDeleteCard notoSans"
                onClick={() => handleDelete(id.toString())}
              >
                Delete
              </Button>
              <Button
                className="btnCansleDelete"
                variant="outlined"
                color="inherit"
                size="large"
                onClick={toggleModalDelete}
              >
                Cancle
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
