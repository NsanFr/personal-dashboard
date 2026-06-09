import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Calendar = () => {
  const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  
  // Mock data for June 2026
  const monthDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const startDay = 1; // Monday

  const events = [
    { title: 'Meeting Tim', time: '10:00 - 11:30', location: 'Zoom', day: 10, color: 'bg-purple-500' },
    { title: 'Makan Malam', time: '19:00 - 21:00', location: 'Resto ABC', day: 15, color: 'bg-sky-500' },
    { title: 'Workshop React', time: '13:00 - 15:00', location: 'Kantor', day: 22, color: 'bg-pink-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Kalender</h1>
          <p className="text-zinc-500 mt-1">Atur jadwal dan acara penting Anda.</p>
        </div>
        <button className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-sky-600/20">
          <Plus size={20} />
          Tambah Acara
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Juni 2026</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {days.map(day => (
              <div key={day} className="text-center text-xs font-bold text-zinc-600 uppercase py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {/* Empty slots for previous month */}
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square p-2" />
            ))}
            
            {monthDays.map(day => {
              const hasEvent = events.some(e => e.day === day);
              return (
                <div key={day} className={`aspect-square p-2 border border-zinc-800/30 rounded-xl relative group cursor-pointer hover:bg-zinc-800/50 transition-colors ${day === 9 ? 'bg-purple-600/10 border-purple-500/30' : ''}`}>
                  <span className={`text-sm font-medium ${day === 9 ? 'text-purple-400 font-bold' : 'text-zinc-400'}`}>
                    {day}
                  </span>
                  {hasEvent && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {events.filter(e => e.day === day).map((e, idx) => (
                        <div key={idx} className={`w-1.5 h-1.5 rounded-full ${e.color}`} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events List */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 px-2">
            <CalendarIcon size={20} className="text-sky-500" />
            Acara Mendatang
          </h3>
          <div className="space-y-4">
            {events.map((event, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-zinc-900/40 border border-zinc-800/50 p-4 rounded-2xl hover:border-zinc-700 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${event.color} flex flex-col items-center justify-center text-white flex-shrink-0 shadow-lg shadow-${event.color.split('-')[1]}-500/20`}>
                    <span className="text-[10px] font-bold uppercase">Jun</span>
                    <span className="text-lg font-bold leading-none">{event.day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white group-hover:text-sky-400 transition-colors truncate">
                      {event.title}
                    </h4>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Clock size={12} />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <MapPin size={12} />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
