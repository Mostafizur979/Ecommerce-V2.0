// components/Footer.js
'use client'
import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { LiaAppStoreIos } from "react-icons/lia";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='w-full bg-black flex flex-col items-center justify-center p-[50px]'>
      <div className="w-full max-w-[1350px] grid grid-cols-1 lg:grid-cols-4 lg:gap-16">
        <div className="text-white">
          <h1 className="text-[14px] text-center lg:text-left mb-3 lg:mb-[30px] tracking-[5px]">SUPPORT</h1>
          <div className="flex items-center gap-4 py-[10px] border border-gray-100 rounded-full mb-5 hover:border-[1px] hover:border-[#EF4A23] cursor-pointer">
            <div className="border-r-[0.2px] border-[#F2F4F8] pr-[10px] pl-[20px]"><BsFillTelephoneFill size={24} /></div>
            <div>
              <p className="text-[12px] text-[#838383]">9 AM - 8 PM</p>
              <p className="text-[20px] text-[#EF4A23]">16325</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-[10px] border border-gray-100 rounded-full mb-5 hover:border-[1px] hover:border-[#EF4A23] cursor-pointer">
            <div className="border-r-[0.2px] border-[#F2F4F8] pr-[10px] pl-[20px]"><BsFillTelephoneFill size={24} /></div>
            <div>
              <p className="text-[12px] text-[#838383]">Store Locator</p>
              <p className="text-[20px] text-[#EF4A23]">Find Our Stores</p>
            </div>
          </div>
        </div>
        <div className="text-white col-span-2">
          <h1 className="text-[14px] text-center lg:text-left mb-3 lg:mb-[30px] tracking-[5px]">
            ABOUT US
          </h1>

          {/* For desktop (grid view) */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-5">
            <div>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Affiliate Program</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Online Delivery</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Refund and Return Policy</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Blog</Link></p>
            </div>
            <div>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">EMI Terms</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Privacy Policy</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Star Point Policy</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Contact Us</Link></p>
            </div>
            <div>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">About Us</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Terms and Conditions</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Career</Link></p>
              <p><Link href="" className="pb-5 text-[14px] text-[#838383] hover:text-[#EF4A23] hover:underline cursor-pointer">Brands</Link></p>
            </div>
          </div>

          {/* For mobile (inline with dots) */}
          <div className="flex flex-wrap justify-center gap-2 text-center text-[14px] text-[#838383] lg:hidden">
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Affiliate Program</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">EMI Terms</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">About Us</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Online Delivery</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Privacy Policy</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Terms and Conditions</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Refund and Return Policy</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Star Point Policy</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Career</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Blog</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Contact Us</Link>
            <span>•</span>
            <Link href="" className="hover:text-[#EF4A23] cursor-pointer">Brands</Link>
          </div>
        </div>
        <div className="text-white py-5 lg:py-0">
          <h1 className="text-[14px] text-center lg:text-left mb-3 lg:mb-[30px] tracking-[5px]">STAY CONNECTED</h1>
          <div className="text-center lg:text-left">
            <p className="pb-2 lg:pb-3 text-[14px] text-white font-semibold">Greentech Agro</p>
            <p className="pb-2 lg:pb-3 text-[14px] text-[#838383]">Head Office: Baneshwar bazar (Infront of Pubali Bank) Puthia, Rajshahi-6260</p>
            <p className="pb-2 lg:pb-3 text-[14px] text-[#838383]">Email: <span className="text-[#EF4A23] hover:underline hover:underline-offset-1">support@greentechagronursery.com</span></p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1350px] grid grid-cols-1 lg:grid-cols-2 py-[15px] border-y-[1px] border-[#a9a9aa]">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <p className="text-[12px] text-[#838383]">Experience PocketX App on your mobile:</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-2 py-1 border border-[#fdfdfd] text-white rounded-[10px]">
              <PiGooglePlayLogoLight size={24} />
              <div>
                <p className="text-[10px] text-[#838383]">Download on</p>
                <p className="text-[14px] -mt-1">Google Play</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 border border-[#fdfdfd] text-white rounded-[10px]">
              <LiaAppStoreIos size={24} />
              <div>
                <p className="text-[10px] text-[#838383]">Download on</p>
                <p className="text-[14px] -mt-1">App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-center lg:justify-end items-center mt-4 lg:mt-0">
          <Link href="" className="p-2 bg-[#3a3939] hover:bg-blue-700 text-white rounded-full">
            <RiWhatsappFill size={24} />
          </Link>
          <Link href="" className="p-2  bg-[#3a3939] hover:bg-blue-700 text-white rounded-full">
            <FaFacebookF size={24} />
          </Link>
          <Link href="" className="p-2  bg-[#3a3939] hover:bg-blue-700 text-white rounded-full">
            <FaYoutube size={24} />
          </Link>
          <Link href="" className="p-2  bg-[#3a3939] hover:bg-blue-700 text-white rounded-full">
            <FiInstagram size={24} />
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[1350px] grid grid-cols-1 lg:grid-cols-2 gap-2 text-[12px] text-[#838383] mt-5">
          <div className="flex items-center justify-center lg:justify-start">
            <AiOutlineCopyright size={12} /> <span>2025 Greentech Agro | All rights reserved</span>
          </div>
          <div className="text-center lg:text-end">
            <p>Powered By: Greentech Agro</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;