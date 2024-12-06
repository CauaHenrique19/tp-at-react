import { Fab, FabProps } from '@mui/material';

export function FabComponent (props: FabProps) {
  return (
    <div>
        <Fab {...props}>
          {props.children}
        </Fab>
    </div>
  );
};
