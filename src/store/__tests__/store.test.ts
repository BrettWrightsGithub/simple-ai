import { useStore } from '../index';
import { ChatMessage, Document } from '@/types';

describe('App Store', () => {
  beforeEach(() => {
    useStore.setState({
      messages: {},
      documents: [],
      isLoading: false,
      error: null,
    });
  });

  describe('Chat State', () => {
    it('should add messages for specific models', () => {
      const message: ChatMessage = {
        id: '1',
        role: 'user',
        content: 'Hello',
        timestamp: new Date(),
      };

      useStore.getState().addMessage('gpt-4', message);
      expect(useStore.getState().messages['gpt-4']).toHaveLength(1);
      expect(useStore.getState().messages['gpt-4'][0]).toEqual(message);
    });

    it('should clear messages for specific models', () => {
      const message: ChatMessage = {
        id: '1',
        role: 'user',
        content: 'Hello',
        timestamp: new Date(),
      };

      useStore.getState().addMessage('gpt-4', message);
      useStore.getState().clearMessages('gpt-4');
      expect(useStore.getState().messages['gpt-4']).toHaveLength(0);
    });
  });

  describe('Document State', () => {
    it('should add documents', () => {
      const doc: Document = {
        id: '1',
        title: 'Test Doc',
        content: 'Test Content',
      };

      useStore.getState().addDocument(doc);
      expect(useStore.getState().documents).toHaveLength(1);
      expect(useStore.getState().documents[0]).toEqual(doc);
    });

    it('should remove documents', () => {
      const doc: Document = {
        id: '1',
        title: 'Test Doc',
        content: 'Test Content',
      };

      useStore.getState().addDocument(doc);
      useStore.getState().removeDocument('1');
      expect(useStore.getState().documents).toHaveLength(0);
    });
  });

  describe('UI State', () => {
    it('should handle loading state', () => {
      useStore.getState().setLoading(true);
      expect(useStore.getState().isLoading).toBe(true);

      useStore.getState().setLoading(false);
      expect(useStore.getState().isLoading).toBe(false);
    });

    it('should handle error state', () => {
      useStore.getState().setError('Test error');
      expect(useStore.getState().error).toBe('Test error');

      useStore.getState().setError(null);
      expect(useStore.getState().error).toBe(null);
    });
  });
});
