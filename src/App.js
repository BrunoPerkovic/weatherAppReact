import "./App.scss";
import "./Components/Settings/Settings";
import Settings from "./Components/Settings/Settings";
import Navbar from "./Components/Navbar/Navbar";
import NasSwiper from "./Components/Swiper/NasSwiper";

function App() {
  return (
    <div className="App">
      <Settings />
      <NasSwiper />
      <Navbar />
    </div>
  );
}

export default App;
