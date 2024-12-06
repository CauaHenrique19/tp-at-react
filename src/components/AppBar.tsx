import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

import { mainPath } from '../routes'
import { IconButtonComponent, BoxComponent } from ".";

export const AppBarComponent: React.FC = ({ ...props }: any) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButtonComponent
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            position: "relative",
            zIndex: "2",
          }}
          onClick={() => navigate(`/${mainPath}/`)}
        >
          <ArrowBackIcon />
        </IconButtonComponent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            position: "absolute",
            left: "0",
            width: "100%",
            zIndex: "1",
          }}
        >
          {props.title}
        </Typography>
        {props.trash ? (
          <BoxComponent
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              right: "1.5em",
            }}
          >
            <IconButtonComponent
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{
                position: "relative",
                zIndex: "2",
              }}
              onClick={() => {}}
            >
              <DeleteIcon />
            </IconButtonComponent>
          </BoxComponent>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};