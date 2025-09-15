import { RiFileList2Line } from "react-icons/ri";
export default function ProductDescription({ descriptions }) {
    return (
        <div>
            {
                descriptions?.map((data, idx) => (
                    <div className="mb-3">
                        <div className="text-black flex items-center gap-2">
                            <RiFileList2Line size={20} />
                            <h2 className="text-[16px] xl:text-[18px] font-semibold">{data?.title}</h2>
                        </div>
                        <p className="text-[13px] xl:text-[14px] mt-1 text-justify">{data?.description}</p>
                    </div>
                ))
            }
        </div>
    )
}