import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            title: "Social Media Management & Guide Travel Haji dan Umroh Tombo Ati Malang",
            date: "22 Agustus – 30 September 2024",
            points: [
                "Membuat konten promosi",
                "Membantu membuat konten planner instagram dan tiktok",
                "Menjadi Guide Manasikk Umroh dan Haji"
            ]
        },
        {
            title: "Fotografer & Editor Visual Media Assunniyah",
            date: "10 Juli – 10 Agustus 2024",
            points: [
                "Membuat majalah Pondok Pesantren Assunniyah dan Katalog Bilna Hijab | Agustus 2024",
                "Bertanggung jawab atas editorial visual dan layout majalah digital",
                "Menyusun narasi foto dan desain halaman untuk edisi bulanan"
            ]
        },
        {
            title: "Media Kreatif Awanku Projek",
            date: "5 Juli 2020 - Sekarang",
            points: [
                "Jasa Visualisasi Produk",
                "Dokumentasi Event",
                "Desain Grafis"
            ]
        }
    ];

    return (
        <section className="bg-white py-20" id="experience">
            <div className="mx-auto px-6 container">
                <h2 className="inline-block after:-bottom-3 after:left-0 after:absolute relative after:bg-maroon mb-12 after:rounded-full after:w-16 after:h-1 font-bold text-3xl md:text-4xl after:content-['']">
                    Pengalaman Magang
                </h2>

                <div className="gap-8 grid mt-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-beige shadow-sm hover:shadow-maroon/10 hover:shadow-xl p-8 md:p-10 border border-maroon/10 hover:border-maroon rounded-[32px] transition-all"
                        >
                            <div className="flex md:flex-row flex-col justify-between md:items-center gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex justify-center items-center bg-maroon rounded-xl w-12 h-12 text-white">
                                        <Briefcase size={24} />
                                    </div>
                                    <h3 className="font-bold text-maroon-dark text-xl md:text-2xl">{exp.title}</h3>
                                </div>
                                <div className="flex items-center gap-2 bg-maroon/10 px-4 py-2 rounded-full font-semibold text-maroon text-sm">
                                    <Calendar size={16} />
                                    {exp.date}
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.points.map((point, j) => (
                                    <li key={j} className="flex items-start gap-3 text-[#3a3a3a]">
                                        <CheckCircle2 size={20} className="mt-0.5 text-maroon shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
