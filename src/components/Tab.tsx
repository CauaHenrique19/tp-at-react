import { Tabs, TabsProps } from '@mui/material';

export function TabComponent (props: TabsProps) {
  return (
    <div>
      <Tabs {...props}>
        {props.children}
      </Tabs>
    </div>
  );
};
