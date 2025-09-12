'use client'
import { useSearchParams } from "next/navigation"

export default function ProductDetailsContainer(){
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    return(<>
     {id}
    </>)
}