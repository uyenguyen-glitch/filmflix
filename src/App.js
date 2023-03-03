import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

import LogIn from "./pages/Login/LogIn";
import Movies from "./pages/Movies/Movies";
import Register from "./pages/Register/Register";
import TVSeries from "./pages/TVSeries/TVSeries";
import Maintemplate from "./template/Maintemplate";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Maintemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvSeries" element={<TVSeries />} />
        </Route>

        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
