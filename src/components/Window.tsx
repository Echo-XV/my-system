export default function Window({ name }: { name: string }) {
  return (
    <div className="absolute top-20 left-20 w-80 h-60 bg-white border shadow-lg p-4">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>This is the {name} window content.</p>
    </div>
  );
}