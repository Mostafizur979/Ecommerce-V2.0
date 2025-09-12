'use client'
import { useSearchParams } from "next/navigation"
import { useProductDetails } from "@/hooks/useEcommerce"
import ProductViewSection from "@/components/product-details/product-view-section";
export default function ProductDetailsContainer() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const { product, loading: productLoading, error: productError } = useProductDetails(id);
    
    return (<>
        <div className="mt-2">
            {product && <ProductViewSection product={product} />}
        </div>
    </>)
}