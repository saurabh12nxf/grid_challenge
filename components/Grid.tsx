"use client";

import { useState } from "react";

export default function Grid() {
    const [grid, setGrid] = useState<number[]>(Array(9).fill(0));

    const handleClick = (index: number) => {
        if (grid[index] >= 15) return;

        setGrid((prev) => {
            const updated = [...prev];

            updated[index] += 1;
            const newValue = updated[index];

            // divisible by 3 -> affect right neighbor
            if (newValue % 3 === 0) {
                const col = index % 3;
                if (col !== 2) {
                    const rightIndex = index + 1;
                    if (updated[rightIndex] < 15) {
                        updated[rightIndex] -= 1;
                    }
                }
            }

            // divisible by 5 -> affect bottom neighbor
            if (newValue % 5 === 0) {
                const row = Math.floor(index / 3);
                if (row !== 2) {
                    const bottomIndex = index + 3;
                    if (updated[bottomIndex] < 15) {
                        updated[bottomIndex] += 2;
                    }
                }
            }

            return updated;
        });
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
                Recursive Grid Challenge
            </h1>

            <div className="grid grid-cols-3 gap-3 w-fit mx-auto">
                {grid.map((value, index) => {
                    const isLocked = value >= 15;
                    const isEven = value % 2 === 0;

                    let bgColor = "";
                    let textColor = "";
                    let hoverColor = "";

                    if (isLocked) {
                        bgColor = "bg-red-500";
                        textColor = "text-white";
                    } else if (isEven) {
                        bgColor = "bg-gray-300";
                        textColor = "text-black";
                        hoverColor = "hover:bg-gray-400";
                    } else {
                        bgColor = "bg-indigo-900";
                        textColor = "text-white";
                        hoverColor = "hover:bg-indigo-800";
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            disabled={isLocked}
                            className={`
                w-24 h-24 rounded text-2xl font-semibold
                transition-all duration-150
                ${bgColor} ${textColor} ${hoverColor}
                ${isLocked ? "cursor-not-allowed" : ""}
              `}
                            style={{
                                boxShadow: "2px 2px 0px black",
                            }}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>

            <div className="mt-8 text-center text-sm text-slate-600 max-w-md mx-auto">
                <p className="font-semibold mb-2">Rules:</p>
                <ul className="text-left space-y-1">
                    <li>• Click any box to increment its value</li>
                    <li>• Divisible by 3? Decrement right neighbor by 1</li>
                    <li>• Divisible by 5? Increment bottom neighbor by 2</li>
                    <li>• Reach 15? Box locks (red background)</li>
                </ul>
            </div>
        </div>
    );
}
