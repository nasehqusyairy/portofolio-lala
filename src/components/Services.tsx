import { motion } from "framer-motion";
import { Image as ImageIcon, Instagram, Layers } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <ImageIcon className="w-8 h-8" />,
            title: "Poster",
            desc: "Poster event, film, musik, atau campaign. Cetak atau digital, selalu berdampak dan mudah dibaca.",
            tag: "maroon aesthetic"
        },
        {
            icon: <Instagram className="w-8 h-8" />,
            title: "Feed Instagram",
            desc: "Konten feed yang engaging, konsisten dengan brand.",
            tag: "carousel + static"
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Branding Kit",
            desc: "Tambahan: sedikit sentuhan branding untuk memperkuat identitas visual anda.",
            tag: "bonus"
        }
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto px-6 md:text-left text-center container">
                <h2 className="inline-block after:-bottom-3 after:left-0 after:absolute relative after:bg-maroon mb-12 after:rounded-full after:w-16 after:h-1 font-bold text-3xl md:text-4xl after:content-['']">
                    Fokus Utama Saya
                </h2>
                <div className="gap-8 grid md:grid-cols-3 mt-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-beige shadow-sm hover:shadow-maroon/10 hover:shadow-xl p-10 border border-maroon/10 hover:border-maroon rounded-[32px] text-left transition-all"
                        >
                            <div className="flex justify-center items-center bg-maroon/10 mb-6 rounded-2xl w-16 h-16 text-maroon">
                                {service.icon}
                            </div>
                            <h3 className="mb-3 font-bold text-maroon-dark text-2xl">{service.title}</h3>
                            <p className="mb-6 text-[#3a3a3a]">{service.desc}</p>
                            <span className="bg-maroon px-4 py-1 rounded-full font-bold text-white text-xs uppercase tracking-wider">
                                {service.tag}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
