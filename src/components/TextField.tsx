import { TextField, TextFieldProps } from "@mui/material";

export function TextFieldComponent(props: TextFieldProps) {
  return <TextField {...props}>{props.children}</TextField>;
}
