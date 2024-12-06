import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import { useAppContext } from "../../context";
import { logout } from "../../services/authentication";
import {
  AppBarComponent,
  Button,
  GridComponent,
  BoxComponent,
  TextFieldComponent,
  TypographyComponent,
  DatePickerComponent,
} from "../../components";

import { saveOrUpdate } from "../../services/database";
import { loadProfile } from "../../utils/loader";

const Settings: React.FC = () => {
  const { changeLanguage, supabase, t, user } = useAppContext();

  const navigate = useNavigate();

  const [id, setId] = useState("")
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [weigth, setWeight] = useState("");
  const [heigth, setHeight] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyLanguage = (language: string) => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage == language) {
      return "contained";
    }
    return "outlined";
  };

  const save = async () => {
    setLoading(true);

    const d: any = {
      user_id: user ? user.id : null,
      name,
      birth,
      weigth,
      heigth,
    };

    if (id) {
      d.id = id
    }

    const { data: result, error } = await saveOrUpdate(
      "profile",
      d,
      supabase
    );

    if (error) {
    } else {
      setTimeout(() => {
        navigate(`/${mainPath}/`);
      }, 3000);
    }

    setLoading(false);
  };

  const carregarUser = async () => {
    const profile = await loadProfile(user, supabase);

    if (profile) {
      setId(profile.id);
      setName(profile.name);
      setBirth(profile.birth);
      setWeight(profile.weigth);
      setHeight(profile.heigth);
    }
  }

  useEffect(() => {
    carregarUser();
  }, []);

  return (
    <>
      <AppBarComponent title={t("settings")} />
      <GridComponent
        container={true}
        spacing={2}
        sx={{
          marginTop: "1em",
          padding: "1em",
        }}
      >
        <GridComponent size={{ xs: 12 }}>
          <Button
            onClick={() => changeLanguage("en")}
            variant={verifyLanguage("en")}
            sx={{ ...styles.button }}
          >
            {t("english")}
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 12 }}>
          <Button
            onClick={() => changeLanguage("es")}
            variant={verifyLanguage("es")}
            sx={{ ...styles.button }}
          >
            {t("spanish")}
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 12 }}>
          <Button
            onClick={() => changeLanguage("pt")}
            variant={verifyLanguage("pt")}
            sx={{ ...styles.button }}
          >
            {t("portuguese")}
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 12 }}>
          <Button
            color="error"
            onClick={async () => await logout(navigate, supabase)}
            sx={{ ...styles.button }}
          >
            Logout
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 12 }} sx={{ mt: 1 }}>
          <TypographyComponent component="h5" variant="h5">
            {t("baby-data-title")}
          </TypographyComponent>
        </GridComponent>
        <GridComponent size={{ xs: 12 }}>
          <BoxComponent onSubmit={(e) => e.preventDefault()}>
            <TextFieldComponent
              margin="normal"
              required
              fullWidth
              name="name"
              label={t("name")}
              type="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <DatePickerComponent
              format="DD/MM/YYYY"
              margin="normal"
              required
              fullWidth
              id="birth"
              label={t("birth")}
              name="birth"
              autoComplete="birth"
              autoFocus
              value={dayjs(birth)}
              onChange={(date) => setBirth(date!.toISOString())}
            />
            <TextFieldComponent
              margin="normal"
              required
              fullWidth
              name="weigth"
              label={t("weigth")}
              type="weigth"
              id="weigth"
              value={weigth}
              onChange={(event) => setWeight(event.target.value)}
            />
            <TextFieldComponent
              margin="normal"
              required
              fullWidth
              name="heigth"
              label={t("heigth")}
              type="heigth"
              id="heigth"
              value={heigth}
              onChange={(event) => setHeight(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={save}
              sx={{ mt: 3, mb: 2 }}
            >
              {t("save")}
            </Button>
          </BoxComponent>
        </GridComponent>
      </GridComponent>
    </>
  );
};

const styles = {
  button: {
    width: "100%",
  },
};

export default Settings;
