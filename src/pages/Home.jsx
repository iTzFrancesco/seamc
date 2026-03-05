import { motion } from 'framer-motion';
import logo from '../assets/logo-server.png';
import mcLogo from '../assets/logo-minecraft.svg';
import smpIcon from '../assets/logo-smp.png';
import mascot from '../assets/mascott-discord.png';

import { FadeInView, ScaleInView, StaggerContainer, StaggerItem } from '../components/animations';

const highlightPoints = [
  'Genere SeaSMP con progressione cooperativa',
  'Eventi periodici con premi in palio',
  'Community italiana attiva e supporto staff',
];

const extraCards = [
  {
    title: 'Esplorazione',
    body: 'Mappe a tema acquatico, zone speciali e attività pensate per essere vissute in team.',
  },
  {
    title: 'Competizione',
    body: 'Sfide bilanciate, obiettivi settimanali e ranking community in continuo aggiornamento.',
  },
];

const featureCards = [
  {
    title: 'Sincronizzazione',
    body: 'Esperienza fluida tra attività, progressione e vita di community: tutto resta coerente.',
  },
  {
    title: 'Eventi Live',
    body: 'Programmazione regolare con format differenti: dai challenge day ai tornei stagionali.',
  },
  {
    title: 'Economia & Reward',
    body: 'Premi, obiettivi e ricompense per valorizzare il tempo di gioco e la collaborazione.',
  },
];

const faqCards = [
  {
    q: 'Come entro su SeaMC?',
    a: 'Apri Minecraft, vai su Multiplayer, aggiungi il server e inserisci play.seamc.it.',
  },
  {
    q: 'La modalità attuale qual è?',
    a: 'Al momento la modalità principale è SeaSMP.',
  },
  {
    q: 'Ci sono eventi con premi?',
    a: 'Sì, vengono organizzati eventi periodici con premi in palio e attività dedicate.',
  },
  {
    q: 'Serve Discord per giocare?',
    a: 'Non è obbligatorio, ma è consigliato per annunci, eventi e supporto rapido.',
  },
];

