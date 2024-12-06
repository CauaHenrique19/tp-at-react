import { Alert, AlertProps } from '@mui/material';

export function AlertComponent (props: AlertProps) {
  return (
    <div>
        <Alert {...props}>
          {props.children}
        </Alert>
    </div>
  );
};
