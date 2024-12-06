import { Box, BoxProps } from "@mui/material";

export function BoxComponent(props: BoxProps) {
  return <Box {...props}>{props.children}</Box>;
}
