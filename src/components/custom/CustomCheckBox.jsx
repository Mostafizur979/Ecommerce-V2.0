'use client';
import React from 'react';

const CustomCheckBox = ({
  label,
  name,
  checked,
  onChange,
  className = "",
  labelClassName = "",
  checkboxColor
}) => {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer select-none ${className}`}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ accentColor: checkboxColor ? checkboxColor : '#16A34A' }}
        className="h-4 w-4 cursor-pointer rounded"
      />
      <span className={`text-sm ${labelClassName}`}>{label}</span>
    </label>
  );
};

export default CustomCheckBox;
