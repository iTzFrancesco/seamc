import { motion } from 'framer-motion';
import staffData from '../data/staff-list.json';
import { FadeInView, StaggerContainer, StaggerItem } from '../components/animations';
import logo from '../assets/logo-server.png';

const CATEGORY_COLORS = {
    'Owner': 'text-red-500',
    'Manager': 'text-amber-500',
    'Sr. Admin': 'text-red-500',
    'Admin': 'text-red-500',
    'Sr. Developer': 'text-cyan-500',
    'Developer': 'text-cyan-500',
    'Jr. Developer': 'text-cyan-500',
    'Builder': 'text-yellow-500',
    'Sr. Mod': 'text-cyan-500',
    'Mod': 'text-cyan-500',
    'Jr. Mod': 'text-cyan-500',
    'Helper': 'text-sky-500',
    'Jr. Helper': 'text-sky-500',
    'ChatMod': 'text-sky-600',
};

const ORDER = [
    'Owner', 'Manager', 'Sr. Admin', 'Admin',
    'Sr. Developer', 'Developer', 'Jr. Developer',
    'Builder', 'Sr. Mod', 'Mod', 'Jr. Mod',
    'Helper', 'Jr. Helper', 'ChatMod'
];

const DISCORD_INVITE = "https://discord.gg/HDxBHTjmcT";

const Staff = ({ serverName }) => {
    const staffCategories = ORDER
        .filter(title => staffData[title]?.length > 0)
        .map(title => ({
            title,
            color: CATEGORY_COLORS[title],
            members: staffData[title]
        }));

    return (
        <div className="text-center py-20 px-4">
            <FadeInView direction="down" duration={0.8}>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-glow mb-8">
                    Staff <span className="text-white">Sea</span><span className="text-jade-glow">MC</span>
                </h1>
            </FadeInView>

            <FadeInView direction="up" delay={0.2} duration={0.8}>
                <p className="text-xl text-jade-light/70 max-w-2xl mx-auto mb-16">
                    Il team che rende possibile l'esperienza nel network. Gentili, professionali e sempre pronti ad aiutarti.
                </p>
            </FadeInView>

            <div className="flex flex-col gap-20">
                {staffCategories.map((cat, catIndex) => (
                    <div key={cat.title} className="w-full">
                        <FadeInView direction="up" delay={catIndex * 0.1} duration={0.6}>
                            <h2 className={`text-4xl font-black uppercase tracking-[0.4em] mb-12 flex items-center justify-center gap-6 ${cat.color}`}>
                                <span className="h-px bg-white/10 flex-1 hidden md:block"></span>
                                <span className="drop-shadow-[0_0_15px_currentColor]">{cat.title}</span>
                                <span className="h-px bg-white/10 flex-1 hidden md:block"></span>
                            </h2>
                        </FadeInView>

                        <StaggerContainer className="flex flex-wrap justify-center gap-8 md:gap-16" staggerDelay={0.1}>
                            {cat.members.map((member) => (
                                <StaggerItem key={member.displayName}>
                                    <motion.div 
                                        className="flex flex-col items-center group min-w-[200px] glass-card p-8 border-jade-glow/10 hover:border-jade-glow/30 transition-all duration-500"
                                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                    >
                                        <motion.div 
                                            className="w-20 h-20 rounded-full mb-6 border border-white/10 group-hover:border-jade-glow/50 transition-all flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img
                                                src={`https://mc-heads.net/avatar/${member.mcName}/50`}
                                                alt={member.mcName}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                        <span className="text-2xl font-black text-white italic tracking-tight mb-1">{member.displayName}</span>
                                        <span className="text-sm text-jade-light/60 italic mb-3">{member.mcName}</span>
                                        {member.description && (
                                            <p className="text-base text-jade-light/40 italic max-w-[180px] leading-relaxed">{member.description}</p>
                                        )}
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                ))}
            </div>

            {/* Sezione Candidati Staff */}
            <FadeInView direction="up" delay={0.3} duration={0.8} className="mt-32 mb-16">
                <div className="glass-card bg-gradient-to-r from-jade-glow/15 to-cyan-500/10 border-jade-glow/30 p-10 md:p-16 text-center max-w-4xl mx-auto rounded-3xl">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-6"
                    >
                        <img src={logo} alt="SeaMC Logo" className="w-32 md:w-48 mx-auto drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]" />
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Candidati <span className="text-jade-glow">Staff</span> anche tu!
                    </h2>

                    <p className="text-jade-light/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        Vuoi fare la differenza e aiutare la community a crescere? 
                        Unisciti al nostro team! Cerchiamo persone motivate, creative e pronte a lasciare il segno. 
                        
                    </p>

                    <motion.a
                        href={DISCORD_INVITE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="discord-button px-12 py-5 text-xl shadow-[0_0_30px_rgba(88,101,242,0.3)] inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Candidati ora
                    </motion.a>
                </div>
            </FadeInView>
        </div>
    );
};

export default Staff;
