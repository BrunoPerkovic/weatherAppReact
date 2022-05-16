import "./App.scss";
import "./Components/Settings/Settings";
import Settings from "./Components/Settings/Settings";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Settings />
      <Navbar />
    </div>
  );
}

export default App;
