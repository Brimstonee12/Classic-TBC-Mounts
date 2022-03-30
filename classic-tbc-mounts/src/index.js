import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ClassicEasyMountsPage from "./pages/ClassicEasyPage";
import ClassicRareMountsPage from "./pages/ClassicRarePage";
import TbcEasyMountsPage from "./pages/TbcEasyPage";
import TbcRareMountsPage from "./pages/TbcRarePage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="classic-easy-mounts" element={<ClassicEasyMountsPage />} />
        <Route path="classic-rare-mounts" element={<ClassicRareMountsPage />} />
        <Route path="tbc-easy-mounts" element={<TbcEasyMountsPage />} />
        <Route path="tbc-rare-mounts" element={<TbcRareMountsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
