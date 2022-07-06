import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import players from './players.json'
import { GameContextProvider } from './context/GameContext';

test('should render', () => {
  render(
    <GameContextProvider>
      <App />
    </GameContextProvider>
  );

  expect(screen.getAllByText(/clickme/i)).toHaveLength(2)
});

test.each(players)('should render card for $name', ({ name }) => {
  render(
    <GameContextProvider>
      <App />
    </GameContextProvider>
  )
  
  expect(screen.getByAltText(name)).toBeInTheDocument()
});