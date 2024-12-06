import AppProvider from "./context";
import AppRoutes from "./routes";

import "./styles.scss";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
