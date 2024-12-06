import { useState } from "react";

import {
  AvatarComponent,
  BoxComponent,
  Button,
  GridComponent,
  TextFieldComponent,
  TypographyComponent,
} from "../../components";
import { Link, useNavigate } from "react-router-dom";

import { useAppContext } from "../../context";
import { signIn } from "../../services/authentication";

import logo from "../../assets/img/logo.png";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { supabase, t } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verifyLogin = async () => {
    let { data: response, error } = await signIn(email, password, supabase);

    if (error && error.message === "Invalid login credentials") {
      console.log("Erro ao fazer login");
    } else {
      localStorage.setItem("session", JSON.stringify(response.session));
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    }
  };

  return (
    <BoxComponent
      sx={{
        height: "100vh",
        paddingTop: 8,
      }}
    >
      <GridComponent sx={styles.boxAdjustment} container={true}>
        <GridComponent sx={styles.centerBox} size={{ xs: 12 }}>
          <AvatarComponent sx={{ width: 180, height: 180 }} src={logo} />
        </GridComponent>
        <GridComponent
          sx={{
            ...styles.centerBox,
            ...styles.marginTop,
          }}
          
          size={{ xs: 12 }}
        >
          <TypographyComponent variant="h3">Login</TypographyComponent>
        </GridComponent>
        <GridComponent sx={styles.centerBox} size={{ xs: 12 }}>
          <TypographyComponent variant="h5">{t("welcome")}</TypographyComponent>
        </GridComponent>
        <GridComponent sx={styles.marginTop} size={{ xs: 12 }}>
          <TextFieldComponent
            label="E-mail"
            fullWidth={true}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </GridComponent>
        <GridComponent sx={styles.marginTop} size={{ xs: 12 }}>
          <TextFieldComponent
            label="Senha"
            fullWidth={true}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
          />
        </GridComponent>
        <GridComponent
          sx={{
            ...styles.centerBox,
            ...styles.marginTop,
          }}
          size={{ xs: 12 }}
        >
          <Link to="/signup">Cadastrar</Link>
        </GridComponent>
        <GridComponent sx={styles.marginTop} size={{ xs: 12 }}>
          <Button variant="contained" fullWidth={true} onClick={verifyLogin}>
            Entrar
          </Button>
        </GridComponent>
      </GridComponent>
    </BoxComponent>
  );
};

const styles = {
  centerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxAdjustment: {
    padding: 2,
  },
  marginTop: {
    marginTop: 4,
  },
};

export default SignIn;
