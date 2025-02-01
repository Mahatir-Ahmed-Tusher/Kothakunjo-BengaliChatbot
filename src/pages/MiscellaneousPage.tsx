import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function MiscellaneousPage() {
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
            <img 
              src="https://i.postimg.cc/4N2Y9TNY/ktha.png"
              alt="কথাকুঞ্জ"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              কথাকুঞ্জ
            </span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            বিবিধ
          </h1>
          
          <div className="space-y-8 text-gray-700 dark:text-gray-200">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                প্রেরণা
              </h2>
              <p className="mb-6">
                কথাকুঞ্জ তৈরির পিছনে আমার প্রধান প্রেরণা ছিলো প্রাঞ্জল বাঙলা বলতে পারা, কেবল বাঙলা ভাষার জন্য ডেডিকেটেড এআই চ্যাটবট তৈরি করা। বাঙলা পৃথিবীর ৬ষ্ঠ সবচেয়ে বেশি বলা ভাষা। তাও প্রযুক্তিতে এই ভাষার প্রয়োগ যৎসামান্য-ই হয়েছে। অনলাইনেও সব ব্যাপারেই বাংলার রিসোর্স খুবই কম। বাঙলা ভাষাটাকে প্রযুক্তিতে প্রয়োগের অতি ক্ষুদ্র এক প্রচেষ্টা এই চ্যাটবট। অন্যদিকে, বর্তমানে যখন চ্যাটজিপিটি, ক্লড, জেমিনাই, ডিপসিক এর মতো এআই মডেলগুলো ইংরেজি ভাষায় চমৎকার কাজ করছে, তখন আমাদের মাতৃভাষায় এমন একটি টুল থাকা উচিত যা আমাদের দৈনন্দিন জীবনে সহায়তা করতে পারে। এতোসব ভাবনা থেকেই কথাকুঞ্জের জন্ম। এটা মৌলিক কোনো সৃষ্টি নয়। কারণ এর API key নেয়া হয়েছে গুগলের জেমিনাই থেকে। তাই এটা বানিয়ে কোনো বাঙালি বিশ্ব জয় করে ফেলেছে, এমনটা ভাবা যাবে না। তবে, চেষ্টা করা হয়েছে, বাংলাভাষী ব্যবহারকারীদের বেশ ভালো একটা অভিজ্ঞতা উপহার দেয়া। 
              </p>
            </div>
            <div>
             <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                প্রাপ্তি স্বীকার
              </h2>
              <p className="mb-6"> 
                বিশেষ কৃতজ্ঞতা জানাই বন্ধুবর তফসির উদ্দীন খানকে। তার দেয়া এপিআই কী ব্যবহার করে বানানো হয়েছে এই চ্যাটবট। যদিও ভবিষ্যতে এই এপিআই কী পালটে ফেলতেও হতে পারে, তাও যেহেতু শুরুটা তার দেয়া এপিআই কী দিয়ে, তাই সে বড়সড় একটা ধন্যবাদ দাবি করেই। দ্বিতীয়ত কৃতজ্ঞতা জানাই শারাফ ওয়াসিমাকে। এ চ্যাটবটের প্রোটোটাইপ থেকে শুরু করে ডেভেলপমেন্টের প্রায় প্রতিটা ধাপ-ই তাকে দেখানো হয়েছে এবং তার মতামত নেয়া হয়েছে। তার এ প্রজেক্টের ওপর বিশ্বাস রাখা, ফিডব্যাক ও অনুপ্রেরণা প্রদানের জন্যেই সম্ভবত কাজটা পুরোপুরি সম্পন্ন করার শক্তি পেয়েছি।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                ডেভেলপার সম্পর্কে
              </h2>
              <p className="mb-6">
                ডেভেলপার হচ্ছেন মাহাথির আহমেদ তুষার। ব্যক্তিগত জীবনে অর্জন বলতে তেমন কিছুই নেই। কৈশোর কেটেছে শ্রেষ্ঠত্বের ক্ষুধা নিয়ে, অমরত্বের ইচ্ছা নিয়ে। বড় হওয়ার সাথে সাথে মিডিওক্রিটির সাথে আপোস করাও শেখা হয়ে গেলো। এই তুচ্ছ, অর্থহীন জীবনেও প্রায় প্রতিদিনই ভাবেন এই নীল গ্রহ থেকে চলে যাওয়ার আগে এমন কিছু রেখে যাওয়া যায় কীনা, যার জন্যে মানুষ তাকে মনে রাখবে; তার কবরের এপিটাফে থাকবে তাজা ফুল, পৃথিবীর মানুষ জানবে যে সে বেঁচে ছিল একদিন এই পৃথিবীর পাড়ে। কিন্তু, কখনোই কিছু করে হয়ে ওঠে না তার পক্ষে। এভাবেই চলে যায় জীবন। ডেভেলপারের সাথে সংযুক্ত হতে চাইলে নীচে দেয়া লিংকড-ইন এবং গিটহাবে ক্লিক করুন। কথাকুঞ্জের সাথে আপনার যাত্রা শুভ হোক।
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://in.linkedin.com/in/mahatir-ahmed-tusher-5a5524257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg transition-colors"
                >
                  <img 
                    src="https://i.postimg.cc/GpcjBBQ0/image.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Mahatir-Ahmed-Tusher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-600/10 hover:bg-gray-600/20 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-lg transition-colors"
                >
                  <img 
                    src="https://i.postimg.cc/0rRY9rQB/image.png"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MiscellaneousPage;