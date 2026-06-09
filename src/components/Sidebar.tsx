import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar as CalendarIcon, 
  StickyNote, 
  Wallet, 
  Activity, 
  LogOut,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';
import { useState } from 'react';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { cn } from '../lib/utils';
import { useTheme } from '../hooks/useTheme';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: CheckSquare, label: 'Tugas', path: '/tasks' },
    { icon: CalendarIcon, label: 'Kalender', path: '/calendar' },
    { icon: StickyNote, label: 'Catatan', path: '/notes' },
    { icon: Wallet, label: 'Keuangan', path: '/budget' },
    { icon: Activity, label: 'Kebiasaan', path: '/habits' },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-zinc-950/50 backdrop-blur-xl border-r border-zinc-800/50 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-sky-500 rounded-lg" />
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              VibeDash
            </h1>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-purple-600/10 text-purple-400 border border-purple-500/20" 
                    : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50"
                )}
              >
                <item.icon size={20} className={cn(
                  "transition-colors",
                  "group-hover:text-purple-400"
                )} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="space-y-2 mt-auto">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50 rounded-xl transition-all duration-200 group"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span className="font-medium">{theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-400 hover:bg-red-400/5 rounded-xl transition-all duration-200 group"
            >
              <LogOut size={20} />
              <span className="font-medium">Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
