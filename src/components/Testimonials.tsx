import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto px-6 container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-beige shadow-2xl shadow-maroon/10 mx-auto p-10 md:p-16 border border-maroon rounded-[40px] max-w-4xl text-center"
                >
                    <Quote size={48} className="opacity-30 mx-auto mb-6 text-maroon" />
                    <p className="text-[#232323] text-xl md:text-2xl italic leading-relaxed">
                        “Desain posternya strong, warna maroon yang dipakai selalu jadi ciri khas. Feed instagram saya naik engagement berkat visual yang konsisten.”
                    </p>
                    <div className="mt-8 font-bold text-maroon text-xl">
                        — Rania C. <span className="font-normal text-[#5f5f5f]">founder @coffeelokal</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
