import { Stack, Typography } from "@mui/material";
import { EditPost } from "./EditPost";
import { DeletePost } from "./DeletePost";

export type CardHeaderPostProps = {
  id: number;
  title: string;
  body: string;
};

export const CardHeaderPost = ({ id, title, body }: CardHeaderPostProps) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="body2" className="pId robotoSlab">{`Id ${id}`}</Typography>
      <Typography variant="body1" textAlign={"center"} noWrap className="titleStyle robotoSlab"> 
        {title}
      </Typography>
      <Stack direction={"row"} spacing={1}>
        <EditPost id={id}  title={title} body={body}/>
        <DeletePost id={id} />
      </Stack>
    </Stack>
  );
};