const Home = ({ serverIP, serverName, mcPlayers, discordOnline, discordInvite, modesMaxWidth = '52rem', copyToClipboard, copied }) => {
  return (
    <>
      <section className="w-full text-center mb-16 pt-6 relative theme-band theme-band-dark">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-400/10 blur-3xl rounded-full pointer-events-none" />
        <motion.div
          className="orb orb-a hidden md:block"
          animate={{ x: [0, 35, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-b hidden md:block"
          animate={{ x: [0, -28, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <FadeInView direction="down" duration={0.8}>
          <div className="mb-6">
            <motion.img
              src={logo}
              alt={`${serverName} logo`}
              className="w-48 md:w-64 mx-auto drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </FadeInView>

        <FadeInView direction="up" delay={0.2} duration={0.8}>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter text-glow">
            Benvenuto su <span className="text-jade-glow">SeaMC</span>
          </h1>
        </FadeInView>

        <FadeInView direction="up" delay={0.4} duration={0.8}>
          <p className="text-base md:text-lg text-jade-light/80 max-w-2xl mx-auto mt-4">
            Benvenuto nel sito ufficiale di SeaMC Network. Vieni a giocare con noi su play.seamc.it e immergiti nella
            nostra SeaSMP: ti aspettano eventi con premi in palio. Entra e vivi con noi l&apos;avventura nel mondo
            acquatico di SeaMC! ✨
          </p>
        </FadeInView>
      </section>

      <section className="w-full mb-24 theme-band theme-band-light">
        <div className="glass-card bg-jade-gradient border-jade-glow/20 p-6 md:p-8">
          <div className="section-divider" />
          <FadeInView direction="up" duration={0.7}>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Story</h2>
            <p className="text-jade-light/80 leading-relaxed">
              SeaMC nasce per offrire un server italiano con identita chiara: atmosfera oceanica, gioco collaborativo e
              crescita costante della community. L&apos;obiettivo e proporre sessioni memorabili, senza caos e con eventi
              che abbiano davvero valore per i giocatori.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.15} duration={0.7}>
            <p className="mt-6 text-white/70 italic text-lg border-l-4 border-jade-glow/40 pl-4">
              &quot;Ogni login deve sembrare l&apos;inizio di una nuova spedizione nel mare di SeaMC.&quot;
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="w-full mb-24 theme-band theme-band-deep">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          <StaggerItem className="glass-card bg-white/[0.03] border-jade-glow/20 p-6 md:p-8">
            <h3 className="text-xl font-black text-white mb-4">Extra</h3>
            <ul className="space-y-3 text-jade-light/80">
              {highlightPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-jade-glow shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="space-y-4">
            {extraCards.map((card) => (
              <motion.article
                key={card.title}
                className="glass-card bg-white/[0.03] border-jade-glow/20 p-6"
                whileHover={{ y: -6, rotate: 0.6, transition: { duration: 0.25 } }}
              >
                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-jade-light/70 leading-relaxed">{card.body}</p>
              </motion.article>
            ))}
          </StaggerItem>
        </StaggerContainer>
      </section>

      <section className="w-full mb-24 theme-band">
        <FadeInView direction="up" duration={0.6}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">Come Entrare</h2>
        </FadeInView>

        <StaggerContainer className="flex justify-center w-full" staggerDelay={0.15}>
          <div className="glass-card !bg-jade-dark/40 backdrop-blur-xl border-jade-glow/30 p-1 md:p-1.5 rounded-2xl flex flex-col md:flex-row items-stretch gap-2 shadow-[0_0_40px_rgba(56,189,248,0.1)]">
            <StaggerItem>
              <motion.div
                className="flex items-center justify-center gap-4 bg-jade-dark/60 hover:bg-jade-dark/80 transition-all duration-300 px-6 py-3 rounded-xl cursor-pointer border border-dashed border-white/10 group"
                onClick={copyToClipboard}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] text-jade-light/40 uppercase font-black tracking-widest mb-1 text-left">Server IP:</span>
                  <span className="text-white font-mono text-xl">{serverIP}</span>
                </div>
                <div className="ml-2">
                  {copied ? (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-sky-400 font-bold text-sm">
                      COPIATO!
                    </motion.span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-jade-glow/60 group-hover:text-jade-glow group-hover:rotate-12 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  )}
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div className="flex items-center justify-center gap-4 bg-sky-500/10 px-6 py-3 rounded-xl border border-sky-400/20 min-w-[160px]" whileHover={{ scale: 1.02 }}>
                <div className="p-2 bg-sky-500/15 rounded-lg">
                  <img src={mcLogo} alt="Minecraft" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] text-sky-400/60 uppercase font-black tracking-widest mb-1">Minecraft</span>
                  <div className="flex items-center gap-2">
                    <motion.span key={mcPlayers} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-white font-black text-2xl">
                      {mcPlayers}
                    </motion.span>
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div className="flex items-center justify-center gap-4 bg-[#5865F2]/5 px-6 py-3 rounded-xl border border-[#5865F2]/10 min-w-[160px]" whileHover={{ scale: 1.02 }}>
                <div className="p-2 bg-[#5865F2]/10 rounded-lg">
                  <svg className="w-6 h-6 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                  </svg>
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] text-[#5865F2]/60 uppercase font-black tracking-widest mb-1">Community</span>
                  <div className="flex items-center gap-2">
                    <motion.span key={discordOnline} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-white font-black text-2xl">
                      {discordOnline}
                    </motion.span>
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#5865F2] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5865F2]"></span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      <section className="w-full mb-24 theme-band theme-band-light">
        <FadeInView direction="up" duration={0.6}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">Features &amp; Sincronizzazione</h2>
        </FadeInView>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
          {featureCards.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.article className="glass-card h-full bg-white/[0.03] border-jade-glow/20 p-5" whileHover={{ y: -8, x: 4, transition: { duration: 0.2 } }}>
                <h3 className="text-lg font-black text-white mb-2">{feature.title}</h3>
                <p className="text-jade-light/70 text-sm leading-relaxed">{feature.body}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="w-full mx-auto mb-24 theme-band theme-band-deep" style={{ maxWidth: modesMaxWidth }}>
        <FadeInView direction="up" duration={0.6}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">Modalita</h2>
        </FadeInView>
        <ScaleInView duration={0.6}>
          <motion.div className="mode-card group" whileHover={{ y: -10, transition: { duration: 0.3 } }}>
            <motion.div
              className="w-32 h-32 bg-white/5 backdrop-blur-md border border-jade-glow/20 rounded-full flex items-center justify-center mb-6 group-hover:border-jade-glow/50 transition-all duration-500 shadow-[0_0_20px_rgba(56,189,248,0.1)]"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.4 }}
            >
              <img src={smpIcon} alt="SMP icon" className="w-28 h-28 object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 text-white">SeaSMP</h3>
            <p className="text-jade-light/60 text-s leading-relaxed">La modalita disponibile al momento e SeaSMP.</p>
          </motion.div>
        </ScaleInView>
      </section>

      <section className="w-full mb-24 theme-band theme-band-light">
        <FadeInView direction="up" duration={0.6}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">FAQ</h2>
        </FadeInView>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
          {faqCards.map((faq) => (
            <StaggerItem key={faq.q}>
              <motion.article className="glass-card bg-white/[0.03] border-jade-glow/20 p-5 h-full" whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <h4 className="text-white font-black text-sm tracking-wide mb-3">{faq.q}</h4>
                <p className="text-jade-light/70 text-sm leading-relaxed">{faq.a}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <FadeInView direction="up" duration={0.8} className="w-full relative group mb-32">
        <div className="wavy-container border border-jade-glow/20 overflow-hidden transition-all duration-500 rounded-[2.5rem] shadow-[0_0_60px_rgba(56,189,248,0.1)] bg-jade-dark/40 backdrop-blur-md">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-20 py-16">
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 bg-jade-glow/20 blur-[50px] rounded-full animate-pulse-slow"></div>
              <img src={mascot} alt="Discord mascot" className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]" />
            </motion.div>

            <div className="flex-1 text-center md:text-left space-y-6">
              <FadeInView direction="right" delay={0.3}>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white italic flex items-center justify-center md:justify-start gap-3">
                  <svg className="w-8 h-8 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                  </svg>
                  Community
                </h2>
              </FadeInView>

              <FadeInView direction="right" delay={0.4}>
                <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                  Unisciti a <span className="text-jade-glow font-bold">{discordOnline}</span> giocatori su Discord. Ricevi supporto, partecipa a eventi e scala i ranghi!
                </p>
              </FadeInView>

              <FadeInView direction="right" delay={0.5}>
                <div className="pt-2">
                  <motion.a
                    href={discordInvite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="discord-button px-10 py-4 text-xl shadow-[0_0_30px_rgba(88,101,242,0.3)] inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Unisciti al Discord
                  </motion.a>
                </div>
              </FadeInView>
            </div>
          </div>

          <div className="wavy-overlay top-[-5px] rotate-180 opacity-30 scale-y-110"></div>
          <div className="wavy-overlay bottom-[-5px] opacity-30 scale-y-110"></div>
        </div>
      </FadeInView>
    </>
  );
};

export default Home;
