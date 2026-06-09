import { useAuthStore } from '../store/authStore';
import { 
  Cloud, 
  Newspaper, 
  CheckCircle2, 
  Calendar as CalendarIcon, 
  TrendingUp,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { user } = useAuthStore();
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat Pagi';
    if (hour < 18) return 'Selamat Siang';
    return 'Selamat Malam';
  };

  const stats = [
    { label: 'Tugas Hari Ini', value: '5', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Acara Mendatang', value: '2', icon: CalendarIcon, color: 'text-sky-500', bg: 'bg-sky-500/10' },
    { label: 'Sisa Anggaran', value: 'Rp 1.2M', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Streak Kebiasaan', value: '12 Hari', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">
            {getGreeting()}, <span className="text-purple-500">{user?.displayName || 'User'}!</span>
          </h1>
          <p className="text-zinc-500 mt-1">Inilah yang terjadi di dashboard Anda hari ini.</p>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-3 rounded-2xl">
          <div className="p-2 bg-sky-500/10 rounded-lg text-sky-500">
            <Cloud size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">28°C Jakarta</p>
            <p className="text-xs text-zinc-500">Cerah Berawan</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            variants={item}
            className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-6 rounded-2xl hover:border-zinc-700 transition-colors group"
          >
            <div className={`p-3 w-fit rounded-xl mb-4 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
              <stat.icon size={24} />
            </div>
            <p className="text-zinc-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Tasks & News */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Tugas Hari Ini
              </h2>
              <button className="text-sm text-purple-400 hover:text-purple-300">Lihat Semua</button>
            </div>
            <div className="p-6 space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/50 hover:border-zinc-600 transition-colors cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-zinc-600 flex-shrink-0 group-hover:border-purple-500 transition-colors" />
                  <div className="flex-1">
                    <p className="text-white font-medium">Contoh Tugas #{i + 1}</p>
                    <p className="text-xs text-zinc-500">Tenggat: 17:00 • Prioritas Tinggi</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Newspaper size={20} className="text-sky-500" />
                Berita Terbaru
              </h2>
            </div>
            <div className="p-6 space-y-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-24 h-24 bg-zinc-800 rounded-xl flex-shrink-0 overflow-hidden">
                    <img 
                      src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=news_thumbnail_${i}&image_size=square`} 
                      alt="News" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-500">Teknologi</span>
                    <h3 className="text-white font-bold mt-1 group-hover:text-sky-400 transition-colors line-clamp-2">
                      Perkembangan Terbaru dalam Dunia Pengembangan Web 2026
                    </h3>
                    <p className="text-xs text-zinc-500 mt-2">2 jam yang lalu • Sumber Berita</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Calendar Preview & Habits */}
        <div className="space-y-8">
          <section className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CalendarIcon size={20} className="text-purple-500" />
                Kalender
              </h2>
            </div>
            <div className="p-6">
              <div className="aspect-square bg-zinc-800/50 rounded-xl flex items-center justify-center text-zinc-500">
                Mini Calendar Placeholder
              </div>
            </div>
          </section>

          <section className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity size={20} className="text-orange-500" />
                Kebiasaan
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {['Minum Air', 'Olahraga', 'Membaca'].map((habit, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-300 font-medium">{habit}</span>
                    <span className="text-zinc-500">75%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full w-3/4 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
