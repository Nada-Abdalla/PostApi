import { Stack, Typography } from "@mui/material";
import { Post } from "../../../models/post";
import { CardHeaderPost } from "./CardHeaderPost";
import "./Popup.css";

export type CardPostProps = { post: Post };

export const CardPost = ({ post }: CardPostProps) => {
  const { id, title, body } = post;
  return (
    <Stack
      paddingX={2}
      paddingY={1}
      spacing={1}
      borderRadius={"6px"}
      height={"122px"}
      sx={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)", overflow: "hidden" }}
      className="hover"
    >
      <CardHeaderPost id={id} title={title} body={body} />
      <Typography
        variant="body2"
        sx={{
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
        }}
        className="bodyStyle notoSans"
      >
        {body}
      </Typography>
    </Stack>
  );
};
