import { Route, Routes } from "react-router-dom";
import "./css/index.css";
import { Hero } from "./layout/Hero";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Hero/>}/>
      </Routes>
    </>
  );
}

export default App;
