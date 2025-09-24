'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';

const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' },
};

const CustomDrawer = ({
    title,
    isOpen,
    setIsOpen,
    children
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Overlay */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-[150]"
                        onClick={() => setIsOpen(true)} // click outside to close
                    />

                    {/* Drawer */}
                    <motion.div
                        key="drawer"
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 w-2/3 h-screen z-[200] shadow-xl flex flex-col bg-white"
                    >
                        <div className="w-full h-full">
                            <div className='flex items-center justify-between p-3 text-[18px] font-semibold border-b border-gray-300'>
                                <p className='px-1'>{title}</p>
                                <button
                                    className="p-1 rounded-full hover:bg-red-200"
                                    onClick={() => setIsOpen(true)}
                                >
                                    <RxCross2 size={24} />
                                </button>
                            </div>
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CustomDrawer;
