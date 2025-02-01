import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

function MentalHealthPage() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/jdC38K87/vasha.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
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
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                মানসিক স্বাস্থ্য
              </span>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                মানসিক স্বাস্থ্য সহায়তা
              </h1>
              <p className="text-gray-300">
                আপনার মানসিক স্বাস্থ্য নিয়ে কথা বলুন, আমরা আপনার পাশে আছি
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-purple-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  জরুরি বিজ্ঞপ্তি
                </h2>
                <p className="text-gray-300 mb-4">
                  যদি আপনি মানসিক চাপ, হতাশা, বা আত্মঘাতী চিন্তায় ভুগছেন, তাহলে অনুগ্রহ করে অবিলম্বে পেশাদার সহায়তা নিন।
                </p>
                <div className="bg-red-900/30 p-4 rounded-lg">
                  <p className="text-red-200 font-semibold">
                    জরুরি অবস্থায় যোগাযোগ করুন:
                  </p>
                  <ul className="list-disc list-inside text-red-200 mt-2">
                    <li>জাতীয় মানসিক স্বাস্থ্য হেল্পলাইন: ১৬১২৩</li>
                    <li>কথা ২৪/৭ হেল্পলাইন: ০৯৬১২-৪৪৪৪৪৪</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  পেশাদার সহায়তা
                </h2>
                <p className="text-gray-300 mb-4">
                  আমরা সুপারিশ করি যে আপনি একজন যোগ্য মনোরোগ বিশেষজ্ঞের সাথে পরামর্শ করুন। এছাড়াও, আপনি Serene Mind প্ল্যাটফর্মে যেতে পারেন, যেখানে আপনি পেশাদার মানসিক স্বাস্থ্য সেবা পাবেন।
                </p>
                <a 
                  href="https://serene-mind-world.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <span>Serene Mind এ যান</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  কীভাবে কথাকুঞ্জ সাহায্য করতে পারে
                </h2>
                <p className="text-gray-300 mb-4">
                  কথাকুঞ্জ আপনার সাথে কথা বলতে এবং সহানুভূতিশীল শ্রোতা হিসেবে কাজ করতে পারে। তবে মনে রাখবেন:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>কথাকুঞ্জ পেশাদার মানসিক স্বাস্থ্য সেবার বিকল্প নয়</li>
                  <li>গুরুতর সমস্যার ক্ষেত্রে সবসময় পেশাদার সহায়তা নিন</li>
                  <li>জরুরি অবস্থায় উপরে দেওয়া হেল্পলাইন নম্বরগুলোতে যোগাযোগ করুন</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MentalHealthPage;