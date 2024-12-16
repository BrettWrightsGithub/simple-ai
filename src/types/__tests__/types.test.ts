import { AIModel, ChatMessage, Document, ResearchPaper, CalendarEvent, Quote } from '../index';

describe('Type Definitions', () => {
  describe('AIModel', () => {
    it('should create valid AIModel object', () => {
      const model: AIModel = {
        id: '1',
        name: 'GPT-4',
        description: 'Latest model',
      };
      expect(model).toHaveProperty('id');
      expect(model).toHaveProperty('name');
      expect(model).toHaveProperty('description');
    });
  });

  describe('ChatMessage', () => {
    it('should create valid ChatMessage object', () => {
      const message: ChatMessage = {
        id: '1',
        role: 'user',
        content: 'Hello',
        timestamp: new Date(),
      };
      expect(message).toHaveProperty('id');
      expect(message).toHaveProperty('role');
      expect(message).toHaveProperty('content');
      expect(message).toHaveProperty('timestamp');
    });
  });

  describe('Document', () => {
    it('should create valid Document object', () => {
      const doc: Document = {
        id: '1',
        title: 'Test',
        content: 'Content',
        metadata: { author: 'Test Author' },
      };
      expect(doc).toHaveProperty('id');
      expect(doc).toHaveProperty('title');
      expect(doc).toHaveProperty('content');
    });
  });

  describe('ResearchPaper', () => {
    it('should create valid ResearchPaper object', () => {
      const paper: ResearchPaper = {
        id: '1',
        title: 'AI Research',
        abstract: 'Abstract',
        authors: ['Author 1'],
        publishedDate: new Date(),
      };
      expect(paper).toHaveProperty('id');
      expect(paper).toHaveProperty('title');
      expect(paper).toHaveProperty('abstract');
      expect(paper).toHaveProperty('authors');
    });
  });

  describe('CalendarEvent', () => {
    it('should create valid CalendarEvent object', () => {
      const event: CalendarEvent = {
        id: '1',
        title: 'Meeting',
        start: new Date(),
        end: new Date(),
        description: 'Team meeting',
      };
      expect(event).toHaveProperty('id');
      expect(event).toHaveProperty('title');
      expect(event).toHaveProperty('start');
      expect(event).toHaveProperty('end');
    });
  });

  describe('Quote', () => {
    it('should create valid Quote object', () => {
      const quote: Quote = {
        id: '1',
        content: 'Test quote',
        author: 'Author',
        tags: ['inspiration'],
      };
      expect(quote).toHaveProperty('id');
      expect(quote).toHaveProperty('content');
      expect(quote).toHaveProperty('author');
      expect(quote).toHaveProperty('tags');
    });
  });
});
