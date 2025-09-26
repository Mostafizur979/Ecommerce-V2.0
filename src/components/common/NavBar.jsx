'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { HiShoppingCart } from 'react-icons/hi';
import { IMAGE_PATH } from "@/assets";
import SearchBar from "./SearchBar";
import { useCart } from "@/context/CartContext";
export default function NavBar() {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const { openCart, cartItems } = useCart();
    const [itemLen, setItemLen] = useState(0)
    useEffect(() => {
        const totalCartItem = cartItems?.length > 9 ? '9+' : cartItems?.length;
        setItemLen(totalCartItem)
    }, [cartItems])


    return (
        <>
            <div className="w-full bg-[#081621] flex flex-col items-center px-4 sticky xl:relative top-0  z-[17]">
                <div className="w-full max-w-[1350px] flex items-center justify-between gap-4 py-3">
                    <div className="text-white block xl:hidden">
                        {!isMobileMenu ? <MdMenu size={24} onClick={() => { setIsMobileMenu(true); setIsSearchBarOpen(false) }} /> : <RxCross2 size={24} onClick={() => { setIsMobileMenu(false) }} />}
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="/" className="relative w-[120px] h-[40px] xl:w-[117px] xl:h-[52px]">
                            <Image
                                src={IMAGE_PATH?.logo}
                                alt="logo"
                                fill
                                className=""
                            />
                        </Link>
                    </div>

                    <div className="hidden xl:block flex-1 max-w-[600px] z-10">
                        <SearchBar />
                    </div>

                    <div className="text-white flex items-center gap-4 xl:hidden">
                        <IoIosSearch size={24} onClick={() => { setIsSearchBarOpen(!isSearchBarOpen); setIsMobileMenu(false) }} className={`${isSearchBarOpen ? 'text-red-500' : 'text-white'}`} />
                        <div className="relative" onClick={openCart}>
                            <HiShoppingCart size={24} />
                            <p className="absolute top-[-10px] right-[-5px] text-[12px] px-[6px] rounded-full bg-red-500">{itemLen}</p>
                        </div>
                    </div>

                    <div className="hidden xl:flex items-center gap-6">
                        <div onClick={openCart} className="mt-2 text-white">
                            <div className="relative">
                                <HiShoppingCart size={24} />
                                <p className="absolute top-[-10px] right-[-5px] text-[12px] px-[6px] rounded-full bg-red-500">{itemLen}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <FaUser size={23} className="text-red-500" />
                            <div className="leading-4">
                                <p className="text-white text-[15px]">Account</p>
                                <p className="text-[#838383] text-[11px] mt-[2px]">
                                    Register or Login
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isSearchBarOpen && <div className="w-full sticky top-[64px] block xl:hidden z-[10] shadow-lg">
                <SearchBar />
            </div>}
        </>
    );
}
