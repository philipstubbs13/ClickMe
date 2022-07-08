import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import players from './players.json'
import { GameContextProvider } from './context/GameContext';
import userEvent from '@testing-library/user-event';

test('should render', () => {
  render(
    <GameContextProvider>
      <App />
    </GameContextProvider>
  );

  expect(screen.getAllByText(/clickme/i)).toHaveLength(2)
});

test('should render initial game message', () => {
  render(
    <GameContextProvider>
      <App />
    </GameContextProvider>
  );

  expect(screen.getByText(/click a player to earn points but don't click a player more than once./i)).toBeInTheDocument()
});

test.each(players)('should render card for $name', ({ name }) => {
  render(
    <GameContextProvider>
      <App />
    </GameContextProvider>
  )
  
  expect(screen.getByAltText(name)).toBeInTheDocument()
});

describe('when each player is clicked once', () => {
  test('should update game to won state', () => {
    render(
      <GameContextProvider>
        <App />
      </GameContextProvider>
    )

    userEvent.click(screen.getByAltText(/tyus jones/i));
    userEvent.click(screen.getByAltText(/karl anthony towns/i));
    userEvent.click(screen.getByAltText(/andrew wiggins/i));
    userEvent.click(screen.getByAltText(/grayson allen/i));
    userEvent.click(screen.getByAltText(/bam adebayo/i));
    userEvent.click(screen.getByAltText(/jayson tatum/i));
    userEvent.click(screen.getByAltText(/ricky rubio/i));
    userEvent.click(screen.getByAltText(/d'angelo russell/i));
    userEvent.click(screen.getByAltText(/steph curry/i));
    userEvent.click(screen.getByAltText(/lamelo ball/i));
    userEvent.click(screen.getByAltText(/jalen brown/i));
    userEvent.click(screen.getByAltText(/tyler herro/i));

    expect(screen.getByText(/you won! bet you can't do it again./i)).toBeInTheDocument();
    expect(screen.getByText(/top score: 12/i)).toBeInTheDocument();
    expect(screen.getByText(/score: 0/i)).toBeInTheDocument()
  })
})

  describe('when player is clicked more than once', () => {
    test('should update game to lost state', () => {
      render(
        <GameContextProvider>
          <App />
        </GameContextProvider>
      )
  
      userEvent.click(screen.getByAltText(/tyus jones/i));
      userEvent.click(screen.getByAltText(/karl anthony towns/i));
      userEvent.click(screen.getByAltText(/andrew wiggins/i));
      userEvent.click(screen.getByAltText(/grayson allen/i));
      userEvent.click(screen.getByAltText(/grayson allen/i));

  
      expect(screen.getByText(/you already clicked that player. now you have to start over./i)).toBeInTheDocument();
      expect(screen.getByText(/top score: 4/i)).toBeInTheDocument();
      expect(screen.getByText(/score: 0/i)).toBeInTheDocument()
    })
})