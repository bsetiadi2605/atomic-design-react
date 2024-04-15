import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home";
import LayoutAtom from "./components/pages/layoutAtom";
import LayoutMolecule from "./components/pages/layoutMolecule";
import LayoutOrganism from "./components/pages/layoutOrganism";
import LayoutTemplate from "./components/pages/layoutTemplate";
import LayoutPage from "./components/pages/layoutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atom" element={<LayoutAtom />} />
        <Route path="/molecule" element={<LayoutMolecule />} />
        <Route path="/organism" element={<LayoutOrganism />} />
        <Route path="/template" element={<LayoutTemplate />} />
        <Route path="/page" element={<LayoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;