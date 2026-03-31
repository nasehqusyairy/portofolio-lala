import { motion } from "framer-motion";
import { ArrowDown, Image as ImageIcon } from "lucide-react";

export default function Portfolio() {
    const portfolioItems = [
        { title: "Flyer Seminar Nasional", src: "/images/portfolio (1).jpeg" },
        { title: "Poster Feed Instagram", src: "/images/portfolio (2).jpeg" },
        { title: "Brosur Pendaftaran Santri Baru", src: "/images/portfolio (3).jpeg" },
        { title: "Flyer Pelantikan", src: "/images/portfolio (4).jpeg" },
        { title: "Flyer Kajian", src: "/images/portfolio (5).jpeg" },
        { title: "lyer Kajian", src: "/images/portfolio (6).jpeg" },
    ];

    return (
        <section className="bg-warm-white py-20" id="gallery">
            <div className="mx-auto px-6 container">
                <h2 className="inline-block after:-bottom-3 after:left-0 after:absolute relative after:bg-maroon mb-12 after:rounded-full after:w-16 after:h-1 font-bold text-3xl md:text-4xl after:content-['']">
                    Karya Terbaru
                </h2>

                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="group flex flex-col bg-white shadow-lg hover:shadow-2xl hover:shadow-maroon/20 border border-maroon/20 hover:border-maroon rounded-3xl aspect-[4/5] overflow-hidden transition-all"
                        >
                            <div className="relative flex flex-1 justify-center items-center bg-[#ead7d1] overflow-hidden text-maroon">
                                {item.src ? (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-4 opacity-40">
                                        <ImageIcon size={64} strokeWidth={1} />
                                        <span className="font-bold text-xs uppercase tracking-widest">No Preview</span>
                                    </div>
                                )}
                            </div>
                            <div className="bg-maroon px-6 py-4 font-medium text-white text-center tracking-wide">
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex items-center mt-12 text-center">
                    <a href="https://pin.it/3DFRL0OJI" target="_blank" className="flex items-center gap-2 hover:bg-maroon mx-auto px-8 py-3 border-2 border-maroon rounded-full font-bold text-maroon hover:text-white transition-all">
                        <ArrowDown size={20} /> Lihat lebih banyak
                    </a>
                </div>
            </div>
        </section>
    );
}
