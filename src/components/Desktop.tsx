import { useState } from "react";
import Window from "./Window";

export default function Desktop() {
  const [windows, setWindows] = useState<string[]>([]);

  const openWindow = (name: string) => {
    setWindows((prev) => [...prev, name]);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => openWindow("About")}
        >
          About
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => openWindow("Notes")}
        >
          Notes
        </button>
      </div>

      {windows.map((w, i) => (
        <Window key={i} name={w} />
      ))}
    </div>
  );
}