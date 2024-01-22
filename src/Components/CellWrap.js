import React, { useState } from "react";
import Cell from "./Cell";

function CellWrap() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const handledeactivate = () => {
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setOrder((prevorder) => {
        const neworder = prevorder.slice();
        neworder.pop();

        if (neworder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return neworder;
      });
    }, 300);
  };

  const handleCellClick = (index) => {
    const neworder = [...order, index];
    setOrder(neworder);

    if (neworder.length === config.flat(1).filter(Boolean).length) {
      handledeactivate();
    }
  };

  return (
    <div className="Wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat().map((value, index) => {
          return value ? (
            <Cell
              key={`Cell${index}`}
              filled={order.includes(index)}
              onClick={() => handleCellClick(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}

export default CellWrap;
