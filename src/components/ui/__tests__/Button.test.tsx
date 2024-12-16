import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with default styles', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain('bg-indigo-600');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    let button = screen.getByRole('button', { name: 'Secondary' });
    expect(button.className).toContain('bg-gray-100');

    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole('button', { name: 'Outline' });
    expect(button.className).toContain('border-indigo-200');

    rerender(<Button variant="ghost">Ghost</Button>);
    button = screen.getByRole('button', { name: 'Ghost' });
    expect(button.className).toContain('hover:bg-gray-100');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole('button', { name: 'Small' });
    expect(button.className).toContain('h-9');

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole('button', { name: 'Large' });
    expect(button.className).toContain('h-11');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button', { name: 'Click me' });
    await userEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
    expect(button.className).toContain('disabled:opacity-50');
  });
});
