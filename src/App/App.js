import { ToastContainer } from "react-toastify";
import MainRouter from "./router/MainRouter";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";
import AppContext from "./appContext";
import { useState } from "react";

function App() {
  const [initData, setInitData] = useState(null);
  console.log(initData);
  return (
    <AppContext.Provider value={{ initData, setInitData }}>
      <ToastContainer toastStyle={{ backgroundColor: "#050915" }} />
      <MainRouter />
    </AppContext.Provider>
  );
}

export default App;
