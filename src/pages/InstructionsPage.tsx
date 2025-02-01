import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowLeft } from 'lucide-react';

function InstructionsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:via-gray-900 dark:to-black transition-colors duration-200">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>ফিরে যান</span>
          </button>
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              কথাকুঞ্জ
            </span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            ব্যবহার নির্দেশিকা
          </h1>
          
          <div className="space-y-8 text-gray-700 dark:text-gray-200">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                কীভাবে শুরু করবেন?
              </h2>
              <ol className="list-decimal list-inside space-y-4 ml-4">
                <li>প্রথমে "বিষয় নির্বাচন করুন" পেজ থেকে আপনার পছন্দের একটি বিষয় বেছে নিন।</li>
                <li>নির্বাচিত বিষয়ে কথাকুঞ্জের সাথে কথোপকথন শুরু করুন।</li>
                <li>আপনার প্রশ্ন বা জিজ্ঞাসা বাংলায় টাইপ করুন।</li>
                <li>এন্টার বাটন চাপুন বা সেন্ড বাটনে ক্লিক করুন।</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                সর্বোত্তম ব্যবহারের টিপস
              </h2>
              <ul className="list-disc list-inside space-y-4 ml-4">
                <li>নির্দিষ্ট এবং স্পষ্ট প্রশ্ন করুন</li>
                <li>একটি প্রশ্নে একটি বিষয় নিয়ে জিজ্ঞাসা করুন</li>
                <li>আপনার প্রশ্নের উত্তর যদি স্পষ্ট না হয়, আবার জিজ্ঞাসা করুন</li>
                <li>বিভিন্ন বিষয়ে প্রশ্ন করার জন্য ভিন্ন ভিন্ন ডোমেইন ব্যবহার করুন</li>
                <li> কোনো বিজ্ঞানী, দার্শনিক, কবি বা বিশেষ ব্যক্তিত্বের ব্যাপারে জানতে তার পুরো নামটা উল্লেখ করুন, এতে সঠিক উত্তর পাওয়ার সম্ভাবনা বেশি।</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                বিশেষ ফিচারসমূহ
              </h2>
              <ul className="list-disc list-inside space-y-4 ml-4">
                <li>ডার্ক মোড: স্ক্রিনের উপরের ডান দিকে চাঁদের আইকনে ক্লিক করে ডার্ক মোড অন/অফ করতে পারবেন</li>
                <li>বিষয় পরিবর্তন: যেকোনো সময় "ফিরে যান" বাটনে ক্লিক করে নতুন বিষয় বেছে নিতে পারবেন</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                গুরুত্বপূর্ণ নোট
              </h2>
              <ul className="list-disc list-inside space-y-4 ml-4">
                <li>কথাকুঞ্জ সর্বদা বাংলায় উত্তর দেবে, আপনি ইংরেজিতে প্রশ্ন করলেও</li>
                <li>প্রতিটি বিষয়ে কথাকুঞ্জের জ্ঞান ও দক্ষতা আলাদা</li>
                <li>একটি ভাল কথোপকথনের জন্য ধৈর্য ধরুন এবং স্পষ্ট হোন</li>
                <li>অপ্রাসঙ্গিক বা অনুপযুক্ত প্রশ্ন এড়িয়ে চলুন</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InstructionsPage;