import { motion } from "framer-motion";
import { Image as ImageIcon, Layout, Star, ArrowDown } from "lucide-react";

export default function Portfolio() {
    const portfolioItems = [
        { title: "Jazz Malam", type: "POSTER", icon: <ImageIcon /> },
        { title: "Tips design", type: "FEED", icon: <Layout /> },
        { title: "Festival Maroon", type: "POSTER", icon: <ImageIcon /> },
        { title: "Quote harian", type: "FEED", icon: <ImageIcon /> },
        { title: "Pameran seni", type: "POSTER", icon: <ImageIcon /> },
        { title: "Product spotlight", type: "FEED", icon: <Star /> },
    ];

    return (
        <section className="bg-warm-white py-20">
            <div className="mx-auto px-6 container">
                <h2 className="inline-block after:-bottom-3 after:left-0 after:absolute relative after:bg-maroon mb-12 after:rounded-full after:w-16 after:h-1 font-bold text-3xl md:text-4xl after:content-['']">
                    Karya Terbaru
                </h2>

                <div className="flex gap-4 mb-10 pb-2 overflow-x-auto">
                    <button className="bg-maroon px-6 py-2 rounded-full font-medium text-white whitespace-nowrap">Semua</button>
                    <button className="px-6 py-2 border border-gray-300 rounded-full font-medium text-gray-600 whitespace-nowrap">Poster</button>
                    <button className="px-6 py-2 border border-gray-300 rounded-full font-medium text-gray-600 whitespace-nowrap">Feed</button>
                </div>

                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="group flex flex-col bg-white shadow-lg hover:shadow-2xl hover:shadow-maroon/20 border border-maroon/20 hover:border-maroon rounded-3xl aspect-[4/5] overflow-hidden transition-all"
                        >
                            <div className="flex flex-col flex-1 justify-center items-center gap-4 bg-[#ead7d1] text-maroon">
                                <div className="opacity-60 scale-150">
                                    {item.icon}
                                </div>
                                <span className="font-bold text-sm tracking-widest">{item.type}</span>
                            </div>
                            <div className="bg-maroon px-6 py-4 font-medium text-white text-center tracking-wide">
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="flex items-center gap-2 hover:bg-maroon mx-auto px-8 py-3 border-2 border-maroon rounded-full font-bold text-maroon hover:text-white transition-all">
                        <ArrowDown size={20} /> Lihat lebih banyak
                    </button>
                </div>
            </div>
        </section>
    );
}
