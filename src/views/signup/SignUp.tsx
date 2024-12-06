import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  ContainerComponent,
  BoxComponent,
  Button,
  TypographyComponent,
  TextFieldComponent,
  AvatarComponent,
} from "../../components";

import { signUp } from "../../services/authentication";
import { useAppContext } from "../../context";

import logo from "../../assets/img/logo.png";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { t, supabase } = useAppContext();
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const register = async () => {
    await signUp(
      email,
      password,
      supabase
    );

    navigate("/signin"); 
  };

  return (
    <ContainerComponent className="app-background" component="main">
      <BoxComponent
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AvatarComponent sx={{ width: 180, height: 180 }} src={logo} />
        <TypographyComponent component="h3" variant="h3">
          {t("register")}
        </TypographyComponent>
        <TypographyComponent component="h5" variant="h5">
          {t("welcome")}
        </TypographyComponent>
        <BoxComponent
          onSubmit={(e) => e.preventDefault()}
          sx={{ mt: 1 }}
        >
          <TextFieldComponent
            margin="normal"
            required
            fullWidth
            id="email"
            label={t("email")}
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextFieldComponent
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("password")}
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextFieldComponent
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label={t("confirm-password")}
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <BoxComponent
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to={"/signin"}>{t("sign-in")}</Link>
          </BoxComponent>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={register}
          >
            {t("sign-up")}
          </Button>
        </BoxComponent>
      </BoxComponent>
    </ContainerComponent>
  );
};

export default SignUp;
