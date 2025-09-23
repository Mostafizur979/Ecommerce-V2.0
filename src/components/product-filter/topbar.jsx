import { IoFilter } from "react-icons/io5"
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
export default function TopBar({setIsTwo, setSorting, sorting}) {
    return (
        <>
            <div className="grid grid-cols-5 border-y border-gray-200 my-4 bg-white px-4 items-center">
                <div className="flex items-center justify-between py-[18px] pr-[18px] text-[14px] xl:text-[15px] text-black border-r border-gray-200">
                    <p>Hide Filters</p>
                    <IoFilter size={24} />
                </div>
                <div className="col-span-3 flex justify-between p-[18px] text-[20px] xl:text-[22px] text-black font-semibold border-r border-gray-200">
                    <p>Men's Shoes</p>
                    <div className="flex items-center gap-4">
                        <TfiLayoutGrid2Alt onClick={()=> setIsTwo(true)}/>
                        <TfiLayoutGrid4Alt onClick={() => setIsTwo(false)}/>
                    </div>
                </div>
                <div className="flex items-center justify-between p-[18px] pr-0 text-[14px] xl:text-[15px] text-black">
                    <p>Sort By:</p>
                    <div>
                        <select onChange={(e)=> {setSorting(e.target.value)}}>
                            <option value="new">New Arrivals</option>
                            <option value={true}>Price Low To High</option>
                            <option value={false}>Price Hight To Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}