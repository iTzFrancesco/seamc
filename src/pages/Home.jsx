import { motion } from 'framer-motion';
import logo from '../assets/logo-server.png';
import mcLogo from '../assets/logo-minecraft.png';
import smpIcon from '../assets/logo-smp.png';
import mascot from '../assets/mascott-discord.png';
import { FadeInView, ScaleInView, StaggerContainer, StaggerItem } from '../components/animations';

const steps = [
  {
    title: 'Apri Minecraft',
    text: 'Avvia Minecraft Java Edition e apri la sezione Multiplayer',
  },
  {
    title: 'Aggiungi il server',
    text: 'Inserisci l\'ip: play.seamc.it',
  },
  {
    title: 'Entra e gioca',
    text: 'Collegati al network e inizia subito la tua avventura nelle nostre modalità',
  },
];

const featureCards = [
  {
    title: 'Progressione Bilanciata',
    body: 'Un sistema di reward e progressione pensato per valorizzare il tuo tempo di gioco.',
  },
  {
    title: 'Eventi con Premi',
    body: 'Eventi settimanali con ricompense dedicate per mantenere il gameplay sempre attivo.',
  },
  {
    title: 'Supporto Attivo',
    body: 'Uno staff sempre presente su Discord e in game per aiutarti in ogni momento.',
  },
];

const modeCards = [
  {
    title: 'SeaSMP',
    body: 'Modalita survival principale con economia, gang, missioni ed eventi.',
    accent: 'border-sky-300/30 bg-sky-400/10',
  },
  {
    title: 'ElyBox',
    body: 'Modalita veloce e competitiva, ideale per sfide dinamiche e gameplay rapido.',
    accent: 'border-amber-200/35 bg-amber-300/10',
  },
  
];

