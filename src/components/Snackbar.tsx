import { Snackbar, SnackbarProps } from '@mui/material';

export function SnackbarComponent (props: SnackbarProps) {
  return (
    <div>
      <Snackbar {...props}>
        {props.children}
      </Snackbar>
    </div>
  );
};
