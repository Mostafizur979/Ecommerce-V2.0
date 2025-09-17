'use client';
import React, { useState } from 'react';
import CustomCheckBox from '../custom/CustomCheckBox';

export default function SideBarFilter() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h2 className="font-semibold mb-2 border-b border-gray-200 p-4">Categories</h2>
      <div className='px-4 py-2'>
        <CustomCheckBox
          label="Asus"
          name="terms"
          checked={checked}
          onChange={setChecked}
          checkboxColor="#dc2626" // red color
          className="my-2"
          labelClassName="text-gray-700"
        />
        <CustomCheckBox
          label="Asus"
          name="terms"
          checked={checked}
          onChange={setChecked}
          checkboxColor="#dc2626" // red color
          className="my-2"
          labelClassName="text-gray-700"
        />
        <CustomCheckBox
          label="Asus"
          name="terms"
          checked={checked}
          onChange={setChecked}
          checkboxColor="#dc2626" // red color
          className="my-2"
          labelClassName="text-gray-700"
        />
      </div>
    </div>
  );
}
