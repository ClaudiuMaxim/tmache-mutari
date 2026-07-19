
import {Phone,MessageCircle,Truck,Building2,House,PackageCheck,Wrench,Archive} from "lucide-react";
import {motion} from "framer-motion";
const cards=[
["Mutări apartamente",House],["Mutări case",Truck],["Mutări birouri",Building2],
["Transport mobilier",PackageCheck],["Electrocasnice",Archive],["Încărcare / Descărcare",Truck],
["Montaj mobilier",Wrench],["Golire imobile",PackageCheck]
];
export default function App(){
return <div className="bg-slate-50 text-slate-800">
<header className="relative min-h-screen overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,.82),rgba(2,6,23,.45)),url('/hero.png')] bg-cover bg-center"/>
<nav className="fixed z-50 w-full backdrop-blur-md bg-slate-950/30 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between text-white">
<b className="text-xl">TOMACHE MUTĂRI</b>
<div className="flex gap-5"><a href="#servicii">Servicii</a><a href="#contact">Contact</a></div>
</div></nav>
<div className="relative max-w-7xl mx-auto px-6 flex items-center min-h-screen">
<motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
<span className="px-4 py-2 rounded-full bg-amber-400/20 text-amber-300">🚚 Transport & Mutări Profesionale</span>
<h1 className="text-7xl md:text-8xl font-black text-white mt-6">TOMACHE<br/>MUTĂRI</h1>
<p className="text-slate-200 text-xl max-w-2xl mt-6">Mutări apartamente, case și birouri. Transport mobilier, electrocasnice, demontare și montare mobilier, încărcare/descărcare și golire imobile.</p>
<div className="flex gap-4 mt-10 flex-wrap">
<a href="tel:0750873386" className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2"><Phone size={20}/>Sună acum</a>
<a href="https://wa.me/40750873386" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2"><MessageCircle size={20}/>WhatsApp</a>
</div>
</motion.div></div>
</header>
<section id="servicii" className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-5xl font-black text-center">Serviciile Noastre</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
{cards.map(([t,I],i)=><motion.div key={t} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300 border border-slate-100">
<I className="text-red-600" size={42}/>
<h3 className="font-bold text-xl mt-4">{t}</h3>
<p className="text-slate-500 mt-2">Servicii rapide, sigure și profesionale.</p>
</motion.div>)}
</div>
</section>
<section className="max-w-6xl mx-auto px-6 pb-24">
<div className="rounded-[32px] bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 p-16 text-center text-white shadow-2xl" id="contact">
<h2 className="text-5xl font-black">Solicită o ofertă gratuită</h2>
<p className="text-4xl font-bold mt-6">0750 873 386</p>
<a href="https://wa.me/40750873386" className="inline-block mt-8 bg-white text-red-600 px-8 py-4 rounded-full font-bold">Scrie pe WhatsApp</a>
</div></section>
<a href="https://wa.me/40750873386" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-2xl"><MessageCircle/></a>
</div>
}
