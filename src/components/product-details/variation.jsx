import { useState } from "react"
export default function Variation({ title, variations, setSelected, selected }) {
    return (
        <div>
            <h3 className="text-[16px] xl:text-[18px] text-black font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-3 mt-2">
                {
                    variations?.map((data, idx) => (
                        <div onClick={()=>{setSelected(data?.id)}} className={`border border-gray-500 px-6 py-[6px] text-[14px] xl:text-[15px] rounded-md cursor-pointer ${selected == data?.id ? 'bg-black text-white' : 'bg-transparent'}`}>
                            {data?.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}