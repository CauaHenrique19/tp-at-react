import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CribIcon from "@mui/icons-material/Crib";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SpaIcon from "@mui/icons-material/Spa";

import { useTheme } from "@mui/material/styles";

import { useAppContext } from "../context";

export const CustomList = ({ items, ...props }) => {
  const { t } = useAppContext();
  const theme = useTheme()

  const getIcon = (typeAction: number) => {
    switch (typeAction) {
      case 1:
        return <CribIcon />;
      case 2:
        return <RestaurantMenuIcon />;
      case 3:
        return <SpaIcon />;
      default:
        return <RestaurantMenuIcon />;
    }
  };

  const actionTypeListToInt: Record<number, string> = {
    1: "sleep",
    2: "eat",
    3: "diaper",
  };

  const typeColor: Record<number, string> = {
    1: "#4b10a9",
    2: "#47c869",
    3: "#f4cc1d",
  };

  return (
    <List {...props}>
      {items.map((item, index) => {
        const typeStr = actionTypeListToInt[item.action_type];
        return (
          <ListItem
            sx={{
              backgroundColor: theme.palette.background.default,
              borderRadius: "60px",
              marginTop: "1em",
            }}
            key={index}
            id={`new-item-list-${index}`}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: typeColor[item.action_type] }}>
                {getIcon(item.action_type)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={
                {
                  color: theme.palette.text.primary,
                }
              }
              primary={t(typeStr)}
              secondary={item.observation}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
