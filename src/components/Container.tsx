import { Container, ContainerProps } from '@mui/material';

export function ContainerComponent (props: ContainerProps) {
  return (
    <div>
        <Container {...props}>
          {props.children}
        </Container>
    </div>
  );
};
