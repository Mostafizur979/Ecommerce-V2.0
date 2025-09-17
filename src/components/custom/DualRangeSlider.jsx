import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function DualRangeSlider({ value, setValue }) {
  const handleChange = (event, newValue) => {
    if (value[0] < value[1]) {
      setValue(newValue);
    }
  };

  return (
    <Box>
      <Slider
        min={100}
        max={5000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
          color: "red",
          height: 8,
          "& .MuiSlider-thumb": {
            width: 22,
            height: 22,
            backgroundColor: "red",
            border: "3px solid white",
          },
          "& .MuiSlider-rail": {
            opacity: 0.3,
            backgroundColor: "#ffcccc",
          },
          "& .MuiSlider-track": {
            border: "none",
          },
        }}
      />
    </Box>
  );
}
