import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function LanguageMovementPage() {
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
              ভাষা আন্দোলন
            </span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            ১৯৫২'র ভাষা আন্দোলন
          </h1>
          
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                ভাষা আন্দোলনের পটভূমি
              </h2>
              <p className="text-gray-300">
                ১৯৪৭ সালে ভারত বিভাগের পর পাকিস্তানের শাসকগোষ্ঠী উর্দুকে একমাত্র রাষ্ট্রভাষা হিসেবে চাপিয়ে দিতে চায়। কিন্তু পূর্ব পাকিস্তানের (বর্তমান বাংলাদেশ) জনগণ তাদের মাতৃভাষা বাংলাকে রাষ্ট্রভাষা করার দাবি জানায়।
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                ২১শে ফেব্রুয়ারি, ১৯৫২
              </h2>
              <p className="text-gray-300">
                ১৯৫২ সালের ২১শে ফেব্রুয়ারি ঢাকা বিশ্ববিদ্যালয়ের ছাত্র-ছাত্রীরা ১৪৪ ধারা ভেঙে মিছিল বের করে। পুলিশের গুলিতে শহীদ হন সালাম, বরকত, রফিক, জব্বার, শফিউরসহ আরও অনেকে। তাদের আত্মত্যাগের ফলে বাংলা ভাষা ১৯৫৬ সালে পাকিস্তানের অন্যতম রাষ্ট্রভাষার মর্যাদা লাভ করে।
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                আন্তর্জাতিক মাতৃভাষা দিবস
              </h2>
              <p className="text-gray-300">
                ১৯৯৯ সালে ইউনেস্কো ২১শে ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে স্বীকৃতি দেয়। এটি বিশ্বের প্রথম ও একমাত্র ভাষা আন্দোলন যা আন্তর্জাতিক স্বীকৃতি পেয়েছে।
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                কথাকুঞ্জে ভাষা আন্দোলনের প্রতিফলন
              </h2>
              <p className="text-gray-300">
                কথাকুঞ্জ একটি বাংলা ভাষাভিত্তিক AI চ্যাটবট। এর মাধ্যমে আমরা ভাষা শহীদদের প্রতি শ্রদ্ধা জানাই। তাদের আত্মত্যাগের ফলেই আজ আমরা আমাদের মাতৃভাষায় কথা বলতে, লিখতে ও পড়তে পারি। কথাকুঞ্জ সেই ঐতিহ্যকে ধারণ করে প্রযুক্তির ক্ষেত্রেও বাংলা ভাষার ব্যবহার নিশ্চিত করছে।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                ভাষা আন্দোলনের তাৎপর্য
              </h2>
              <p className="text-gray-300">
                ভাষা আন্দোলন শুধু একটি ভাষার জন্য সংগ্রাম ছিল না, এটি ছিল সাংস্কৃতিক স্বাধীনতা ও আত্মপরিচয়ের সংগ্রাম। এই আন্দোলন থেকে জন্ম নেয় বাঙালি জাতীয়তাবাদ, যা পরবর্তীতে বাংলাদেশের স্বাধীনতা আন্দোলনের ভিত্তি হয়ে দাঁড়ায়।
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default LanguageMovementPage;