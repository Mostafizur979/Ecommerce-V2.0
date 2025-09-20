'use client'
import Banner from "@/components/home/Banner"
import Image from "next/image"
import Link from "next/link"
import { BiSolidCommentError } from "react-icons/bi"
import { IoSettingsSharp } from "react-icons/io5"
import { MdHome, MdLaptopChromebook } from "react-icons/md"
import { IMAGE_PATH } from "@/assets"
import Loader from "@/components/custom/custome-loader"
import ProductSection from "@/components/common/ProductSection"
import { useCategories, useProducts } from "@/hooks/useEcommerce"
import NewArrival from "@/components/home/NewArrival"
const HeroSectionCardData = [
    { title: "Laptop Finder", description: "Find your laptop easily", icon: <MdLaptopChromebook /> },
    { title: "Raise a Complain", description: "Share your experience", icon: <BiSolidCommentError /> },
    { title: "Home Service", description: "Get exper help", icon: <MdHome /> },
    { title: "Servicing Center", description: "Repair Your Device", icon: <IoSettingsSharp /> },
]
const othersInfo = [
    {
        title: "Best Laptop Shop in Bangladesh",
        description: "Star Tech is the most popular Laptop Brand Shop in BD. Star Tech Laptop Shop has the perfect device, whether you are a freelancer, officegoer, or student. Gamers love our collection of Gaming Laptops because we always bring the latest laptops in Bangladesh. As the best laptop shop in BD, a customer’s budget is our first concern. We bring the latest Intel Laptop and AMD Laptop under budget for every customer - from starters to expert users. Star Tech is considered the most trusted laptop shop in BD, allowing you to buy the best laptops from top laptop brands in the world. Along with the best laptop brands, our experts provide you with the best buying decisions based on your needs and budget - making Star Tech the trusted and most popular laptop shop in Bangladesh. Star Tech lets you buy an official Apple MacBook Air or MacBook Pro from Apple Store in Bangladesh. Star Tech sells the latest models of the most popular laptop brands, such as - Razer, HP, Dell, Apple MacBook, Asus, Acer, Lenovo, Microsoft Surface, MSI, Gigabyte, Infinix, Walton, Xiaomi MI, Huawei, Chuwi, etc."
    },
    {
        title: "Best Desktop PC Shop In Bangladesh",
        description: "Star Tech has the most comprehensive array of Desktop PCs. We offer top-of-the-line Custom PC, Brand PC, All-in-One PC, and Portable Mini PC at Star Tech outlets, the trusted and most popular Desktop PC shop in Bangladesh, which are spread nationwide. Get your new iMac Desktop or Apple Mac Mini with an international warranty and servicing plan. You can always depend on the Star Tech PC shop experts to build the best desktop PC or computer with parts of your choice. Star Tech is Bangladesh's most reliable repair shop for PC, laptops, & other consumer electronics. Take your gaming or professional content creation to the next level with a large collection of high-end Gaming PC and Editing PC from Star Tech. You can build a complete personal computer with the best desktop PC parts picked by you with our PC Builder feature. The features let you pick PC parts to buy the best desktop PC anytime. Or, you can visit any Star Tech custom PC shop near you to build the best Desktop PC according to your taste, live, and in front of you."
    },
    {
        title: "Best Gaming PC Shop In Bangladesh",
        description: "We at Star Tech love gaming. Therefore, we aim to provide a holistic gaming experience with our best gaming PC shop in Bangladesh, “Star Tech Rig House.” The Rig House is a specialized shop for PC builds with high-end PC components. Star Tech Rig House is highly decorated with the best gaming PC parts for customers to build online Gaming or editing PC. Our gaming PC shop in Bangladesh offers the broadest range of Gaming PC, Gaming Laptops, and Game Consoles from XBOX & PlayStation. Star Tech’s largest Gaming PC shop consists of Gaming Motherboards, Liquid Coolers, Custom Water Cooling for PC, Gaming Casings, high-performance RAM Kits, Graphics Cards, etc. Our exceptional Gaming accessories cover Gaming Chairs, Gaming Sofas, RGB Mousepads, Gaming Headphones, Headphone Stands, RGB Gaming PC Light-Strips and many more. We have strategic partnerships with many world-renowned computer Gaming brands like Razer, PNY, ASRock, Asus, Zadak, GALAX, Noctua, Antec, Lian Li, CRYORIG, EKWB, Gamdias, KWG, XFX, etc. Our gaming concern extends to leading gaming brands, including A4Tech Bloody, SteelSeries, Logitech, Corsair, Redragon, Cooler Master, Fantech, DeepCool, Cougar, Gigabyte & Elgato products at our exclusive Gaming PC Shop."
    },
    {
        title: "Best Office Equipment Shop In Bangladesh",
        description: "Star Tech Ltd. is Bangladesh's most trusted Office Equipment Shop. For more than 18 years, we have been providing the best Office Solution. Take a quick drive to the nearest Star Tech retail center and furnish your home office, Start-up business desk, or corporate space with the best Office Equipment and office supplies. Find Laptops, Desktops, Antiviruses, CCTV & IP Cameras, Printers, Routers, Photocopiers, Attendance Machines, Scanners, Conference Systems, Server Equipment, etc for smooth office operation."
    },
    {
        title: "Largest Gadget Shop In Bangladesh",
        description: "We bring in the most sought gadgets at Star Tech. Only genuine and leading brands of Smart Watch, Earbuds, TV, Power Bank, and Mobile Phone Accessories are available at our Gadget Shop. We are also concerned for creative professionals for whom we bring exciting gadgets like Drones, Studio Equipment, DSLR Camera, Gimbals & Stream Decks from internationally reputed brands like DJI, Blackmagic, Corsair, Zhiyun, Gudsen, and Loupedeck. Star Tech has established the largest gadget shop in BD with the help of an app & E-commerce website. Ease up your chores with Daily Lifestyle gadgets from our gadget shop. Xiaomi, Anker, Micropack, Vention, Fire-Boltt, UGREEN, OnePlus, Apple, Baseus, Orico, Havit, Samsung, and HOCO are a few of the brands we cover."
    },
    {
        title: "Top Mobile Shop in Bangladesh",
        description: "Star Tech mobile phone shop offers the latest smartphones and feature phones from top mobile brands. Samsung, Motorola, Google Pixel, Vivo, Huawei, Xiaomi, OPPO, Mi, Realme, and OnePlus are among the Android smartphone brands at our mobile shop. Star Tech is a one-stop solution for buying iPhones in Bangladesh. Offering extensive warranty, EMI & home delivery service spanning the country, we are the top mobile shop in Bangladesh, presenting the best online shop for mobile phones. Our mobile phone shop has an extensive collection of mobile phone accessories, including chargers, USB Type C Cables, Power Banks, Wireless Chargers, and many more to go with your smartphone."
    },
    {
        title: "Best Home Appliance Shop in Bangladesh",
        description: "Star Tech is a popular home appliance shop in Bangladesh with a variety of top-quality home appliances including air conditioners, washing machines, ovens, refrigerators, geysers, vacuum cleaners, sewing machines, electric room heaters, and more. Star Tech offers home appliances from renowned brands like Samsung, LG, Hitachi, Whirlpool, Singer, Haier, Walton, and so on. To assist customers in selecting the appropriate air conditioner, Star Tech has an AC Ton Calculator, helping determine the ideal AC capacity based on room size and other factors. Star Tech focuses on the evolving needs of modern households and ensures best quality Home Appliance at best price in Bangladesh."
    },
    {
        title: "Trusted Online Shopping From Bangladesh at The Best E-Commerce Website",
        description: "Star Tech believes the most in customer satisfaction. To meet the surging demand for online shopping from Bangladesh, we launched our E-Commerce website. our highly trusted online shop has been regarded as one of the best E-Commerce websites with most visits. Star Tech is revolutionizing online shopping in Bangladesh, featuring a brilliant search engine that helps our valued customers find their desired products easily. We have developed the most comprehensive PC Builder App, also integrated into our online retail store. With the PC Builder, you can build your Custom PC for gaming or productivity, save the build, and get an estimated budget, wattage, and detailed performance report. Our E-Commerce platform runs a variety of campaigns and exciting deals on multiple national & international occasions. a few of our most successful events are - Mistery Box, Flash sale, Special offer, Thursday Thunder, Anniversary Special Offer, New Year Offer, 11.11, 12.12 Campaign, and many more. We also arrange special eSports Online Gaming Events and tournaments for Bangladeshi gamers in partnership with renowned gaming brands like Razer and Asus ROG."
    },
    {
        title: "Best Price, Product, After-sales Customer Service, & Fastest Delivery",
        description: "Star Tech Ltd. has taken care of its customers since the beginning. Whether a customer is purchasing or inquiring, our customers get the highest priority. We deliver the best product for the best price with extended after-sales support & the highest standard of customer service. We offer your desired product within the fastest delivery timeframe. With our nationwide presence, we cover all 64 districts of Bangladesh. Our distribution hubs are located in Dhaka, Chattogram, Khulna, Rangpur, Gazipur, Rajshahi, and Mymensingh. We also have over 15 dedicated service centers and are proud to offer computer home service for the first time in Bangladesh. The plan to expand our operations in other cities is already in motion."
    }
];

