import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Lock, ChevronDown, Sparkles, Camera, MapPin, Calendar, Home } from 'lucide-react';
import confetti from 'canvas-confetti';

const SidrahProposal = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'mowgli') {
      setIsUnlocked(true);
    } else {
      setError('Hmm... that\'s not our secret word 🥹');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleYes = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#e11d48', '#fce7f3'] });
    fire(0.2, { spread: 60, colors: ['#db2777', '#fdf2f8'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#9333ea', '#e0e7ff'] });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, colors: ['#10b981', '#ecfdf5'] });
    fire(0.1, { spread: 120, startVelocity: 45, colors: ['#e11d48', '#ffffff'] });

    setShowSuccess(true);
  };

  const [hearts, setHearts] = useState<{ id: number; left: string; size: string; duration: string; delay: string; color: string }[]>([]);
  
  useEffect(() => {
    const colors = ['#e11d48', '#f472b6', '#c084fc', '#6ee7b7'];
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 15}px`,
      duration: `${Math.random() * 12 + 8}s`,
      delay: `${Math.random() * 5}s`,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setHearts(newHearts);
  }, []);

  if (!isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffafb] p-4 relative overflow-hidden">
        <div className="absolute inset-0 marble-overlay pointer-events-none" />
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart-particle"
            style={{
              left: heart.left,
              fontSize: heart.size,
              color: heart.color,
              opacity: 0.2,
              animationDuration: heart.duration,
              animationDelay: heart.delay,
              bottom: '-50px'
            }}
          >
            ❤️
          </div>
        ))}

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="romantic-card p-10 md:p-16 max-w-md w-full text-center relative z-10"
        >
          <div className="mb-8 flex justify-center">
            <div className="p-5 bg-rose-50 rounded-full shadow-inner animate-pulse">
              <Lock className="w-10 h-10 text-[#e11d48]" />
            </div>
          </div>
          <h1 className="font-display text-5xl mb-8 text-[#3d2b2b]">Only Sidrah can unlock this ❤️</h1>
          <form onSubmit={handleUnlock} className="space-y-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter our secret word..."
              className="w-full px-6 py-4 rounded-2xl border border-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-rose-50/30 text-center text-lg"
            />
            <button type="submit" className="btn-vibrant btn-vibrant-primary w-full text-lg">
              Unlock My Heart
            </button>
          </form>
          <AnimatePresence>
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-sm text-rose-600 font-medium"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#fffafb]">
      <div className="absolute inset-0 marble-overlay pointer-events-none z-0" />
      
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: heart.left,
            fontSize: heart.size,
            color: heart.color,
            opacity: 0.15,
            animationDuration: heart.duration,
            animationDelay: heart.delay,
            bottom: '-50px'
          }}
        >
          ❤️
        </div>
      ))}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('images/1.jpeg')",
              opacity: 0.7 
            }}
          />
          <div className="absolute inset-0 bg-[#f5f5dc]/40" /> {/* Semi-transparent beige overlay */}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="mb-8 drop-shadow-lg">
              <span className="font-display text-7xl md:text-[9rem] gradient-text block mb-4 leading-tight">Sidrah,</span>
              <span className="font-serif text-3xl md:text-5xl text-[#3d2b2b] font-bold tracking-tight">You've Been My Home Since 16 August 2021 ❤️</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#e11d48] to-[#db2777] mx-auto my-12 rounded-full shadow-lg" />
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-[#3d2b2b] leading-relaxed font-bold bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50">
                From strangers… to best friends… to soulmates. These years with you have been the most beautiful chapter of my life.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#e11d48] flex flex-col items-center gap-3"
          >
            <span className="text-xs font-bold tracking-[0.4em] uppercase">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-display text-7xl gradient-text mb-4">Our Journey</h2>
          <p className="text-rose-400 font-medium tracking-widest uppercase text-sm">Every moment is a treasure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "The Day We Met", icon: <Sparkles className="text-amber-400" />, desc: "16 August 2021—the day my world finally started making sense.", color: "bg-amber-50" },
            { title: "Growing Together", icon: <Camera className="text-sky-400" />, desc: "Capturing a thousand smiles and a million memories.", color: "bg-sky-50" },
            { title: "Our Journey", icon: <Calendar className="text-rose-400" />, desc: "Over 1,650 days of choosing you, every single time.", color: "bg-rose-50" },
            { title: "My Safe Place", icon: <Home className="text-emerald-400" />, desc: "No matter where we are, home is wherever you are.", color: "bg-emerald-50" }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="romantic-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                {card.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-[#3d2b2b]">{card.title}</h3>
              <p className="text-[#3d2b2b]/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-32 bg-white/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-7xl gradient-text mb-4">Our Beautiful Moments ❤️</h2>
            <p className="text-rose-400 font-medium tracking-widest uppercase text-sm">Captured in time</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { id: 1, caption: "I love you", src: "images/a.jpeg" },
              { id: 2, caption: "Pure Happiness", src: "images/b.jpeg" },
              { id: 3, caption: "Forever Together", src: "images/c.jpeg" },
              { id: 4, caption: "My Everything", src: "images/d.jpeg" }
            ].map((pic, idx) => (
              <motion.div
                key={pic.id}
                initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -3 : 3 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className={`polaroid polaroid-${pic.id} mx-auto w-full max-w-[280px]`}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img 
                    src={pic.src} 
                    alt={pic.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <p className="polaroid-caption">{pic.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Proposal Section */}
      <section className="py-48 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/vibrant-floral/1920/108" 
            alt="Floral Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-12"
          >
            <Heart className="w-20 h-20 text-[#e11d48] mx-auto fill-[#e11d48] shadow-rose-200" />
          </motion.div>
          
          <h2 className="mb-16">
            <span className="font-serif italic text-5xl md:text-7xl text-[#3d2b2b] block mb-6">Sidrah...</span>
            <span className="font-display text-8xl md:text-[11rem] gradient-text leading-none glow-text-red">Will You Marry Me?</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#e11d48] to-transparent mx-auto mb-16" />
          
          <p className="font-serif italic text-2xl md:text-3xl text-[#3d2b2b]/70 mb-20 max-w-2xl mx-auto leading-relaxed">
            I want forever with you.<br />
            Every morning, Every laugh, Every dream ❤️
          </p>

          <AnimatePresence mode="wait">
            {!showSuccess ? (
              <motion.div 
                key="buttons"
                exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-10"
              >
                <button onClick={handleYes} className="btn-vibrant btn-vibrant-primary min-w-[280px] text-xl py-5 shadow-rose-200">
                  YES, Forever ❤️
                </button>
                <button onClick={handleYes} className="btn-vibrant btn-vibrant-secondary min-w-[280px] text-xl py-5">
                  Always & Always 💕
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="romantic-card p-16 md:p-24 max-w-3xl mx-auto border-rose-200 bg-white shadow-2xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <Heart className="w-24 h-24 text-[#e11d48] fill-[#e11d48] mx-auto mb-10" />
                </motion.div>
                <h3 className="font-display text-6xl gradient-text mb-8">You just made me the happiest man alive!</h3>
                <p className="text-[#3d2b2b]/60 font-bold tracking-[0.3em] uppercase text-sm">Our forever starts now. ❤️</p>
                <div className="mt-12 flex justify-center gap-4">
                  <Sparkles className="text-amber-400 w-6 h-6" />
                  <Sparkles className="text-rose-400 w-6 h-6" />
                  <Sparkles className="text-sky-400 w-6 h-6" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center relative z-10">
        <div className="w-16 h-[1px] bg-rose-100 mx-auto mb-10" />
        <p className="text-[#3d2b2b]/40 text-xs font-bold tracking-[0.5em] uppercase">
          Made with all my heart for Sidrah • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default function App() {
  return <SidrahProposal />;
}
