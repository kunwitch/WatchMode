// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WatchMode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WatchMode/i);
    expect(titleElement).toBeInTheDocument();
});