const Home = ({ serverIP, mcPlayers, discordOnline, discordInvite, copyToClipboard, copied }) => {
  return (
    <>
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden mb-12 md:mb-16 pt-32 pb-20 px-6 rounded-[2.5rem] shadow-2xl mx-3 md:mx-6 group">
        <div className="absolute inset-0 bg-abyss-950 z-0" />
        <div className="absolute inset-0 bg-deep-gradient opacity-80 z-0" />
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay z-0" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="light-ray opacity-30" />
          <div className="light-ray opacity-20" style={{ transform: 'translateX(-30%) rotate(-15deg)' }} />
          <div className="light-ray opacity-10" style={{ transform: 'translateX(-70%) rotate(10deg)' }} />

          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '0px',
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
              }}
              animate={{ y: -1000, x: [0, Math.random() * 40 - 20, 0], opacity: [0.6, 0.3, 0] }}
              transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <FadeInView direction="down" duration={1}>
            <div className="relative mb-12 group/logo">
              <div className="absolute inset-0 bg-ocean-500/20 blur-[100px] rounded-full scale-150 animate-glow-pulse" />
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10">
                <img src={logo} alt="SeaMC logo" className="w-48 md:w-72 drop-shadow-[0_0_50px_rgba(20,184,166,0.5)] transition-transform duration-700 group-hover/logo:scale-110" />
              </motion.div>
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.3} duration={0.8}>
            <h1 className="font-display font-black text-6xl md:text-9xl tracking-tighter leading-[0.85] text-white">
              <span className="text-gradient-ocean">Sea</span>
              <span className="relative">MC</span>
            </h1>
          </FadeInView>

          <FadeInView direction="up" delay={0.4} duration={0.8}>
            <p className="mt-8 text-xl md:text-2xl text-sky-100/70 max-w-2xl leading-relaxed font-light">
              Benvenuto nel network ufficiale di <span className="font-bold text-gradient-ocean">Sea</span><span className="text-white">MC</span>. Vieni a giocare con noi su <span className="text-ocean-300 font-semibold">play.seamc.it</span>, entra nelle nostre modalità e partecipa ai nuovi eventi con premi in palio.
            </p>
          </FadeInView>


          <FadeInView direction="up" delay={0.6} duration={0.8}>
            <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
              <motion.a
                href="#come-entrare"
                className="sea-button px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-display group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Inizia a Giocare
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.a>

              <motion.a
                href={discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 md:px-12 py-4 md:py-5 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-lg md:text-xl backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-[#5865F2] transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
                Community
              </motion.a>
            </div>
          </FadeInView>
        </div>

        <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex lg:hidden flex-col items-center gap-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-px h-8 bg-gradient-to-b from-ocean-400 to-transparent" />
        </motion.div>
      </section>

      <section id="come-entrare" className="relative mb-20 md:mb-24 px-6 scroll-mt-24">
        <FadeInView direction="up" duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">Come Entrare</h2>
            <div className="h-1.5 w-24 bg-ocean-400 mx-auto rounded-full" />
          </div>
        </FadeInView>

        <StaggerContainer className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto" staggerDelay={0.15}>
          {steps.map((step, idx) => (
            <StaggerItem key={step.title}>
              <motion.article className="relative glass-panel p-8 md:p-10 group/step border-white/5 hover:border-ocean-400/30 transition-all duration-300 h-full" whileHover={{ y: -10 }}>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-ocean-400 to-sea-glow rounded-2xl flex items-center justify-center font-display font-black text-3xl text-abyss-950 shadow-glow-cyan">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 mt-4">{step.title}</h3>
                <p className="text-sky-100/60 leading-relaxed text-lg">{step.text}</p>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-ocean-500/5 blur-3xl rounded-full group-hover/step:bg-ocean-500/10 transition-colors" />
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScaleInView duration={0.8}>
          <div className="mt-12 max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.5fr_1fr_1fr] items-stretch">
            <motion.button
              type="button"
              onClick={copyToClipboard}
              className="relative overflow-hidden group/copy p-6 rounded-3xl border border-white/5 bg-abyss-900/40 backdrop-blur-xl flex flex-col items-start"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/10 via-transparent to-transparent opacity-0 group-hover/copy:opacity-100 transition-opacity" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-ocean-300 font-bold mb-2">Server IP</span>
              <div className="flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-display font-black text-white">{serverIP}</span>
                <div className={`p-2 rounded-lg ${copied ? 'bg-emerald-500' : 'bg-white/10'} transition-colors`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {copied ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    )}
                  </svg>
                </div>
              </div>
              <p className="text-x mt-3 text-sky-100/40 font-medium">{copied ? 'Link Copiato' : 'Clicca per copiare l\'ip'}</p>
            </motion.button>
            
            <motion.article whileHover={{ scale: 1.02 }}>
              <div className="p-6 rounded-3xl border h-full border-white/5 bg-abyss-900/40 backdrop-blur-xl flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center p-3 border border-sky-500/20">
                  <img src={mcLogo} alt="Minecraft" className="w-full scale-150 h-full object-contain" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-sky-400 font-bold">Online</p>
                  <p className="text-3xl font-display font-black text-white">{mcPlayers}</p>
                </div>
              </div>
            </motion.article>

            <motion.article whileHover={{ scale: 1.02 }}>
              <div className="p-6 h-full rounded-3xl border border-white/5 bg-abyss-900/40 backdrop-blur-xl flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center p-3 border border-[#5865F2]/20 text-[#5865F2]">
                  <svg className="w-full h-full rotate-0" fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#5865F2] font-bold">Community</p>
                  <p className="text-3xl font-display font-black text-white">{discordOnline}</p>
                </div>
              </div> 
            </motion.article>

          </div>
        </ScaleInView>
      </section>

      <section className="relative mb-24 px-6 py-20 overflow-hidden rounded-[3rem] mx-3 md:mx-6">
        <div className="absolute inset-0 bg-abyss-900/40 backdrop-blur-2xl z-0" />
        <div className="absolute inset-0 bg-biolume z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeInView direction="up" duration={0.8}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">Le nostre Modalità</h2>
              <p className="text-xl text-sky-100/60 max-w-2xl mx-auto font-light leading-relaxed">
                Ogni modalita offre un'esperienza diversa, scegli quella giusta per il tuo stile di gioco.
              </p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid gap-10 md:grid-cols-2 items-stretch" staggerDelay={0.2}>
            {modeCards.map((mode) => (
              <StaggerItem key={mode.title}>
                <motion.article className="group/mode relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent hover:from-ocean-400/30 transition-all duration-700" whileHover={{ scale: 1.02 }}>
                  <div className="relative z-10 bg-abyss-950/90 rounded-[2.4rem] p-8 md:p-12 overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-500/5 blur-[80px] rounded-full group-hover/mode:bg-ocean-500/10 transition-all" />

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 flex-1">
                      <div className="relative shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/5 bg-white/5 flex items-center justify-center overflow-hidden group-hover/mode:border-ocean-400/40 transition-all duration-700 relative z-10">
                          <img src={smpIcon} alt="mode icon" className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover/mode:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="absolute inset-0 bg-ocean-500/20 blur-2xl rounded-full opacity-0 group-hover/mode:opacity-100 transition-opacity" />
                      </div>

                      <div className="text-center md:text-left">
                        <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight group-hover/mode:text-ocean-300 transition-colors">
                          {mode.title}
                        </h3>
                        <p className="text-lg md:text-xl text-sky-100/60 leading-relaxed font-light mb-8 max-h-[4.5rem]">{mode.body}</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative mb-24 px-6 py-20">
        <FadeInView direction="up" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">Perchè SeaMC</h2>
            <div className="h-1.5 w-24 bg-coral-400 mx-auto rounded-full" />
          </div>
        </FadeInView>

        <StaggerContainer className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto" staggerDelay={0.1}>
          {featureCards.map((card) => (
            <StaggerItem key={card.title}>
              <motion.article className="glass-panel p-8 md:p-10 border-white/5 hover:border-coral-400/30 transition-all duration-500 h-full group/feat" whileHover={{ y: -8 }}>
                <div className="w-14 h-14 rounded-2xl bg-coral-500/10 flex items-center justify-center mb-6 border border-coral-500/20 group-hover/feat:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-coral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{card.title}</h3>
                <p className="text-sky-100/60 leading-relaxed text-lg font-light">{card.body}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <ScaleInView className="relative mb-20 md:mb-32 px-6" duration={1}>
        <div className="max-w-7xl mx-auto glass-panel p-10 md:p-20 overflow-hidden relative group/discord border-white/5 hover:border-[#5865F2]/30 transition-all duration-700">
          <div className="absolute inset-0 bg-[#5865F2]/5 opacity-0 group-hover/discord:opacity-100 transition-opacity duration-1000" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#5865F2]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div className="relative group/mascot">
              <div className="absolute inset-0 bg-[#5865F2]/20 blur-[80px] rounded-full scale-125 animate-pulse" />
              <motion.img
                src={mascot}
                alt="SeaMC Discord mascot"
                className="relative z-10 w-full max-w-[320px] mx-auto drop-shadow-[0_20px_40px_rgba(88,101,242,0.4)]"
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 10, repeat: Infinity, ease: 'easeInOut' } }}
              />
            </div>

            <div className="text-center md:text-left">
              <span className="chip bg-[#5865F2]/10 border-[#5865F2]/30 text-[#5865F2] font-display mb-6">Discord Ufficiale</span>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 leading-none tracking-tighter">
                UNISCITI ALLA <br /> <span className="text-[#5865F2]">COMMUNITY</span>
              </h2>
              <p className="text-lg md:text-xl text-sky-100/70 font-light leading-relaxed mb-10 max-w-2xl">
                Entra nel nostro Discord. Ricevi supporto, partecipa a eventi e scala i ranghi!
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <motion.a
                  href={discordInvite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-display font-black text-xl rounded-2xl shadow-[0_10px_30px_rgba(88,101,242,0.4)] transition-all flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-7 h-7 rotate-0" fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                  </svg>
                  Entra nel Discord
                </motion.a>

                <div className="flex flex-col items-start">
                  <span className="text-3xl font-display font-black text-white">{discordOnline}</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-sky-100/40">Membri Attivi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScaleInView>
    </>
  );
};

export default Home;
