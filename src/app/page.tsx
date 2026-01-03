"use client";

import { motion } from "framer-motion";

const COR_PRINCIPAL = "#3F194C";

function Navegacao() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-black tracking-tight flex items-center gap-2" style={{ color: COR_PRINCIPAL }}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3F194C] to-[#6b2c82] flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 rounded-full border-2 border-white/30" />
          </div>
          MOUNJAX
        </a>
        <div className="hidden md:block">
          <BotaoAcao variante="contorno" />
        </div>
      </div>
    </nav>
  );
}

function SecaoInicial() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 leading-tight mb-6">
              Controle de peso com orientação e acompanhamento adequados
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              Uma alternativa para adultos que buscam um processo mais estruturado e responsável.
            </p>
            
            <ul className="space-y-4 mb-10 inline-block lg:block text-left">
              {[
                "Avaliação individual",
                "Abordagem estruturada",
                "Informação antes da decisão"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-zinc-100" style={{ backgroundColor: `${COR_PRINCIPAL}15` }}>
                    <svg className="w-3 h-3" style={{ color: COR_PRINCIPAL }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <BotaoAcao texto="Quero entender se o Mounjax é indicado para mim" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="w-full max-w-[420px] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F194C] to-[#2a1033] rounded-[48px] rotate-3 opacity-5 blur-2xl" />
              <div className="relative bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-zinc-100 p-4">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/af3bc437-49ff-4f48-875c-494f14aeae00/61PePCOYj5L._AC_UF1000-1000_QL80_-1767460054133.jpg?width=800&height=800&resize=contain" 
                  alt="Mounjax Frasco Único" 
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-20 blur-[100px] rounded-full" style={{ backgroundColor: COR_PRINCIPAL }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SecaoProblema() {
  const itens = [
    "Tentativas repetidas que não trazem constância",
    "Dietas que parecem impossíveis de sustentar a longo prazo",
    "Dificuldade persistente em manter os resultados alcançados",
    "Cansaço físico e emocional de precisar sempre recomeçar"
  ];

  return (
    <section className="py-20 md:py-32 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-8">
            Sabemos que o caminho nem sempre é simples
          </h2>
          <p className="text-lg text-zinc-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Muitas vezes, a jornada pelo controle de peso é marcada por ciclos de frustração. 
            Compreendemos os desafios de quem já tentou diversos caminhos sem encontrar uma base sólida.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {itens.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm transition-all hover:shadow-md">
                <p className="text-zinc-700 leading-snug font-medium">{item}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-zinc-500 italic">
            Não se trata de culpa, mas de buscar uma abordagem que faça sentido para a sua realidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SecaoOQueE() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-[480px] aspect-square bg-gradient-to-br from-[#1a0a1f] to-[#3F194C] rounded-[48px] shadow-2xl overflow-hidden flex items-center justify-center p-8 border-4 border-white/10">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/af3bc437-49ff-4f48-875c-494f14aeae00/01611dbe231b5666146e286ddbcd-1767460054133.jpg?width=800&height=800&resize=contain" 
                alt="Mounjax Kit 3 Frascos" 
                className="w-full h-full object-cover rounded-[32px] opacity-90 shadow-inner"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-6">
              O que é o Mounjax?
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed mb-10">
              <p>
                O Mounjax é um suplemento alimentar em gotas utilizado dentro de um processo de controle de peso mais estruturado.
              </p>
              <p>
                Ele não substitui hábitos saudáveis e deve ser considerado com base em avaliação individual e informação clara.
              </p>
            </div>
            
            <div className="grid gap-4">
              {[
                "Suplemento alimentar em gotas",
                "Uso exclusivo para adultos",
                "Avaliação individual é essencial"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 group transition-colors hover:bg-white hover:border-[#3F194C20]">
                  <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: COR_PRINCIPAL }} />
                  <span className="font-semibold text-zinc-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SecaoParaQuem() {
  return (
    <section className="py-20 md:py-32 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[40px] p-8 md:p-20 shadow-2xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none" style={{ background: `radial-gradient(circle, ${COR_PRINCIPAL} 0%, transparent 70%)` }} />
          
          <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-10 text-center">
            Para quem este processo é indicado
          </h2>
          
          <ul className="space-y-8 mb-16 max-w-2xl mx-auto">
            {[
              "Adultos que buscam informação clara antes de decidir qualquer passo",
              "Pessoas que entendem que o controle de peso não é um milagre",
              "Quem deseja mais estrutura e clareza em seu processo pessoal"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-5 text-lg text-zinc-700">
                <div className="mt-1 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${COR_PRINCIPAL}15` }}>
                  <svg className="w-4 h-4" style={{ color: COR_PRINCIPAL }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SecaoBeneficios() {
  const beneficios = [
    { titulo: "Processo mais organizado", desc: "Uma estrutura clara para acompanhar sua evolução." },
    { titulo: "Menos tentativa e erro", desc: "Informação direcionada para evitar caminhos incertos." },
    { titulo: "Abordagem estruturada", desc: "Um método pensado de forma lógica e responsável." },
    { titulo: "Decisão mais consciente", desc: "Clareza total antes de iniciar qualquer etapa." }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-20">
          Benefícios de uma abordagem responsável
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {beneficios.map((b, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 shadow-lg" style={{ background: `linear-gradient(135deg, ${COR_PRINCIPAL}, #6b2c82)` }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-3">{b.titulo}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="inline-block p-4 px-8 rounded-full bg-zinc-50 text-zinc-400 text-sm font-medium italic border border-zinc-100">
          Atenção: Os resultados variam de pessoa para pessoa, dependendo de fatores individuais e compromisso com o processo.
        </div>
      </div>
    </section>
  );
}

function SecaoTransparencia() {
  return (
    <section className="py-20 md:py-32 text-white overflow-hidden relative" style={{ backgroundColor: COR_PRINCIPAL }}>
      {/* Efeito metálico de fundo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-20 text-center">
          Transparência e Confiança
        </h2>
        
        <div className="grid md:grid-cols-3 gap-16">
          {[
            { t: "Elegibilidade", d: "Nem todos são elegíveis para este processo. Avaliamos cada caso com rigor." },
            { t: "Avaliação Essencial", d: "A avaliação individual é o único ponto de partida aceitável e obrigatório." },
            { t: "Informação em Primeiro Lugar", d: "Nossa prioridade é que você entenda cada detalhe antes de decidir." }
          ].map((item, i) => (
            <div key={i} className="space-y-6 relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-white/20 text-6xl font-serif font-black absolute -top-10 -left-2 select-none">0{i+1}</div>
              <h3 className="text-xl font-bold tracking-tight">{item.t}</h3>
              <p className="text-zinc-300 leading-relaxed text-sm font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecaoFinal() {
  return (
    <section className="py-24 md:py-48 bg-zinc-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-8 leading-tight">
          Quer saber se o Mounjax faz sentido para o seu caso?
        </h2>
        <p className="text-xl text-zinc-600 mb-16 leading-relaxed max-w-2xl mx-auto">
          Fale agora, tire suas dúvidas e receba informações claras antes de qualquer decisão.
        </p>
        <BotaoAcao texto="Falar agora e tirar minhas dúvidas" />
      </div>
    </section>
  );
}

function BotaoAcao({ texto = "Quero entender se o Mounjax é indicado para mim", variante = "padrao" }: { texto?: string, variante?: "padrao" | "contorno" }) {
  return (
    <a 
      href="https://app.monetizze.com.br/r/BRX1898306"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center h-auto py-6 px-10 text-lg font-black rounded-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${
        variante === "padrao" 
          ? "bg-gradient-to-br from-[#3F194C] to-[#2a1033] hover:from-[#4d1f5c] hover:to-[#3F194C] text-white shadow-[#3F194C30]" 
          : "bg-white hover:bg-zinc-50 text-zinc-900 border-2 border-zinc-200 shadow-zinc-200/50"
      }`}
    >
      {texto}
    </a>
  );
}

function Rodape() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="text-3xl font-serif font-black mb-8 tracking-tighter" style={{ color: "white" }}>MOUNJAX</div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
              Promovemos uma abordagem estruturada e informativa para o controle de peso, focada na responsabilidade e na saúde individual.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 backdrop-blur-sm">
            <p className="text-zinc-300 text-sm leading-relaxed italic">
              "Este conteúdo tem caráter informativo. Resultados variam de acordo com o organismo, hábitos e acompanhamento. Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento."
            </p>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} MOUNJAX BRASIL. Todos os direitos reservados.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#3F194C] selection:text-white">
      <Navegacao />
      <SecaoInicial />
      <SecaoProblema />
      <SecaoOQueE />
      <SecaoParaQuem />
      <SecaoBeneficios />
      <SecaoTransparencia />
      <SecaoFinal />
      <Rodape />
    </main>
  );
}
