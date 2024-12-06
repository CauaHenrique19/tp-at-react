import AddIcon from "@mui/icons-material/Add";

import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { CardComponent, FabComponent, GridComponent, TypographyComponent } from ".";
import { useAppContext } from "../context";

export const CardNewItemComponent = ({ Icon, color, title, actionType }) => {
  const { t } = useAppContext();
  const theme = useTheme()
  const navigate = useNavigate();

  return (
    <CardComponent
      sx={{
        overflow: "visible",
        borderRadius: "10%",
      }}
    >
      <GridComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Icon
          sx={{
            marginTop: ".2em",
            fontSize: "3em",
            color: color,
          }}
        />
        <TypographyComponent
          sx={{
            fontSize: ".85em",
            marginTop: "0.5em",
            fontWeight: "700",
            textAlign: "center",
            wordWrap: "break-word",
            
          }}
        >
          {title}
        </TypographyComponent>
      </GridComponent>
      <GridComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TypographyComponent
          sx={{
            marginTop: "0.5em",
            fontSize: "0.8em",
            fontWeight: "400",
            color: "#8f8f8f",
          }}
        >
          {t("add-thing")}
        </TypographyComponent>
      </GridComponent>
      <GridComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FabComponent
          size="small"
          sx={{
            color: color,
            backgroundColor: theme.palette.background.default,
            position: "relative",
            bottom: "-20px",
            '&:hover': {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary
            }
          }}
          onClick={() => navigate(`/new/${actionType}`)}
        >
          <AddIcon />
        </FabComponent>
      </GridComponent>
    </CardComponent>
  );
};