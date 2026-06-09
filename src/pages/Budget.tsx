import { Plus, Wallet, TrendingUp, TrendingDown, MoreHorizontal, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

const Budget = () => {
  const stats = [
    { label: 'Total Saldo', value: 'Rp 12.500.000', icon: Wallet, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Pemasukan', value: 'Rp 15.000.000', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Pengeluaran', value: 'Rp 2.500.000', icon: TrendingDown, color: 'text-red-500', bg: 'bg-red-500/10' },
  ];

  const chartData = [
    { name: 'Makanan', value: 1200000, color: '#6D28D9' },
    { name: 'Transport', value: 500000, color: '#0EA5E9' },
    { name: 'Hiburan', value: 300000, color: '#EC4899' },
    { name: 'Lainnya', value: 500000, color: '#F59E0B' },
  ];

  const transactions = [
    { title: 'Gaji Bulanan', amount: '+Rp 15.000.000', date: '1 Jun 2026', type: 'income', category: 'Gaji' },
    { title: 'Belanja Bulanan', amount: '-Rp 1.200.000', date: '3 Jun 2026', type: 'expense', category: 'Makanan' },
    { title: 'Bensin Motor', amount: '-Rp 200.000', date: '5 Jun 2026', type: 'expense', category: 'Transport' },
    { title: 'Langganan Netflix', amount: '-Rp 150.000', date: '7 Jun 2026', type: 'expense', category: 'Hiburan' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Keuangan</h1>
          <p className="text-zinc-500 mt-1">Pantau pemasukan dan pengeluaran Anda.</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/20">
          <Plus size={20} />
          Tambah Transaksi
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-3xl"
          >
            <div className={`p-3 w-fit rounded-xl mb-4 ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <p className="text-zinc-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Section */}
        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6">
          <h3 className="text-lg font-bold text-white mb-8">Alokasi Pengeluaran</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {chartData.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-zinc-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions Section */}
        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white">Transaksi Terakhir</h3>
            <button className="text-sm text-purple-400 hover:text-purple-300">Lihat Semua</button>
          </div>
          <div className="space-y-4">
            {transactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-2xl border border-zinc-800/50 group hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl ${tx.type === 'income' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                    {tx.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{tx.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1">{tx.date} • {tx.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-sm ${tx.type === 'income' ? 'text-emerald-500' : 'text-white'}`}>
                    {tx.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
