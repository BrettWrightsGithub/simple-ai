import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('AI Applications Showcase')).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    render(<Home />);
    
    const features = [
      'Comparative Chat',
      'RAG Demo',
      'Researcher Agent',
      'Scheduling Assistant',
      'Inspiration Finder',
    ];

    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders feature descriptions', () => {
    render(<Home />);
    
    const descriptions = [
      'Compare responses from two AI models side-by-side',
      'Upload and query documents using natural language',
      'Get summaries and analysis of research papers',
      'Manage your schedule with AI-powered insights',
      'Discover personalized inspirational quotes',
    ];

    descriptions.forEach(description => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it('renders "Try it out" links for each feature', () => {
    render(<Home />);
    const tryItOutLinks = screen.getAllByText('Try it out →');
    expect(tryItOutLinks).toHaveLength(5);
  });

  it('includes correct href attributes for feature links', () => {
    render(<Home />);
    
    const hrefs = [
      '/comparative-chat',
      '/rag-demo',
      '/researcher-agent',
      '/scheduling-assistant',
      '/inspiration-finder',
    ];

    hrefs.forEach(href => {
      const link = document.querySelector(`a[href="${href}"]`);
      expect(link).toBeInTheDocument();
    });
  });
});
