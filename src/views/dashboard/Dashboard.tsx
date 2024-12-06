import { AppBarComponent } from "../../components";
import { useAppContext } from "../../context";

const Dashboard: React.FC = () => {
  const { t } = useAppContext();

  return (
    <>
      <AppBarComponent title={t("dashboard")} />
    </>
  );
};

export default Dashboard;
