'use client';
import React, { useEffect, useState } from 'react';
import CustomCheckBox from '../custom/CustomCheckBox';

export default function SideBarFilter({ items }) {
  const [checked, setChecked] = useState(false);
  const [itemList, setItemList] = useState(null);

  useEffect(()=>{
    const data = items?.map((item,idx)=>(
      {
        id: item?.id,
        name: item?.name,
        isChecked: false,
      }
    ))
    setItemList(data)
  },[items])

  const handleChecked = (value,idx) => {
    const itemsData= [...items];
    itemsData[idx]['isChecked'] = !itemsData[idx]['isChecked'];
    setItemList(itemsData)
  }

  return (
    <div>
      <h2 className="font-semibold mb-2 border-b border-gray-200 p-4">Categories</h2>
      <div className='px-4 py-2'>
        {itemList?.map((data, idx) => (
          <CustomCheckBox
            label={data?.name}
            name="terms"
            checked={data?.isChecked}
            onChange={(value)=>handleChecked(value,idx)}
            checkboxColor="#dc2626" // red color
            className="my-2"
            labelClassName="text-gray-700"
          />
        ))
        }
      </div>
    </div>
  );
}
