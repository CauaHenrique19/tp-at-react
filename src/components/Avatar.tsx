import { Avatar, AvatarProps } from '@mui/material';

export function AvatarComponent (props: AvatarProps) {
  return (
    <div>
        <Avatar {...props}>
          {props.children}
        </Avatar>
    </div>
  );
};
