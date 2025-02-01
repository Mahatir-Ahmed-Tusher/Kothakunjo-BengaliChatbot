import React, { useRef, useEffect, useState } from 'react';
import { Send, Bot, Copy, Download, ArrowLeft, RefreshCw, Image as ImageIcon, Loader } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useConversation } from '../hooks/useConversation';
import { domains, creativeFormats } from '../constants/domains';

function DomainChatPage() {
  const { domainId } = useParams();
  const navigate = useNavigate();
  const { messages, isProcessing, error, addMessage } = useConversation();
  const [input, setInput] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedLength, setSelectedLength] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    name: string;
    recipe: string;
  } | null>(null);

  const domain = domains.find(d => d.id === domainId);

  useEffect(() => {
    if (!domain) {
      navigate('/domains');
      return;
    }
  }, [domain, navigate]);

  useEffect(() => {
    if (messages.length === 0 && domain) {
      addMessage(`${domain.name} সম্পর্কে আলোচনা করা যাক।`, true);
    }
  }, [domain, addMessage, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    let userMessage = input.trim();
    
    if (domain?.id === 'creative' && selectedFormat && selectedGenre) {
      userMessage = `${selectedFormat} - ${selectedGenre}${selectedLength ? ` - ${selectedLength}` : ''}\n\n${userMessage}`;
    }
    
    setInput('');
    await addMessage(userMessage, true);
  };

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
    setTimeout(() => {
      setAnalysisResult({
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

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const downloadAsDocx = (text: string) => {
    const header = `MIME-Version: 1.0\nContent-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document\n\n`;
    const blob = new Blob([header + text], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kothakunjo-response.docx';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const startNewConversation = () => {
    window.location.reload();
  };

  const renderCreativeOptions = () => {
    if (domain?.id !== 'creative') return null;

    return (
      <div className="space-y-3 mb-3">
        <select
          value={selectedFormat}
          onChange={(e) => {
            setSelectedFormat(e.target.value);
            setSelectedGenre('');
            setSelectedLength('');
          }}
          className="w-full bg-gray-900/50 text-white rounded-xl p-3 text-sm border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">রচনার ধরন বাছাই করুন</option>
          {Object.entries(creativeFormats).map(([key, format]) => (
            <option key={key} value={key}>{format.name}</option>
          ))}
        </select>

        {selectedFormat && (
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full bg-gray-900/50 text-white rounded-xl p-3 text-sm border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">ধরন বাছাই করুন</option>
            {creativeFormats[selectedFormat as keyof typeof creativeFormats].genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        )}

        {selectedFormat === 'story' && selectedGenre && (
          <select
            value={selectedLength}
            onChange={(e) => setSelectedLength(e.target.value)}
            className="w-full bg-gray-900/50 text-white rounded-xl p-3 text-sm border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">দৈর্ঘ্য বাছাই করুন</option>
            {creativeFormats.story.lengths.map((length) => (
              <option key={length} value={length}>{length}</option>
            ))}
          </select>
        )}
      </div>
    );
  };

  const renderFoodAnalysis = () => {
    if (domain?.id !== 'food') return null;

    return (
      <div className="mb-6 bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-white mb-2">খাবারের ছবি আপলোড করুন</h2>
          <p className="text-gray-300 text-sm">
            আপনার খাবারের ছবি আপলোড করুন, আমরা বলে দিব এটা কী খাবার এবং কীভাবে বানাতে হয়
          </p>
        </div>

        <div className="space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-purple-500/30 rounded-lg p-4 text-center cursor-pointer hover:border-purple-400 transition-colors"
          >
            {selectedImage ? (
              <img 
                src={selectedImage}
                alt="Selected food"
                className="max-h-40 mx-auto rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <ImageIcon className="w-10 h-10 text-purple-400" />
                <div className="text-purple-300 text-sm">
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
            <div className="flex items-center justify-center space-x-2 text-purple-400">
              <Loader className="w-4 h-4 animate-spin" />
              <span className="text-sm">বিশ্লেষণ করা হচ্ছে...</span>
            </div>
          )}

          {analysisResult && (
            <div className="bg-purple-900/30 rounded-lg p-3">
              <h3 className="text-lg font-bold text-white mb-2">
                {analysisResult.name}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-300 font-solaiman text-sm">
                {analysisResult.recipe}
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (!domain) return null;

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
        <div className="container mx-auto px-3 py-4 max-w-4xl min-h-screen">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/domains')}
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">ফিরে যান</span>
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-xl">{domain.icon}</span>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {domain.name}
              </h1>
            </div>
          </div>

          {renderFoodAnalysis()}

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-3 mb-3 h-[450px] overflow-y-auto border border-purple-500/20 shadow-xl">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-xl ${
                    message.isUser 
                      ? 'bg-purple-600/80 ml-auto p-3' 
                      : 'bg-gray-800/80'
                  }`}>
                    <div className="p-3">
                      {!message.isUser && <Bot className="w-4 h-4 mb-2" />}
                      <p className="text-white text-sm whitespace-pre-wrap">{message.text}</p>
                    </div>
                    {!message.isUser && (
                      <div className="flex gap-2 p-2 border-t border-gray-700/50">
                        <button
                          onClick={() => copyToClipboard(message.text)}
                          className="text-purple-300 hover:text-purple-200 transition-colors p-1"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => downloadAsDocx(message.text)}
                          className="text-purple-300 hover:text-purple-200 transition-colors p-1"
                          title="Download as DOCX"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="bg-gray-800/80 p-3 rounded-xl flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {renderCreativeOptions()}

          {error && (
            <div className="mb-3 p-3 bg-red-900/50 border border-red-500/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={domain.id === 'creative' ? 'আপনার প্রম্পট লিখুন...' : 'আপনার প্রশ্ন লিখুন...'}
              className="w-full bg-gray-900/50 backdrop-blur-xl text-white text-sm rounded-xl pl-3 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20"
            />
            <button
              type="submit"
              disabled={isProcessing || !input.trim() || (domain.id === 'creative' && (!selectedFormat || !selectedGenre))}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DomainChatPage;