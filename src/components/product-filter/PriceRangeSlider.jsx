"use client";
import React, { useState } from "react";
import DualRangeSlider from "../custom/DualRangeSlider";

export default function PriceRangeSlider() {
    const [value, setValue] = useState([100, 5000]);
    const handlePrice = (min, max) => {
        if (min < max) {
            setValue([min, max])
        }
    }

    return (
        <div className="w-full">
            {/* Title */}
            <h2 className="font-semibold mb-2 border-b border-gray-200 p-4">Price Range</h2>
            <div className="p-4">
                {/* Slider */}
                <DualRangeSlider value={value} setValue={setValue} />

                {/* Inputs */}
                <div className="grid grid-cols-2 gap-16 mt-2">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-[5px] outline-none px-4 py-2 w-full text-sm text-center"
                        value={value[0]}
                        onChange={(e) => handlePrice(+e.target.value, value[1])}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 rounded-[5px] outline-none px-4 py-2 w-full text-sm text-center"
                        value={value[1]}
                        onChange={(e) => handlePrice(value[0], +e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
