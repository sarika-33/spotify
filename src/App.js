import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import SongDetails from "./pages/SongDetails";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import playerStore from "./store/playerStore";

function App() {
  const darkMode = playerStore((state) => state.darkMode);

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "min-h-screen bg-gray-900 text-white transition-all duration-300"
            : "min-h-screen bg-gray-100 text-black transition-all duration-300"
        }
      >
        <div className="flex min-h-screen">
          <Sidebar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/song/:id" element={<SongDetails />} />
            </Routes>

            <Player />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
