import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [backendOnline, setBackendOnline] = useState(false);
  const [showTOS, setShowTOS] = useState(false);

  // Ping backend
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/tos/current`)
      .then((res) => {
        if (res.ok) setBackendOnline(true);
      })
      .catch(() => setBackendOnline(false));
  }, []);

  return (
    <div className="terminal-screen">
      <pre className="ascii-bunny">
{String.raw`(\__/)
( •_•)   RPG GAME ONLINE
/ >🖳   ${backendOnline ? "✅ Connected to server!" : "❌ Offline"}`}
      </pre>

      <div className="menu-buttons">
        <span className="menu-link">[ Login ]</span>
        <span className="menu-link">[ Register ]</span>
      </div>

      <p className="tos-text">
        By playing, you agree to the{" "}
        <span className="tos-link" onClick={() => setShowTOS(true)}>
          Terms & Conditions
        </span>
      </p>

      {showTOS && (
        <div className="tos-modal-overlay">
          <div className="tos-modal">
            <div className="tos-modal-header">Terms & Conditions</div>

            <div className="tos-modal-body">
              <p>Loading Terms...</p>
            </div>

            <button className="close-btn" onClick={() => setShowTOS(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
