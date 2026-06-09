import { Plus, Activity, Trophy, Flame, CheckCircle2, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const Habits = () => {
  const habits = [
    { name: 'Minum 2L Air', streak: 15, progress: 75, color: 'text-sky-500', bg: 'bg-sky-500/10' },
    { name: 'Olahraga Pagi', streak: 5, progress: 100, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'Membaca 20 Halaman', streak: 12, progress: 40, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { name: 'Meditasi', streak: 8, progress: 0, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  ];

  // Mock heatmap data (7 days x 12 weeks)
  const heatmap = Array.from({ length: 84 }, (_, i) => ({
    level: Math.floor(Math.random() * 4),
    day: i
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Kebiasaan</h1>
          <p className="text-zinc-500 mt-1">Bangun kebiasaan baik setiap hari.</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-600/20">
          <Plus size={20} />
          Kebiasaan Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white">Grafik Konsistensi</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <div className="w-3 h-3 bg-zinc-800 rounded-sm" /> Less
              </div>
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <div className="w-3 h-3 bg-orange-500/30 rounded-sm" />
                <div className="w-3 h-3 bg-orange-500/60 rounded-sm" />
                <div className="w-3 h-3 bg-orange-500 rounded-sm" /> More
              </div>
            </div>
          </div>
          
          <div className="flex gap-1 flex-wrap">
            {heatmap.map((cell, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-sm transition-colors hover:ring-2 hover:ring-white/20 cursor-pointer ${
                  cell.level === 0 ? 'bg-zinc-800' :
                  cell.level === 1 ? 'bg-orange-500/30' :
                  cell.level === 2 ? 'bg-orange-500/60' : 'bg-orange-500'
                }`}
                title={`Level: ${cell.level}`}
              />
            ))}
          </div>
          <p className="text-[10px] text-zinc-600 mt-4 uppercase tracking-widest font-bold">Terakhir 12 Minggu</p>
        </div>

        <div className="bg-gradient-to-br from-orange-600/20 to-purple-600/20 border border-orange-500/20 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl shadow-orange-500/40 animate-bounce-slow">
            <Trophy size={32} />
          </div>
          <h3 className="text-xl font-bold text-white">Luar Biasa!</h3>
          <p className="text-zinc-400 text-sm mt-2">Anda telah menjaga streak 15 hari untuk "Minum Air". Terus semangat!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {habits.map((habit, i) => (
          <motion.div 
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-3xl flex items-center gap-6 group hover:border-zinc-700 transition-all"
          >
            <button className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all ${
              habit.progress === 100 ? 'bg-emerald-500 text-white' : `${habit.bg} ${habit.color} border border-${habit.color.split('-')[1]}-500/20`
            }`}>
              {habit.progress === 100 ? <CheckCircle2 size={28} /> : <Activity size={28} />}
            </button>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors truncate">{habit.name}</h4>
                <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
                  <Flame size={14} />
                  {habit.streak}
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  <span>Progres</span>
                  <span>{habit.progress}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${
                      habit.progress === 100 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]'
                    }`}
                    style={{ width: `${habit.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <button className="p-2 text-zinc-700 hover:text-zinc-500 transition-colors">
              <MoreVertical size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Habits;
