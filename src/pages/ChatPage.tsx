import React, { useRef, useEffect, useState } from 'react';
import { Send, Bot, Copy, Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useConversation } from '../hooks/useConversation';
import { domains } from '../constants/domains';

const WELCOME_MESSAGE = "হ্যালো, আমি কথাকুঞ্জ। আপনার মাতৃভাষায় আপনার সাথেই আছি আমি। নিচে থেকে আপনার পছন্দের একটি বিষয় বেছে নিন, সেই বিষয়ে আমার সাথে আড্ডা দিতে পারেন।";

function ChatPage() {
  const navigate = useNavigate();
  const { messages, isProcessing, error, addMessage } = useConversation();
  const [input, setInput] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length === 0) {
      addMessage(WELCOME_MESSAGE, false);
    }
  }, [addMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleDomainSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const domain = domains.find(d => d.id === e.target.value);
    if (domain) {
      setSelectedDomain(domain.id);
      addMessage(`${domain.name} সম্পর্কে আলোচনা করা যাক।`, true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    await addMessage(userMessage, true);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
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
        <div className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/domains')}
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>ফিরে যান</span>
            </button>
            <div className="flex items-center space-x-4">
              <img 
                src="https://i.postimg.cc/4N2Y9TNY/ktha.png"
                alt="কথাকুঞ্জ"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                কথাকুঞ্জ
              </h1>
            </div>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl p-6 mb-4 h-[500px] overflow-y-auto border border-purple-500/20 shadow-2xl">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl backdrop-blur-md shadow-lg ${
                    message.isUser 
                      ? 'bg-purple-600/80 ml-auto' 
                      : 'bg-gray-800/80 flex items-start gap-2'
                  }`}>
                    <div className="p-4">
                      {!message.isUser && <Bot className="w-5 h-5 mb-2" />}
                      <p className="text-white whitespace-pre-wrap">{message.text}</p>
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
                  <div className="bg-gray-800/80 p-4 rounded-2xl backdrop-blur-md shadow-lg flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          <div className="mb-4">
            <select
              value={selectedDomain}
              onChange={handleDomainSelect}
              className="w-full bg-gray-800/50 text-white rounded-2xl p-4 border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg backdrop-blur-md"
            >
              <option value="">বিষয় নির্বাচন করুন</option>
              {domains.map((domain) => (
                <option key={domain.id} value={domain.id}>
                  {domain.icon} {domain.name}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-900/50 border border-red-500/50 rounded-2xl text-red-200 shadow-lg backdrop-blur-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="আপনার প্রশ্ন লিখুন..."
              className="w-full bg-gray-900/50 backdrop-blur-xl text-white rounded-2xl pl-4 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 shadow-lg"
            />
            <button
              type="submit"
              disabled={isProcessing || !input.trim()}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;