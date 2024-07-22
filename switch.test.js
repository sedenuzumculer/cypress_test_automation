
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Custom matcher'lar için
import ThemeSwitch from '../components/darkTheme/switch.jsx';

describe('ThemeSwitch', () => {

  beforeEach(() => {
    localStorage.clear();
  });
  
  test('başlangıçta doğru temayı yükler ve uygular', () => {
    localStorage.setItem('AppBahaTheme', 'dark'); 

    render(<ThemeSwitch />);

    const switchElement = screen.getByText('🌙');
    expect(switchElement).toBeInTheDocument();
    expect(document.documentElement).toHaveClass('dark'); 
  });

  test('temayı değiştirir ve localStorage\'a kaydeder', () => {
    render(<ThemeSwitch />);

    const switchElement = screen.getByText('☀️'); 
    fireEvent.click(switchElement); 

    expect(screen.getByText('🌙')).toBeInTheDocument(); 
    expect(localStorage.getItem('AppBahaTheme')).toBe('dark'); 
    expect(document.documentElement).toHaveClass('dark'); 
  });




  
});
