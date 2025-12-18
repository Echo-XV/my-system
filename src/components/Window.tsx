import {motion} from "framer-motion";

type WindowProps = {
  id: number;
  name: string;
  isActive?: boolean;
  onClick?: () => void;
  onClose?: (id: number) => void;
  dragBounds?: {left: number; right: number; top: number; bottom: number};
};

export default function Window({ id, name, isActive, onClick, onClose, dragBounds }: WindowProps) {
  return (
    <motion.div drag dragConstraints={dragBounds} onDragStart={onClick} whileDrag={{cursor: "grabbing"}} onClick={onClick}>
        <div
            className={`absolute w-64 h-48 bg-white border shadow-lg p-4 cursor-move ${
            isActive ? "z-50" : "z-10"
            }`}
        >
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold">{name}</h2>
                {onClose && (
                    <button
                        className="ml-2 text-red-500 font-bold"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose(id);
                        }}
                    >
                        ✕
                    </button>
                )}
            </div>
            <p>This is the {name} window content.</p>
        </div>
    </motion.div>
  );
}