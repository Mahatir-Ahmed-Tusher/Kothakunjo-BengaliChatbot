import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Image as ImageIcon, Loader } from 'lucide-react';

function FoodAnalysisPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    name: string;
    recipe: string;
  } | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        analyzeImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (file: File) => {
    setIsAnalyzing(true);
    // Here you would typically send the image to your AI service
    // For now, we'll simulate a response after a delay
    setTimeout(() => {
      setResult({
        name: "ইলিশ মাছ",
        recipe: `ইলিশ মাছ রান্নার রেসিপি:

১. উপকরণ:
- ইলিশ মাছ
- পেঁয়াজ কুচি
- রসুন বাটা
- হলুদ গুঁড়া
- মরিচ গুঁড়া
- ধনে গুঁড়া
- সরষে তেল
- লবণ

২. প্রণালী:
- মাছ ধুয়ে হলুদ ও লবণ মাখিয়ে রাখুন
- কড়াইতে তেল গরম করুন
- পেঁয়াজ কুচি ভাজুন
- মশলা দিয়ে কষান
- মাছ দিয়ে ঢেকে রাখুন
- ১০ মিনিট রান্না করুন

পরিবেশন করুন গরম ভাতের সাথে।`
      });
      setIsAnalyzing(false);
    }, 2000);
  };

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
              খাবার বিশ্লেষণ
            </span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              খাবারের ছবি আপলোড করুন
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              আপনার খাবারের ছবি আপলোড করুন, আমরা বলে দিব এটা কী খাবার এবং কীভাবে বানাতে হয়
            </p>
          </div>

          <div className="space-y-8">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-purple-300 dark:border-purple-600 rounded-xl p-8 text-center cursor-pointer hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
            >
              {selectedImage ? (
                <img 
                  src={selectedImage}
                  alt="Selected food"
                  className="max-h-64 mx-auto rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  <ImageIcon className="w-16 h-16 text-purple-400" />
                  <div className="text-gray-600 dark:text-gray-300">
                    ছবি আপলোড করতে ক্লিক করুন
                  </div>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            {isAnalyzing && (
              <div className="flex items-center justify-center space-x-2 text-purple-600 dark:text-purple-400">
                <Loader className="w-5 h-5 animate-spin" />
                <span>বিশ্লেষণ করা হচ্ছে...</span>
              </div>
            )}

            {result && (
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {result.name}
                </h2>
                <div className="prose dark:prose-invert">
                  <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-solaiman">
                    {result.recipe}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default FoodAnalysisPage;