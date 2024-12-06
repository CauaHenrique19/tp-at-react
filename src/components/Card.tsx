import { Card, CardProps } from "@mui/material";

export function CardComponent(props: CardProps) {
  return <Card {...props}>{props.children}</Card>;
}
