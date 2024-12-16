export interface AIModel {
  id: string;
  name: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  model?: string;
  timestamp: Date;
}

export interface Document {
  id: string;
  title: string;
  content: string;
  embedding?: number[];
  metadata?: Record<string, any>;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  url?: string;
  publishedDate?: Date;
  summary?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
}

export interface Quote {
  id: string;
  content: string;
  author: string;
  tags: string[];
  embedding?: number[];
}
