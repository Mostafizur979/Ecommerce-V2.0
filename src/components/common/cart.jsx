"use client";
import CustomDrawer from "../custom/custom-drawer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
    const {
        isCartOpen,
        closeCart,
        cartItems,
        removeFromCart,
        increaseQty,
        decreaseQty
    } = useCart();

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const discount = cartItems.reduce(
        (sum, item) => sum + item.discount * item.quantity,
        0
    );
    const total = subtotal - discount;

    if (!isCartOpen) return null;

    return (
        <div className="font-sans">
            <CustomDrawer
                title={
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                            <FiShoppingCart className="text-white text-xl" />
                        </div>
                        <div>
                            <h2 className="text-[20px] xl:text-[22px] font-bold text-gray-900">
                                Shopping Cart
                            </h2>
                            <p className="text-[13px] xl:text-[14px] text-gray-500">
                                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                            </p>
                        </div>
                    </div>
                }
                isOpen={isCartOpen}
                handleClick={closeCart}
                position="right"
                width="w-full max-w-md"
            >
                <div className="flex flex-col h-[90vh] p-3 relative">
                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto py-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaShoppingBag className="text-gray-400 text-2xl" />
                                </div>
                                <p className="text-gray-500  text-[16px] xl:text-lg font-medium">
                                    Your cart is empty
                                </p>
                                <p className="text-gray-400 text-[13px] xl:text-[14px] mt-1">
                                    Start adding some items!
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                                    >
                                        <div className="p-4">
                                            <div className="flex gap-3 items-center relative">
                                                <div className="flex-shrink-0">
                                                    <div className="relative">
                                                        <Image
                                                            src={item?.image == "no-image" ? IMAGE_PATH.no_image : `data:image/png;base64,${item?.image}`}
                                                            alt={item.name}
                                                            width={80}
                                                            height={80}
                                                            className="rounded-lg object-contain border border-gray-200 w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-gray-900 text-[13px] xl:text-[14px] line-clamp-2 mb-1">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-[11px] xl:text-[12px] text-gray-500 mb-2 capitalize">
                                                        {item.category}
                                                    </p>
                                                    <div className="flex gap-2 items-center">
                                                        <p className="text-[14px] xl:text-[16px] font-bold text-green-600">
                                                            ${(item.price - item?.discount)?.toFixed(2)}
                                                        </p>
                                                        <p className="text-[12px] xl:text-[14px] font-bold text-red-600 line-through">
                                                            ${(item.price)?.toFixed(2)}
                                                        </p>
                                                    </div>

                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                                >
                                                    <RxCross2 size={14} />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center border border-gray-200 rounded-lg">
                                                    <button
                                                        onClick={() =>
                                                            decreaseQty(item.id)
                                                        }
                                                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-l-lg transition-colors"
                                                    >
                                                        <FaMinus size={12} />
                                                    </button>
                                                    <span className="px-4 py-2 text-[13px] xl:text-[14px] font-medium text-gray-900 min-w-[3rem] text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            increaseQty(item.id)
                                                        }
                                                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-r-lg transition-colors"
                                                    >
                                                        <FaPlus size={12} />
                                                    </button>
                                                </div>

                                                <div className="text-right">
                                                    <p className="text-[13px] xl:text-[14px] text-gray-500">Total</p>
                                                    <p className="font-bold text-gray-900">
                                                        ${((item.price -item?.discount) * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cart Summary */}
                    {cartItems.length > 0 && (
                        <div className="border-t border-gray-200 pt-4 pb-6">
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-[13px] xl:text-[14px]">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[13px] xl:text-[14px]">
                                    <span className="text-gray-600">Discount</span>
                                    <span className="font-medium">${discount.toFixed(2)}</span>
                                </div>
            
                                <div className="border-t pt-3">
                                    <div className="flex justify-between text-[15px] xl:text-[16px] font-bold">
                                        <span>Total</span>
                                        <span className="text-black">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 absolute w-full pr-[22px] bottom-[2px]">
                                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </CustomDrawer>
        </div>
    );
}
