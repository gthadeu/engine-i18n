import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface DataArrayItem {
  [key: string]: string;
}

interface Props {
  dataArray: DataArrayItem[][];
}

const CardComponent: React.FC<{
  item: DataArrayItem;
  onClick: () => void;
  isExpanded: boolean;
}> = ({ item, onClick, isExpanded }) => {
  return (
    <motion.div
      onClick={onClick}
      className="bg-red-300 flex px-2 py-1.5 justify-center rounded-md cursor-pointer"
    >
      <div>
        {Object.entries(item)
          .slice(0, 3)
          .map(([key, value]) => (
            <motion.h5 key={key} className="">
              {key}: {value}
            </motion.h5>
          ))}
      </div>
    </motion.div>
  );
};

export const Card: React.FC<Props> = ({ dataArray }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      {dataArray.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-4">
          {row.map((item, index) => (
            <CardComponent
              key={index}
              item={item}
              onClick={() => setSelectedId(`${rowIndex}-${index}`)}
              isExpanded={selectedId === `${rowIndex}-${index}`}
            />
          ))}
        </div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              layoutId={selectedId}
              className="bg-red-500 rounded-md w-[800px] h-[637px] text-center relative"
            >
              {Object.entries(
                dataArray[selectedId.split("-")[0]][selectedId.split("-")[1]]
              ).map(
                ([key, value], index) =>
                  index >= 0 && (
                    <motion.h5 key={key} className="">
                      {key}: {value}
                    </motion.h5>
                  )
              )}
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute top-2 right-2"
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
