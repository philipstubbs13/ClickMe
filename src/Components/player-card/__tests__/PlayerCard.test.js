import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlayerCard } from '../PlayerCard';
import userEvent from '@testing-library/user-event';

const propsMock = {
    player: {
        id: '5',
        image: 'imageMock',
        name: 'Tyler Herro',
    },
    onClickPlayer: jest.fn()
}

describe('when passed valid props', () => {
    test('should render', () => {
        render(<PlayerCard {...propsMock} />)

        expect(screen.getByAltText(/tyler herro/i)).toBeInTheDocument()
    })
})

describe('when image is clicked', () => {
    test('should call .onClickPlayer()', () => {
        render(<PlayerCard {...propsMock} />)

        userEvent.click(screen.getByAltText(/tyler herro/i));

        expect(propsMock.onClickPlayer).toHaveBeenCalledTimes(1);
    })
})
