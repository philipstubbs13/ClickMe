import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlayerCard } from './PlayerCard';
import userEvent from '@testing-library/user-event';

const propsMock = {
    id: '5',
    image: 'imageMock',
    name: 'Tyler Herro',
    updatePlayerClickedValue: jest.fn()
}

describe('when passed valid props', () => {
    test('should render', () => {
        render(<PlayerCard {...propsMock} />)

        expect(screen.getByAltText(/tyler herro/i)).toBeInTheDocument()
    })
})

describe('when image is clicked', () => {
    test('should call .updatePlayerClickedValue()', () => {
        render(<PlayerCard {...propsMock} />)

        userEvent.click(screen.getByAltText(/tyler herro/i));

        expect(propsMock.updatePlayerClickedValue).toHaveBeenCalledWith(propsMock.id)
        expect(propsMock.updatePlayerClickedValue).toHaveBeenCalledTimes(1);
    })
})
