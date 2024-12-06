import { Grid2, Grid2Props } from "@mui/material";

export const GridComponent = (props: Grid2Props) => {
  return (
    <Grid2 {...props}>{props.children}</Grid2>
  )
}