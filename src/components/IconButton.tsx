import { IconButton, IconButtonProps } from '@mui/material';

export function IconButtonComponent (props: IconButtonProps) {
  return (
    <div>
      <IconButton {...props}>
        {props.children}
      </IconButton>
    </div>
  );
};
