import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
    const [height, setHeight] = useState(0);
    const [start, setStart] = useState(0);
    const [startOffset, setStartOffset] = useState(0);
    const [visibleData, setVisibleData] = useState(null);
    const visibleCount = Math.ceil(800 / 20);

    const data = useMemo(() => {
        const data = new Array(10000);
        for (let i = 0; i < data.length; i++) {
            data[i] = `${Math.floor(Math.random() * 100)}_${i}`;
        }
        return data;
    });

    useEffect(() => {
        console.log(data);
        setHeight(data.length * 20);
    }, [data]);

    const handleScroll = (e) => {
        let scrollTop = e.target.scrollTop;
        console.log(e.target.scrollTop);
        let start = Math.floor(scrollTop / 20);
        setVisibleData(data.slice(start, start + visibleCount + 1));
        setStartOffset(scrollTop - (scrollTop % 20));
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <div
                className="infinite-list-container"
                style={{
                    width: "400px",
                    height: "800px",
                    border: "3px black solid",
                    borderRadius: "8px",
                    overflowY: "scroll",
                }}
                onScroll={handleScroll}>
                <div className="infinite-list-phantom" style={{ height: height }}></div>
                <div
                    className="infinite-list"
                    style={{ transform: `translate3d(0,${startOffset}px,0)` }}
                >
                    {visibleData?.map((item, index) => {
                        return (
                            <div
                                className="infinite-list-item"
                                key={index}
                                style={{ height: "20px", lineHeight: "20px" }}>
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
