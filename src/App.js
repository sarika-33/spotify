import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Discover from "./pages/Discover";
import SongDetails from "./pages/SongDetails";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      {/* GLOBAL THEME WRAPPER */}
      <div
        className={
          darkMode
            ? "min-h-screen bg-gray-900 text-white"
            : "min-h-screen bg-gray-100 text-black"
        }
      >
        <div className="flex min-h-screen">
          {/* ✅ PASS darkMode HERE */}
          <Sidebar darkMode={darkMode} />

          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <Discover
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                  />
                }
              />
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
