import { create } from 'zustand';
import { ChatMessage, Document } from '@/types';

interface AppState {
  // Chat state
  messages: Record<string, ChatMessage[]>;
  addMessage: (modelId: string, message: ChatMessage) => void;
  clearMessages: (modelId: string) => void;

  // Document state
  documents: Document[];
  addDocument: (document: Document) => void;
  removeDocument: (documentId: string) => void;

  // UI state
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  // Chat state
  messages: {},
  addMessage: (modelId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [modelId]: [...(state.messages[modelId] || []), message],
      },
    })),
  clearMessages: (modelId) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [modelId]: [],
      },
    })),

  // Document state
  documents: [],
  addDocument: (document) =>
    set((state) => ({
      documents: [...state.documents, document],
    })),
  removeDocument: (documentId) =>
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== documentId),
    })),

  // UI state
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  error: null,
  setError: (error) => set({ error }),
}));
