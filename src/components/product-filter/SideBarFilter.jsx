'use client';
import React, { useEffect, useState } from 'react';
import CustomCheckBox from '../custom/CustomCheckBox';

export default function SideBarFilter({ items, setSelected, selected}) {
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
    setItemList(itemsData);

    const checked = itemsData?.filter(data => data?.isChecked);
    const checkdIds = checked?.map((data)=>{ return data?.id});
    setSelected(checkdIds)
  }

  return (
    <div>
      <h2 className="font-semibold mb-2 border-b border-gray-200 p-4">Categories</h2>
      <div className='px-4 py-2'>
        {itemList?.map((data, idx) => (
          <CustomCheckBox
            label={data?.name}
            name="terms"
            checked={selected?.find(id=>id==data?.id)}
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
