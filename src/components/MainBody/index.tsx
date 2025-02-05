import { Grid2 } from "@mui/material";
import { CardPost } from "./components/CardPost";
import { postApi } from "../../app/postServices";

export const GridPost = () => {
  const { data: posts } = postApi.useGetPostsQuery();

  return (
    <Grid2
      container
      spacing={1}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "1rem", 
      }}
    >
      {posts?.map((post) => (
        <Grid2 key={post.id} size={3}>
          <CardPost post={post} />
        </Grid2>
      ))}
    </Grid2>
  );
};
