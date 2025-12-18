import { useState } from "react";
import Window from "./Window";
import Icon from "./Icon";

const DESKTOP_WIDTH = 800;
const DESKTOP_HEIGHT = 600;

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
      <div
        className="relative overflow-hidden border-4 border-black shadow-lg"
        style={{ width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT }}
      >
        <div className="absolute inset-0 z-0 bg-gray-100" />
        <div className="absolute inset-0 z-10 p-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Icon name="My Computer" openWindow={openWindow} />
            <Icon name="Recycle Bin" openWindow={openWindow} />
            <Icon name="Documents" openWindow={openWindow} />
          </div>
        </div>
        <div className="absolute inset-0 z-20">
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
              dragBounds={{left: 0, right: DESKTOP_WIDTH - 256, top: 0, bottom: DESKTOP_HEIGHT - 192 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}