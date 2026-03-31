import { motion } from "framer-motion";
import { Palette, MessageSquare, PenTool } from "lucide-react";

export default function Hero() {
    const stats = [
        { number: "50+", label: "Feed Design" },
        { number: "80+", label: "Posters" },
        { number: "100+", label: "Klien" },
    ];

    return (
        <section className="mx-auto px-6 py-16 md:py-24 container">
            <div className="items-center gap-12 grid md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-flex items-center gap-2 bg-maroon/10 mb-6 px-4 py-1.5 border border-maroon/25 rounded-full font-semibold text-maroon text-sm">
                        <PenTool size={16} /> Graphic designer
                    </span>
                    <h1 className="mb-6 font-bold text-[#1a1a1a] text-5xl md:text-6xl leading-tight">
                        Design <span className="border-maroon/25 border-b-4 text-maroon">Beyond</span><br />Ordinary
                    </h1>
                    <p className="mb-10 max-w-lg text-[#444] text-lg">
                        Berpengalaman 3 tahun di dunia kreatif (fotografi, videografi, editing, dan desain grafis), menjadi social media manager selama 6 bulan dengan keahlian aplikasi editing mobile, dan cross-platform. Siap berkontribusi dalam tim kreatif dengan kombinasi komunikasi dan visual, inklusif, dan penuh semangat.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href="https://pin.it/3DFRL0OJI" target="_blank" className="flex items-center gap-2 bg-maroon hover:bg-white shadow-lg shadow-maroon/30 px-8 py-3.5 border-2 border-maroon rounded-full font-medium text-white hover:text-maroon transition-all">
                            <Palette size={20} /> Lihat portfolio
                        </a>
                        <a href="https://wa.me/6281249754090?text=Assalamualaikum," target="_blank" className="flex items-center gap-2 hover:bg-maroon px-8 py-3.5 border-2 border-maroon rounded-full font-medium text-maroon hover:text-white transition-all">
                            <MessageSquare size={20} /> Chat
                        </a>
                    </div>

                    <div className="flex gap-10">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="font-bold text-maroon text-3xl">{stat.number}</span>
                                <span className="font-medium text-[#5f5f5f] text-xs uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="flex justify-center items-center bg-gradient-to-br from-[#ffecec] to-[#fff9f5] shadow-2xl shadow-maroon/30 p-4 border-2 border-maroon border-dashed aspect-square overflow-hidden hero-visual-blob">
                        <img
                            src="/images/hero.jpeg"
                            alt="Fadilah Ukhti Rianda"
                            className="w-full h-full object-cover hero-visual-blob"
                            referrerPolicy="no-referrer"
                        />
                        <div className="hidden md:block right-6 bottom-6 absolute bg-white/90 shadow-xl backdrop-blur-sm p-4 border border-maroon/20 rounded-2xl">
                            <p className="font-bold text-maroon text-sm">Graphic Designer</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Portfolio {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
