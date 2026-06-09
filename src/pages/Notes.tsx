import { Search, Plus, MoreHorizontal, Tag, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Notes = () => {
  const notes = [
    { title: 'Ide Proyek Dashboard', content: 'Membuat dashboard dengan glassmorphism dan integrasi Firebase. Pastikan responsif di mobile.', tags: ['Proyek', 'Desain'], date: '9 Jun 2026', color: 'border-purple-500/30 bg-purple-500/5' },
    { title: 'Daftar Belanja', content: 'Susu, telur, roti gandum, buah-buahan, dan sayuran segar untuk minggu depan.', tags: ['Pribadi'], date: '8 Jun 2026', color: 'border-sky-500/30 bg-sky-500/5' },
    { title: 'Catatan Rapat', content: 'Diskusi tentang fitur baru untuk Q3. Prioritas pada integrasi AI dan otomasi tugas.', tags: ['Kerja'], date: '7 Jun 2026', color: 'border-pink-500/30 bg-pink-500/5' },
    { title: 'Refleksi Harian', content: 'Hari ini sangat produktif. Berhasil menyelesaikan fitur autentikasi dan layout dasar.', tags: ['Personal'], date: '6 Jun 2026', color: 'border-orange-500/30 bg-orange-500/5' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Catatan</h1>
          <p className="text-zinc-500 mt-1">Simpan ide dan informasi penting Anda.</p>
        </div>
        <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-pink-600/20">
          <Plus size={20} />
          Catatan Baru
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
        <input 
          type="text" 
          placeholder="Cari catatan atau tag..." 
          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className={`group p-6 rounded-3xl border transition-all hover:translate-y-[-4px] cursor-pointer ${note.color} border-zinc-800 hover:border-zinc-700 shadow-xl shadow-black/20`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg text-white group-hover:text-pink-400 transition-colors">{note.title}</h3>
              <button className="p-1 text-zinc-600 hover:text-zinc-400 rounded-lg">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <p className="text-zinc-400 text-sm line-clamp-4 mb-6 leading-relaxed">
              {note.content}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {note.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-800/50 text-zinc-400 rounded-lg border border-zinc-700/50">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-medium">
              <Clock size={12} />
              Terakhir diubah: {note.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
