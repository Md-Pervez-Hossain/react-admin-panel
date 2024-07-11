import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Product from "../../page/Product/Product";

const ExitAnimation = () => {
  const [isProductVisible, setIsProductVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsProductVisible(!isProductVisible)}>
        Toggle Product
      </button>
      <AnimatePresence>{isProductVisible && <Product />}</AnimatePresence>
    </div>
  );
};

export default ExitAnimation;
