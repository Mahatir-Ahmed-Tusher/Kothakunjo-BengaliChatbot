import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, ArrowLeft } from 'lucide-react';
import { domains } from '../constants/domains';

function DomainsPage() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:via-gray-900 dark:to-black transition-colors duration-200">
      <nav className="container mx-auto px-4 py-6 relative">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>ফিরে যান</span>
          </button>
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.postimg.cc/4N2Y9TNY/ktha.png"
              alt="কথাকুঞ্জ"
              className="w-8 h-8 object-contain"
            />
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              কথাকুঞ্জ
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <Sun className="w-5 h-5 text-purple-400" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="absolute top-full right-4 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-purple-100 dark:border-purple-900/50 z-50">
              <div className="py-2">
                <button
                  onClick={() => navigate('/about')}
                  className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/50"
                >
                  আমাদের সম্পর্কে
                </button>
                <button
                  onClick={() => navigate('/instructions')}
                  className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/50"
                >
                  ব্যবহার নির্দেশিকা
                </button>
                <button
                  onClick={() => navigate('/bangla-origin')}
                  className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/50"
                >
                  বাংলার উৎপত্তি
                </button>
                <button
                  onClick={() => navigate('/language-movement')}
                  className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/50"
                >
                  ভাষা আন্দোলন
                </button>
                <button
                  onClick={() => navigate('/miscellaneous')}
                  className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/50"
                >
                  বিবিধ
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
          বিষয় নির্বাচন করুন
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => navigate(`/chat/${domain.id}`)}
              className="group bg-white dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-xl border border-purple-100 dark:border-purple-800/20 hover:border-purple-300 dark:hover:border-purple-700 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4">
                <img 
                  src={domain.image} 
                  alt={domain.name}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                />
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  {domain.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-purple-100 dark:border-purple-900/50 pt-8">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              আমাদের সম্পর্কে
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              আমাদের এই কথাকুঞ্জ মোটামুটি রকমের শক্তিশালী একটা চ্যাটবট। আহামরি রকমের না হলেও আপনার দৈনন্দিন জীবনের নানান সমস্যা সমাধানে একটু হলেও সহায়ক হবে বলে বিশ্বাস করি। সবচেয়ে বড় কথা হচ্ছে, কথাকুঞ্জ আপনার মাতৃভাষায়। মনখুলে আড্ডা দিন কথাকুঞ্জের সাথে। শুভকামনা।
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              যোগাযোগ
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              ইমেইল: mahatirtusher@gmail.com
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              সোশ্যাল মিডিয়া
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.facebook.com/profile.php?id=61572933950493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300"
              >
                <img src="https://i.postimg.cc/MZLHvvwn/image.png" alt="Facebook" className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://discord.gg/GHUkTejd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300"
              >
                <img src="https://i.postimg.cc/qMRs0TKw/image.png" alt="Discord" className="w-5 h-5" />
                <span>Discord</span>
              </a>
              <a
                href="https://www.reddit.com/r/kothakunjo/s/nVDs98K9OP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300"
              >
                <img src="https://i.postimg.cc/kXzbmtqM/image.png" alt="Reddit" className="w-5 h-5" />
                <span>Reddit</span>
              </a>
              <a
                href="https://t.me/kothakunjo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300"
              >
                <img src="https://i.postimg.cc/13VDnrJN/image.png" alt="Telegram" className="w-5 h-5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
          <p>© 2025 Kothakunjo. All rights reserved. Developed by Mahatir Ahmed Tusher</p>
        </div>
      </footer>
    </div>
  );
}

export default DomainsPage;