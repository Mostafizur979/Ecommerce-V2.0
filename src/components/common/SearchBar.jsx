"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';


const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [isBodyOpen, setIsBodyOpen] = useState(false);
    const router = useRouter();





    const [isModal, setIsModal] = useState(false);
    const [modalData, setModalData] = useState(null);



    function handleVariableProduct(e, item) {
        setIsModal(!isModal);
        setModalData(item);
        // handleColor("white")
    }


    return (
        <div  className={`relative w-full h-[42px] z-[50] flex-1  flex items-center text-white rounded-[4px] ml-0`}>
            {/* search bar */}
            <div className={`w-full h-full bg-white text-white flex items-center rounded-l-[4px]`}>
                <input
                    className='w-full px-3 py-2 text-md rounded-md focus:outline-none font-semibold placeholder:font-medium text-[#666666]'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                    onFocus={(e) => { setIsBodyOpen(true) }}
                />
            </div>
            {/* use search product list clear loading state log */}
            <div className={`w-[42px] h-[42px] text-[#4072B0] bg-[#D9E3EF] bg-opacity-20 rounded-r-[4px] flex justify-center items-center cursor-pointer`}>
                <FiSearch className='text-2xl' />
            </div>
        </div>
    )
}

export default SearchBar;
