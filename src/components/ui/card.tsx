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
}> = ({ item, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="bg-zinc-950 border-zinc-800 border text-sm flex px-2 py-1.5 justify-center rounded-md cursor-pointer"
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
              className="bg-zinc-950 rounded-md w-[800px] h-[637px] py-4 px-2 relative"
            >
              <div className="bg-[#313194] rounded-md p-1 mt-6 mb-2">
                BANNER
              </div>
              {dataArray[parseInt(selectedId.split("-")[0])] &&
                dataArray[parseInt(selectedId.split("-")[0])][
                  parseInt(selectedId.split("-")[1])
                ] &&
                Object.entries(
                  dataArray[parseInt(selectedId.split("-")[0])][
                    parseInt(selectedId.split("-")[1])
                  ]
                ).map(
                  ([key, value], index) =>
                    index >= 0 && (
                      <motion.h5 key={key} className="mb-2 text-sm">
                        <span className="uppercase font-bold">{key}</span>:{" "}
                        {value}
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
