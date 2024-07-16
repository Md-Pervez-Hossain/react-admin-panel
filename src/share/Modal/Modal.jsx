import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";

const Modal = ({ isOpen, closeModal, children, title }) => {
  const modalRef = useClickAway(() => {
    closeModal();
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: -50,
              scale: 0.5,
              transition: {
                duration: 0.5,
              },
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            ref={modalRef}
            className="w-[90%] max-w-5xl bg-white text-black rounded-lg z-[60] modal-content transform scale-100 mx-auto max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between bg-primary/10 text-black p-5 rounded-t-lg sticky top-0 z-50">
              <h2 className="text-[18px] font-[500]">{title}</h2>
              <button onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 19L19 6"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 19L6 6"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="p-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
