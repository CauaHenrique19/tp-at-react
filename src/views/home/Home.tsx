import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import CribIcon from "@mui/icons-material/Crib";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import SpaIcon from "@mui/icons-material/Spa";

import {
  GridComponent,
  CardNewItemComponent,
  BoxComponent,
  IconButtonComponent,
  AvatarComponent,
  CustomList,
  TypographyComponent,
} from "../../components";
import ActionInterface from "../../interfaces/ActionInterface";
import { useAppContext } from "../../context";
import { list } from "../../services/database";
import { loadProfile } from "../../utils/loader";
import { calculateDuration, roundDays } from "../../utils/date";

import babyImage from "../../assets/img/baby.png";

const Home: React.FC = () => {
  const { t, user, supabase } = useAppContext();
  const theme = useTheme();
  const navigate = useNavigate();
  const [baby, setBaby] = useState({});
  const [page, setPage] = useState(1);
  const [data, setData] = useState<ActionInterface | null>(null);

  const actionsMain = [
    {
      title: t("sleep"),
      actionType: 1,
      icon: CribIcon,
      color: "#4b10a9",
    },
    {
      title: t("eat"),
      actionType: 2,
      icon: RestaurantMenuIcon,
      color: "#47c869",
    },
    {
      title: t("diaper"),
      actionType: 3,
      icon: SpaIcon,
      color: "#f4cc1d",
    },
  ];

  const loadData = async () => {
    const { data: d, error } = await list(
      "action",
      {
        user_id: user ? user.id : null,
      },
      page,
      supabase
    );
    setData(d);
  };

  const carregarUser = async () => {
    const profile = await loadProfile(user, supabase);

    if (profile) {
      setBaby(profile);
    }
  };

  useEffect(() => {
    carregarUser();
    loadData();
  }, []);

  return (
    <GridComponent container={true}>
      <GridComponent
        size={{ xs: 12 }}
        sx={{
          height: "25vh",
        }}
      >
        <GridComponent
          container={true}
          sx={{
            alignItems: "flex-end",
            marginTop: "1em",
          }}
        >
          <GridComponent size={{ xs: 4 }}>
            <BoxComponent
              sx={{
                ...styles.centerBox,
                ...styles.centerBox,
              }}
            >
              <IconButtonComponent
                sx={{
                  ...styles.iconButton,
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => navigate("/dashboard")}
              >
                <SignalCellularAltIcon
                  sx={{
                    ...styles.icon,
                    color: `${theme.palette.primary.main}`,
                  }}
                />
              </IconButtonComponent>
              <BoxComponent
                sx={{
                  ...styles.centerBox,
                  ...styles.boxText,
                }}
              >
                <TypographyComponent component="p" sx={{ ...styles.text2 }}>
                  {baby?.heigth} cm
                </TypographyComponent>
                <TypographyComponent component="p" sx={{ ...styles.text3 }}>
                  {t("heigth")}
                </TypographyComponent>
              </BoxComponent>
            </BoxComponent>
          </GridComponent>
          <GridComponent size={{ xs: 4 }}>
            <BoxComponent
              sx={{
                ...styles.centerBox,
              }}
            >
              <AvatarComponent sx={{ width: 90, height: 90 }} src={babyImage} />
              <BoxComponent
                sx={{
                  ...styles.centerBox,
                  ...styles.boxText,
                }}
              >
                <TypographyComponent component="p" sx={{ ...styles.text1 }}>
                  {baby?.name}
                </TypographyComponent>
                <TypographyComponent component="p" sx={{ ...styles.text3 }}>
                  {roundDays(
                    calculateDuration(
                      baby?.birth,
                      dayjs().startOf("day").format(),
                      "day"
                    )
                  )}{" "}
                  {t("days")}
                </TypographyComponent>
              </BoxComponent>
            </BoxComponent>
          </GridComponent>
          <GridComponent size={{ xs: 4 }}>
            <BoxComponent
              sx={{
                ...styles.centerBox,
              }}
            >
              <IconButtonComponent
                sx={{
                  ...styles.iconButton,
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => navigate("/settings")}
              >
                <SettingsIcon
                  sx={{
                    ...styles.icon,
                    color: `${theme.palette.primary.main}`,
                  }}
                />
              </IconButtonComponent>
              <BoxComponent
                sx={{
                  ...styles.centerBox,
                  ...styles.boxText,
                }}
              >
                <TypographyComponent component="p" sx={{ ...styles.text2 }}>
                  {baby?.weigth} kg
                </TypographyComponent>
                <TypographyComponent component="p" sx={{ ...styles.text3 }}>
                  {t("weigth")}
                </TypographyComponent>
              </BoxComponent>
            </BoxComponent>
          </GridComponent>
        </GridComponent>
      </GridComponent>
      <GridComponent
        size={{ xs: 12 }}
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "75vh",
        }}
      >
        <GridComponent
          container={true}
          sx={{
            marginTop: "-50px",
            padding: 2,
          }}
        >
          <GridComponent size={{ xs: 12 }}>
            <GridComponent container={true} spacing={2}>
              {actionsMain.map((action) => (
                <GridComponent key={action.actionType} size={{ xs: 4 }}>
                  <CardNewItemComponent
                    title={action.title}
                    Icon={action.icon}
                    color={action.color}
                    actionType={action.actionType}
                  />
                </GridComponent>
              ))}
            </GridComponent>
            <GridComponent
              container={true}
              sx={{
                marginTop: "1em",
              }}
            >
              <GridComponent size={{ xs: 12 }}>
                {data ? (
                  <CustomList
                    sx={{
                      overflow: "auto",
                      maxHeight: "56.5vh",
                    }}
                    items={data}
                  />
                ) : null}
              </GridComponent>
            </GridComponent>
          </GridComponent>
        </GridComponent>
      </GridComponent>
    </GridComponent>
  );
};

const styles = {
  centerBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    height: "2.5em",
    width: "2.5em",
  },
  icon: {
    fontSize: "1.5em",
  },
  boxText: {
    marginTop: ".5em",
  },
  text1: {
    wordBreak: "break-all",
    fontSize: "1.2em",
    fontWeight: "500",
    fontFamily: '"Lato", sans-serif',
  },
  text2: {
    wordBreak: "break-all",
    fontSize: ".8em",
    fontWeight: "600",
    fontFamily: '"Lato", sans-serif',
  },
  text3: {
    wordBreak: "break-all",
    fontSize: ".8em",
    fontWeight: "400",
  },
};

export default Home;
