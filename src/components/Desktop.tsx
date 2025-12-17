import { useState } from "react";
import Window from "./Window";
import Icon from "./Icon";

type OpenWindow = {
  id: number;
  name: string;
};

export default function Desktop() {
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const [activeWindow, setActiveWindow] = useState<number | null>(null);

  const openWindow = (name: string, id: number) => {
    setWindows((prev) => [...prev, { id, name }]);
    setActiveWindow(id);
  };

  return (
    <div className="w-screen h-screen bg-gray-400 flex items-center justify-center">
      <div className="relative w-[800px] h-[600px] bg-gray-100 border-4 border-black shadow-lg flex flex-col items-center justify-start p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Icon name="My Computer" openWindow={openWindow} />
          <Icon name="Recycle Bin" openWindow={openWindow} />
          <Icon name="Documents" openWindow={openWindow} />
        </div>

        {windows.map((w) => (
          <Window
            key={w.id}
            id={w.id}
            name={w.name}
            isActive={activeWindow === w.id}
            onClick={() => setActiveWindow(w.id)}
            onClose={(id) =>
              setWindows((prev) => prev.filter((win) => win.id !== id))
            }
          />
        ))}
      </div>
    </div>
  );
}