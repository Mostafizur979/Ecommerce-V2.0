'use client'
import Breadcrum from "@/components/common/BreadCrum";
import { MdHome } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import Image from "next/image";
import TopBar from "@/components/product-filter/topbar";
import { useProducts, useCategories } from "@/hooks/useEcommerce";
import ProductSection from "@/components/common/ProductSection";
import PriceRangeSlider from "@/components/product-filter/PriceRangeSlider";
import SideBarFilter from "@/components/product-filter/SideBarFilter";
import { useEffect, useState } from "react";
import Pagination from "@/components/common/Pagination";
import Loader from "@/components/custom/custome-loader";
export default function ProductFilterContainer() {
    const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
    const [isTwo, setIsTwo] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(2);
    const [totalCount, setTotalCount] = useState(1705);
    const [selectedCategories, setSelectCategories] = useState(null);
    const [priceRange, setPriceRange] = useState([0,10000]);
    const [sorting, setSorting] = useState(true);
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const query = new URLSearchParams({
            categories: JSON.stringify(selectedCategories),
            priceRange: JSON.stringify({ min: priceRange[0], max: priceRange[1]}),
            ascending: sorting,
            page: page,
            pageSize: pageSize
        });

        const getFilteredProducts = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/filtered-product/?${query.toString()}`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await res.json();
                console.log("Filtered products:", data);
                setProducts(data?.productList);
                setTotalCount(data?.totalCount);
                setPage(data?.page);
                setPageSize(data?.pageSize)
            } catch (error) {
                console.error(error);
            }
        };
        getFilteredProducts();
    }, [selectedCategories, priceRange, sorting, page, pageSize]);

    const handlePagination = (page, pageSize) => {
        setPage(page);
        setPageSize(pageSize)
    }
    return (
        <>
            <div className="bg-[#F2F4F8]">
                <div className="max-w-[1350px] px-3 2xl:px-0 mx-auto pb-4">
                    <Breadcrum crums={[
                        { title: <MdHome />, href: "/" },
                        { title: "Category", href: "/category" },
                        { title: "Product", isCurrent: true }
                    ]} />
                    <div className="relative w-full h-[220px] xl:h-[475px]">
                        <Image
                            src={"/image.png"}
                            fill
                            className="object-fit"
                        />
                    </div>
                    <TopBar setIsTwo={setIsTwo} setSorting={setSorting} sorting={sorting} />

                    <div className="grid grid-cols-5 gap-3">
                        <div>
                            <div className="bg-white rounded-[5px] shadow-sm">
                                <PriceRangeSlider setPriceRange={setPriceRange} priceRange={priceRange}/>
                            </div>
                            <div className="bg-white rounded-[5px] shadow-sm mt-2">
                                <SideBarFilter items={categories}  setSelected={setSelectCategories}/>
                            </div>
                        </div>
                        <div className="col-span-4">
                            {
                                products ? <ProductSection
                                    columns={isTwo ? 2 : 4}
                                    products={products}
                                /> :
                                    <Loader />
                            }
                            <div>
                                <Pagination
                                    page={page}
                                    pageSize={pageSize}
                                    totalCount={totalCount}
                                    handlePagination={handlePagination}
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}