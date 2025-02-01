export interface Message {
  text: string;
  isUser: boolean;
  timestamp: number;
  confidence?: number;
  category?: ResponseCategory;
}

export interface ConversationContext {
  mood: 'friendly' | 'professional' | 'poetic' | 'academic' | 'emotional' | 'philosophical';
  language: 'bn' | 'en';
  complexity: 'simple' | 'moderate' | 'advanced';
  previousTopics: string[];
  domain: 'general' | 'technical' | 'academic' | 'creative' | 'personal' | 'philosophical' | 'educational';
}

export type ResponseCategory = 
  | 'creative'
  | 'technical'
  | 'academic'
  | 'personal'
  | 'philosophical'
  | 'cultural'
  | 'current_affairs'
  | 'practical';

export interface ChatState {
  messages: Message[];
  context: ConversationContext;
  isProcessing: boolean;
  error: string | null;
}