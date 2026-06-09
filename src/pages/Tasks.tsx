import { Plus, Search, Filter, MoreVertical, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Tasks = () => {
  const filters = ['Semua', 'Hari Ini', 'Minggu Ini', 'Terlambat', 'Selesai'];
  
  const tasks = [
    { title: 'Beli Bahan Makanan', priority: 'Tinggi', dueDate: 'Hari Ini', completed: false, category: 'Belanja' },
    { title: 'Selesaikan Laporan Proyek', priority: 'Sedang', dueDate: 'Besok', completed: true, category: 'Kerja' },
    { title: 'Hubungi Ibu', priority: 'Rendah', dueDate: 'Minggu Depan', completed: false, category: 'Personal' },
  ];

  const getPriorityColor = (p: string) => {
    if (p === 'Tinggi') return 'text-red-400 bg-red-400/10 border-red-400/20';
    if (p === 'Sedang') return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Daftar Tugas</h1>
          <p className="text-zinc-500 mt-1">Kelola tugas harian Anda dengan mudah.</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/20">
          <Plus size={20} />
          Tambah Tugas
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
          <input 
            type="text" 
            placeholder="Cari tugas..." 
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {filters.map((f, i) => (
            <button 
              key={i}
              className={`px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                i === 0 ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {f}
            </button>
          ))}
          <button className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-zinc-500 hover:text-zinc-300">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {tasks.map((task, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="group bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 p-4 rounded-2xl flex items-center gap-4 hover:border-zinc-700 transition-all hover:translate-x-1"
          >
            <button className={`w-6 h-6 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-all ${
              task.completed ? 'bg-purple-600 border-purple-600' : 'border-zinc-700 hover:border-purple-500'
            }`}>
              {task.completed && <CheckSquare className="text-white" size={14} />}
            </button>
            
            <div className="flex-1">
              <h3 className={`font-bold transition-all ${task.completed ? 'text-zinc-600 line-through' : 'text-white'}`}>
                {task.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <Clock size={12} />
                  {task.dueDate}
                </span>
                <span className="text-xs text-zinc-600 bg-zinc-800/50 px-2 py-0.5 rounded-md">
                  {task.category}
                </span>
              </div>
            </div>

            <button className="p-2 text-zinc-600 hover:text-zinc-400 rounded-lg transition-colors">
              <MoreVertical size={20} />
            </button>
          </motion.div>
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="text-center py-20 bg-zinc-900/30 border-2 border-dashed border-zinc-800 rounded-3xl">
          <AlertCircle className="mx-auto text-zinc-700 mb-4" size={48} />
          <h3 className="text-lg font-bold text-zinc-500">Belum ada tugas</h3>
          <p className="text-zinc-600 text-sm mt-1">Klik "Tambah Tugas" untuk memulai hari Anda.</p>
        </div>
      )}
    </div>
  );
};

// Mock checksquare icon if not imported
import { CheckSquare } from 'lucide-react';

export default Tasks;
