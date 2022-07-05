import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ViewItem from "./components/ViewItem";
import Create from "./components/Create";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/view" element={<ViewItem />} />
      <Route exact path="/create" element={<Create />} />
    </Routes>
  </BrowserRouter>
);

export default App;
