import "../src/App.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Overview from "./Pages/Overview";
import DetailWeather from "./Pages/DetailWeather";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/details" element={<DetailWeather />} />
      </Routes>
    </div>
  );
}

export default App;
