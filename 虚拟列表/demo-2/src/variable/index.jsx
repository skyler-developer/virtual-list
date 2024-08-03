import React from "react";
import VariableSizeList from "./variable-size-list";

const rowSizes = new Array(10000).fill(true).map(() => 25 + Math.round(Math.random() * 55));
const getItemSize = (index) => rowSizes[index];

const Row = ({ index, style, forwardRef }) => {
    return (
        <div
            className={index % 2 ? "list-item-odd" : "list-item-even"}
            style={style}
            ref={forwardRef}>
            Row {index}
        </div>
    );
};

const App = () => {
    return (
        <VariableSizeList
            className="list"
            height={200}
            width={200}
            itemSize={getItemSize}
            itemCount={1000}>
            {Row}
        </VariableSizeList>
    );
};

export default App;
