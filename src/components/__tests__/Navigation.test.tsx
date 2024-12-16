import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

// Mock usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navigation', () => {
  it('renders the navigation bar with logo', () => {
    render(<Navigation />);
    expect(screen.getByText('AI Showcase')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navigation />);
    
    const links = [
      'Home',
      'Comparative Chat',
      'RAG Demo',
      'Researcher Agent',
      'Scheduling Assistant',
      'Inspiration Finder',
    ];

    links.forEach(linkText => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it('applies active styles to current path', () => {
    render(<Navigation />);
    
    // Home link should be active (mocked to '/')
    const homeLink = screen.getByText('Home');
    expect(homeLink.className).toContain('border-indigo-500');
    
    // Other links should not be active
    const ragLink = screen.getByText('RAG Demo');
    expect(ragLink.className).toContain('border-transparent');
  });
});
