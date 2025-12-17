type IconProps = {
  name: string;
  openWindow: (name: string, id: number) => void;
};

export default function Icon({ name, openWindow }: IconProps) {
  const handleClick = () => {
    const id = Date.now(); // unique ID for the window
    openWindow(name, id);
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}