import { BrowserRouter, Routes, Route } from "react-router-dom";
import API from "../Components/API"
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<API />}/>
      </Routes>
    </BrowserRouter>
  );
}
