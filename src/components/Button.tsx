import { ButtonProps, Button as MaterialButton } from "@mui/material";

export function Button(props: ButtonProps) {
  return <MaterialButton {...props}>{props.children}</MaterialButton>;
}
