import { motion } from 'framer-motion';
import staffData from '../data/staff-list.json';
import { FadeInView, StaggerContainer, StaggerItem } from '../components/animations';
import logo from '../assets/logo-server.png';

const CATEGORY_COLORS = {
  Owner: 'text-rose-300',
  Manager: 'text-amber-300',
  'Sr. Admin': 'text-red-300',
  Admin: 'text-red-200',
  'Sr. Developer': 'text-cyan-300',
  Developer: 'text-cyan-200',
  'Jr. Developer': 'text-cyan-100',
  Builder: 'text-yellow-200',
  'Sr. Mod': 'text-sky-300',
  Mod: 'text-sky-200',
  'Jr. Mod': 'text-sky-100',
  Helper: 'text-emerald-200',
  'Jr. Helper': 'text-emerald-100',
  ChatMod: 'text-indigo-200',
};

const ORDER = [
  'Owner',
  'Manager',
  'Sr. Admin',
  'Admin',
  'Sr. Developer',
  'Developer',
  'Jr. Developer',
  'Builder',
  'Sr. Mod',
  'Mod',
  'Jr. Mod',
  'Helper',
  'Jr. Helper',
  'ChatMod',
];

const DISCORD_INVITE = 'https://discord.gg/HDxBHTjmcT';

const Staff = () => {
  const staffCategories = ORDER.filter((title) => staffData[title]?.length > 0).map((title) => ({
    title,
    color: CATEGORY_COLORS[title],
    members: staffData[title],
  }));

  return (
    <div className="space-y-12 md:space-y-20 pt-24 px-6 max-w-7xl mx-auto">
      <section className="relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center group">
        <div className="absolute inset-0 bg-abyss-900/40 backdrop-blur-2xl z-0" />
        <div className="absolute inset-0 bg-deep-gradient opacity-50 z-0" />
        
        <div className="relative z-10">
          <FadeInView direction="down" duration={0.8}>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white tracking-tighter leading-none mb-6">
              IL TEAM DI <span className="text-gradient-ocean"><span className="font-bold text-gradient-ocean">Sea</span><span className="text-white">MC</span></span>
            </h1>
          </FadeInView>

          <FadeInView direction="up" delay={0.2} duration={0.8}>
            <p className="text-xl md:text-2xl text-sky-100/60 max-w-3xl mx-auto font-light leading-relaxed">
              Il gruppo che gestisce il network ogni giorno con supporto, moderazione e sviluppo continuo.
            </p>
          </FadeInView>
        </div>
      </section>

      {staffCategories.map((cat, catIndex) => (
        <section key={cat.title} className="relative">
          <FadeInView direction="up" delay={catIndex * 0.1} duration={0.6}>
            <div className="flex items-center gap-6 mb-10">
              <h2 className={`font-display font-black text-4xl md:text-6xl tracking-tight shrink-0 ${cat.color}`}>{cat.title}</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
          </FadeInView>

          <StaggerContainer className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]" staggerDelay={0.08}>
            {cat.members.map((member) => (
              <StaggerItem key={member.displayName}>
                <motion.article 
                  className="glass-panel p-8 border-white/5 hover:border-ocean-400/30 transition-all duration-500 group/staff h-full flex flex-col items-center text-center"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-[2rem] overflow-hidden border-2 border-white/10 group-hover/staff:border-ocean-400/50 transition-all duration-500 relative z-10">
                      <img src={`https://mc-heads.net/avatar/${member.mcName}/120`} alt={member.mcName} className="w-full h-full object-cover group-hover/staff:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-ocean-400/20 blur-2xl rounded-full opacity-0 group-hover/staff:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{member.displayName}</h3>
                  <p className="text-ocean-300 font-bold text-xs uppercase tracking-[0.2em] mb-4">{member.mcName}</p>
                  
                  {member.description && (
                    <p className="text-sky-100/50 text-base leading-relaxed font-light">
                      {member.description}
                    </p>
                  )}
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      ))}

      <section className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center glass-panel border-coral-400/20 mb-20">
        <div className="absolute inset-0 bg-coral-500/5 z-0" />
        <div className="relative z-10">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-8"
          >
            <img src={logo} alt="SeaMC Logo" className="w-24 md:w-32 mx-auto drop-shadow-[0_0_30px_rgba(251,113,133,0.3)]" />
          </motion.div>
          
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-6">Unisciti al Team</h2>
          <p className="text-xl text-sky-100/60 max-w-2xl mx-auto mb-10 font-light">
            Cerchiamo persone motivate per far crescere il network. Invia la tua candidatura sul Discord ufficiale.
          </p>
          
          <motion.a 
            href={DISCORD_INVITE} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sea-button px-10 py-5 text-xl font-display bg-coral-500/10 border-coral-400/30 text-coral-300 hover:bg-coral-500/20 hover:border-coral-400/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Invia Candidatura
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Staff;
