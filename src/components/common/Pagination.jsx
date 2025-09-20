import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Pagination({ page, pageSize, totalCount, handlePagination }) {
    const [pages, setPages] = useState([]);
    const numberOfPage = Math.ceil(totalCount / pageSize);

    useEffect(() => {
        if (numberOfPage <= 7) {
            // Show all pages if few enough
            setPages([...Array(numberOfPage)].map((_, i) => i + 1));
        } else {
            let pageList = [];
            if (page <= 4) {
                pageList = [1, 2, 3, 4, 5, "...", numberOfPage];
            } else if (page >= numberOfPage - 3) {
                pageList = [1, "...", numberOfPage - 4, numberOfPage - 3, numberOfPage - 2, numberOfPage - 1, numberOfPage];
            } else {
                pageList = [1, "...", page - 1, page, page + 1, "...", numberOfPage];
            }
            setPages(pageList);
        }
    }, [page, pageSize, totalCount]);

    const handleLeftButton = () => {
        if (page > 1) {
            handlePagination(page - 1, pageSize);
        }
    };

    const handleRightButton = () => {
        if (page < numberOfPage) {
            handlePagination(page + 1, pageSize);
        }
    };

    return (
        <div className="flex gap-2 items-center justify-end">
            {/* Prev button */}
            <div
                className={`h-[35px] w-[35px] flex items-center justify-center text-[15px] border rounded-[5px] cursor-pointer 
                ${page === 1 ? "opacity-50 cursor-not-allowed" : "border-gray-400"}`}
                onClick={handleLeftButton}
            >
                <FaAngleLeft />
            </div>

            {/* Page numbers */}
            {pages.map((p, index) => (
                <div
                    key={index}
                    className={`h-[35px] min-w-[35px] flex items-center justify-center text-[15px] rounded-[5px] cursor-pointer
                        ${p === page
                            ? "border border-blue-600 bg-blue-600 text-white"
                            : p === "..."
                                ? "cursor-default text-gray-500"
                                : "border border-gray-400"
                        }`}
                    onClick={() => typeof p === "number" && handlePagination(p, pageSize)}
                >
                    {p}
                </div>
            ))}

            {/* Next button */}
            <div
                className={`h-[35px] w-[35px] flex items-center justify-center text-[15px] border rounded-[5px] cursor-pointer 
                ${page === numberOfPage ? "opacity-50 cursor-not-allowed" : "border-gray-400"}`}
                onClick={handleRightButton}
            >
                <FaAngleRight />
            </div>
        </div>
    );
}
