import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header/Header";
import { CoinInformation } from "./pages/CoinInformation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<MainPage />} />
        <Route path="coininformation" element={<CoinInformation />} />
      </Route>
    </Routes>
  );
}

export default App;
