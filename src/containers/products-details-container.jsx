'use client'
import { useSearchParams } from "next/navigation"
import { useProductDetails } from "@/hooks/useEcommerce"
import ProductViewSection from "@/components/product-details/product-view-section";
import Breadcrum from "@/components/common/BreadCrum";
import { MdHome } from "react-icons/md";
export default function ProductDetailsContainer() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const { product, loading: productLoading, error: productError } = useProductDetails(id);

    return (<>
        <div className="bg-white">
            <div className="max-w-[1350px] min-h-[100vh] px-3 2xl:px-0 mx-auto mt-2">
                <Breadcrum crums={[
                    { title: <MdHome />, href: "/" },
                    { title: product?.categoryName, href: "/category" },
                    { title: product?.name, isCurrent: true }
                ]} />
                {product && <ProductViewSection product={product} />}
            </div>
        </div>
    </>)
}