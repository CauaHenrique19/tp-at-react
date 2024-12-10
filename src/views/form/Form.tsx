import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppContext } from "../../context";
import { AppBarComponent, Button, Diaper, Eat, Sleep, GridComponent } from "../../components";
import { list, saveOrUpdate } from "../../services/database";
import ActionInterface from "../../interfaces/ActionInterface";
import {
  actionTypeListToInt,
  validateForm,
} from "../../utils/actions";

const Form: React.FC = () => {
  const { t, supabase, user } = useAppContext();
  const navigate = useNavigate();

  const params = useParams();
  const actionType = params.type;

  const [data, setData] = useState<ActionInterface | null>(null);

  const getForm = (actionType: string) => {
    switch (actionType) {
      case "1":
        return <Sleep data={data} setData={setData} t={t} />;

      case "2":
        return <Eat data={data} setData={setData} t={t} />;

      case "3":
        return <Diaper data={data} setData={setData} t={t} />;

      default:
        return <Eat data={data} setData={setData} t={t} />;
    }
  };

  const loadData = async (id: string) => {
    const { data: d, error } = await list(
      "actions",
      {
        id: id,
      },
      1,
      supabase
    );
    if (d.length === 1) {
      setData(d[0]);
    }
  };

  const save = async () => {
    try {
      let actionTypeInt = 0;
      if (actionType) {
        actionTypeInt = parseInt(actionType);
      }

      const d: ActionInterface = {
        user_id: user ? user.id : "",
        action_type: actionTypeInt,
        ...data,
      };
      
      if (params.id) {
        d.id = params.id;
      }

      console.log(d)

      const validates = validateForm(actionTypeInt, d, t);
      if (validates.length > 0) {
        return;
      }

      const { data: result, error } = await saveOrUpdate(
        "action",
        d,
        supabase
      );
      if (error) {
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (params && params.id) {
      loadData(params.id);
    }
  }, []);

  return (
    <>
      <AppBarComponent title={t(actionTypeListToInt[actionType])} trash={params.id} />
      <GridComponent
        container={true}
        spacing={2}
        sx={{
          marginTop: "1em",
          padding: "1em",
        }}
      >
        <GridComponent size={{ xs: 12 }}>
          {getForm(actionType)}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={save}
            sx={{ mt: 3, mb: 2 }}
          >
            {t("save")}
          </Button>
        </GridComponent>
      </GridComponent>
    </>
  );
};

export default Form