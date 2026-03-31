import { Phone, Mail, Instagram, Send } from "lucide-react";

export default function Contact() {
    return (
        <section className="bg-warm-white py-20">
            <div className="mx-auto px-6 container">
                <div className="gap-12 grid md:grid-cols-5 bg-white shadow-2xl shadow-maroon/10 p-8 md:p-16 border border-maroon/15 rounded-[48px]">
                    <div className="md:col-span-2">
                        <h3 className="mb-6 font-bold text-maroon text-3xl leading-tight">Mari ngobrol<br />seputar desain</h3>
                        <p className="mb-10 text-[#3f3f3f]">Butuh poster untuk acara atau feed yang aesthetic? Saya siap membantu dengan palet maroon yang hangat.</p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center bg-maroon/10 rounded-xl w-12 h-12 text-maroon">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Whatsapp</p>
                                    <p className="font-bold">081249754090</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center bg-maroon/10 rounded-xl w-12 h-12 text-maroon">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Email</p>
                                    <p className="font-bold">fadilahukhti35@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center bg-maroon/10 rounded-xl w-12 h-12 text-maroon">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Instagram</p>
                                    <p className="font-bold">@fadilah_ukhtirianda</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nama kamu"
                                className="bg-[#fcf9f7] px-6 py-4 border-[#ececec] border-2 focus:border-maroon rounded-full focus:outline-none w-full transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Email / No WA"
                                className="bg-[#fcf9f7] px-6 py-4 border-[#ececec] border-2 focus:border-maroon rounded-full focus:outline-none w-full transition-all"
                            />
                            <textarea
                                placeholder="Ceritakan kebutuhan poster atau feed-mu..."
                                rows={4}
                                className="bg-[#fcf9f7] px-6 py-4 border-[#ececec] border-2 focus:border-maroon rounded-[30px] focus:outline-none w-full transition-all resize-none"
                            ></textarea>
                            <button className="flex justify-center items-center gap-3 bg-maroon hover:bg-maroon-dark shadow-lg shadow-maroon/20 py-4 rounded-full w-full font-bold text-white text-lg transition-all">
                                <Send size={20} /> Kirim permintaan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
