import DefaultModal from "./Modal";
import { RxCross2 } from "react-icons/rx";
export default function CustomModal({ title, children, open, setOpen }) {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <DefaultModal open={open} setOpen={setOpen} >
            <div>
                <div className="text-black p-4 border-b border-gray-200 flex justify-between items-center">
                    <p className="text-[19px] xl:text-[21px] font-semibold">{title}</p>
                    <div onClick={handleClose} className="inline hover:text-red-600 hover:bg-red-200 rounded-[10px] p-2 cursor-pointer">
                        <RxCross2 size={20}/>
                    </div>
                </div>
                <div className="p-2">
                    {children}
                </div>
            </div>
        </DefaultModal>
    )
}