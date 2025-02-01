import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowRight, MessageSquare, BookOpen, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.postimg.cc/d38Mr4sq/vasha.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px) brightness(0.4)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-purple-400" />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                কথাকুঞ্জ
              </span>
            </div>
            <nav className="flex items-center space-x-6">
              <button className="text-purple-300 hover:text-purple-200 transition-colors text-sm md:text-base">
                আ-মরি বাংলা ভাষা
              </button>
            </nav>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            আপনার <span className="text-purple-400">মাতৃভাষায়</span> আড্ডার সঙ্গী
          </h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mb-8 md:mb-12">
            সাহিত্য থেকে বিজ্ঞান, ইতিহাস থেকে প্রযুক্তি — যে কোন বিষয়ে আড্ডা দিতে আপনার সাথেই আছে কথাকুঞ্জ
          </p>
          <button
            onClick={() => navigate('/domains')}
            className="group bg-purple-600 hover:bg-purple-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-xl transition-all transform hover:scale-105 flex items-center space-x-2 mb-12 md:mb-16"
          >
            <span>শুরু করুন</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* How to Get Started Section */}
          <div className="w-full max-w-6xl mx-auto mb-16 md:mb-24">
            <h2 className="text-xl md:text-xl font-bold text-white mb-12 md:mb-16">
              কীভাবে শুরু করবেন?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    ১
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">বিষয় বাছাই</h3>
                <p className="text-purple-200">
                  আপনার পছন্দের বিষয় নির্বাচন করুন। সাহিত্য, বিজ্ঞান, ইতিহাস - যে কোন বিষয়ে কথা বলতে পারেন। কেবল খোশগল্পের জন্যেও দ্বারস্থ হতে পারেন কথাকুঞ্জের কাছে।
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    ২
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">প্রশ্ন করুন</h3>
                <p className="text-purple-200">
                  আপনার মনের কথা, জিজ্ঞাসা বা কৌতূহল নিয়ে প্রশ্ন করুন। কথাকুঞ্জ সর্বদা আপনার পাশে আছে।
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    ৩
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">জ্ঞান সংরক্ষণ</h3>
                <p className="text-purple-200">
                  আপনার উত্তর পেয়ে যাওয়ার পর ডক ফাইল আকারে সংরক্ষণ করুন। নতুন কিছু শিখুন, জানুন, বুঝুন।
                </p>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="w-full max-w-6xl mx-auto mb-16 md:mb-24">
            <h2 className="text-2xl md:text-xl font-bold text-white mb-6 md:mb-8">
              যুক্ত হোন আপনিও
            </h2>
            <p className="text-base md:text-xl text-purple-200 max-w-2xl mx-auto mb-12">
              একা একা-ই কথাকুঞ্জের সাথে আড্ডা দেবেন, তা কী করে হয়? যুক্ত হোন আপনার মতো আরও কথাকুঞ্জ বন্ধুদের সাথে পৃথিবীর নানান প্রান্ত থেকে।
            </p>

            <div className="relative flex justify-center mb-12">
              <img 
                src="https://i.postimg.cc/ydRV0W2j/pngwing-com-10.png"
                alt="World Map"
                className="max-w-[400px] md:max-w-[500px] w-full h-auto opacity-60"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-1 gap-4 max-w-md">
                  <a
                    href="https://discord.gg/GHUkTejd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-lg p-4 flex items-center space-x-4 hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    <img 
                      src="https://i.postimg.cc/qMRs0TKw/image.png"
                      alt="Discord"
                      className="w-10 h-10"
                    />
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">Discord</h3>
                      <p className="text-sm text-purple-200">জয়েন করুন আমাদের ডিসকর্ড সার্ভারে</p>
                    </div>
                  </a>

                  <a
                    href="https://t.me/kothakunjo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-lg p-4 flex items-center space-x-4 hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    <img 
                      src="https://i.postimg.cc/13VDnrJN/image.png"
                      alt="Telegram"
                      className="w-10 h-10"
                    />
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">Telegram</h3>
                      <p className="text-sm text-purple-200">যুক্ত হোন টেলিগ্রাম চ্যানেলে</p>
                    </div>
                  </a>

                  <a
                    href="https://www.reddit.com/r/kothakunjo/s/nVDs98K9OP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-lg p-4 flex items-center space-x-4 hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    <img 
                      src="https://i.postimg.cc/kXzbmtqM/image.png"
                      alt="Reddit"
                      className="w-10 h-10"
                    />
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">Reddit</h3>
                      <p className="text-sm text-purple-200">জয়েন করুন রেডিট কমিউনিটিতে</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Our Other Services Section */}
          <div className="w-full max-w-6xl mx-auto mb-16 md:mb-24">
            <h2 className="text-xl md:text-xl font-bold text-white mb-6 md:mb-8">
              আমাদের অন্যান্য সেবা সমূহ:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <a
                href="https://serene-mind-world.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-lg p-6 flex flex-col items-center hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <img 
                  src="https://i.postimg.cc/BQJDBjyM/image.png"
                  alt="Serene Mind"
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-white">Serene Mind</h3>
                <p className="text-sm text-purple-200">মানসিক স্বাস্থ্য সেবা</p>
              </a>

              <a
                href="https://amraabwnn1vfgoxc.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-lg p-6 flex flex-col items-center hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <img 
                  src="https://i.postimg.cc/x82m78dj/image.png"
                  alt="ঠাকুমার ঝুলি"
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-white">ঠাকুমার ঝুলি</h3>
                <p className="text-sm text-purple-200">আপনার কল্পনা, আমাদের সৃষ্টি</p>
              </a>
            </div>
          </div>
        </main>

        <footer className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center text-purple-400">
            <span className="text-xs md:text-sm">© 2025 Kothakunjo. All rights reserved. Developed by Mahatir Ahmed Tusher</span>
          </div>
        </footer>
      </div>
    </div>
  );
}