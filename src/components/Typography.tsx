import { Typography, TypographyProps } from '@mui/material';

export function TypographyComponent (props: TypographyProps) {
  return (
    <div>
      <Typography {...props}>
        {props.children}
      </Typography>
    </div>
  );
};
