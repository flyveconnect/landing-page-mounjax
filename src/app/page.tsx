"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, Truck, Star, ArrowRight, Menu, X, Plus, Minus, Timer, ShoppingCart } from "lucide-react";

const COR_PRINCIPAL = "#3F194C";
const LINK_MONETIZZE = "https://app.monetizze.com.br/r/BRX1898306";

// Components
function NotificacaoCompra() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ nome: "", city: "" });
  
  const nomes = ["Mariana", "Ricardo", "Juliana", "Carlos", "Ana", "Paulo", "Beatriz", "Fernando", "Luciana", "Marcos"];
  const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador", "Fortaleza", "Brasília", "Porto Alegre"];

  useEffect(() => {
    const showNotification = () => {
      const randomNome = nomes[Math.floor(Math.random() * nomes.length)];
      const randomCidade = cidades[Math.floor(Math.random() * cidades.length)];
      setData({ nome: randomNome, city: randomCidade });
      setVisible(true);
      
      setTimeout(() => setVisible(false), 5000);
    };

    const interval = setInterval(showNotification, 15000);
    setTimeout(showNotification, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-6 left-6 z-[60] bg-white rounded-2xl shadow-2xl p-4 border border-zinc-100 flex items-center gap-4 max-w-[280px]"
        >
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <ShoppingCart size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-900">{data.nome} de {data.city}</p>
            <p className="text-[10px] text-zinc-500">Acabou de adquirir o Kit Mounjax! 🚀</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BarraFlutuante() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-white/80 backdrop-blur-xl border-t border-zinc-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        >
          <a 
            href={LINK_MONETIZZE}
            className="flex items-center justify-between w-full bg-[#3F194C] text-white p-4 rounded-2xl font-black uppercase tracking-widest text-sm"
          >
            <span>Quero Mounjax Agora</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Contador() {
  const [tempo, setTempo] = useState({ min: 14, seg: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTempo(prev => {
        if (prev.seg > 0) return { ...prev, seg: prev.seg - 1 };
        if (prev.min > 0) return { min: prev.min - 1, seg: 59 };
        return { min: 14, seg: 59 }; // Reset
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 text-[#3F194C] font-black font-mono">
      <Timer size={16} className="animate-pulse" />
      <span>{String(tempo.min).padStart(2, '0')}:{String(tempo.seg).padStart(2, '0')}</span>
    </div>
  );
}

function Navegacao() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3F194C] to-[#6b2c82] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white font-serif font-black text-xl">M</span>
          </div>
          <span className="text-2xl font-serif font-black tracking-tight text-[#3F194C]">MOUNJAX</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="text-sm font-bold text-zinc-600 hover:text-[#3F194C] transition-colors">Benefícios</a>
          <a href="#como-funciona" className="text-sm font-bold text-zinc-600 hover:text-[#3F194C] transition-colors">Como Funciona</a>
          <a href="#kits" className="text-sm font-bold text-zinc-600 hover:text-[#3F194C] transition-colors">Kits</a>
          <BotaoAcao variante="contorno" texto="Ver Oferta" />
        </div>

        <button className="md:hidden text-zinc-900" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#beneficios" onClick={() => setMobileMenu(false)} className="font-bold py-2">Benefícios</a>
              <a href="#como-funciona" onClick={() => setMobileMenu(false)} className="font-bold py-2">Como Funciona</a>
              <a href="#kits" onClick={() => setMobileMenu(false)} className="font-bold py-2">Kits</a>
              <BotaoAcao texto="Garantir meu Mounjax" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FDFCFD] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#3F194C]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#3F194C]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3F194C]/5 text-[#3F194C] text-xs font-black uppercase tracking-widest border border-[#3F194C]/10">
                <span className="flex h-2 w-2 rounded-full bg-[#3F194C] animate-pulse" />
                Tecnologia em Gotas • Alta Absorção
              </div>
              <Contador />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-zinc-900 leading-[1.05] mb-8">
              A ciência por trás da sua <span className="text-[#3F194C] italic relative">
                nova fase
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#3F194C]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
              Descubra o equilíbrio perfeito com uma fórmula concentrada que entende o seu ritmo e potencializa seus resultados de forma responsável.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <BotaoAcao texto="Quero Garantir meu Desconto" />
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                    <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#3F194C] flex items-center justify-center text-[10px] text-white font-bold">
                  +2k
                </div>
                <div className="ml-4 text-xs font-bold text-zinc-500">
                  <div className="flex text-yellow-500 mb-0.5">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="currentColor" />)}
                  </div>
                  Clientes Satisfeitos
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-zinc-200/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-600" size={18} />
                <span className="text-xs font-bold text-zinc-500 uppercase">Aprovado e Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="text-[#3F194C]" size={18} />
                <span className="text-xs font-bold text-zinc-500 uppercase">Frete Rápido Brasil</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 p-8 md:p-12">
              <div className="absolute inset-0 bg-[#3F194C] rounded-[60px] rotate-6 opacity-5 scale-95" />
              <div className="relative bg-white rounded-[48px] shadow-[0_40px_100px_rgba(63,25,76,0.15)] p-6 overflow-hidden border border-zinc-100 group">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/af3bc437-49ff-4f48-875c-494f14aeae00/61PePCOYj5L._AC_UF1000-1000_QL80_-1767460054133.jpg?width=1000&height=1000&resize=contain" 
                  alt="Mounjax Oficial" 
                  width={1000}
                  height={1000}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-[#FFD700] text-[#3F194C] p-6 rounded-full w-28 h-28 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white z-20"
              >
                <span className="text-[10px] font-black uppercase leading-tight tracking-tighter">Oferta de</span>
                <span className="text-xl font-black">HOJE</span>
                <span className="text-[10px] font-black uppercase leading-tight tracking-tighter">Limitada</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const itens = [
    { title: "Metabolismo Ativo", desc: "Apoia o funcionamento natural do seu corpo dia e noite.", icon: "🔥" },
    { title: "Controle Consciente", desc: "Auxilia na manutenção de hábitos saudáveis com mais facilidade.", icon: "⚖️" },
    { title: "Energia Constante", desc: "Sinta-se mais disposto para as tarefas do seu cotidiano.", icon: "⚡" },
    { title: "Foco e Bem-estar", desc: "Clareza mental e equilíbrio emocional em uma única dose.", icon: "🧠" }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
            Por que o Mounjax é <span className="text-[#3F194C]">diferente</span>?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Nossa fórmula premium foi desenvolvida para quem não abre mão da qualidade e busca resultados consistentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {itens.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[40px] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const passos = [
    { n: "01", t: "Aplicação Diária", d: "Apenas algumas gotas sob a língua garantem absorção imediata." },
    { n: "02", t: "Ação Sistêmica", d: "Os ativos começam a agir em harmonia com seu metabolismo." },
    { n: "03", t: "Resultados Progressivos", d: "Sinta a evolução gradual e duradoura no seu dia a dia." }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              A praticidade que se adapta à sua rotina
            </h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Chega de processos complicados. Mounjax foi feito para ser simples, eficaz e direto ao ponto.
            </p>
            
            <div className="space-y-8">
              {passos.map((p, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FFD700] font-serif font-black text-xl group-hover:bg-[#FFD700] group-hover:text-[#3F194C] transition-all">
                    {p.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{p.t}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-[400px] aspect-square rounded-[80px] bg-gradient-to-br from-[#3F194C] to-[#2a1033] relative p-1">
               <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
               <div className="relative w-full h-full rounded-[78px] bg-zinc-800/50 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-6">💧</div>
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD700]">Poder Concentrado</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const depoimentos = [
    { nome: "Ana Paula", texto: "O Mounjax mudou minha relação com a comida. Sinto muito mais controle e disposição no meu dia a dia!", avatar: "https://i.pravatar.cc/150?u=ana" },
    { nome: "Marcos Silva", texto: "Produto incrível! A absorção em gotas é muito prática e os resultados apareceram logo nas primeiras semanas.", avatar: "https://i.pravatar.cc/150?u=marcos" },
    { nome: "Julia Santos", texto: "Finalmente encontrei algo que realmente funciona sem me deixar agitada. Recomendo muito!", avatar: "https://i.pravatar.cc/150?u=julia" }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
            Quem usa, <span className="text-[#3F194C]">recomenda</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((d, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100">
              <div className="flex text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-zinc-600 mb-8 italic">"{d.texto}"</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full border-2 border-[#3F194C]/10 overflow-hidden">
                  <Image src={d.avatar} alt={d.nome} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">{d.nome}</h4>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Cliente Verificado</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kits() {
  const kits = [
    { nome: "Leve 1 Frasco (Tratamento Iniciante)", link: LINK_MONETIZZE },
    { nome: "Leve 3 Frascos (Tratamento Intermediário)", link: LINK_MONETIZZE },
    { nome: "Leve 5 Frascos (Tratamento Completo)", link: LINK_MONETIZZE }
  ];

  return (
    <section id="kits" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
            Garanta seu <span className="text-[#3F194C]">Mounjax</span> Agora
          </h2>
          <p className="text-lg text-zinc-600">Escolha a melhor opção para o seu tratamento:</p>
        </div>
        
        <div className="flex flex-col gap-6">
          {kits.map((kit, i) => (
            <a 
              key={i}
              href={kit.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between w-full p-8 rounded-[32px] font-black uppercase tracking-widest text-lg transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] ${i === 1 ? 'bg-[#3F194C] text-white' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}
            >
              <div className="flex flex-col items-start">
                <span className="text-sm opacity-60 font-bold mb-1">Opção {i + 1}</span>
                <span>{kit.nome}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden md:block text-xs font-bold opacity-60 italic">Frete Grátis</span>
                <ArrowRight size={24} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Garantia() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#3F194C] rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="relative w-48 h-48 flex-shrink-0">
            <div className="absolute inset-0 bg-[#FFD700] rounded-full animate-pulse opacity-20" />
            <div className="relative w-full h-full bg-[#FFD700] rounded-full flex items-center justify-center border-8 border-white/10">
               <ShieldCheck size={80} className="text-[#3F194C]" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Sua satisfação ou seu dinheiro de volta</h2>
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
              Confiamos tanto na nossa fórmula que oferecemos uma garantia incondicional de 30 dias. Se você não ficar satisfeito com os resultados, devolvemos seu investimento.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-widest border border-white/10">
              Risco Zero • Garantia de 30 Dias
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Como devo utilizar o Mounjax?", a: "Recomenda-se o uso de 12 gotas por dia, preferencialmente sob a língua para melhor absorção." },
    { q: "Em quanto tempo verei resultados?", a: "Os resultados variam de pessoa para pessoa, mas a maioria dos clientes relata mudanças positivas nas primeiras 3 a 4 semanas de uso constante." },
    { q: "O frete é gratuito?", a: "Sim! Oferecemos frete grátis para todo o Brasil em todos os kits disponíveis no site." },
    { q: "É seguro comprar pelo site?", a: "Totalmente. Utilizamos a Monetizze, uma das maiores e mais seguras plataformas de pagamentos do Brasil." }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-zinc-900 mb-6">Dúvidas Frequentes</h2>
          <p className="text-zinc-600">Tudo o que você precisa saber sobre o Mounjax.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors"
      >
        <span className="font-bold text-zinc-900">{question}</span>
        {isOpen ? <Minus size={20} className="text-[#3F194C]" /> : <Plus size={20} className="text-[#3F194C]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Rodape() {
  const [ano, setAno] = useState<number | null>(null);

  useEffect(() => {
    setAno(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-zinc-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="text-3xl font-serif font-black mb-8 tracking-tighter text-white">MOUNJAX</div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-md mb-10">
              Transformando vidas através da ciência e tecnologia aplicada à nutrição. Oferecemos suporte para quem busca sua melhor versão com responsabilidade.
            </p>
            <div className="flex gap-6 grayscale opacity-50">
               <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={40} height={12} />
               <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={40} height={24} />
               <Image src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-2.png" alt="Pix" width={40} height={12} className="invert" />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
               <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FFD700] mb-4">Atenção Especial</h4>
               <p className="text-zinc-400 text-xs leading-relaxed">
                  "Este produto não é um medicamento. O Mounjax é um suplemento alimentar que não substitui uma alimentação equilibrada. Consulte seu médico antes de iniciar qualquer suplementação. Resultados variam de pessoa para pessoa."
               </p>
            </div>
            <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Avisos Legais</a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            © {ano || "2024"} MOUNJAX BRASIL • Todos os direitos reservados
          </p>
          <div className="flex items-center gap-2 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
             Desenvolvido com <span className="text-red-900">♥</span> no Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}

// Utility Components
function BotaoAcao({ texto = "Garantir agora", variante = "padrao" }: { texto?: string, variante?: "padrao" | "contorno" }) {
  return (
    <a 
      href={LINK_MONETIZZE}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center h-auto py-5 px-10 text-sm font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 transform hover:scale-[1.05] active:scale-[0.98] shadow-2xl ${
        variante === "padrao" 
          ? "bg-[#3F194C] hover:bg-zinc-800 text-white shadow-[#3F194C]/30" 
          : "bg-white hover:bg-zinc-50 text-zinc-900 border-2 border-zinc-200"
      }`}
    >
      {texto}
      <ArrowRight className="ml-3" size={16} />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#3F194C] selection:text-white">
      <Navegacao />
      <Hero />
      <Beneficios />
      <ComoFunciona />
      <Depoimentos />
      <Kits />
      <Garantia />
      <FAQ />
      <Rodape />
      
      {/* Elementos de Conversão */}
      <NotificacaoCompra />
      <BarraFlutuante />
    </main>
  );
}