export default function HomepageContainer() {
    const { products, loading: productsLoading, error: productsError } = useProducts();
    const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

    return (
        <>
            <div className="max-w-[1350px] min-h-[100vh] px-3 2xl:px-0 mx-auto">
                <Banner />
                <div className="w-full bg-white text-[#444444] text-[14px] rounded-2xl shadow-sm overflow-hidden p-2 my-5">
                    <div className="animate-marquee whitespace-nowrap">
                        <span className="mx-8">Monday, 1 September, All our branches are open. Additionally, our online activities are open and operational. </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
                    {HeroSectionCardData.map((data, idx) => (
                        <Link href="" className="flex items-center gap-5 bg-white py-4 px-5 rounded-md shadow-sm">
                            <div className="bg-[#EF4A23] flex items-center text-[20px] xl:text-[24px] text-white p-3 rounded-full">
                                {data.icon}
                            </div>
                            <div>
                                <p className="text-[13px] xl:text-[18px] text-black font-semibold">{data.title}</p>
                                <p className="hidden xl:block text-[15px] text-[#444444]">{data.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-16">
                   {
                           products ? <NewArrival
                                products={products}
                            /> :
                                <Loader />
                        }
                </div>

                <div className="mt-16">
                    <div>
                        <h2 className="text-[18px] lg:text-[20px] text-black text-center font-semibold">Featured Category</h2>
                        <p className="text-[14px] lg:text-[15px] text-[#01132D] text-center">Get Your Desired Product from Featured Category!</p>
                    </div>
                    <div className="grid grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-3 mt-8">
                        {categories?
                            categories?.map((data, idx) => (
                                <Link href={{ pathname: "/category", query: { cid: data?.id } }} key={data?.id} className="flex flex-col items-center bg-white rounded-xl shadow-md py-[15px] cursor-pointer">
                                    <div className="p-[15px]">
                                        <div className="relative h-[30px] w-[30px] xl:h-[48px] xl:w-[48px]">
                                            <Image
                                                src={data.image == "no-image" ? IMAGE_PATH.no_image : `data:image/png;base64,${data?.image}`}
                                                fill
                                                className='object-fit'
                                                alt="category-image"
                                            />

                                        </div>
                                    </div>
                                    <p className="w-full text-[13px] xl:text-[16px] text-[#01123D] text-center px-[10px] truncate">{data.name}</p>
                                </Link>
                            )) :
                            <div className="col-span-8">
                                <Loader />
                            </div>
                        }
                    </div>
                </div>

                <div className="mt-16">
                    <div>
                        <h2 className="text-[18px] lg:text-[20px] text-black text-center font-semibold">Featured Products</h2>
                        <p className="text-[14px] lg:text-[15px] text-[#01132D] text-center">Check & Get Your Desired Product!</p>
                    </div>
                    <div className="mt-8">
                        {
                           products ? <ProductSection
                                products={products}
                            /> :
                                <Loader />
                        }
                    </div>
                </div>

                <div className="mt-16 mb-10">
                    <div>
                        <h1 className="text-[20px] lg:text-[22px] text-black mb-5">Leading Computer, Laptop & Gaming PC Retail & Online Shop in Bangladesh</h1>
                        <p className="text-[14px] lg:text-[15px] text-[#01132D] text-justify">Technology has become a part of our daily lives, and we depend on tech products daily for a vast portion of our lives. There is hardly a home in Bangladesh without a tech product. This is where we come in. Star Tech Ltd. started as a Tech Product Shop in March 2007. We focus on giving the best customer service in Bangladesh, following our motto of “Customer Comes First.” This is why Star Tech is the most trusted computer shop in Bangladesh today, capturing the loyalty of a large customer base. After a long 16-year journey, Star Tech Ltd. was certified with the renowned "ISO 9001:2015 certification" as a recognition for the best Quality Control Management System. As an ISO-certified organization, Star Tech Ltd. is now up to the international standards that specify a Quality Management System (QMS). This Certification denotes that the organization strictly maintains all sorts of regulatory requirements to provide customers with products and services of a global standard.</p>
                    </div>
                    {
                        othersInfo.map((data, idx) => (
                            <div>
                                <h1 className="text-[20px] lg:text-[22px] text-black mt-6 mb-3">{data.title}</h1>
                                <p className="text-[14px] lg:text-[15px] text-[#01132D] text-justify">{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}