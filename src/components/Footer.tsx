import { Instagram, Palette, MessageSquare, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1c1c1c] py-12 border-maroon border-t-8 text-gray-400">
            <div className="flex md:flex-row flex-col justify-between items-center gap-8 mx-auto px-6 container">
                <div className="text-sm">© 2025 maroon.visuals — freelance graphic designer</div>

                <div className="flex gap-6">
                    <a href="#" className="text-white hover:text-maroon transition-colors"><Instagram size={24} /></a>
                    <a href="#" className="text-white hover:text-maroon transition-colors"><Palette size={24} /></a>
                    <a href="#" className="text-white hover:text-maroon transition-colors"><MessageSquare size={24} /></a>
                </div>

                <div className="flex items-center gap-1 text-sm">
                    made with <Heart size={16} className="fill-maroon text-maroon" /> & maroon
                </div>
            </div>
        </footer>
    );
}
