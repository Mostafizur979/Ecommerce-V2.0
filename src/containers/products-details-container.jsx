'use client'
import { useSearchParams } from "next/navigation"
import { useProductDetails, useProducts } from "@/hooks/useEcommerce"
import ProductViewSection from "@/components/product-details/product-view-section";
import Breadcrum from "@/components/common/BreadCrum";
import { MdHome } from "react-icons/md";
import ProductSection from "@/components/common/ProductSection";
import { useEffect, useState } from "react";
import Loader from "@/components/custom/custome-loader";
export default function ProductDetailsContainer() {
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const { product, loading: productLoading, error: productError, refetch } = useProductDetails(id);
    const { products } = useProducts();

    useEffect(() => {
        if (!id) return;
        refetch(); 

        let recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        recent = recent.filter(pid => pid !== id); 
        recent.unshift(id); 
        if (recent.length > 10) recent = recent.slice(0, 10);
        localStorage.setItem("recentlyViewed", JSON.stringify(recent));

    }, [id, refetch]);

    useEffect(() => {
        if (!products) return;

        const recentIds = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        const recentItems = recentIds
            .map(rid => products.find(p => p?.id == rid))
            .filter(Boolean); 
        setRecentlyViewed(recentItems);

    }, [products,id]);

    return (
        <>
            <div className="bg-white">
                <div className="max-w-[1350px] px-3 2xl:px-0 mx-auto mt-2">
                    <Breadcrum crums={[
                        { title: <MdHome />, href: "/" },
                        { title: product?.categoryName, href: "/category" },
                        { title: product?.name, isCurrent: true }
                    ]} />
                    {product && <ProductViewSection product={product} />}
                </div>
            </div>
            <div className="mt-16">
                <div className="max-w-[1350px] px-3 2xl:px-0 mx-auto mt-2">
                    <div className="flex flex-col items-center relative pb-10">
                        <div className="w-full h-[1px] bg-gray-600"></div>
                        <h2 className="inline absolute top-[-12px] px-5 text-[15px] lg:text-[16px] text-black bg-[#F2F4F8] text-center font-semibold tracking-widest">RELATED PRODUCTS</h2>
                    </div>
                    {
                        products ? <ProductSection
                            products={products}
                        /> :
                            <Loader />
                    }
                </div>
            </div>
            <div className="mt-16">
                <div className="max-w-[1350px] px-3 2xl:px-0 mx-auto mt-2">
                    <div className="flex flex-col items-center relative pb-10">
                        <div className="w-full h-[1px] bg-gray-600"></div>
                        <h2 className="inline absolute top-[-12px] px-5 text-[15px] lg:text-[16px] text-black bg-[#F2F4F8] text-center font-semibold uppercase tracking-widest">Recently viewed items</h2>
                    </div>
                    {
                        recentlyViewed ? <ProductSection
                            products={recentlyViewed}
                        /> :
                            <Loader />
                    }
                </div>
            </div>
        </>
    )
}