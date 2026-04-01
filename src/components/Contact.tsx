import React, { useState } from "react";
import { Phone, Mail, Instagram, Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, contact, message } = formData;
        const whatsappNumber = "6281249754090";

        // Construct the message
        const text = `Halo Fadilah!%0A%0ANama: ${encodeURIComponent(name)}%0AEmail/WA: ${encodeURIComponent(contact)}%0APesan: ${encodeURIComponent(message)}`;
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${text}`;

        window.open(whatsappUrl, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="bg-warm-white py-20" id="contact">
            <div className="mx-auto px-6 container">
                <div className="gap-12 grid md:grid-cols-5 bg-white shadow-2xl shadow-maroon/10 p-8 md:p-16 border border-maroon/15 rounded-[48px]">
                    <div className="md:col-span-2">
                        <h3 className="mb-6 font-bold text-maroon text-3xl leading-tight">Mari ngobrol<br />seputar desain</h3>
                        <p className="mb-10 text-[#3f3f3f]">Butuh poster untuk acara atau feed yang aesthetic? Saya siap membantu dengan hangat.</p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center bg-maroon/10 rounded-xl w-12 h-12 text-maroon">
                                    <Phone size={24} />
                                </div>
                                <a href="https://wa.me/6281249754090?text=Assalamualaikum," target="_blank" rel="noreferrer">
                                    <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Whatsapp</p>
                                    <p className="font-bold">081249754090</p>
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center bg-maroon/10 rounded-xl w-12 h-12 text-maroon">
                                    <Mail size={24} />
                                </div>
                                <a href="mailto:fukhtirianda@gmail.com" target="_blank" rel="noreferrer">
                                    <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Email</p>
                                    <p className="font-bold">fukhtirianda@gmail.com</p>
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center bg-maroon/10 rounded-xl w-12 h-12 text-maroon">
                                    <Instagram size={24} />
                                </div>
                                <a href="https://instagram.com/fadilah_ukhtirianda" target="_blank" rel="noreferrer">
                                    <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Instagram</p>
                                    <p className="font-bold">@fadilah_ukhtirianda</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nama kamu"
                                required
                                className="bg-[#fcf9f7] px-6 py-4 border-[#ececec] border-2 focus:border-maroon rounded-full focus:outline-none w-full transition-all"
                            />
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="Email / No WA"
                                required
                                className="bg-[#fcf9f7] px-6 py-4 border-[#ececec] border-2 focus:border-maroon rounded-full focus:outline-none w-full transition-all"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Ceritakan kebutuhan poster atau feed-mu..."
                                rows={4}
                                required
                                className="bg-[#fcf9f7] px-6 py-4 border-[#ececec] border-2 focus:border-maroon rounded-[30px] focus:outline-none w-full transition-all resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="flex justify-center items-center gap-3 bg-maroon hover:bg-maroon-dark shadow-lg shadow-maroon/20 py-4 rounded-full w-full font-bold text-white text-lg transition-all"
                            >
                                <Send size={20} /> Kirim permintaan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
